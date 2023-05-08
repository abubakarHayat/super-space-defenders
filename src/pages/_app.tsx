import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Cairo } from "next/font/google";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { publicProvider } from "wagmi/providers/public";

const cairo = Cairo({ subsets: ["latin"] });

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${cairo.style.fontFamily};
        }
      `}</style>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  );
}
