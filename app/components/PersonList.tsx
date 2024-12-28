import React from "react";

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Person = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

const PersonList = async () => {
  const json = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: Person[] = await json.json();

  return (
    <div>
      {data.map((person) => (
        <div key={person.id}>
          <Card person={person} />
        </div>
      ))}
    </div>
  );
};

export default PersonList;

type Props = {
  person: Person;
  //   address: Address;
};

const Card = ({ person }: Props) => {
  return (
    <div>
      <div>
        <h1>{person.name}</h1>
        <p>{person.email}</p>
        <p>{person.address.city}</p>
      </div>
    </div>
  );
};
