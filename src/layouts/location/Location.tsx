import {useState} from "react";
import {useGetAllLocationsQuery, useGetLocationQuery} from "../../api/locationApi.ts";
import {useGetMultipleCharactersQuery} from "../../api/charactersApi.ts";
import {MySelect} from "../../components/ui/MySelect.tsx";
import {CardCharacter} from "../../components/cardCharacter/CardCharacter.tsx";

export const Location = () => {

    const [location, setLocation] = useState<string>('1')

    const {data: allLocationData} = useGetAllLocationsQuery()
    const {data: locationData} = useGetLocationQuery({location})

    const ids = locationData?.residents.map(url => url.match(/\d+$/)?.[0]).filter(Boolean)

    const {data: charactersData} = useGetMultipleCharactersQuery({arrCharacters: ids}, {skip: !locationData})

    const arr = [...Array(allLocationData?.info.count).keys()].map(i => i + 1).map(String)

    return (
        <div>
            <div className='max-w-7xl mx-auto mt-10 flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center '>
                        <h1 className='text-5xl font-medium'>Location :</h1>
                        <h1 className='text-5xl ml-3 font-medium text-blue-600'>{locationData?.name}</h1>
                    </div>
                    <span className='text-2xl font-medium mt-5'>Dimension : {locationData?.dimension}</span>
                    <span className='text-xl font-medium'>Type : {locationData?.type}</span>
                </div>
                <div className='w-full flex justify-between mt-10'>
                    <div className='mr-5 min-w-80 flex flex-col items-center'>
                        <h2 className='mb-5 text-3xl font-bold'>Pick Location</h2>
                        <MySelect title='Location' toggleSelect={setLocation} episode={location} count={arr}/>
                    </div>
                    <div className='flex flex-wrap justify-start w-full'>
                        {charactersData?.length
                            ? charactersData?.map((item) =>
                                <CardCharacter key={item.id} name={item.name} image={item.image} id={item.id}
                                               location={item.location.name}
                                               status={item.status}/>)
                            : <div>Not Found</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};