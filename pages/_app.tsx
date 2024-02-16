import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { CntrlProvider, customItems, customSections } from '@cntrl-site/sdk-nextjs';
import { Cart } from '../components/Cart/Cart';
import { Product } from '../sections/Product/Product';

// place your custom items/sections definitions here
customItems.define('cart', Cart);
customSections
  .define('product-596084810', {
    component: () => <Product productId="596084810" defaultSlug="electro-voice-elx-200" />
  })
  .define('product-595854083', {
    component: () => <Product productId="595854083" defaultSlug="electro-voice-zlx-12" />
  });

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
}

export default App;
