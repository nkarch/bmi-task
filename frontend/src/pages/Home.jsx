import { useState } from "react";

import ArtistList from "../components/ArtistList.jsx";
import ArtistInfo from "../components/ArtistInfo.jsx";

function Home() {
    const [currentArtist, setCurrentArtist] = useState(null);

    return (
        <>
            <ArtistList
                currentArtist={currentArtist}
                setCurrentArtist={setCurrentArtist}
            />

            <ArtistInfo currentArtist={currentArtist} />
        </>
    );
}
export default Home;
