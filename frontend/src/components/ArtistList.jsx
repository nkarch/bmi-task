import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Artist from "./Artist";

function ArtistList({ currentArtist, setCurrentArtist }) {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const initializeArtist = async () => {
            const artists = await fetchArtists();
            setArtists(artists);
            setCurrentArtist(artists[0]);
        };

        initializeArtist();
    }, [setCurrentArtist]);

    return (
        <div className='artist-list flex flex-col flex-shrink-0 gap-6 bg-gray-300 px-10 py-10 rounded-md text-gray-950'>
            {artists
                ? artists.map((artist) => (
                      <Artist
                          key={artist.id}
                          active={currentArtist?.id === artist.id}
                          artist={artist}
                          setCurrentArtist={() =>
                              setCurrentArtist(
                                  artists.find(
                                      (selectArtist) =>
                                          selectArtist.id === artist.id
                                  )
                              )
                          }
                      />
                  ))
                : "Loading"}
        </div>
    );
}

ArtistList.propTypes = {
    currentArtist: PropTypes.object,
    setCurrentArtist: PropTypes.func,
};

export default ArtistList;

const fetchArtists = async () => {
    try {
        const res = await fetch("http://localhost:3000/artists");
        if (!res.ok) {
            throw new Error(`${res.status}`);
        }

        const tasks = await res.json();
        return tasks;
    } catch (error) {
        console.error("An error occurred while fetching tasks");
        throw error;
    }
};
