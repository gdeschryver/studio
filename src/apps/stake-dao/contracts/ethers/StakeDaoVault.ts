/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface StakeDaoVaultInterface extends utils.Interface {
  functions: {
    'MAX()': FunctionFragment;
    'accumulatedFee()': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'available()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'curveStrategy()': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'deposit(address,uint256,bool)': FunctionFragment;
    'governance()': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'init(address,address,string,string,address)': FunctionFragment;
    'keeperFee()': FunctionFragment;
    'liquidityGauge()': FunctionFragment;
    'min()': FunctionFragment;
    'name()': FunctionFragment;
    'setCurveStrategy(address)': FunctionFragment;
    'setGovernance(address)': FunctionFragment;
    'setKeeperFee(uint256)': FunctionFragment;
    'setLiquidityGauge(address)': FunctionFragment;
    'setMin(uint256)': FunctionFragment;
    'setWithdrawnFee(uint256)': FunctionFragment;
    'symbol()': FunctionFragment;
    'token()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawAll()': FunctionFragment;
    'withdrawalFee()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MAX'
      | 'accumulatedFee'
      | 'allowance'
      | 'approve'
      | 'available'
      | 'balanceOf'
      | 'curveStrategy'
      | 'decimals'
      | 'decreaseAllowance'
      | 'deposit'
      | 'governance'
      | 'increaseAllowance'
      | 'init'
      | 'keeperFee'
      | 'liquidityGauge'
      | 'min'
      | 'name'
      | 'setCurveStrategy'
      | 'setGovernance'
      | 'setKeeperFee'
      | 'setLiquidityGauge'
      | 'setMin'
      | 'setWithdrawnFee'
      | 'symbol'
      | 'token'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'withdraw'
      | 'withdrawAll'
      | 'withdrawalFee',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MAX', values?: undefined): string;
  encodeFunctionData(functionFragment: 'accumulatedFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allowance', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'available', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'curveStrategy', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'governance', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'init',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'keeperFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidityGauge', values?: undefined): string;
  encodeFunctionData(functionFragment: 'min', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setCurveStrategy', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setGovernance', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setKeeperFee', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'setLiquidityGauge', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setMin', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'setWithdrawnFee', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'withdrawAll', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawalFee', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'MAX', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'accumulatedFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'available', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'curveStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'keeperFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidityGauge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'min', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setCurveStrategy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setGovernance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setKeeperFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidityGauge', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWithdrawnFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawalFee', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'Deposit(address,uint256)': EventFragment;
    'Earn(address,uint256)': EventFragment;
    'Initialized(uint8)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'Withdraw(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Earn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface DepositEventObject {
  _depositor: string;
  _amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EarnEventObject {
  _token: string;
  _amount: BigNumber;
}
export type EarnEvent = TypedEvent<[string, BigNumber], EarnEventObject>;

export type EarnEventFilter = TypedEventFilter<EarnEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface WithdrawEventObject {
  _depositor: string;
  _amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface StakeDaoVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakeDaoVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX(overrides?: CallOverrides): Promise<[BigNumber]>;

    accumulatedFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    available(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    curveStrategy(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _staker: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _earn: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    init(
      _token: PromiseOrValue<string>,
      _governance: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      _curveStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    keeperFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidityGauge(overrides?: CallOverrides): Promise<[string]>;

    min(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    setCurveStrategy(
      _newStrat: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setGovernance(
      _governance: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setKeeperFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setLiquidityGauge(
      _liquidityGauge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setMin(
      _min: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setWithdrawnFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdraw(
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdrawAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    withdrawalFee(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  MAX(overrides?: CallOverrides): Promise<BigNumber>;

  accumulatedFee(overrides?: CallOverrides): Promise<BigNumber>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  available(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  curveStrategy(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _staker: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _earn: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  init(
    _token: PromiseOrValue<string>,
    _governance: PromiseOrValue<string>,
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    _curveStrategy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  keeperFee(overrides?: CallOverrides): Promise<BigNumber>;

  liquidityGauge(overrides?: CallOverrides): Promise<string>;

  min(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  setCurveStrategy(
    _newStrat: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setGovernance(
    _governance: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setKeeperFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setLiquidityGauge(
    _liquidityGauge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setMin(
    _min: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setWithdrawnFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdraw(
    _shares: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdrawAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    MAX(overrides?: CallOverrides): Promise<BigNumber>;

    accumulatedFee(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    curveStrategy(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    deposit(
      _staker: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _earn: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    governance(overrides?: CallOverrides): Promise<string>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    init(
      _token: PromiseOrValue<string>,
      _governance: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      _curveStrategy: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    keeperFee(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityGauge(overrides?: CallOverrides): Promise<string>;

    min(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    setCurveStrategy(_newStrat: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setGovernance(_governance: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setKeeperFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setLiquidityGauge(_liquidityGauge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setMin(_min: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setWithdrawnFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    withdraw(_shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    withdrawAll(overrides?: CallOverrides): Promise<void>;

    withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null,
    ): ApprovalEventFilter;

    'Deposit(address,uint256)'(_depositor?: null, _amount?: null): DepositEventFilter;
    Deposit(_depositor?: null, _amount?: null): DepositEventFilter;

    'Earn(address,uint256)'(_token?: null, _amount?: null): EarnEventFilter;
    Earn(_token?: null, _amount?: null): EarnEventFilter;

    'Initialized(uint8)'(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
    ): TransferEventFilter;

    'Withdraw(address,uint256)'(_depositor?: null, _amount?: null): WithdrawEventFilter;
    Withdraw(_depositor?: null, _amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    MAX(overrides?: CallOverrides): Promise<BigNumber>;

    accumulatedFee(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    curveStrategy(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit(
      _staker: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _earn: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    init(
      _token: PromiseOrValue<string>,
      _governance: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      _curveStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    keeperFee(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityGauge(overrides?: CallOverrides): Promise<BigNumber>;

    min(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    setCurveStrategy(
      _newStrat: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setGovernance(
      _governance: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setKeeperFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setLiquidityGauge(
      _liquidityGauge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setMin(
      _min: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setWithdrawnFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdraw(
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdrawAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accumulatedFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    available(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curveStrategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _staker: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _earn: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    init(
      _token: PromiseOrValue<string>,
      _governance: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      _curveStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    keeperFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidityGauge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    min(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCurveStrategy(
      _newStrat: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setGovernance(
      _governance: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setKeeperFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setLiquidityGauge(
      _liquidityGauge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setMin(
      _min: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setWithdrawnFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdrawAll(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    withdrawalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}