import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
const {VITE_APP_API_BASE_URL, VITE_APP_API_KEY} = import.meta.env;

export const ventiApi = createApi({
  reducerPath: 'ventiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_API_BASE_URL}/ventiladores`,
    prepareHeaders: (headers, {getState})=>{
      const token = (getState() as RootState).sec.token;
      headers.set('apikey', VITE_APP_API_KEY||'');
      headers.set('Authorization', `Bearer ${token}`)
    }
  }),
  tagTypes: ["Ventiladores"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (body) => ({
        url: 'all'
      }),
      providesTags: ["Ventiladores"]
    }),
    getById: builder.query({
      query: (id) => ({
        url: `byid/${id}`
      }),
      providesTags: ["Ventiladores"]
    }),
    addNew: builder.mutation({
      query: (venti:{marca:string, modelo:string, rpm:string , precio:string}) => (
        {
          url: 'new',
          method: 'POST',
          body: venti
        }),
      invalidatesTags: ["Ventiladores"]
    })
  })
});

export const {useGetAllQuery, useAddNewMutation, useGetByIdQuery} = ventiApi;
