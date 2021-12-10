import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => onSubmit(e, query)}
      style={{
        width: "200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      <input
        value={query}
        onChange={handleChange}
        placeholder="Search for a meal"
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchForm;
