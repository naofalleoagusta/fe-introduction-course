import { useHistory } from 'react-router-dom';
import useAuth from '../context/useAuth';

const useAuthRoute = () => {
  const auth = useAuth();
  const history = useHistory();

  const redirect = () => {
    if (auth.currentUser) {
      history.push('/movie-list');
    }
  };

  return { auth, history, redirect };
};

export default useAuthRoute;
