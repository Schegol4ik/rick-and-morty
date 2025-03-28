import Search from "../../components/search/Search.tsx";
import Filters from "../../components/filters/Filters.tsx";
import {useGetCharactersQuery} from "../../api/charactersApi.ts";
import {CardCharacter} from "../../components/cardCharacter/CardCharacter.tsx";
import {Pagination} from "../../components/pagination/Pagination.tsx";
import {useState} from "react";

export const Characters = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const {data} = useGetCharactersQuery({page: currentPage})

    const togglePagination = (selectedPages: number) => {
        setCurrentPage(selectedPages);
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-5">
                <Search/>
                <div className="flex justify-between mt-10">
                    <Filters/>
                    <div className='flex flex-wrap justify-start w-full '>
                        {data?.results.map((item) => <CardCharacter key={item.id} name={item.name} image={item.image} id={item.id}
                                                                    location={item.location.name} status={item.status}/>
                        )}
                    </div>
                </div>
                <Pagination currentPage={currentPage} totalPages={data?.info.pages ? data.info.pages : 1} togglePagination={togglePagination}/>
            </div>
        </div>
    );
};