import { Inject, Injectable } from '@nestjs/common';
import { BigNumberish } from 'ethers';
import { range } from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import {
  GetMasterChefDataPropsParams,
  GetMasterChefTokenBalancesParams,
  MasterChefTemplateContractPositionFetcher,
} from '~position/template/master-chef.template.contract-position-fetcher';

import { QiDaoContractFactory, QiDaoMasterChefV3 } from '../contracts';

@Injectable()
export abstract class QiDaoFarmV3ContractPositionFetcher extends MasterChefTemplateContractPositionFetcher<QiDaoMasterChefV3> {
  abstract chefAddresses: string[];

  // Ignored; Multiple Chefs
  chefAddress = '';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(QiDaoContractFactory) protected readonly contractFactory: QiDaoContractFactory,
  ) {
    super(appToolkit);
  }

  // @OVERRIDE
  async getDefinitions() {
    const definitionsAll = await Promise.all(
      this.chefAddresses.map(async chefAddress => {
        const contract = this.getContract(chefAddress);
        const poolLength = await this.getPoolLength(contract);
        return range(0, Number(poolLength)).map(poolIndex => ({ address: chefAddress, poolIndex }));
      }),
    );

    return definitionsAll.flat();
  }

  getContract(address: string): QiDaoMasterChefV3 {
    return this.contractFactory.qiDaoMasterChefV3({ address, network: this.network });
  }

  async getPoolLength(contract: QiDaoMasterChefV3): Promise<BigNumberish> {
    return contract.poolLength();
  }

  async getStakedTokenAddress(contract: QiDaoMasterChefV3, poolIndex: number) {
    return contract.poolInfo(poolIndex).then(v => v.lpToken);
  }

  async getRewardTokenAddress(contract: QiDaoMasterChefV3) {
    return contract.erc20();
  }

  async getTotalAllocPoints({ contract }: GetMasterChefDataPropsParams<QiDaoMasterChefV3>) {
    return contract.totalAllocPoint();
  }

  async getTotalRewardRate({ contract }: GetMasterChefDataPropsParams<QiDaoMasterChefV3>) {
    return contract.rewardPerSecond();
  }

  async getPoolAllocPoints({
    contract,
    definition,
  }: GetMasterChefDataPropsParams<QiDaoMasterChefV3>): Promise<BigNumberish> {
    return contract.poolInfo(definition.poolIndex).then(v => v.allocPoint);
  }

  async getStakedTokenBalance({
    address,
    contract,
    contractPosition,
  }: GetMasterChefTokenBalancesParams<QiDaoMasterChefV3>) {
    return contract.userInfo(contractPosition.dataProps.poolIndex, address).then(v => v.amount);
  }

  async getRewardTokenBalance({
    address,
    contract,
    contractPosition,
  }: GetMasterChefTokenBalancesParams<QiDaoMasterChefV3>): Promise<BigNumberish | BigNumberish[]> {
    return contract.pending(contractPosition.dataProps.poolIndex, address).catch(() => '0');
  }
}
