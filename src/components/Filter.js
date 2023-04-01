import React from "react";

export function Search(movies, query) {
  return movies.filter((item) =>
    item.Title.toLowerCase().includes(query.toLowerCase())
  );
}

export default function Filter({ setQuery }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
