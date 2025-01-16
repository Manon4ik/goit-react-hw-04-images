//import PropTypes from 'prop-types';
export default function Searchbar({ handleSubmitForm }) {
    return (
        <header className="searchbar Searchbar">
            <form className="form SearchForm" onSubmit={handleSubmitForm}>
                <button type="submit" className="button SearchForm-button">
                    <span className="button-label SearchForm-button-label">Search</span>
                </button>

                <input
                    name="search"
                    className="input SearchForm-input"
                    type="text"
                    //autocomplete="off"
                    //autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}