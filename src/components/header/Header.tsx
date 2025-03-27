import {NavLink} from "react-router";
import {Path} from "../../routing/Routing.tsx";

const Header = () => {
    return (
        <div className="bg-custom-light">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-6">
                <NavLink to={Path.Characters} className="text-3xl font-medium">Rick & Morty <span className="text-blue-600">WiKi</span></NavLink>
                <div className="flex items-center space-x-4 text-2xl">
                    <NavLink to={Path.Characters}>Characters</NavLink>
                    <NavLink to={Path.Episode}>Episode</NavLink>
                    <NavLink to={Path.Location}>Location</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;