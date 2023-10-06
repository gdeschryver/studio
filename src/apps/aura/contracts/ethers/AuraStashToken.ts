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
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface AuraStashTokenInterface extends utils.Interface {
  functions: {
    'MAX_TOTAL_SUPPLY()': FunctionFragment;
    'baseToken()': FunctionFragment;
    'init(address,address,address)': FunctionFragment;
    'isImplementation()': FunctionFragment;
    'isValid()': FunctionFragment;
    'mint(uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'operator()': FunctionFragment;
    'rewardPool()': FunctionFragment;
    'setIsValid(bool)': FunctionFragment;
    'stash()': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MAX_TOTAL_SUPPLY'
      | 'baseToken'
      | 'init'
      | 'isImplementation'
      | 'isValid'
      | 'mint'
      | 'name'
      | 'operator'
      | 'rewardPool'
      | 'setIsValid'
      | 'stash'
      | 'symbol'
      | 'totalSupply'
      | 'transfer',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MAX_TOTAL_SUPPLY', values?: undefined): string;
  encodeFunctionData(functionFragment: 'baseToken', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'init',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'isImplementation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isValid', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mint', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'operator', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setIsValid', values: [PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'stash', values?: undefined): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;

  decodeFunctionResult(functionFragment: 'MAX_TOTAL_SUPPLY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'baseToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isImplementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isValid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'operator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setIsValid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stash', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;

  events: {};
}

export interface AuraStashToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuraStashTokenInterface;

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
    MAX_TOTAL_SUPPLY(overrides?: CallOverrides): Promise<[BigNumber]>;

    baseToken(overrides?: CallOverrides): Promise<[string]>;

    init(
      _operator: PromiseOrValue<string>,
      _rewardPool: PromiseOrValue<string>,
      _baseToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    isImplementation(overrides?: CallOverrides): Promise<[boolean]>;

    isValid(overrides?: CallOverrides): Promise<[boolean]>;

    mint(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    rewardPool(overrides?: CallOverrides): Promise<[string]>;

    setIsValid(
      _isValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    stash(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  MAX_TOTAL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

  baseToken(overrides?: CallOverrides): Promise<string>;

  init(
    _operator: PromiseOrValue<string>,
    _rewardPool: PromiseOrValue<string>,
    _baseToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  isImplementation(overrides?: CallOverrides): Promise<boolean>;

  isValid(overrides?: CallOverrides): Promise<boolean>;

  mint(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  operator(overrides?: CallOverrides): Promise<string>;

  rewardPool(overrides?: CallOverrides): Promise<string>;

  setIsValid(
    _isValid: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  stash(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_TOTAL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    baseToken(overrides?: CallOverrides): Promise<string>;

    init(
      _operator: PromiseOrValue<string>,
      _rewardPool: PromiseOrValue<string>,
      _baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    isImplementation(overrides?: CallOverrides): Promise<boolean>;

    isValid(overrides?: CallOverrides): Promise<boolean>;

    mint(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    operator(overrides?: CallOverrides): Promise<string>;

    rewardPool(overrides?: CallOverrides): Promise<string>;

    setIsValid(_isValid: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    stash(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    MAX_TOTAL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    baseToken(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _operator: PromiseOrValue<string>,
      _rewardPool: PromiseOrValue<string>,
      _baseToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    isImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    isValid(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPool(overrides?: CallOverrides): Promise<BigNumber>;

    setIsValid(
      _isValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    stash(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_TOTAL_SUPPLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      _operator: PromiseOrValue<string>,
      _rewardPool: PromiseOrValue<string>,
      _baseToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    isImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isValid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setIsValid(
      _isValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    stash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}