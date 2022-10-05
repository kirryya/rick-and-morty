import React, { FC } from 'react';

import loader from '../../assets/images/loader.gif';

import style from './Preloader.module.css';

import { ReturnComponentType } from 'types';

export const Preloader: FC = (): ReturnComponentType => {
  return (
    <div className={style.main}>
      <img src={loader} alt="Loading..." />
    </div>
  );
};
