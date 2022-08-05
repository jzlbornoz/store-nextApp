import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Script from 'next/script';
import Header from '@components/Header';
import { ProviderAuth } from '@hooks/useAuth';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <ProviderAuth>
        <AppContext.Provider value={initialState}>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FCTH9JWM9X"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-FCTH9JWM9X');
      `}
          </Script>
          <Header />
          <Component {...pageProps} />
        </AppContext.Provider>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
