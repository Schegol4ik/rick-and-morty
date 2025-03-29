type SearchProps = {
    search: string
    handlerSearch: (search: string) => void
}

const Search = ({search, handlerSearch}: SearchProps) => {


    return (
        <div className="mx-auto flex items-center justify-center">
            <div className='flex '>
                <input
                    value={search}
                    onChange={(e) => handlerSearch(e.target.value)}
                    className='border-2 w-[500px] h-[40px] border-blue-800 rounded-md pl-2 outline-none focus:border-blue-400 '
                    placeholder="Search for characters"
                    type="text"/>
                <button
                className='border outline-none bg-blue-800 text-white rounded-md pl-2 pr-2 ml-3 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200'
                onClick={() => handlerSearch(search)}
                >
                    Search</button>
            </div>
        </div>
    );
};

export default Search;