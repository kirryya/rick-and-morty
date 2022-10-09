import React, { FC } from 'react';

import fontImage from '../../assets/images/rik-i-morti.jpg';

import style from './Home.module.css';

import { ReturnComponentType } from 'types';

export const Home: FC = (): ReturnComponentType => {
  const font = {
    backgroundImage: `url(${fontImage})`,
  };

  return <div className={style.mainBlock} style={font} />;
};
