import React from 'react';

function Photos(props) {
  const { name, addToApp } = props;
  return (
    <div>
      <span>{name}</span>
      <button onClick={evt => addToApp(name)}>Add Photo</button>
    </div>
  );
}

export default Photos;