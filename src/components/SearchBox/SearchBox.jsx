import css from "./SearchBox.module.css";

function SearchBox({ onSearch }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        className={css.input}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
