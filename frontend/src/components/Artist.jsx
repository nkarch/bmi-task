import PropTypes from "prop-types";

// active={currentArtist?.id === artist.id}

function Artist({ artist, active, setCurrentArtist }) {
    const { id, name, nationality, age } = artist;

    return (
        <button
            onClick={() => setCurrentArtist(id)}
            className={`bg-slate-200 text-slate-950 py-6 px-14 rounded-md shadow hover:border-green-500 focus:outline-none focus:border-green-500 ${
                active && "bg-green-200 border-green-500 border-solid"
            }`}
        >
            <dl>
                <div className='def flex gap-2'>
                    <dt>Name: </dt>
                    <dd>{name || "Unknown"}</dd>
                </div>

                <div className='def flex gap-2'>
                    <dt>Nationality: </dt>
                    <dd>{nationality || "Unknown"}</dd>
                </div>

                <div className='def flex gap-2'>
                    <dt>Age: </dt>
                    <dd>{age || "Unknown"}</dd>
                </div>
            </dl>
        </button>
    );
}

Artist.propTypes = {
    name: PropTypes.string,
    artist: PropTypes.object,
    active: PropTypes.bool,
    setCurrentArtist: PropTypes.func,
};

export default Artist;
