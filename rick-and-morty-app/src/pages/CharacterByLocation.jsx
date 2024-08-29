import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CHARACTERS_BY_LOCATION = gql`
  query GetCharactersByLocation($location: String!) {
    locations(filter: { name: $location }) {
      results {
        id
        name
        residents {
          id
          name
          image
        }
      }
    }
  }
`;

const CharacterByLocation = () => {
  const { location } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTERS_BY_LOCATION, {
    variables: { location },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data); // Debugging information

  const residents = data?.locations?.results[0]?.residents || [];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Characters in {location}</h1>
      <div className="row">
        {residents.map((character) => (
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

export default CharacterByLocation;
