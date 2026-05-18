import { useState } from "react";
import "./style.scss";

import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    console.log("Pesquisa:", search);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que você está procurando?"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button type="submit" aria-label="Pesquisar">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;