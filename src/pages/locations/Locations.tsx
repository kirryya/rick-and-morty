import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Locations.module.css';

import { fetchLocations } from 'store';
import { fetchLocation } from 'store/reducers/locations/locations-reducer';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Locations: FC = (): ReturnComponentType => {
  const locations = useSelector<AppRootStateType, any>(state => state.location.locations);
  const location = useSelector<AppRootStateType, any>(state => state.location.location);
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  const onLocationClickHandle = (id: number): void => {
    dispatch(fetchLocation(id));
  };

  return (
    <div className={style.main}>
      {location && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <span>
            Name: <h3>{location.name}</h3>
          </span>
          <span>
            Type: <h3>{location.type}</h3>
          </span>
          <span>
            Dimension: <h3>{location.dimension}</h3>
          </span>
        </div>
      )}
      {locations.results?.map((ch: any) => (
        <div
          key={ch.id}
          role="button"
          aria-hidden
          className={style.location}
          onClick={() => onLocationClickHandle(ch.id)}
        >
          <span>
            <h3>{ch.name}</h3>
          </span>
        </div>
      ))}
    </div>
  );
};
