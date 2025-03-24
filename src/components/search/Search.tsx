
const Search = () => {
    return (
        <div className="mx-auto flex items-center justify-center">
            <div>
                <h2 className='text-4xl'>Characters</h2>
                <div className='flex'>
                    <input
                        className='border border-gray-300 border-gray-200'
                        type="text"/>
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;