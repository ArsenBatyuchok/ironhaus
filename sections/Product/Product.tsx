import { FC, useEffect } from 'react';

interface Props {
  productId: string;
}

export const Product: FC<Props> = ({ productId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.ecwid.com/script.js?83943761&data_platform=singleproduct_v2";
    script.charset = 'utf-8';
    script.async = true;
    script.onload = () => {
      if (window.xProduct) {
        window.xProduct();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
        <div class="ecsp ecsp-SingleProduct-v2 ecsp-SingleProduct-v2-centered ecsp-Product ec-Product-${productId}" itemtype="http://schema.org/Product" data-single-product-id="${productId}">
          <div class="ecsp-title" itemprop="name" style="display:none;"></div>
          <div customprop="options"></div>
          <div customprop="qty"></div>
          <div customprop="addtobag"></div>
        </div>` }}
    />
  );
};
