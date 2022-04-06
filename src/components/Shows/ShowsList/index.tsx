import React from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { baseImgUrl } from '../../../config/api';
import useFetch from '../../../hooks/useFetch';
import { TMovie } from '../../../types';
import ShowCard from '../ShowCard';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      margin: '1rem 0',
    },
    title: {
      fontWeight: 700,
    },
    showsContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
  })
);

type TShowsList = {
  title?: string;
  url: string;
};

const ShowsList: React.FC<TShowsList> = ({ title, url }) => {
  const classes = useStyle();
  const { data, loading, error } = useFetch(url);
  console.log(data);
  if (error)
    return <Typography variant="h3">Error has been occured</Typography>;
  return (
    <Box className={classes.root}>
      {!loading ? (
        <>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
          <Box className={classes.showsContainer}>
            {data.results.map((movie: TMovie) => (
              <ShowCard movie={movie} />
            ))}
          </Box>
        </>
      ) : (
        <>
          <Skeleton width="30%" height="56px" />
        </>
      )}
    </Box>
  );
};

export default ShowsList;
