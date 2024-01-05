import { useState } from "react";

import "./App.css";

import ArtistList from "./components/ArtistList.jsx";
import ArtistInfo from "./components/ArtistInfo.jsx";

function App() {
    const [currentArtist, setCurrentArtist] = useState(null);

    return (
        <div className='min-w-full flex gap-3'>
            <ArtistList
                currentArtist={currentArtist}
                setCurrentArtist={setCurrentArtist}
            />
            <ArtistInfo currentArtist={currentArtist} />
        </div>
    );
}

export default App;
