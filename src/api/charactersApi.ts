import {baseApi} from "./baseApi.ts";
import {CharactersResponse, FiltersCharacters} from "../utils/GlobalTypes.ts";

export const charactersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersResponse, { page: number, filters: FiltersCharacters, search: string }>({
            query: (arg) =>
                `character/?page=${arg.page}&status=${arg.filters.status}&species=${arg.filters.species}&gender=${arg.filters.gender}&name=${arg.search}`,
        })
    })
})

export const {useGetCharactersQuery} = charactersApi