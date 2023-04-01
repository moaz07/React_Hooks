import React, { useState } from "react";

export default function AddMovie({ SubmittedMovie }) {
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newRating, setRating] = useState("");
  const [newPosterURL, setPosterURL] = useState("");

  const Submit = () => {
    SubmittedMovie({
      Title: newTitle,
      Description: newDescription,
      PosterURL: newPosterURL,
      Rating: newRating,
    });
  };

  return (
    <div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Title ..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <hr className="hr" />
        <input
          className="input"
          type="text"
          placeholder="Poster ..."
          onChange={(e) => setPosterURL(e.target.value)}
        />
        <hr className="hr" />
        <input
          className="input"
          type="text"
          placeholder="Description ..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <hr className="hr" />
        <input
          className="input"
          type="text"
          placeholder="Rating  ... /10"
          onChange={(e) => setRating(e.target.value)}
        />
        <hr className="hr" />

        <button type="submit" onClick={() => Submit()}>
          Add
        </button>
      </div>
    </div>
  );
}
