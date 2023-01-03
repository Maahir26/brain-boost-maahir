import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from '../components/Navbar'
import { Analytics } from '@vercel/analytics/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider  desiredChainId={activeChainId}>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </ThirdwebProvider>
)}

export default MyApp
