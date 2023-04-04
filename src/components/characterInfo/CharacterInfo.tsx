import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { StateType } from 'store/store';
import { ReturnComponentType } from 'types';

export const CharacterInfo: FC = (): ReturnComponentType => {
  const { gender, species, status } = useSelector<StateType, any>(
    state => state.character.character,
  );

  return (
    <div>
      <div>Gender: {gender}</div>
      <div>Species: {species}</div>
      <div>Status: {status}</div>
    </div>
  );
};
