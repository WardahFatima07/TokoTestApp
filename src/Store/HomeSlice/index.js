import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { endpoints } from '../ApiRoutes';
import InitialStates from '../InitialStates';
import { get } from '../ApiCaller';

export const GetUsers = createAsyncThunk(
  'home/allusers',
  async ({ search }) => {
    try {
      let response;
      await get(endpoints.home.users(search))
        .then(res => {
          response = res;
        })
        .catch(e => {
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const homeSlice = createSlice({
  name: InitialStates.home.name,
  initialState: InitialStates.home.state,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = homeSlice.actions;

export default homeSlice.reducer;
