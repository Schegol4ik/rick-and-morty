import Search from "../../components/search/Search.tsx";
import Filters from "../../components/filters/Filters.tsx";
import {useGetCharactersQuery} from "../../api/charactersApi.ts";

export const Characters = () => {

    const {data} = useGetCharactersQuery()
    console.log(data)
    return (
        <div>
            <Search/>
            <div>
                <Filters/>

            </div>
        </div>
    );
};