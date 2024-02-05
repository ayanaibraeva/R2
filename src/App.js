
import FormPages from "./pages/formPages/formPages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/menu/Menu";
import PokemonPages from "./pages/pokemonPages/pokemonPages";
import PokemonInfoPage from "./pages/pokemonInfoPage/PokemonInfoPage";


function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={'/'} element={<FormPages/>}/>
                <Route path={'/pokemon'} element={<PokemonPages/>}/>
                <Route path={'/pokemon/:id'} element={<PokemonInfoPage/>}/>

            </Routes>
            <Menu/>

        </BrowserRouter>
    );
}

export default App;