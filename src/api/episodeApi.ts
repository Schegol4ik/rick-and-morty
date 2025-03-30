import {baseApi} from "./baseApi.ts";
import {Episode, EpisodeResponse} from "../utils/GlobalTypes.ts";

export const episodeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEpisode: builder.query<Episode, {episode: string}>({
            query: (arg) => `episode/${arg.episode}`,
        }),
        getAllEpisode: builder.query<EpisodeResponse, void>({
            query: () => `episode`
        })
    })
})
export const {useGetEpisodeQuery, useGetAllEpisodeQuery} = episodeApi