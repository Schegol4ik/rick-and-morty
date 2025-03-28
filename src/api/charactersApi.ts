import {baseApi} from "./baseApi.ts";
import {CharactersResponse} from "../utils/GlobalTypes.ts";

export const charactersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersResponse, { page: number }>({
            query: (arg) => `character/?page=${arg.page}`
        })
    })
})

export const {useGetCharactersQuery} = charactersApi