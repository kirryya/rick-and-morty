import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Locations.module.css';

import { fetchLocations } from 'store';
import { fetchLocation } from 'store/reducers/locations/locations-reducer';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Locations: FC = (): ReturnComponentType => {
  const { results } = useSelector<AppRootStateType, any>(
    state => state.location.locations,
  );
  const { name, type, dimension } = useSelector<AppRootStateType, any>(
    state => state.location.location,
  );
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  const onLocationClickHandle = (id: number): void => {
    dispatch(fetchLocation(id));
  };

  return (
    <div className={style.main}>
      {name && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <span className={style.singleLocation}>
            Name: <h3>{name}</h3>
          </span>
          <span className={style.singleLocation}>
            Type: <h3>{type}</h3>
          </span>
          <span className={style.singleLocation}>
            Dimension: <h3>{dimension}</h3>
          </span>
        </div>
      )}

      {results?.map(({ id, name }: any) => (
        <div
          key={id}
          role="button"
          aria-hidden
          className={style.location}
          onClick={() => onLocationClickHandle(id)}
        >
          <span>
            <h3>{name}</h3>
          </span>
        </div>
      ))}
    </div>
  );
};
