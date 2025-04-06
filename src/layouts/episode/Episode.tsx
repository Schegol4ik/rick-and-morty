import {useGetAllEpisodeQuery, useGetEpisodeQuery} from "../../api/episodeApi.ts";
import {useState} from "react";
import {useGetMultipleCharactersQuery} from "../../api/charactersApi.ts";
import {CardCharacter} from "../../components/cardCharacter/CardCharacter.tsx";
import {MySelect} from "../../components/ui/MySelect.tsx";

export const Episode = () => {

    const [episode, setEpisode] = useState<string>('1')

    const {data: episodeData} = useGetEpisodeQuery({episode})
    const {data: allEpisodesData} = useGetAllEpisodeQuery()

    const ids = episodeData?.characters.map(url => url.match(/\d+$/)?.[0]).filter(Boolean)

    const {data: charactersData} = useGetMultipleCharactersQuery({arrCharacters: ids}, {skip: !episodeData})

    const arr = [...Array(allEpisodesData?.info.count).keys()].map(i => i + 1).map(String)

    return (
        <div>
            <div className='max-w-7xl mx-auto mt-10 flex flex-col items-center p-1'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center '>
                        <h1 className='text-5xl font-medium max-sm:text-xl'>Episode name :</h1>
                        <h1 className='text-5xl ml-3 font-medium text-blue-600 max-sm:text-xl'>{episodeData?.name}</h1>
                    </div>
                    <span className='text-2xl font-medium mt-5 max-sm:text-sm'>Air date : {episodeData?.air_date}</span>
                </div>
                <div className='w-full flex justify-between mt-10 max-sm:flex-wrap max-sm:justify-center'>
                    <div className='mr-5 min-w-80 flex flex-col items-center'>
                        <h2 className='mb-5 text-3xl font-bold max-sm:text-2xl'>Pick Episode</h2>
                        <MySelect title='Episode' toggleSelect={setEpisode} episode={episode} count={arr}/>
                    </div>
                    <div className='flex flex-wrap justify-start w-full max-sm:justify-center max-sm:mt-5'>
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

