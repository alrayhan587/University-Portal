import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi= createApi({
    reducerPath:'name',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/v1',
        credentials:'include'
     }),
        
    endpoints:()=>({
        
    })
})