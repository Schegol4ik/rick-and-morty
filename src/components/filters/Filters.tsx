import Accordion from "../accordion/Accordion.tsx";

const Filters = () => {

    const statusContent: string[] = ['Alive', 'Dead', 'Unknown']
    const speciesContent: string[] = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet']
    const genderContent: string[] = ['female', 'male', 'genderless', 'unknown']

    return (
        <div className="ml-5">
            <h3>Filters</h3>
            <a className='text-blue-500 cursor-pointer'>Clear filters</a>
            <Accordion title="Status" content={statusContent}/>
            <Accordion title="Species" content={speciesContent}/>
            <Accordion title="Gender" content={genderContent}/>
        </div>
    );
};

export default Filters;