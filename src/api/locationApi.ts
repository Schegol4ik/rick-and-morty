import {baseApi} from "./baseApi.ts";
import {Location, LocationResponse} from "../utils/GlobalTypes.ts";

export const locationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllLocations: builder.query<LocationResponse, void>({
            query: () => `location`
        }),
        getLocation: builder.query<Location, {location: string}>({
            query: (arg) => `location/${arg.location}`
        })
    })
})

export const {useGetAllLocationsQuery, useGetLocationQuery} = locationApi