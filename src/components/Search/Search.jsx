import { SearchForm, SearchFormButton, SearchFormInput, SearchbarStyle } from "./Search.staled";
import PropTypes from 'prop-types'

const Searchbar = ({ searchQuery, onSubmitSearchBar, onChangeSearch }) => (<SearchbarStyle>
    <SearchForm onSubmit={onSubmitSearchBar}>
        <SearchFormButton>
            <span>Search</span>
        </SearchFormButton>

        <SearchFormInput
            type="text"
            name="search"
            // value={searchQuery}
            // onChange={onChangeSearch}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
        />
    </SearchForm>
</SearchbarStyle>);

Searchbar.propTypes = {
    onSubmitSearchBar: PropTypes.func.isRequired,
    // onChangeSearch: PropTypes.func.isRequired,
    // searchQuery: PropTypes.string.isRequired,
}

export default Searchbar;
