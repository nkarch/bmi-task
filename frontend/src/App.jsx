import { useState } from "react";

import "./App.css";

import ArtistList from "./components/ArtistList.jsx";

function App() {
    const tmp = {
        name: "Bruno Mars",
        nationality: "American",
        age: 20,
        id: 0,
    };

    const [currentArtist, setCurrentArtist] = useState(tmp);

    return (
        <>
            <ArtistList currentArtist={currentArtist} />
        </>
    );
}

export default App;
