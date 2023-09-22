import React, { Fragment, ReactElement, ReactNode } from 'react';
import { Navigate } from 'react-router';
import cache from '../core/cache';
import { Common } from '../enums/common.enum';

type Props = {
  children: ReactNode | ReactElement;
}

const PrivateGuard: React.FC<Props> = ({ children }) => {
  const res = cache.getCache(Common.token);

  return (
    <Fragment>
      {res && res.data ? (
        <Fragment>{children}</Fragment>
      ) : (
        <Navigate to='/login' />
      )}
    </Fragment>
  );
}

export { PrivateGuard }