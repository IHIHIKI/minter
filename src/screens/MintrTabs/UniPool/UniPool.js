import React, { useState, useCallback, useEffect, useContext } from 'react';
import styled from 'styled-components';

import snxJSConnector from '../../../helpers/snxJSConnector';
import { Store } from '../../../store';

import { GWEI_UNIT } from '../../../helpers/networkHelper';
import { bigNumberFormatter, formatCurrency } from '../../../helpers/formatters';
import { ButtonPrimary } from '../../../components/Button';
import PageContainer from '../../../components/PageContainer';

const ALLOWANCE_LIMIT = 100000000;

const UniPool = () => {
	const [hasAllowance, setAllowance] = useState(false);
	const [balances, setBalances] = useState(null);
	const [stakeAmount, setStakeAmount] = useState('');
	const [withdrawAmount, setWithdrawAmount] = useState('');
	const [error, setError] = useState(null);
	const [transactionHash, setTransactionHash] = useState(null);
	const {
		state: {
			wallet: { currentWallet },
			network: {
				settings: { gasPrice },
			},
		},
	} = useContext(Store);

	const fetchAllowance = useCallback(async () => {
		if (!snxJSConnector.initialized) return;
		try {
			const { uniswapContract, unipoolContract } = snxJSConnector;

			const allowance = await uniswapContract
				.allowance(currentWallet, unipoolContract.address)
				.call();
			console.log(allowance);
			setAllowance(bigNumberFormatter(allowance));
		} catch (e) {
			console.log(e);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet, snxJSConnector.initialized]);

	const fetchData = useCallback(async () => {
		if (!snxJSConnector.initialized) return;
		try {
			const { uniswapContract, unipoolContract } = snxJSConnector;
			const [univ1, rewards] = await Promise.all([
				uniswapContract.balanceOf(currentWallet).call(),
				unipoolContract.rewards(currentWallet).call(),
			]);
			setBalances({ univ1: bigNumberFormatter(univ1), rewards: bigNumberFormatter(rewards) });
		} catch (e) {
			console.log(e);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet, snxJSConnector.initialized]);

	useEffect(() => {
		fetchAllowance();
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchAllowance]);

	useEffect(() => {
		if (!currentWallet) return;
		const { uniswapContract, unipoolContract } = snxJSConnector;
		/*uniswapContract.on('Approval', (owner, spender) => {
			if (owner === currentWallet && spender === unipoolContract.address) {
				console.log('here', owner, spender);
				fetchAllowance();
			}
		});*/
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet]);

	const onUnlock = async () => {
		const { parseEther } = snxJSConnector.utils;
		const { uniswapContract, unipoolContract } = snxJSConnector;
		try {
			const gasEstimate = 0; //await uniswapContract.estimate.approve(
			//	unipoolContract.address,
			//	parseEther(ALLOWANCE_LIMIT.toString())
			//).call();
			await uniswapContract
				.approve(unipoolContract.address, parseEther(ALLOWANCE_LIMIT.toString()))
				.send();
		} catch (e) {
			console.log(e);
		}
	};

	const onStake = async () => {
		const { parseEther } = snxJSConnector.utils;
		const { unipoolContract } = snxJSConnector;
		try {
			if (!stakeAmount) return;
			setError(null);
			setTransactionHash(null);
			const gasEstimate = 0;//await unipoolContract.estimate.stake(parseEther(stakeAmount.toString()));
			const transaction = await unipoolContract.stake(parseEther(stakeAmount.toString()) ).send();
			console.log(transaction);
			if (transaction) {
				setTransactionHash(transaction.hash);
			}
		} catch (e) {
			setError(e.message);
			console.log(e);
		}
	};

	const onWithdraw = async () => {
		const { parseEther } = snxJSConnector.utils;
		const { unipoolContract } = snxJSConnector;
		try {
			if (!withdrawAmount) return;
			setError(null);
			setTransactionHash(null);
			const gasEstimate = 0 /*await unipoolContract.estimate.withdraw(
				parseEther(withdrawAmount.toString())
			);*/
			const transaction = await unipoolContract.withdraw(parseEther(withdrawAmount.toString())).send();
			if (transaction) {
				setTransactionHash(transaction.hash);
			}
		} catch (e) {
			setError(e.message);
			console.log(e);
		}
	};

	const onGetReward = async () => {
		const { unipoolContract } = snxJSConnector;
		try {
			setError(null);
			setTransactionHash(null);
			const gasEstimate = 0;//await unipoolContract.estimate.getReward();
			const transaction = await unipoolContract.getReward().send();
			if (transaction) {
				setTransactionHash(transaction.hash);
			}
		} catch (e) {
			setError(e.message);
			console.log(e);
		}
	};

	const onExit = async () => {
		const { unipoolContract } = snxJSConnector;
		try {
			setError(null);
			setTransactionHash(null);
			const gasEstimate = 0; //await unipoolContract.estimate.exit();
			const transaction = await unipoolContract.exit().send();
			if (transaction) {
				setTransactionHash(transaction.hash);
			}
		} catch (e) {
			setError(e.message);
			console.log(e);
		}
	};
	console.log(balances);

	return (
		<PageContainer>
			<Inner>
				{!hasAllowance ? (
					<ButtonRow>
						Allow token
						<ButtonPrimary onClick={onUnlock}>Unlock</ButtonPrimary>
					</ButtonRow>
				) : (
					<>
						<Data>
							<Label>
								Balance: {balances && balances.univ1 ? balances.univ1 : 0} UNI-V1
							</Label>
							<Label style={{ marginTop: '10px' }}>
								Rewards available:{' '}
								{balances && balances.rewards ? formatCurrency(balances.rewards) : 0} SNX
							</Label>
						</Data>
						<ButtonRow>
							<Left>
								<Input
									type="number"
									placeholder="enter an amount"
									onChange={e => setStakeAmount(e.target.value)}
								/>
							</Left>
							<ButtonPrimary onClick={onStake}>Stake</ButtonPrimary>
						</ButtonRow>
						<ButtonRow>
							<Left />
							<ButtonPrimary onClick={onGetReward}>Get Rewards</ButtonPrimary>
						</ButtonRow>
						<ButtonRow>
							<Left>
								<Input
									type="number"
									placeholder="enter an amount"
									onChange={e => setWithdrawAmount(e.target.value)}
								/>
							</Left>
							<ButtonPrimary onClick={onWithdraw}>Withdraw</ButtonPrimary>
						</ButtonRow>
						<ButtonRow>
							<Left />
							<ButtonPrimary onClick={onExit}>Exit</ButtonPrimary>
						</ButtonRow>
					</>
				)}
				{error ? <Error>{`Error: ${error}`}</Error> : null}
				{transactionHash ? (
					<Link target="_blank" href={`https://etherscan.io/tx/${transactionHash}`}>
						<Label>{`https://etherscan.io/tx/${transactionHash}`}</Label>
					</Link>
				) : null}
			</Inner>
		</PageContainer>
	);
};

const Input = styled.input`
	height: 72px;
	width: 150px;
	padding: 0 10px;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.colorStyles.borders};
	font-size: 14px;
	font-family: 'apercu-medium', sans-serif;
	color: ${props => props.theme.colorStyles.body};
`;

const Left = styled.div`
	width: 150px;
`;

const Data = styled.div`
	margin-bottom: 40px;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
`;

const ButtonRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	& > button {
		margin-left: 40px;
	}
`;

const Label = styled.div`
	font-size: 16px;
	font-family: 'apercu-medium', sans-serif;
	color: ${props => props.theme.colorStyles.body};
`;

const Error = styled(Label)`
	color: ${props => props.theme.colorStyles.brandRed};
	display: flex;
	justify-content: center;
	margin-top: 40px;
`;

const Link = styled.a`
	margin-top: 40px;
`;

export default UniPool;
