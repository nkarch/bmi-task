import PropTypes from "prop-types";
import Artist from "./Artist";

function ArtistList({ currentArtist }) {
    return (
        <div className='artist-list flex flex-col gap-6 bg-slate-300 px-10 py-10 rounded-md'>
            <Artist
                active={currentArtist.id === 0}
                name='Bruno Mars'
                nationality='American'
                age='20'
            />
            <Artist
                active={currentArtist.id === 1}
                name='Adele'
                nationality='English'
                age='21'
            />
        </div>
    );
}

ArtistList.propTypes = {
    currentArtist: PropTypes.object,
};

export default ArtistList;
