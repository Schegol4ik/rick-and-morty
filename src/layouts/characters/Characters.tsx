import Search from "../../components/search/Search.tsx";
import Filters from "../../components/filters/Filters.tsx";
import {useGetCharactersQuery} from "../../api/charactersApi.ts";
import {CardCharacter} from "../../components/cardCharacter/CardCharacter.tsx";
import {Pagination} from "../../components/pagination/Pagination.tsx";
import {useState} from "react";
import {FiltersCharacters} from "../../utils/GlobalTypes.ts";

export const Characters = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<FiltersCharacters>({
        status: "",
        species: "",
        gender: ""
    });
    const [search, setSearch] = useState<string>("");

    const {data, isError} = useGetCharactersQuery({page: currentPage, filters, search})
    console.log(isError)
    const togglePagination = (selectedPages: number) => {
        setCurrentPage(selectedPages);
    }

    const toggleFilters = (selectedFilters: FiltersCharacters) => {
        if (currentPage !== 1) {
            setCurrentPage(1)
        }
        setFilters(selectedFilters);
    }

    const handlerSearch = (search: string) => {
        if (currentPage !== 1) {
            setCurrentPage(1)
        }
        setSearch(search)
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-5 flex flex-col items-center">
                <h2 className='text-5xl m-2.5 font-medium'>Characters</h2>
                <Search search={search} handlerSearch={handlerSearch}/>
                <div className="flex justify-between mt-10">
                    <Filters filters={filters} toggleFilters={toggleFilters}/>
                    <div className='flex flex-wrap justify-start w-full '>
                        {!isError
                            ? data?.results.map((item) => <CardCharacter key={item.id} name={item.name}
                                                                         image={item.image} id={item.id}
                                                                         location={item.location.name}
                                                                         status={item.status}/>)
                            : <div></div>
                        }
                    </div>
                </div>
                <Pagination currentPage={currentPage} totalPages={data?.info.pages ? data.info.pages : 1}
                            togglePagination={togglePagination}/>
            </div>
        </div>
    );
};