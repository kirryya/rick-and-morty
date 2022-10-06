import React, { FC, useEffect } from 'react';

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
    <div>
      {episodes.results?.map((ch: any) => (
        <div key={ch.id}>
          <span>Name: {ch.name}</span>
          <span>Air Date: {ch.air_date}</span>
          <span>Episode: {ch.episode}</span>
          <span>
            Characters:{' '}
            {ch.characters.map((el: any) => (
              <img key={el} src={el.image} alt={`Character's ava`} />
            ))}
          </span>
        </div>
      ))}
    </div>
  );
};
