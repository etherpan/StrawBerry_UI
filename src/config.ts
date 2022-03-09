import { ChainId } from '@traderjoe-xyz/sdk';

import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.AVALANCHE,
    networkName: 'Fantom Opera Testnet',
    avaxscanUrl: 'https://testnet.avaxscan.com',
    defaultProvider: 'https://rpc.testnet.fantom.network/',
    deployments: require('./tomb-finance/deployments/deployments.testing.json'),
    externalTokens: {
      WAVAX: ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      FUSDT: ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6], // This is actually usdc on mainnet not fusdt
      USDT: ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6], // This is actually usdc on mainnet not fusdt
      WETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18], // BOO: 0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE 18
      TOMB: ['0x6c021ae822bea943b2e66552bde1d2696a53fbb7', 18], // ZOO: 0x09e145a1d53c0045f41aeef25d8ff982ae74dd56 0
      MIM: ['0x130966628846BFd36ff31a822705796e8cb8C18D', 18], // SHIBA: 0x9ba3e4f84a34df4e08c112e1a0ff148b81655615 9
      THRONE: ['0x070092b3A985f9E5424351D68730c9A318ad96eb', 18],
      USDC: ['0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6],
      JOE: ['0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18],
      'USDT-AVAX-LP': ['0xeD8CBD9F0cE3C6986b22002F03c6475CEb7a6256', 18],
      'BERRY-AVAX-LP': ['0xFae3957daAE1dA061489FB0e4DD403324593C1dA', 18], // 
      'BSHARE-AVAX-LP': ['0x01eE7717bC86F0415232F9BCb199970e6Ce49688', 18],
      'BERRY-BSHARE-LP': ['0x8825c080146Af0c2D573433946Fc94f7D0fd10b9', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: ChainId.AVALANCHE,
    networkName: 'Avalanche Mainnet',
    avaxscanUrl: 'https://snowtrace.io',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      FUSDT: ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6], // This is actually usdc on mainnet not fusdt
      USDT: ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 6], // This is actually usdc on mainnet not fusdt
      WETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18], // BOO: 0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE 18
      TOMB: ['0x6c021ae822bea943b2e66552bde1d2696a53fbb7', 18], // ZOO: 0x09e145a1d53c0045f41aeef25d8ff982ae74dd56 0
      MIM: ['0x130966628846BFd36ff31a822705796e8cb8C18D', 18], // SHIBA: 0x9ba3e4f84a34df4e08c112e1a0ff148b81655615 9
      THRONE: ['0x070092b3A985f9E5424351D68730c9A318ad96eb', 18],
      USDC: ['0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6],
      JOE: ['0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18],
      'USDT-AVAX-LP': ['0xeD8CBD9F0cE3C6986b22002F03c6475CEb7a6256', 18],
      'BERRY-AVAX-LP': ['0xFae3957daAE1dA061489FB0e4DD403324593C1dA', 18], // 
      'BSHARE-AVAX-LP': ['0x01eE7717bC86F0415232F9BCb199970e6Ce49688', 18],
      'BERRY-BSHARE-LP': ['0x8825c080146Af0c2D573433946Fc94f7D0fd10b9', 18],
    },
    baseLaunchDate: new Date('2022-02-25 00:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};


export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  TombAvaxRewardPool: {
    name: 'Stake WAVAX, earn BERRY',
    poolId: 0,
    sectionInUI: 0,
    contract: 'TombAvaxRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'BERRY',
    multiplier: "30x",
    finished: false,
    starttime: 1646629200000,
    sort: 1,
    closedForStaking: false,
  },
  TombUsdcRewardPool: {
    name: 'Stake USDC, earn BERRY',
    poolId: 1,
    sectionInUI: 0,
    contract: 'TombUsdcRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'BERRY',
    multiplier: "30x",
    finished: false,
    starttime: 1646629200000,
    sort: 2,
    closedForStaking: false,
  },
  TombMimRewardPool: {
    name: 'Stake MIM, earn BERRY',
    poolId: 2,
    sectionInUI: 0,
    contract: 'TombMimRewardPool',
    depositTokenName: 'MIM',
    earnTokenName: 'BERRY',
    multiplier: "30x",
    finished: false,
    starttime: 1646629200000,
    sort: 3,
    closedForStaking: false,
  },
  TombJoeRewardPool: {
    name: 'Stake JOE, earn BERRY',
    poolId: 3,
    sectionInUI: 0,
    contract: 'TombJoeRewardPool',
    depositTokenName: 'JOE',
    earnTokenName: 'BERRY',
    multiplier: "10x",
    finished: false,
    starttime: 1646629200000,
    sort: 4,
    closedForStaking: false,
  },
  TombAvaxLPTShareRewardPool: {
    name: 'Earn BSHARE by BERRY-AVAX LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombAvaxLPTShareRewardPool',
    depositTokenName: 'BERRY-AVAX-LP',
    earnTokenName: 'BSHARE',
    multiplier: "100x",
    finished: false,
    starttime: 1646715600000,
    sort: 5,
    closedForStaking: false,
  },
  TshareAvaxLPTShareRewardPool: {
    name: 'Earn BSHARE by BSHARE-WAVAX LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TshareAvaxLPTShareRewardPool',
    depositTokenName: 'BSHARE-AVAX-LP',
    earnTokenName: 'BSHARE',
    multiplier: "100x",
    finished: false,
    starttime: 1646715600000,
    sort: 6,
    closedForStaking: false,
  },
};

export default configurations['production'];
