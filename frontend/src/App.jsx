import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home.jsx";
import Artist from "./pages/Artist.jsx";

function App() {
    return (
        <div className='min-w-full flex gap-3'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/artist' element={<Navigate to='/' />} />
                <Route path='/artist/:id' element={<Artist />} />
            </Routes>
        </div>
    );
}

export default App;
