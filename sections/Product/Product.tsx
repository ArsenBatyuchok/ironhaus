import { FC, useEffect } from 'react';

interface Props {
  productId: string;
  defaultSlug: string;
}

export const Product: FC<Props> = ({ productId, defaultSlug }) => {
  useEffect(() => {
    if (!window.xProductBrowser) return;
    window.xProductBrowser(
      "categoriesPerRow=3",
      "views=grid(20,3) list(60) table(60)",
      "categoryView=grid",
      "searchView=list",
      `defaultProductId=${productId}`,
      "defaultSlug=electro-voice-elx-200",
      "id=my-store-83943761"
    );
  }, [productId]);
  return (
    <div id="my-store-83943761"></div>
  );
};
