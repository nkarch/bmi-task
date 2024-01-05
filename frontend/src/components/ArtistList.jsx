// import PropTypes from "prop-types";
import Artist from "./Artist";

function ArtistList() {
    return (
        <div className='artist-list flex flex-col gap-6 bg-slate-300 px-10 py-10 rounded-md'>
            <Artist name='Bruno Mars' nationality='American' age='20' />
            <Artist name='Adele' nationality='English' age='21' />
        </div>
    );
}

export default ArtistList;
