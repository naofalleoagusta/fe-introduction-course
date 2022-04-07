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
      flexShrink: 0,
      minWidth: 0,
      position: 'relative',
      transition: 'transform 450ms',
      '&:hover': {
        transform: 'scale(1.08)',
        '& $infoWrapper': {
          opacity: 1,
        },
      },
    },
    img: {
      objectFit: 'contain',
      width: '100%',
      height: '100%',
    },
    infoWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '200px',
      height: '300px',
      opacity: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'opacity 450ms',
      padding: '1rem',
      boxSizing: 'border-box',
      color: 'white',
    },
    title: {
      fontSize: '20px',
      // color: 'white',
    },
    overview: {
      fontSize: '12px',
      // color: 'white',
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
      <Box className={classes.infoWrapper}>
        <Typography variant="h3" className={classes.title}>
          {movie.title || movie.name}
        </Typography>
        <Typography className={classes.overview}>{movie.overview}</Typography>
        
      </Box>
    </Box>
  );
};

export default ShowCard;
