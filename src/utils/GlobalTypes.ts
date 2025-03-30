export type CharacterType = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    },
    location: {
        name: string
        url: string
    },
    image: string
    episode: Array<string>,
    url: string
    created: string
}

export type InfoRequest = {
    count: number
    pages: number
    next: string | null
    prev: null | null
}

export type CharactersResponse = {
    info: InfoRequest,
    results: Array<CharacterType>
}

export type FiltersCharacters = {
    status: "alive" | "dead" | "unknown" | ""
    species: "human" | "alien" | "humanoid" | "poopybutthole" | ""
        | "mythological" | "unknown" | "animal" | "disease" | "robot" | "cronenberg" | "planet"
    gender: "male" | "female" | "genderless" | "unknown" | ""
}

export type FilterKey = keyof FiltersCharacters

export type Episode = {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<string>
    url: string
    created:string
}

export type EpisodeResponse = {
    info: InfoRequest,
    results: Array<Episode>
}

export type Location = {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<string>
    url: string
    created: string
}

export type LocationResponse = {
    info: InfoRequest
    results: Array<Location>
}