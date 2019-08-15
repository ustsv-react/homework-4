import React from "react";

const Details = ({details = {}}) => {
  return (
    <div>
      <div>{`name: ${details.name}`}</div>
      <div>{`location: ${details.location}`}</div>
      <div>{`following: ${details.following}`}</div>
      <div>{`followers: ${details.followers}`}</div>
    </div>
  );
};

export default Details;
