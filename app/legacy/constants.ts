export const STATUS_CONFIG = {
  reward: { label: 'Reward Available', class: 'reward' },
  potential: { label: 'Potential', class: 'potential' },
  confirmed: { label: 'Confirmed', class: 'confirmed' },
};

export const MANAGED_SELECT_IDS = [
  'airdropTaskType',
  'airdropConnectType',
  'airdropStatus',
  'airdropRewardType',
  'airdropExtraLinkType',
];

export const SORTABLE_SELECT_IDS = [
  'airdropTaskType',
  'airdropConnectType',
  'airdropStatus',
  'airdropExtraLinkType',
  'taskFilter',
  'taskTypeFilter',
  'statusFilter',
  'selectToManage',
];

export const MULTI_SELECT_IDS = [
  'airdropTaskType',
  'airdropConnectType',
  'airdropRewardType',
];

export const DEFAULT_OPTIONS_BY_SELECT = {
  airdropConnectType: [
    { value: 'evm', text: 'EVM' },
    { value: 'gmail', text: 'Gmail' },
    { value: 'sol', text: 'SOL' },
  ],
  airdropRewardType: [
    { value: 'airdrop', text: 'Airdrop' },
    { value: 'nft', text: 'NFT' },
    { value: 'whitelist', text: 'Whitelist' },
  ],
  airdropStatus: [
    { value: 'potential', text: 'Potential' },
    { value: 'confirmed', text: 'Confirmed' },
    { value: 'reward', text: 'Reward' },
  ],
  airdropExtraLinkType: [
    { value: 'x', text: 'X' },
    { value: 'website', text: 'Website' },
    { value: 'discord', text: 'Discord' },
  ],
  airdropTaskType: [
    { value: 'daily', text: 'Daily' },
    { value: 'quest', text: 'Quest' },
    { value: 'testnet', text: 'Testnet' },
    { value: 'one-time', text: 'One Time' },
  ],
} as const;
