import {useState} from "react";
import {FilterKey, FiltersCharacters} from "../../utils/GlobalTypes.ts";
import {AiOutlineDown} from "react-icons/ai"

type AccordionProps = {
    title: FilterKey
    content: Array<FiltersCharacters[FilterKey]>
    handlerFilters: (titleFilter: FilterKey, filter: FiltersCharacters[FilterKey]) => void
    filters: FiltersCharacters[FilterKey]
}

const Accordion = ({title, content, handlerFilters, filters}: AccordionProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`border flex justify-between items-center text-lg rounded-sm w-full text-left p-3 ${isOpen ? 'bg-blue-100 shadow-md text-blue-700 shadow-blue-400' : ''}`}
            >
                {title.charAt(0).toUpperCase() + title.slice(1)}
                <span className={`${isOpen ? 'transition rotate-180 ease-in-out duration-300' : 'transition ease-in-out duration-300'}`}><AiOutlineDown/></span>
            </button>
            <div
                className={`max-w-80 flex transition-discrete duration-300 ease-in-out flex-wrap
                 ${isOpen ? 'h-full p-3 border-l border-r border-b' : 'max-h-0'} overflow-hidden `}>
                {content.map((item, index) => <button
                    key={index}
                    onClick={() => handlerFilters(title, item)}
                    className={`m-1 rounded-xl text-blue-600 border-blue-600 text-xl border p-3 hover:bg-blue-600
                    hover:text-white
                    ${filters === item ? 'rounded-xl bg-blue-600 text-white' : ''}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>)}
            </div>
        </div>
    );
};

export default Accordion;