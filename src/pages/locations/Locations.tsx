import React, { FC, useEffect } from 'react';

import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import style from './Locations.module.css';

import { BasicTable } from 'pages/locations/config/BasicTable';
import { fetchLocations } from 'store';
import { StateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Locations: FC = (): ReturnComponentType => {
  const { results } = useSelector<StateType, any>(state => state.location.locations);
  const { pages } = useSelector<StateType, any>(state => state.location.locations.info);

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

  return (
    <div className={style.main}>
      <Pagination
        style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}
        count={pages}
        page={pageNumber}
        color="primary"
        onChange={onPagePaginationChange}
      />
      <BasicTable results={results} />
    </div>
  );
};
