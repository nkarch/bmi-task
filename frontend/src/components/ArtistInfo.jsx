import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArtistInfo({ currentArtist: artist }) {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [showSongList, setShowSongList] = useState(false);

    useEffect(() => {
        const initializeArtist = async () => {
            const songs = await fetchSongs(artist?.id);
            setSongs(songs);
            setCurrentSong(songs[0]);
        };

        initializeArtist();
    }, [artist]);

    const panelClass = "bg-gray-200 text-gray-950 rounded-md shadow";

    return (
        artist && (
            <div className='flex-grow artist-list flex flex-col gap-4 bg-gray-300 px-4 py-6 rounded-md text-gray-950 min-w-[768px] text-sm mr-8'>
                {songs.length ? (
                    <div
                        className={`song-list ${panelClass} p-2 flex gap-2 relative`}
                    >
                        <button
                            className='flex items-center gap-2'
                            onClick={() => setShowSongList(!showSongList)}
                        >
                            <div className='hamburger border border-black bg-transparent rounded p-1 relative hover:bg-gray-300'>
                                <span className='sr-only'>Expand</span>
                            </div>

                            <span>
                                {artist.name}: {currentSong?.title}
                            </span>
                        </button>

                        <div
                            className={`${
                                !showSongList && "hidden"
                            } flex gap-3 items-start absolute top-0 left-0 bg-gray-100 p-2 rounded-md w-full shadow-lg`}
                        >
                            <div>
                                <button
                                    className='close-btn relative border border-black rounded p-1 flex justify-center w-[1.5rem] h-[1.5rem] hover:bg-gray-200'
                                    onClick={() => setShowSongList(false)}
                                >
                                    <span className='sr-only'>Close</span>
                                </button>
                            </div>

                            <ul className='flex flex-col items-start'>
                                {songs.map((song) => (
                                    <li key={song.id} className=''>
                                        <button
                                            className=' hover:bg-green-200 rounded p-1'
                                            onClick={() => {
                                                setCurrentSong(song);
                                                setShowSongList(false);
                                            }}
                                        >
                                            {song.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            className='ml-auto new-tab p-1 hover:opacity-50'
                            to={`/artist/${artist.id}`}
                            target='_blank'
                        >
                            <span className='sr-only'>Open in new tab</span>
                        </Link>
                    </div>
                ) : (
                    `No songs by ${artist.name} found`
                )}

                {currentSong?.lyrics && (
                    <div className={`lyrics ${panelClass}`}>
                        <h2 className='rounded-md bg-gray-300 inline-block p-1 mt-[1px] ml-[1px] border border-gray-400 font-bold'>
                            {currentSong.title} Lyrics
                        </h2>

                        <div className='py-6 px-6'>
                            <p className='whitespace-break-spaces'>
                                {currentSong.lyrics}
                            </p>
                        </div>
                    </div>
                )}

                {currentSong?.details && (
                    <div className={`song-details ${panelClass}`}>
                        <h2 className='rounded-md bg-gray-300 inline-block p-1 mt-[1px] ml-[1px] border border-gray-400 font-bold'>
                            {currentSong.title} Details
                        </h2>

                        <div className='py-6 px-6'>
                            <dl>
                                <div className='flex gap-2'>
                                    <dt>Composer: </dt>
                                    <dd>{currentSong.details.composer}</dd>
                                </div>
                                <div className='flex gap-2'>
                                    <dt>Producer: </dt>
                                    <dd>{currentSong.details.producer}</dd>
                                </div>
                                <div className='flex gap-2'>
                                    <dt>Production Date: </dt>
                                    <dd>{currentSong.details.prod_date}</dd>
                                </div>
                                <div className='flex gap-2'>
                                    <dt>Awards: </dt>
                                    <dd>{currentSong.details.awards}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                )}
            </div>
        )
    );
}

ArtistInfo.propTypes = {
    currentArtist: PropTypes.object,
};

export default ArtistInfo;

const fetchSongs = async (artistId) => {
    try {
        const res = await fetch(
            "http://localhost:3000/songs?artist_id=" + artistId
        );
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
