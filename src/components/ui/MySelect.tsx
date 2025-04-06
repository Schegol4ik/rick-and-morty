type MySelectProps = {
    toggleSelect: (value: string) => void;
    episode: string
    count: Array<string>;
    title: string;
}

export const MySelect = ({toggleSelect, count, episode, title}: MySelectProps) => {


    return (
        <select
            className='w-full h-10 outline-none border bg-white rounded-md
             active:shadow-md  active:shadow-blue-400 max-sm:w-72
            '
            value={episode}
            onChange={(e) => toggleSelect(e.currentTarget.value)}>
            {count.map((item) => <option key={item} value={item}>
                {title} - {item}
            </option>)}
        </select>
    );
};

