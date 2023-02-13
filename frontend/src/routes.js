import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

export default function RouterApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/movie/:id" element={<Movie/>}/>
                <Route path='/favorites' element={<Favorites/>}/>

                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}