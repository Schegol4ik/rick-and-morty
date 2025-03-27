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