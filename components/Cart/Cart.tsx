import { FC, useEffect } from 'react';

export const Cart: FC = () => {
  useEffect(() => {
    if (!window.Ecwid) return;
    window.Ecwid.init();
  }, []);
  return (
    <div className="ec-cart-widget" />
  );
};
