import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
const {VITE_APP_API_BASE_URL, VITE_APP_API_KEY} = import.meta.env;

export const provApi = createApi({
  reducerPath: 'provApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_API_BASE_URL}/proveedores`,
    prepareHeaders: (headers, {getState})=>{
      const token = (getState() as RootState).sec.token;
      headers.set('apikey', VITE_APP_API_KEY||'');
      headers.set('Authorization', `Bearer ${token}`)
    }
  }),
  tagTypes: ["Proveedores"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (body) => ({
        url: 'all'
      }),
      providesTags: ["Proveedores"]
    }),
    getById: builder.query({
      query: (id) => ({
        url: `byid/${id}`
      }),
      providesTags: ["Proveedores"]
    }),
    addNew: builder.mutation({
      query: (prov:{nombre:string, identidad:string, ciudad:string}) => (
        {
          url: 'new',
          method: 'POST',
          body: prov
        }),
      invalidatesTags: ["Proveedores"]
    }),
    update: builder.mutation({
      query: (prov:{id: string, nombre:string, identidad:string, ciudad:string}) => (
        {
          url: `upd/${prov.id}`,
          method: 'PUT',
          body: prov
        }),
      invalidatesTags: ["Proveedores"]
    }),
    delete: builder.mutation({
      query: (id) => ({
        url: `del/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Proveedores"]
    }),
  })
});

export const {useGetAllQuery, useAddNewMutation, useGetByIdQuery,useUpdateMutation, useDeleteMutation} = provApi;
