import React, { FC, useEffect } from 'react';

import { Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEpisode, StateType, TypedDispatch } from 'store';
import { ReturnComponentType } from 'types';
import { EpisodesType } from 'types/EpisodeType';

export const Episodes: FC = (): ReturnComponentType => {
  const { results } = useSelector<StateType, EpisodesType>(
    state => state.episode.episodes,
  );
  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchEpisode());
  }, [dispatch]);

  return (
    <Grid container>
      {/* eslint-disable-next-line camelcase */}
      {results?.map(({ id, episode, name, air_date }: any) => {
        return (
          <Grid item key={id}>
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Box sx={{ p: 3, width: '250px', height: '100%' }}>
                <Paper elevation={3}>
                  <div
                    key={id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <h3>
                      <span>Episode: {episode}</span>
                    </h3>
                    <h4>
                      <span>Name: {name}</span>
                    </h4>
                    {/* eslint-disable-next-line camelcase */}
                    <span>Air Date: {air_date}</span>
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
