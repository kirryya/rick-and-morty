import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCharacter } from 'store/reducers/character/character-reducer';
import { AppRootStateType, TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const App: FC = (): ReturnComponentType => {
  const character = useSelector<AppRootStateType, any>(state => state.character);

  const dispatch = useDispatch<TypedDispatch>();

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);

  return (
    <div>
      <div>Rick and Morty</div>
      <div>{character && character.results[1].name}</div>
      <img src={character && character.results[1].image} alt={`Character's ava`} />
    </div>
  );
};
