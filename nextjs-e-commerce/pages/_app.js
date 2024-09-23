import '../styles/global.css';
import useToken from '../lib/useToken';

export default function App({ Component, pageProps }) {
      const { token, removeToken, setToken } = useToken();

  return <Component {...pageProps} token={token} removeToken={removeToken} setToken={setToken} />;
}
