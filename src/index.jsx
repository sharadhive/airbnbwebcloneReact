// index.jsx

import React from 'react';

const App = () => {
  // Create an array of objects
  const people = [
    { fname: 'Jack', lname: 'Sparrow' },
    { fname: 'Gerald', lname: 'Witcher' },
    { fname: 'Wolverine', lname: 'Hugh Jackman' }
  ];

  return (
    <div>
      <h1>People List</h1>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.fname} {person.lname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
