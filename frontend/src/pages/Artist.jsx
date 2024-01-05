import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArtistInfo from "../components/ArtistInfo";

function Artist() {
    const routeParams = useParams();
    const [currentArtist, setCurrentArtist] = useState(null);

    useEffect(() => {
        const initializeArtist = async () => {
            const artist = await fetchArtist(routeParams.id);
            setCurrentArtist(artist);
            console.log(artist);
        };

        initializeArtist();
    }, [routeParams]);

    return <ArtistInfo currentArtist={currentArtist} />;
}

export default Artist;

const fetchArtist = async (id) => {
    try {
        const res = await fetch("http://localhost:3000/artists/" + id);
        if (!res.ok) {
            throw new Error(`${res.status}`);
        }

        const tasks = await res.json();
        return tasks;
    } catch (error) {
        console.error("An error occurred while fetching artist");
        throw error;
    }
};
