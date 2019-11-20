import React from 'react';
import './index.css';

interface Person {
    name: string;
    age?: number;
}

const tom: Person = {
    name: 'Tom',
    age: 25,
}

const Hello: React.FC = () => {
  return (
    <p>{tom.name}</p>
  );
}

export default Hello;
