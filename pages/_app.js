import '../styles/globals.css';

import Navbar from '../components/Navbar';
import { wrapper } from '../store';

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
