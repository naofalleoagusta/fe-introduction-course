import React, { useRef } from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import useFetch from '../../../hooks/useFetch';
import { TMovie } from '../../../types';
import ShowCard from '../ShowCard';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      margin: '1rem 0',
    },
    container: {
      position: 'relative',
    },
    title: {
      fontWeight: 700,
      marginBottom: '1rem',
    },
    showsContainer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      overflowX: 'scroll',
      overflowY: 'hidden',
      padding: '20px',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    skeletonCard: {
      marginRight: '10px',
    },
    controllerContainer: {
      position: 'absolute',
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      cursor: 'pointer',
    },
    controllerWrapper: {
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    left: {
      top: 0,
      left: 0,
    },
    right: {
      top: 0,
      right: 0,
    },
    icon: {
      fontSize: '50px',
      color: 'white',
    },
  })
);

type TShowsList = {
  title?: string;
  url: string;
};

const ShowsList: React.FC<TShowsList> = ({ title, url }) => {
  const classes = useStyle();
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, loading, error } = useFetch(url);
  const scroll = (direction: string) => {
    if (containerRef && containerRef.current) {
      if (direction === 'left') {
        containerRef.current.scrollLeft -= 300;
      } else {
        containerRef.current.scrollLeft += 300;
      }
    }
  };

  if (error)
    return <Typography variant="h3">Error has been occured</Typography>;
  return (
    <Box className={classes.root}>
      {!loading ? (
        <>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.container}>
            <Box
              className={`${classes.controllerContainer} ${classes.left}`}
              onClick={() => scroll('left')}
            >
              <Box className={classes.controllerWrapper}>
                <ChevronLeft className={classes.icon} />
              </Box>
            </Box>
            <Box
              className={`${classes.controllerContainer} ${classes.right}`}
              onClick={() => scroll('right')}
            >
              <Box className={classes.controllerWrapper}>
                <ChevronRight className={classes.icon} />
              </Box>
            </Box>
            <div className={classes.showsContainer} ref={containerRef}>
              {data.results.map((movie: TMovie) => (
                <ShowCard movie={movie} key={`movie-${movie.id}`} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <Skeleton width="30%" height="72px" />
          <Box className={classes.showsContainer}>
            {[0, 1, 2, 3, 4, 5].map((number) => (
              <Skeleton
                width="300px"
                height="450px"
                className={classes.skeletonCard}
                key={`skeleton-${number}`}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ShowsList;
