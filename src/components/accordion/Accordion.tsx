import {useState} from "react";

type AccordionProps = {
    title: string;
    content: string[]
}

const Accordion = ({title, content}: AccordionProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="max-w-3xs mx-auto">
            <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
            <div className={`max-w-52 flex flex-wrap ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                {content.map((item, index) => <span key={index} className='m-1 max-w-3xs'>
                    {item}
                </span>)}
            </div>
        </div>
    );
};

export default Accordion;