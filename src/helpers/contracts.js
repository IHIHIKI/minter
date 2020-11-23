const addresses = require('@oikos/swap/addresses.json');
//OLD contract 4115909315aadea0064b67634d2c9d54805d0b409c
//Last contract 415ea3ad9cfa4b303689cdd78e63cd2be9266d3173
export default {
	unipoolUSDT: {
		//oldAddress: '41e8f14e5566f93c0ea5a137b89692770fc1d15338',
		address: '41e8f14e5566f93c0ea5a137b89692770fc1d15338',
		abi: [
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'earned',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'rewards',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: '_rewardDistribution', type: 'address' }],
				name: 'setRewardDistribution',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'totalSupply',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'DURATION',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'withdraw',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'reward', type: 'uint256' }],
				name: 'notifyRewardAmount',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'getReward',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'balanceOf',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'renounceOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardRate',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastTimeRewardApplicable',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'userRewardPerTokenPaid',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'owner',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'isOwner',
				outputs: [{ name: '', type: 'bool' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'stake',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastUpdateTime',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerToken',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerTokenStored',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'snx',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'exit',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'periodFinish',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'uni',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'newOwner', type: 'address' }],
				name: 'transferOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				anonymous: false,
				inputs: [{ indexed: false, name: 'reward', type: 'uint256' }],
				name: 'RewardAdded',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Staked',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Withdrawn',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'reward', type: 'uint256' },
				],
				name: 'RewardPaid',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'previousOwner', type: 'address' },
					{ indexed: true, name: 'newOwner', type: 'address' },
				],
				name: 'OwnershipTransferred',
				type: 'event',
			},
		],
	},
/*	unipoolseth: {
		oldAddress: '41b14f2fb611e32725e9fb5fe2e285390e9ab60feb',
		address: '41b14f2fb611e32725e9fb5fe2e285390e9ab60feb',
		abi: [
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'earned',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'rewards',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: '_rewardDistribution', type: 'address' }],
				name: 'setRewardDistribution',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'totalSupply',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'DURATION',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'withdraw',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'reward', type: 'uint256' }],
				name: 'notifyRewardAmount',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'getReward',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'balanceOf',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'renounceOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardRate',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastTimeRewardApplicable',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'userRewardPerTokenPaid',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'owner',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'isOwner',
				outputs: [{ name: '', type: 'bool' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'stake',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastUpdateTime',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerToken',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerTokenStored',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'snx',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'exit',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'periodFinish',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'uni',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'newOwner', type: 'address' }],
				name: 'transferOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				anonymous: false,
				inputs: [{ indexed: false, name: 'reward', type: 'uint256' }],
				name: 'RewardAdded',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Staked',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Withdrawn',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'reward', type: 'uint256' },
				],
				name: 'RewardPaid',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'previousOwner', type: 'address' },
					{ indexed: true, name: 'newOwner', type: 'address' },
				],
				name: 'OwnershipTransferred',
				type: 'event',
			},
		],
	},*/
	/*uniswapSTRX: {
		address: addresses.mainnet.exchanges.sTRX.address,
		abi: [
			{
				name: 'TokenPurchase',
				inputs: [
					{ type: 'address', name: 'buyer', indexed: true },
					{ type: 'uint256', name: 'eth_sold', indexed: true },
					{ type: 'uint256', name: 'tokens_bought', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'EthPurchase',
				inputs: [
					{ type: 'address', name: 'buyer', indexed: true },
					{ type: 'uint256', name: 'tokens_sold', indexed: true },
					{ type: 'uint256', name: 'eth_bought', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'AddLiquidity',
				inputs: [
					{ type: 'address', name: 'provider', indexed: true },
					{ type: 'uint256', name: 'eth_amount', indexed: true },
					{ type: 'uint256', name: 'token_amount', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'RemoveLiquidity',
				inputs: [
					{ type: 'address', name: 'provider', indexed: true },
					{ type: 'uint256', name: 'eth_amount', indexed: true },
					{ type: 'uint256', name: 'token_amount', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'Transfer',
				inputs: [
					{ type: 'address', name: '_from', indexed: true },
					{ type: 'address', name: '_to', indexed: true },
					{ type: 'uint256', name: '_value', indexed: false },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'Approval',
				inputs: [
					{ type: 'address', name: '_owner', indexed: true },
					{ type: 'address', name: '_spender', indexed: true },
					{ type: 'uint256', name: '_value', indexed: false },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'setup',
				outputs: [],
				inputs: [{ type: 'address', name: 'token_addr' }],
				constant: false,
				payable: false,
				type: 'function',
				gas: 175875,
			},
			{
				name: 'addLiquidity',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'min_liquidity' },
					{ type: 'uint256', name: 'max_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 82616,
			},
			{
				name: 'removeLiquidity',
				outputs: [
					{ type: 'uint256', name: 'out' },
					{ type: 'uint256', name: 'out' },
				],
				inputs: [
					{ type: 'uint256', name: 'amount' },
					{ type: 'uint256', name: 'min_eth' },
					{ type: 'uint256', name: 'min_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 116814,
			},
			{
				name: '__default__',
				outputs: [],
				inputs: [],
				constant: false,
				payable: true,
				type: 'function',
			},
			{
				name: 'ethToTokenSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'min_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 12757,
			},
			{
				name: 'ethToTokenTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'min_tokens' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 12965,
			},
			{
				name: 'ethToTokenSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 50463,
			},
			{
				name: 'ethToTokenTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 50671,
			},
			{
				name: 'tokenToEthSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_eth' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 47503,
			},
			{
				name: 'tokenToEthTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_eth' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 47712,
			},
			{
				name: 'tokenToEthSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'eth_bought' },
					{ type: 'uint256', name: 'max_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 50175,
			},
			{
				name: 'tokenToEthTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'eth_bought' },
					{ type: 'uint256', name: 'max_tokens' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 50384,
			},
			{
				name: 'tokenToTokenSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 51007,
			},
			{
				name: 'tokenToTokenTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 51098,
			},
			{
				name: 'tokenToTokenSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 54928,
			},
			{
				name: 'tokenToTokenTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 55019,
			},
			{
				name: 'tokenToExchangeSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 49342,
			},
			{
				name: 'tokenToExchangeTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 49532,
			},
			{
				name: 'tokenToExchangeSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 53233,
			},
			{
				name: 'tokenToExchangeTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 53423,
			},
			{
				name: 'getEthToTokenInputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'eth_sold' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 5542,
			},
			{
				name: 'getEthToTokenOutputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'tokens_bought' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 6872,
			},
			{
				name: 'getTokenToEthInputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'tokens_sold' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 5637,
			},
			{
				name: 'getTokenToEthOutputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'eth_bought' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 6897,
			},
			{
				name: 'tokenAddress',
				outputs: [{ type: 'address', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1413,
			},
			{
				name: 'factoryAddress',
				outputs: [{ type: 'address', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1443,
			},
			{
				name: 'balanceOf',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'address', name: '_owner' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1645,
			},
			{
				name: 'transfer',
				outputs: [{ type: 'bool', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_to' },
					{ type: 'uint256', name: '_value' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 75034,
			},
			{
				name: 'transferFrom',
				outputs: [{ type: 'bool', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_from' },
					{ type: 'address', name: '_to' },
					{ type: 'uint256', name: '_value' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 110907,
			},
			{
				name: 'approve',
				outputs: [{ type: 'bool', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_spender' },
					{ type: 'uint256', name: '_value' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 38769,
			},
			{
				name: 'allowance',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_owner' },
					{ type: 'address', name: '_spender' },
				],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1925,
			},
			{
				name: 'name',
				outputs: [{ type: 'bytes32', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1623,
			},
			{
				name: 'symbol',
				outputs: [{ type: 'bytes32', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1653,
			},
			{
				name: 'decimals',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1683,
			},
			{
				name: 'totalSupply',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1713,
			},
		],
	},*/
	uniswapTRXUSDT: {
		address: '41c4488fa262236619425e19f6ba4a8639b8ca1973',
		abi: [
			{
			  "constant": true,
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token0",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "totalSupply",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "from",
				  "type": "address"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "PERMIT_TYPEHASH",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "DOMAIN_SEPARATOR",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price0CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price1CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "kLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "nonces",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "MINIMUM_LIQUIDITY",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "factory",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token1",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "owner",
				  "type": "address"
				},
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				},
				{
				  "name": "deadline",
				  "type": "uint256"
				},
				{
				  "name": "v",
				  "type": "uint8"
				},
				{
				  "name": "r",
				  "type": "bytes32"
				},
				{
				  "name": "s",
				  "type": "bytes32"
				}
			  ],
			  "name": "permit",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				},
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "name": "Mint",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Burn",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Swap",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "name": "reserve0",
				  "type": "uint112"
				},
				{
				  "indexed": false,
				  "name": "reserve1",
				  "type": "uint112"
				}
			  ],
			  "name": "Sync",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "getReserves",
			  "outputs": [
				{
				  "name": "_reserve0",
				  "type": "uint112"
				},
				{
				  "name": "_reserve1",
				  "type": "uint112"
				},
				{
				  "name": "_blockTimestampLast",
				  "type": "uint32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "_token0",
				  "type": "address"
				},
				{
				  "name": "_token1",
				  "type": "address"
				}
			  ],
			  "name": "initialize",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "mint",
			  "outputs": [
				{
				  "name": "liquidity",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "burn",
			  "outputs": [
				{
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "data",
				  "type": "bytes"
				}
			  ],
			  "name": "swap",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "skim",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [],
			  "name": "sync",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ]
	},
	/*uniswapSETH: {
		address: addresses.mainnet.exchanges.sETH.address,
		abi: [
			{
				name: 'TokenPurchase',
				inputs: [
					{ type: 'address', name: 'buyer', indexed: true },
					{ type: 'uint256', name: 'eth_sold', indexed: true },
					{ type: 'uint256', name: 'tokens_bought', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'EthPurchase',
				inputs: [
					{ type: 'address', name: 'buyer', indexed: true },
					{ type: 'uint256', name: 'tokens_sold', indexed: true },
					{ type: 'uint256', name: 'eth_bought', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'AddLiquidity',
				inputs: [
					{ type: 'address', name: 'provider', indexed: true },
					{ type: 'uint256', name: 'eth_amount', indexed: true },
					{ type: 'uint256', name: 'token_amount', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'RemoveLiquidity',
				inputs: [
					{ type: 'address', name: 'provider', indexed: true },
					{ type: 'uint256', name: 'eth_amount', indexed: true },
					{ type: 'uint256', name: 'token_amount', indexed: true },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'Transfer',
				inputs: [
					{ type: 'address', name: '_from', indexed: true },
					{ type: 'address', name: '_to', indexed: true },
					{ type: 'uint256', name: '_value', indexed: false },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'Approval',
				inputs: [
					{ type: 'address', name: '_owner', indexed: true },
					{ type: 'address', name: '_spender', indexed: true },
					{ type: 'uint256', name: '_value', indexed: false },
				],
				anonymous: false,
				type: 'event',
			},
			{
				name: 'setup',
				outputs: [],
				inputs: [{ type: 'address', name: 'token_addr' }],
				constant: false,
				payable: false,
				type: 'function',
				gas: 175875,
			},
			{
				name: 'addLiquidity',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'min_liquidity' },
					{ type: 'uint256', name: 'max_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 82616,
			},
			{
				name: 'removeLiquidity',
				outputs: [
					{ type: 'uint256', name: 'out' },
					{ type: 'uint256', name: 'out' },
				],
				inputs: [
					{ type: 'uint256', name: 'amount' },
					{ type: 'uint256', name: 'min_eth' },
					{ type: 'uint256', name: 'min_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 116814,
			},
			{
				name: '__default__',
				outputs: [],
				inputs: [],
				constant: false,
				payable: true,
				type: 'function',
			},
			{
				name: 'ethToTokenSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'min_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 12757,
			},
			{
				name: 'ethToTokenTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'min_tokens' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 12965,
			},
			{
				name: 'ethToTokenSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 50463,
			},
			{
				name: 'ethToTokenTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: true,
				type: 'function',
				gas: 50671,
			},
			{
				name: 'tokenToEthSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_eth' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 47503,
			},
			{
				name: 'tokenToEthTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_eth' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 47712,
			},
			{
				name: 'tokenToEthSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'eth_bought' },
					{ type: 'uint256', name: 'max_tokens' },
					{ type: 'uint256', name: 'deadline' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 50175,
			},
			{
				name: 'tokenToEthTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'eth_bought' },
					{ type: 'uint256', name: 'max_tokens' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 50384,
			},
			{
				name: 'tokenToTokenSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 51007,
			},
			{
				name: 'tokenToTokenTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 51098,
			},
			{
				name: 'tokenToTokenSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 54928,
			},
			{
				name: 'tokenToTokenTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'token_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 55019,
			},
			{
				name: 'tokenToExchangeSwapInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 49342,
			},
			{
				name: 'tokenToExchangeTransferInput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_sold' },
					{ type: 'uint256', name: 'min_tokens_bought' },
					{ type: 'uint256', name: 'min_eth_bought' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 49532,
			},
			{
				name: 'tokenToExchangeSwapOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 53233,
			},
			{
				name: 'tokenToExchangeTransferOutput',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'uint256', name: 'tokens_bought' },
					{ type: 'uint256', name: 'max_tokens_sold' },
					{ type: 'uint256', name: 'max_eth_sold' },
					{ type: 'uint256', name: 'deadline' },
					{ type: 'address', name: 'recipient' },
					{ type: 'address', name: 'exchange_addr' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 53423,
			},
			{
				name: 'getEthToTokenInputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'eth_sold' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 5542,
			},
			{
				name: 'getEthToTokenOutputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'tokens_bought' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 6872,
			},
			{
				name: 'getTokenToEthInputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'tokens_sold' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 5637,
			},
			{
				name: 'getTokenToEthOutputPrice',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'uint256', name: 'eth_bought' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 6897,
			},
			{
				name: 'tokenAddress',
				outputs: [{ type: 'address', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1413,
			},
			{
				name: 'factoryAddress',
				outputs: [{ type: 'address', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1443,
			},
			{
				name: 'balanceOf',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [{ type: 'address', name: '_owner' }],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1645,
			},
			{
				name: 'transfer',
				outputs: [{ type: 'bool', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_to' },
					{ type: 'uint256', name: '_value' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 75034,
			},
			{
				name: 'transferFrom',
				outputs: [{ type: 'bool', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_from' },
					{ type: 'address', name: '_to' },
					{ type: 'uint256', name: '_value' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 110907,
			},
			{
				name: 'approve',
				outputs: [{ type: 'bool', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_spender' },
					{ type: 'uint256', name: '_value' },
				],
				constant: false,
				payable: false,
				type: 'function',
				gas: 38769,
			},
			{
				name: 'allowance',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [
					{ type: 'address', name: '_owner' },
					{ type: 'address', name: '_spender' },
				],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1925,
			},
			{
				name: 'name',
				outputs: [{ type: 'bytes32', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1623,
			},
			{
				name: 'symbol',
				outputs: [{ type: 'bytes32', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1653,
			},
			{
				name: 'decimals',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1683,
			},
			{
				name: 'totalSupply',
				outputs: [{ type: 'uint256', name: 'out' }],
				inputs: [],
				constant: true,
				payable: false,
				type: 'function',
				gas: 1713,
			},
		],
	},*/
};
