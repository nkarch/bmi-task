import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import Artist from "./Artist";
import AddArtistForm from "./AddArtistForm";

function ArtistList({ currentArtist, setCurrentArtist }) {
    const [artists, setArtists] = useState([]);
    const [showAddArtist, setShowAddArtist] = useState(false);

    useEffect(() => {
        const initializeArtist = async () => {
            const artists = await fetchArtists();
            setArtists(artists);
            setCurrentArtist(artists[0]);
        };

        initializeArtist();
    }, [setCurrentArtist]);

    function addArtist(e) {
        e.preventDefault();

        const newArtist = {
            name: e.target.artist_name.value,
            nationality: e.target.artist_nationality.value,
            age: e.target.artist_age.value,
            id: uuidv4(),
        };

        setArtists([...artists, newArtist]);
        setShowAddArtist(false);
    }

    function removeArtist() {
        const filteredArtists = artists.filter(
            (artist) => artist.id !== currentArtist.id
        );
        setArtists(filteredArtists);
        setCurrentArtist(filteredArtists.find((x) => x !== undefined));
    }

    const btnClass = "bg-gray-100 px-3 py-2 rounded-md text-gray-950";

    return (
        <div className='artist-list flex flex-col flex-shrink-0 gap-6 bg-gray-300 px-10 py-10 rounded-md text-gray-950'>
            <div className='flex flex-col gap-6 mb-5'>
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

            <div className='flex gap-6 justify-center'>
                <button
                    className={`${btnClass} hover:bg-green-200`}
                    onClick={() => setShowAddArtist(true)}
                >
                    Add Artist
                </button>

                <button
                    className={`${btnClass} hover:bg-red-300`}
                    onClick={removeArtist}
                >
                    Remove Artist
                </button>
            </div>

            {showAddArtist && (
                <AddArtistForm
                    addArtist={addArtist}
                    hideAddArtistForm={() => setShowAddArtist(false)}
                />
            )}
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
        console.error("An error occurred while fetching artists");
        throw error;
    }
};
