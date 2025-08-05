import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearCredentials } from './userSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.DEV
    ? '/api' // Use proxy for local development
    : 'https://e-chat-backend-sevs.onrender.com/api', // Use full backend URL in production
  credentials: 'include'
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(clearCredentials());
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'api',
  tagTypes: ['User', 'Groups', 'Messages', 'GroupMembers', 'GroupMessages'],
  endpoints: () => ({})
});
