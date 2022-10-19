import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

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
    <div>
      {locations.results?.map((ch: any) => (
        <div key={ch.id}>
          <span>Name: {ch.name}</span>
          <span>Dimension: {ch.dimension}</span>
          <span>Type: {ch.type}</span>
        </div>
      ))}
    </div>
  );
};
