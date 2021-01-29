/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, Suspense } from 'react';

const LazyShopForm = lazy(() => import('./ShopForm'));

const ShopForm = props => (
  <Suspense fallback={null}>
    <LazyShopForm {...props} />
  </Suspense>
);

export default ShopForm;
