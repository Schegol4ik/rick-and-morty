import {NavLink, useLocation} from "react-router";
import {Path} from "../../routing/Routing.tsx";

const Header = () => {

    const location = useLocation();

    return (
        <div className="bg-custom-light">
            <div className="max-w-7xl mx-auto flex flex-wrap max-sm:justify-center p-1 justify-between items-center py-6">
                <NavLink to={Path.Characters} className="text-3xl font-medium">Rick & Morty <span
                    className="text-blue-600">WiKi</span></NavLink>
                <div className="flex items-center space-x-4 text-2xl">
                    <NavLink
                        className={`${location.pathname === Path.Characters 
                            ? 'border-b-4 border-blue-600 text-blue-600 transition duration-500 ease-in-out' : ''}`}
                        to={Path.Characters}>Characters</NavLink>
                    <NavLink
                        className={`${location.pathname === Path.Episode 
                            ? 'border-b-4 border-blue-600 text-blue-600 transition duration-500 ease-in-out' : ''}`}
                        to={Path.Episode}>Episode</NavLink>
                    <NavLink
                        className={`${location.pathname === Path.Location
                            ? 'border-b-4 border-blue-600 text-blue-600 transition duration-500 ease-in-out' : ''}`}
                        to={Path.Location}>Location</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;