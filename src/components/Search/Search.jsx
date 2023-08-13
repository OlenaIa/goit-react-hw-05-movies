import { SearchForm, SearchFormButton, SearchFormInput, SearchbarStyle } from "./Search.staled";
import PropTypes from 'prop-types'

const Searchbar = ({ onSubmitSearchBar, value }) => (
    <SearchbarStyle>
    <SearchForm onSubmit={onSubmitSearchBar}>
        <SearchFormButton>
            <span>Search</span>
        </SearchFormButton>

        <SearchFormInput
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            defaultValue={value}
            placeholder="Search movies"
        />
    </SearchForm>
    </SearchbarStyle>
);

Searchbar.propTypes = {
    onSubmitSearchBar: PropTypes.func.isRequired,
};

export default Searchbar;
