/* eslint-disable react/prop-types */
import React from 'react';

export default function Joke({ joke, btnText }) {
  return (
    <>
      <h1>Joke Generator</h1>
      <h2>{joke.setup}</h2>
      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}
