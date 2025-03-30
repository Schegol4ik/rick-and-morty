import {baseApi} from "./baseApi.ts";
import {CharactersResponse, CharacterType, FiltersCharacters} from "../utils/GlobalTypes.ts";

export const charactersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCharacters: builder.query<CharactersResponse, { page: number, filters: FiltersCharacters, search: string }>({
            query: (arg) =>
                `character/?page=${arg.page}&status=${arg.filters.status}&species=${arg.filters.species}&gender=${arg.filters.gender}&name=${arg.search}`,
        }),
        getMultipleCharacters: builder.query<Array<CharacterType>, {arrCharacters: Array<string | undefined> | undefined}>({
            query:(arg)  =>
                `character/${arg.arrCharacters}`

        }),
        getSingleCharacter: builder.query<CharacterType, {id: string | undefined}>({
            query: (arg) => `character/${arg.id}`,
        })
    })
})

export const {useGetCharactersQuery, useGetMultipleCharactersQuery, useGetSingleCharacterQuery} = charactersApi