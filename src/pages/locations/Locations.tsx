import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Locations.module.css';

import { fetchLocation } from 'store';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Locations: FC = (): ReturnComponentType => {
  const locations = useSelector<AppRootStateType, any>(state => state.location.locations);
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  return (
    <div className={style.main}>
      {locations.results?.map((ch: any) => (
        <div key={ch.id} className={style.location}>
          <span>Name: {ch.name}</span>
          <span>Dimension: {ch.dimension}</span>
          <span>Type: {ch.type}</span>
        </div>
      ))}
    </div>
  );
};
