type CardCharacterProps = {
    name: string
    image: string
    id: number
    location: string
    status: string
}


export const CardCharacter = ({image, location, name, status}: CardCharacterProps) => {
    return (
        <div
            className='relative w-[269px] h-[450x] border-[3px] border-blue-800 mb-5 mr-5 rounded-md hover:border-blue-600'>
            <img src={image} alt="photo" className="object-cover"/>
            <span className={`absolute top-2 font-bold right-2 text-base ${status === "Alive"
                ? "bg-green-800/80"
                : status === "Dead"
                    ? "bg-red-800/80"
                    : "bg-gray-800/80"
            } p-1.5 rounded-lg text-white`}>{status}</span>
            <div className='p-2'>
                <h2 className='font-bold text-2xl'>{name}</h2>
                <div className='py-1'>
                    <span className='text-xl'>Last Location</span>
                    <h3 className='text-xl py-1'>{location}</h3>
                </div>
            </div>
        </div>
    );
};