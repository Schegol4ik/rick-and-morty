import {NavLink} from "react-router";

type CardCharacterProps = {
    name: string
    image: string
    id: number
    location: string
    status: string
}


export const CardCharacter = ({image, location, name, status, id}: CardCharacterProps) => {
    return (
        <NavLink to={`/character/${id}`}
            className='relative w-[269px] h-[450px] border-[3px]
             border-blue-800 mb-5 mr-5 rounded-md hover:border-blue-400
               transition duration-300 ease-in-out  hover:-translate-y-2
               cursor-pointer
            '>
            <img src={image} alt="photo" className="object-cover"/>
            <span className={`absolute top-2 font-bold right-2 text-base ${status === "Alive"
                ? "bg-green-700/80"
                : status === "Dead"
                    ? "bg-red-700/80"
                    : "bg-gray-700/80"
            } p-1.5 rounded-lg text-white`}>{status}</span>
            <div className='p-2'>
                <h2 className='font-bold text-2xl'>{name}</h2>
                <div className='py-1'>
                    <span className='text-xl'>Last Location</span>
                    <h3 className='text-xl py-1'>{location}</h3>
                </div>
            </div>
        </NavLink>
    );
};