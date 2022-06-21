// In this part of the exercise, we use the Hook of the react-router called useParams, which 
// serves to extract parameters from the url and in this case compare with the id of the person 
// parameter and compare them, transforming the id obtained by useParams into parseInt, because 
// by default it is a string, in which case it would not be possible to do the comparison. Then 
// it returns the separate attributes of each different person, contained in the API, by the id, 
// on a page specific to that id.


import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name');
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Person;
