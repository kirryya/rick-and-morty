import React, { FC, useEffect } from 'react';

import { Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCharacter } from 'store';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Characters: FC = (): ReturnComponentType => {
  const characters = useSelector<AppRootStateType, any>(
    state => state.character.characters,
  );
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
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
  );
};
