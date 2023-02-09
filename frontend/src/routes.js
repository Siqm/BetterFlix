import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function RouterApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>

                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}