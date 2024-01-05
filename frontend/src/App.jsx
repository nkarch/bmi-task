import { useState } from "react";

import "./App.css";

import ArtistList from "./components/ArtistList.jsx";

function App() {
    const [currentArtist, setCurrentArtist] = useState(null);

    return (
        <>
            <ArtistList
                currentArtist={currentArtist}
                setCurrentArtist={setCurrentArtist}
            />
        </>
    );
}

export default App;
