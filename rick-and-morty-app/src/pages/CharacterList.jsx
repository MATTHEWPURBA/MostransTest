import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { characterState } from '../state/characterState';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = () => {
  const [characters, setCharacters] = useRecoilState(characterState);
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const { theme } = useContext(ThemeContext);

  React.useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data, setCharacters]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`container mt-4 ${theme === 'dark' ? 'bg-dark text-white' : ''}`}>
      <h1 className="text-center mb-4">Characters List</h1>
      <div className="row">
        {characters.map((character) => (
          <div key={character.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{character.name}</h5>
                <Link to={`/character/${character.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
