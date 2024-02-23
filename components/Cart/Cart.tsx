import { FC, useEffect } from 'react';

export const Cart: FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.ecwid.com/script.js?83943761&data_platform=singleproduct_v2";
    script.charset = 'utf-8';
    script.async = true;
    script.onload = () => {
      if (window.Ecwid) {
        window.Ecwid.init();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="ec-cart-widget" />
  );
};
