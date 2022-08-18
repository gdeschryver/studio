import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { DefaultDataProps } from '~position/display.interface';
import {
  AppTokenTemplatePositionFetcher,
  DataPropsStageParams,
  DisplayPropsStageParams,
  UnderlyingTokensStageParams,
} from '~position/template/app-token.template.position-fetcher';
import { Network } from '~types/network.interface';

import { YieldYakContractFactory, YieldYakVault } from '../contracts';
import { YieldYakVaultTokenDefinitionsResolver } from '../helpers/yield-yak.vault.token-definitions-resolver';
import { YIELD_YAK_DEFINITION } from '../yield-yak.definition';

const appId = YIELD_YAK_DEFINITION.id;
const groupId = YIELD_YAK_DEFINITION.groups.vault.id;
const network = Network.AVALANCHE_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class AvalancheYieldyakVaultTokenFetcher extends AppTokenTemplatePositionFetcher<YieldYakVault> {
  appId = appId;
  groupId = groupId;
  network = network;

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(YieldYakContractFactory) private readonly contractFactory: YieldYakContractFactory,
    @Inject(YieldYakVaultTokenDefinitionsResolver)
    protected readonly tokenDefinitionsResolver: YieldYakVaultTokenDefinitionsResolver,
  ) {
    super(appToolkit);
  }

  private getVaultDefinitions() {
    return this.tokenDefinitionsResolver.getVaultDefinitionsData();
  }

  private async selectVault(vaultAddress: string) {
    const vaultDefinitions = await this.getVaultDefinitions();
    return vaultDefinitions.find(v => v.id.toLowerCase() === vaultAddress) ?? null;
  }

  getContract(address: string): YieldYakVault {
    return this.contractFactory.yieldYakVault({ network: this.network, address });
  }

  async getAddresses(): Promise<string[]> {
    const vaultDefinitions = await this.getVaultDefinitions();
    return vaultDefinitions.map(address => address.id.toLowerCase());
  }

  async getUnderlyingTokenAddresses({ contract }: UnderlyingTokensStageParams<YieldYakVault>) {
    const vault = await this.selectVault(contract.address.toLowerCase());
    if (!vault) throw new Error('Cannot find specified vault');

    return [vault.depositToken.id.toLowerCase()];
  }

  async getLabel({ appToken }: DisplayPropsStageParams<YieldYakVault, DefaultDataProps>): Promise<string> {
    return appToken.tokens.map(v => getLabelFromToken(v)).join(' / ');
  }

  async getDataProps(opts: DataPropsStageParams<YieldYakVault, DefaultDataProps>): Promise<DefaultDataProps> {
    const { appToken } = opts;
    const liquidity = appToken.price * appToken.supply;

    return { liquidity };
  }
}