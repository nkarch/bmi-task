import PropTypes from "prop-types";

function AddArtistForm({ addArtist, hideAddArtistForm }) {
    const btnClass = "bg-gray-100 px-3 py-2 rounded-md text-gray-950";

    return (
        <div className='border-2 border-gray-200 p-3 rounded'>
            <h2 className='font-bold mb-4'>Add Artist:</h2>

            <form className='flex flex-col gap-2' onSubmit={addArtist}>
                <label className='flex justify-between'>
                    Name:
                    <input
                        type='text'
                        name='artist_name'
                        className='ml-2 border border-gray-300 rounded'
                        required
                    />
                </label>
                <label className='flex justify-between'>
                    Nationality:
                    <input
                        type='text'
                        name='artist_nationality'
                        className='ml-2 border border-gray-300 rounded'
                        required
                    />
                </label>
                <label className='flex justify-between'>
                    Age:
                    <input
                        type='number'
                        name='artist_age'
                        className='ml-2 border border-gray-300 rounded'
                        required
                    />
                </label>

                <div className='flex gap-4 justify-center mt-4 mb-3'>
                    <button
                        className={`${btnClass} hover:bg-green-200`}
                        type='submit'
                    >
                        Add
                    </button>
                    <button
                        className={`${btnClass} hover:bg-red-300`}
                        type='button'
                        onClick={hideAddArtistForm}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

AddArtistForm.propTypes = {
    addArtist: PropTypes.func,
    hideAddArtistForm: PropTypes.func,
};

export default AddArtistForm;
