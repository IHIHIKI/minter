import React, { useState, useCallback, useEffect, useContext } from 'react';
import styled from 'styled-components';

import snxJSConnector from '../../../helpers/snxJSConnector';
import { Store } from '../../../store';

import { bigNumberFormatter,formatUniv1 } from '../../../helpers/formatters';

import PageContainer from '../../../components/PageContainer';
import Spinner from '../../../components/Spinner';

import SetAllowance from './SetAllowance';
import Stake from './Stake';


const UniPool = () => {
	const [hasAllowance, setAllowance] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const {
		state: {
			wallet: { currentWallet },
		},
	} = useContext(Store);

	const fetchAllowance = useCallback(async () => {
		console.log({snxJSConnector});

		if (!snxJSConnector.initialized) return;
		const { uniswapContract, unipoolContract } = snxJSConnector;
		try {
			setIsLoading(true);
			const allowance = await uniswapContract.allowance(currentWallet, unipoolContract.address).call();
			setAllowance(!!bigNumberFormatter(allowance));
			setIsLoading(false);
		} catch (e) {
			console.log(e);
			setIsLoading(false);
			setAllowance(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet, snxJSConnector.initialized]);

	useEffect(() => {
		fetchAllowance();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchAllowance]);

	useEffect(() => {
		if (!currentWallet) return;
		const { uniswapContract, unipoolContract } = snxJSConnector;

		/*uniswapContract.on('Approval', (owner, spender) => {
			if (owner === currentWallet && spender === unipoolContract.address) {
				setAllowance(true);
			}
		});*/

		return () => {
			if (snxJSConnector.initialized) {
			//	uniswapContract.removeAllListeners('Approval');
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet]);

	return (
		<PageContainer>
			{isLoading ? (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			) : !hasAllowance ? (
				<SetAllowance />
			) : (
				<Stake />
			)}
		</PageContainer>
	);
};

const SpinnerContainer = styled.div`
	margin: 100px;
`;

export default UniPool;