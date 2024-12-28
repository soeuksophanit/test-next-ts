export type Person<T> = {
  name: string;
  age: number;
  isStudent?: boolean;
  field?: T;
};

export type Student = {
  teacher: string;
} & {
  class: string;
  grade: number;
};

export type ApiResponse<T> = {
  data: T;
  status: {
    message: string;
    code: number;
  };
};

const input = document.getElementById("app") as HTMLInputElement;

function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);

function print<T>(value: T): void {
  console.log(value);
}

print(1);

type PersonRequest = {
  name: string;
  age: number;
};

const createPerson = (person: PersonRequest) => {
  return person;
};

let person = {
  name: "John Doe",
  age: 10,
};

createPerson(person);
