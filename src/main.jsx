import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UnicatApp from './UnicatApp';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'wagmi';

// IMPORTANT: Replace 'YOUR_PROJECT_ID' with your actual WalletConnect Project ID from cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID';

const config = getDefaultConfig({
  appName: 'Unicat Site',
  projectId,
  chains: [
    mainnet,
    sepolia,
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <UnicatApp />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);