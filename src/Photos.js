import React from 'react';

function Photos(props) {
  const { name, addToApp } = props;
  return (
    <div>
      <p>{props.Title}</p>
      <img src = {props.Image}/>
      <p>{props.Story}</p>
    </div>
  );
}

export default Photos;