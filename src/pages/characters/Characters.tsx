import React, { FC, useEffect } from 'react';

import { Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Paginator } from 'components/common/Paginator/Paginator';
import { fetchCharacter } from 'store';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Characters: FC = (): ReturnComponentType => {
  const characters = useSelector<AppRootStateType, any>(
    state => state.character.characters,
  );

  const currentPage = useSelector<AppRootStateType, number>(
    state => state.character.currentPage,
  );

  // const totalUsersCount = useSelector<AppRootStateType, number>(
  //   state => state.character.characters?.info.count,
  // );

  const totalUsersCount = 826;
  const pageSize = 20;
  const portionSize = 10;
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchCharacter(currentPage));
  }, [dispatch]);

  const onPageChanged = (pageNumber: number): void => {
    dispatch(fetchCharacter(pageNumber));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Paginator
          currentPage={currentPage}
          portionSize={portionSize}
          onPageChanged={onPageChanged}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
        />
      </div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {characters.results?.map((ch: any) => {
          return (
            <Grid item key={ch.id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper elevation={3}>
                    <div key={ch.id} style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Name: {ch.name}</span>
                      <span>Species: {ch.species}</span>
                      <span>Gender: {ch.gender}</span>
                      <img src={ch.image} alt={`Character's ava`} />
                    </div>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
