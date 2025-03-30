import {Navigate, Route, Routes} from "react-router";
import {Characters} from "../layouts/characters/Characters.tsx";
import {PageNotFound} from "../components/pageNotFound/PageNotFound.tsx";
import {Episode} from "../layouts/episode/Episode.tsx";
import {Location} from "../layouts/location/Location.tsx";
import {Card} from "../components/card/Card.tsx";

export const Path = {
    Characters: '/character',
    Episode: '/episode',
    Location: '/location',
    Character: `/character/:id`,
    NotFound: '*',
}

export const Routing = () => (
    <Routes>
        <Route path="/" element={<Navigate to={Path.Characters}/>}/>
        <Route path={Path.Characters} element={<Characters/>}/>
        <Route path={Path.Episode} element={<Episode/>}/>
        <Route path={Path.Location} element={<Location/>}/>
        <Route path={Path.Character} element={<Card/>}/>
        <Route path={Path.NotFound} element={<PageNotFound/>}/>
    </Routes>
)