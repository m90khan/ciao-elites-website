import '../styles/base/normalize.css';
import '../styles/base/main.css';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
