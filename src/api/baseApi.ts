import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "RickAndMortyApi",
    tagTypes: ["RickAndMorty"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api/"
    }),
    endpoints: () => ({})
})