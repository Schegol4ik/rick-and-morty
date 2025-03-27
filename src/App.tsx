import Header from "./components/header/Header.tsx";
import {Routing} from "./routing/Routing.tsx";

const App = () => {
    return (
        <div>
            <Header/>
            <Routing/>
        </div>
    );
};

export default App;