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
  optimism, // This line adds the Optimism chain for Worldchain compatibility
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'wagmi';

// Your actual WalletConnect Project ID
const projectId = '349e1ac007c9cf796d93d921431a0cc9'; // <--- Your WalletConnect Project ID is correctly placed here!

const config = getDefaultConfig({
  appName: 'Unicat Site', // Your application name
  projectId, // Using the projectId defined above
  chains: [
    mainnet,
    sepolia,
    optimism, // Include Optimism in the list of supported chains
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [optimism.id]: http(), // Add transport for Optimism
  },
  ssr: true, // Server-side rendering setting
});

const queryClient = new QueryClient(); // Initialize QueryClient

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