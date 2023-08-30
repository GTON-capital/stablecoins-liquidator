import { join } from 'path'

import { web3 } from 'src/provider'
import config from 'src/config'

export const IS_DEV = process.env.IS_DEV === 'true'

export const JOIN_TOPICS = [web3.utils.sha3('Join(address,address,uint256,uint256)')]
export const LIQUIDATION_TRIGGERED_TOPICS = ['0x5b79a897d30813a62a1f95ba180d3320d3701d96605708b81105e00719a069e4']
export const BUYOUT_TOPICS = [web3.utils.sha3('Buyout(address,address,address,uint256,uint256,uint256)')]
export const EXIT_TOPICS = [web3.utils.sha3('Exit(address,address,uint256,uint256)')]

export const CHAIN_NAME = process.env.CHAIN_NAME

const conf = config[CHAIN_NAME]
if (!conf) throw new Error(`Unsupported chain name: ${CHAIN_NAME}`)

export const SENDER_ADDRESS = process.env.ETHEREUM_ADDRESS

export const CHAIN_ID = Number(conf.chain_id)
export const MAIN_SYMBOL = conf.main_symbol
export const USDP_SYMBOL = conf.usdp_symbol
export const HASHTAG_PREFIX = conf.hash_tag_prefix
export const CDP_REGISTRY = conf.cdp_registry
export const VAULT_ADDRESS = conf.vault

export const UNISWAP_FACTORY = conf.uniswap_factory

export const SUSHISWAP_FACTORY = conf.sushiswap_factory
export const SUSHISWAP_PAIR_INIT_CODE_HASH = conf.sushiswap_init_code_hash

export const SHIBASWAP_FACTORY = conf.shibaswap_factory
export const SHIBASWAP_PAIR_INIT_CODE_HASH = conf.shibaswap_init_code_hash

export const WETH = conf.weth
export const ORACLE_REGISTRY = conf.oracle_registry

export const AUCTIONS = conf.auctions
export const MAIN_LIQUIDATION_TRIGGER = conf.main_liquidation_trigger
export const FALLBACK_LIQUIDATION_TRIGGER = conf.fallback_liquidation_trigger

export const SYNCHRONIZER_TRIGGER_LIQUIDATION_EVENT = 'SYNCHRONIZER_TRIGGER_LIQUIDATION_EVENT'
export const SYNCHRONIZER_NEW_BLOCK_EVENT = 'SYNCHRONIZER_NEW_BLOCK_EVENT'
export const SYNCHRONIZER_JOIN_EVENT = 'SYNCHRONIZER_JOIN_EVENT'
export const SYNCHRONIZER_EXIT_EVENT = 'SYNCHRONIZER_EXIT_EVENT'
export const SYNCHRONIZER_SAVE_STATE_REQUEST = 'SYNCHRONIZER_SAVE_STATE_REQUEST'
export const SYNCHRONIZER_LIQUIDATION_TRIGGERED_EVENT = 'SYNCHRONIZER_LIQUIDATION_TRIGGERED_EVENT'
export const SYNCHRONIZER_LIQUIDATED_EVENT = 'SYNCHRONIZER_LIQUIDATED_EVENT'
export const CONFIRMATIONS_THRESHOLD = Number(conf.liquidation_confirmations_threshold)
export const BLOCKS_CHECK_DELAY = Number(conf.blocks_check_delay)
export const LIQUIDATION_DEBT_THRESHOLD = Number(conf.liquidation_debt_threshold)
export const LIQUIDATION_DEBT_THRESHOLD_KEYDONIX = Number(conf.liquidation_debt_threshold_keydonix)
export const MIN_BALANCE = BigInt(Number(conf.min_balance) * 1000000) * 10n ** 12n // 10**18 total

export const EXPLORER_URL = conf.explorer_url
export const LIQUIDATION_URL = conf.liquidation_url

export const ZERO_ADDRESS = '0x' + '0'.repeat(40)

export let ACTIVE_VAULT_MANAGERS = conf.vault_managers

export const APP_STATE_FILENAME = IS_DEV ? 'app.dat' : `./data/app_${CHAIN_NAME}.dat`
