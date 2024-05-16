import {arbitrum, mainnet, polygon} from 'viem/chains';
import {createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi';
import {disconnect, getAccount} from '@wagmi/core';

import {reconnect} from '@wagmi/core';

// 1. Get a project ID at https://cloud.walletconnect.com
const projectId = '45889a474345288a14a9a0d93756e1f0';

// 2. Create wagmiConfig
const metadata = {
	name: 'Gtxstream',
	description: 'Connect to Gtxstream',
	url: 'https://app.gtxstream.com', // Origin must match your domain & subdomain.
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum, polygon] as const;
export const config = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
	// ...wagmiConfig, // Optional - Override createConfig parameters
});
void reconnect(config);

// 3. Create modal
export const modal = createWeb3Modal({
	wagmiConfig: config,
	projectId,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
	enableOnramp: true, // Optional - false as default
});

export async function connect() {
	if (getAccount(config).isConnected) {
		await disconnect(config);
	} else {
		await modal.open();
	}
}
