import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { CntrlProvider, customItems, customSections } from '@cntrl-site/sdk-nextjs';
import { Cart } from '../components/Cart/Cart';
import { Product } from '../sections/Product/Product';

// place your custom items/sections definitions here
customItems
  .define('cart', Cart)
  .define('product-580854978', () => <Product productId="580854978" />)

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
}

export default App;
