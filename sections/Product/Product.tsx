import { FC, useEffect, useState } from 'react';

interface Props {
  productId: string;
}

export const Product: FC<Props> = ({ productId }) => {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!wrapper) return;
    window.setTimeout(() => {
      window.xProduct?.();
    }, 200);
  }, [wrapper, productId]);

  return (
    <div
      ref={setWrapper}
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
