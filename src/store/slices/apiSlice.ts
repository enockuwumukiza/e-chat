import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.DEV
    ? '/api' // Use proxy for local development
    : 'https://e-chat-backend-sevs.onrender.com/api', // Use full backend URL in production
  credentials: 'include' 
});

export const apiSlice = createApi({
  baseQuery,
  reducerPath: 'api',
  tagTypes: ['User', 'Groups', 'Messages', 'GroupMembers', 'GroupMessages'],
  endpoints: () => ({})
});
