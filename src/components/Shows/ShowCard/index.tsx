import React from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';

import { baseImgUrl } from '../../../config/api';
import { TMovie } from '../../../types';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: '200px',
      maxHeight: '300px',
      marginRight: '10px',
      transition: 'transform 450ms',
      flexShrink: 0,
    },
    img: {
      objectFit: 'contain',
      width: '100%',
      height: '100%',
    },
  })
);

type TShowCard = {
  movie: TMovie;
};

const ShowCard: React.FC<TShowCard> = ({ movie }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <img
        src={`${baseImgUrl}${movie.poster_path}`}
        alt="test"
        className={classes.img}
      />
    </Box>
  );
};

export default ShowCard;
