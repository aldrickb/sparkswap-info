export const FACTORY_ADDRESS = '0xC3187EB9AB08eB845A12dA6A93c3Ab8655c5AF80'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time'
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/sparkpointio/spark-swap-interface/develop/src/constants/token/sparkswap.json'
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  "0xfae613ada8caf15c13c9c45138a262e814daa71f" // TTKb-BNB Pair
]

// pair blacklist
export const PAIR_BLACKLIST = []

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []
