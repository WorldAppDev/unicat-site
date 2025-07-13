import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { IDKitWidget } from '@worldcoin/idkit'; // Corrected import

function App() {
  const [worldIdVerified, setWorldIdVerified] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [showWorldIdModal, setShowWorldIdModal] = useState(false);

  // Function to handle successful World ID verification
  const handleWorldIdSuccess = (result) => {
    console.log('World ID Verification Success:', result);
    setWorldIdVerified(true);
    setVerificationResult(result);
    // You would typically send this result to your backend for server-side verification
    // For this example, we'll just display a success message.
  };

  // Function to handle World ID verification error
  const handleWorldIdError = (error) => {
    console.error('World ID Verification Error:', error);
    setWorldIdVerified(false);
    setVerificationResult(null);
    // Display an error message to the user
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950 text-white font-inter flex flex-col items-center py-10">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center px-6 py-4 rounded-xl shadow-lg bg-purple-700/40 backdrop-blur-sm mb-12">
        <h1 className="text-4xl font-bold text-yellow-300 drop-shadow-lg">UNICAT</h1>
        <ConnectButton />
      </header>

      {/* Hero Section */}
      <section className="text-center mb-20 px-6">
        <h2 className="text-6xl font-extrabold mb-6 leading-tight animate-pulse-slow">
          Unicat to the Moon! <span role="img" aria-label="rocket">🚀</span>
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-purple-200">
          Join the magical journey of Unicat, where dreams take flight and crypto
          soars to new heights!
        </p>

        {/* Claim Airdrop Button */}
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75"
          onClick={() => alert('Claim Your Airdrop (Coming Soon) Button Clicked!')}
        >
          Claim Your Airdrop (Coming Soon)
        </button>

        {/* World ID Verification Button */}
        <div className="mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => setShowWorldIdModal(true)}
          >
            Verify with World ID
          </button>
          {worldIdVerified && (
            <p className="text-green-400 mt-4 text-lg">
              World ID Verified Successfully!
            </p>
          )}
          {verificationResult && (
            <div className="bg-gray-800 p-4 rounded-lg mt-4 text-sm text-left max-w-md mx-auto overflow-auto">
              <h3 className="font-semibold mb-2">Verification Details:</h3>
              <pre className="whitespace-pre-wrap break-all">{JSON.stringify(verificationResult, null, 2)}</pre>
            </div>
          )}
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="w-full max-w-4xl bg-purple-700/40 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-20">
        <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center">
          Tokenomics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          <div>
            <p className="mb-2">
              <strong className="text-yellow-200">Total Supply:</strong> 1,000,000,000 UNICAT
            </p>
            <p className="mb-2">
              <strong className="text-yellow-200">Transaction Fee:</strong> 1% (Auto-burn)
            </p>
            <p className="mb-2">
              <strong className="text-yellow-200">Auto-Burn:</strong> Every 48 hours
            </p>
            <p className="mb-2">
              <strong className="text-yellow-200">LP Pairings:</strong> UNICAT/USDC, UNICAT/WLD, UNICAT/PATH
            </p>
          </div>
          <div>
            <p className="mb-2">
              <strong className="text-yellow-200">Allocation:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Liquidity Pools: 30% (10% each for USDC, WLD, PATH)</li>
              <li>Airdrop/Giveaways: 10%</li>
              <li>Team & Development: 10%</li>
              <li>Circulating / Public: 50%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full max-w-4xl bg-purple-700/40 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-20">
        <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center">
          Roadmap
        </h2>
        <ol className="list-decimal list-inside text-lg space-y-4">
          <li>Phase 1: Launch & Community Building</li>
          <li>Phase 2: Exchange Listings & Partnerships</li>
          <li>Phase 3: Ecosystem Development & DApps</li>
          <li>Phase 4: Global Expansion & Mass Adoption</li>
        </ol>
      </section>

      {/* Social Links Section */}
      <section className="w-full max-w-4xl bg-purple-700/40 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-8">
          Join the Unicat Community!
        </h2>
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="https://twitter.com/yourunicat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            Twitter
          </a>
          <a
            href="https://t.me/yourunicat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            Telegram
          </a>
          <a
            href="https://discord.gg/yourunicat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            Discord
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-purple-300 text-sm px-6 py-4 rounded-xl shadow-lg bg-purple-700/40 backdrop-blur-sm">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Unicat Project. All rights reserved.
        </p>
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> |{' '}
          <a href="#" className="hover:underline">Terms of Service</a> |{' '}
          <a href="#" className="hover:underline">Disclaimer</a>
        </p>
      </footer>

      {/* World ID Widget Modal */}
      {showWorldIdModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl relative">
            <button
              onClick={() => setShowWorldIdModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <IDKitWidget
              app_id="app_staging_f76632943360b0d36746f338a0c2420a" // THIS IS A STAGING APP ID. REPLACE WITH YOUR OWN PRODUCTION APP ID!
              action="verify_human" // This is a generic action. You might define a custom action for your app.
              onSuccess={handleWorldIdSuccess}
              onError={handleWorldIdError}
              // You can add more props like walletConnectProjectId if needed for specific flows
            >
              {({ open }) => (
                <button
                  onClick={open}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
                >
                  Connect with World ID
                </button>
              )}
            </IDKitWidget>
            <p className="text-gray-600 text-sm mt-4">
              Scan with World App to verify your World ID.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
