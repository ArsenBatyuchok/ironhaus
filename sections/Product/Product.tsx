import { FC, useEffect } from 'react';

interface Props {
  productId: string;
}

export const Product: FC<Props> = ({ productId }) => {
  useEffect(() => {
    if (!window.xProduct) return;
    window.xProduct();
  }, [productId]);
  return (
  <div
    className={`ecsp ecsp-SingleProduct-v2 ecsp-SingleProduct-v2-centered ecsp-Product ec-Product-${productId}`}
    itemType="http://schema.org/Product"
    data-single-product-id={productId}
  >
    {/* @ts-ignore */}
    <div className="ecsp-title" itemProp="name" style={{ display: 'none' }}></div>
    {/* @ts-ignore */}
    <div customprop="options"></div>
    {/* @ts-ignore */}
    <div customprop="qty"></div>
    {/* @ts-ignore */}
    <div customprop="addtobag"></div>
  </div>
  );
};
