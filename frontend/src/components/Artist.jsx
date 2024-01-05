import PropTypes from "prop-types";

function Artist({ name, nationality, age, active }) {
    return (
        <div
            className={`bg-slate-200 text-slate-950 py-6 px-14 rounded-md shadow ${
                active && "active"
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
        </div>
    );
}

Artist.propTypes = {
    name: PropTypes.string,
    nationality: PropTypes.string,
    age: PropTypes.number,
    active: PropTypes.bool,
};
export default Artist;
