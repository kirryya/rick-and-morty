import React, { FC, useEffect } from 'react';

import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import style from './Locations.module.css';

import { fetchLocation, fetchLocations } from 'store';
import { StateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Locations: FC = (): ReturnComponentType => {
  const { results } = useSelector<StateType, any>(state => state.location.locations);
  const { pages } = useSelector<StateType, any>(state => state.location.locations.info);
  const { name, type, dimension } = useSelector<StateType, any>(
    state => state.location.location,
  );
  const dispatch = useDispatch<TypedDispatch>();

  const [pageNumber, setPageNumber] = React.useState<number>(1);

  useEffect(() => {
    dispatch(fetchLocations(pageNumber));
  }, [dispatch, pageNumber]);

  const onPagePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPageNumber(value);
  };

  const onLocationClickHandle = (id: number): void => {
    dispatch(fetchLocation(id));
  };

  return (
    <div className={style.main}>
      <Pagination
        count={pages}
        page={pageNumber}
        color="primary"
        showFirstButton
        showLastButton
        onChange={onPagePaginationChange}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      />

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

      {results.map(({ id, name }: any) => (
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
