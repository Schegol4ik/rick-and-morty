import {baseApi} from "./baseApi.ts";
import {CharactersResponse} from "../utils/GlobalTypes.ts";

export const charactersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersResponse, void>({
            query: () => `character/?page=2`
        })
    })
})

export const {useGetCharactersQuery} = charactersApi