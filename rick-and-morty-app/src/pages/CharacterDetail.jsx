import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        id
        name
      }
    }
  }
`;

const CharacterDetail = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.character) return <div>No character found</div>;

  const character = data.character;

  return (
    <div className={`container ${theme === 'dark' ? 'text-white bg-dark' : 'text-dark bg-light'}`}>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Type: {character.type}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <h3>Episodes:</h3>
      <ul>
        {character.episode.map(episode => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
