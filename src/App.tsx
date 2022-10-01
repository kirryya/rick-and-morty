import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { fetchCharacter } from 'store/reducers/character/character-reducer';
import { TypedDispatch } from 'store/store';
import { ReturnComponentType } from 'types';

export const App: FC = (): ReturnComponentType => {
  const dispatch = useDispatch<TypedDispatch>();

  return (
    <div>
      <div>Rick and Morty</div>
      <button
        type="button"
        onClick={() => {
          dispatch(fetchCharacter());
        }}
      >
        Get Characters
      </button>
    </div>
  );
};
