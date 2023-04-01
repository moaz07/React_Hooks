import React from "react";

export default function MovieCard(props) {
  return (
    <div>
      <div className="card">
        <img src={props.posterURL} alt="" />
        <div className="inf1">
          <span className="title">{props.title}</span>
          <span className="rating">{props.rating}/10</span>
        </div>
        <span className="inf2">{props.description}</span>
      </div>
    </div>
  );
}
