import {useGetSingleCharacterQuery} from "../../api/charactersApi.ts";
import {useNavigate, useParams} from "react-router";
import {AiOutlineArrowLeft} from "react-icons/ai";


export const Card = () => {

    const {id} = useParams();
    const navigate = useNavigate();


    const {data} = useGetSingleCharacterQuery({id})
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 flex flex-col items-center">
                <button onClick={() => navigate(-1)}>
                    <AiOutlineArrowLeft className='text-3xl absolute left-60 hover:text-blue-600'/>
                </button>
                <h1 className='text-5xl font-medium'>{data?.name}</h1>
                <img src={data?.image} alt="photo" className='object-cover mt-5' />
                <span className={`w-[300px] text-center p-1 h-8 mt-5 text-white rounded-md font-bold
                  ${data?.status === "Alive"
                    ? "bg-green-700/80"
                    : data?.status === "Dead"
                        ? "bg-red-700/80"
                        : "bg-gray-700/80"
                }`}>{data?.status}</span>
                <div className='flex flex-col items-start w-[300px] mt-5'>
                    <span className='font-bold'>Gender : <span className='font-normal'>{data?.gender}</span></span>
                    <span className='font-bold'>Location : <span className='font-normal'>{data?.location.name}</span></span>
                    <span className='font-bold'>Origin : <span className='font-normal'>{data?.origin.name}</span></span>
                    <span className='font-bold'>Species : <span className='font-normal'>{data?.species}</span></span>
                </div>
            </div>
        </div>
    );
};