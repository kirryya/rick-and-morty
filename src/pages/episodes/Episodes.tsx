import React, { FC, useEffect } from 'react';

import { Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEpisode } from 'store/reducers/episodes/episodes-reducer';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const Episodes: FC = (): ReturnComponentType => {
  const episodes = useSelector<AppRootStateType, any>(state => state.episode.episodes);
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchEpisode());
  }, [dispatch]);

  return (
    <Grid container>
      {episodes.results?.map((ch: any) => {
        return (
          <Grid item key={ch.id}>
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Box sx={{ p: 3, width: '250px', height: '100%' }}>
                <Paper elevation={3}>
                  <div
                    key={ch.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <h3>
                      <span>Episode: {ch.episode}</span>
                    </h3>
                    <h4>
                      <span>Name: {ch.name}</span>
                    </h4>
                    <span>Air Date: {ch.air_date}</span>
                    {/* <span> */}
                    {/*  Characters:{' '} */}
                    {/*  {ch.characters.map((el: any) => ( */}
                    {/*    <img key={el} src={el.image} alt={`Character's ava`} /> */}
                    {/*  ))} */}
                    {/* </span> */}
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
