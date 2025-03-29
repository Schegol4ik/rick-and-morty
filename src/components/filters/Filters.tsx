import Accordion from "../accordion/Accordion.tsx";
import {FilterKey, FiltersCharacters} from "../../utils/GlobalTypes.ts";

type FiltersProps = {
    filters: FiltersCharacters
    toggleFilters: (selectedFilters: FiltersCharacters) => void
}

const Filters = ({filters, toggleFilters}: FiltersProps) => {

    const statusContent: Array<FiltersCharacters[FilterKey]> = ['alive', 'dead', 'unknown'] as const
    const speciesContent: Array<FiltersCharacters[FilterKey]> = ['human', 'alien', 'humanoid', 'poopybutthole', 'mythological', 'unknown', 'animal', 'disease', 'robot', 'cronenberg', 'planet'] as const
    const genderContent: Array<FiltersCharacters[FilterKey]> = ['female', 'male', 'genderless', 'unknown'] as const

    const handlerClearFilters = () => {
        toggleFilters({
            status: "",
            gender: "",
            species: "",
        })
    }

    const handlerFilters = (titleFilter: FilterKey, filter: FiltersCharacters[FilterKey]) => {
        toggleFilters({...filters, [titleFilter]: filter});
    }

    return (
        <div className="min-w-80 mr-5">
            <div className='flex flex-col '>
                <h3 className='mx-auto text-3xl font-bold'>Filters</h3>
                <button className='text-xl mt-5 mb-5 text-blue-600 hover:text-blue-400 active:text-blue-500 ' onClick={handlerClearFilters}>Clear filters</button>
                <div className='w-full'>
                    <Accordion title="status" content={statusContent} handlerFilters={handlerFilters} filters={filters['status']}/>
                    <Accordion title="species" content={speciesContent} handlerFilters={handlerFilters} filters={filters['species']}/>
                    <Accordion title="gender" content={genderContent} handlerFilters={handlerFilters} filters={filters['gender']}/>
                </div>
            </div>
        </div>
    );
};

export default Filters;