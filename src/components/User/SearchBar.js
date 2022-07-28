

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search medicines</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search medicines"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;