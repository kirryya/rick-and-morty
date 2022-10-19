import React, { FC } from 'react';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { Path } from 'enums';
import { ReturnComponentType } from 'types';

export const ButtonAppBar: FC = (): ReturnComponentType => {
  const settings = [
    { id: 1, setting: 'Home', route: Path.HOME },
    { id: 2, setting: 'Characters', route: Path.CHARACTERS },
    { id: 3, setting: 'Locations', route: Path.LOCATIONS },
    { id: 4, setting: 'Episodes', route: Path.EPISODES },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          {settings.map(({ setting, id, route }) => (
            <Typography key={id} variant="h6" component="div" style={{ margin: '15px' }}>
              <NavLink
                to={`${route}`}
                end
                style={({ isActive }) => {
                  return {
                    textDecoration: 'none',
                    display: 'flex',
                    color: isActive ? 'inherit' : 'darkgrey',
                  };
                }}
              >
                {setting}
              </NavLink>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
