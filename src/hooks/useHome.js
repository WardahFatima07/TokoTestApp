import { useDispatch, useSelector } from 'react-redux';
import { GetUsers, setUsers } from '../Store/HomeSlice';

const useHome = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state?.home?.users);

  const fetchUsers = async ({ search = null }) => {
    const response = await dispatch(GetUsers({ search })).unwrap();

    dispatch(
      setUsers(Array.isArray(response.data) ? response.data : [response.data]),
    );

    return response;
  };

  return {
    users,
    fetchUsers,
  };
};

export default useHome;
