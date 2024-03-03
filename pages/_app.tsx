import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { CntrlProvider, customItems } from '@cntrl-site/sdk-nextjs';
import { Cart } from '../components/Cart/Cart';
import { Product } from '../sections/Product/Product';
import { Nav } from '../components/Nav/Nav';

// place your custom items/sections definitions here
customItems
  .define('cart', Cart)
  .define('nav', Nav)
  .define('product-580854978', () => <Product productId="580854978" />)

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
      <div id="nav-portal" />
    </CntrlProvider>
  );
}

export default App;
