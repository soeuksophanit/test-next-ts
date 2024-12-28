// let x: number | string | boolean | { name: string } = 10;

import { Person, Student, ApiResponse } from "@/lib/types/Person";

// x = {
//   name: "John Doe",
// };

// let num = "10";

// let person: {
//   name: string;
//   age: number;
//   isStudent?: boolean;
// } = {
//   name: "John Doe",
//   age: 10,
//   isStudent: true,
// };

// let arr: [string, number] = ["John Doe", 1]; // Tuple

// let y: Person[] = [
//   {
//     name: "John Doe",
//     age: 10,
//     isStudent: true,
//   },
// ];

// let z: Person[] = [
//   {
//     name: "John Doe",
//     age: 10,
//     isStudent: true,
//   },
// ];

// // type
// export type Person = {
//   name: string;
//   age: number;
//   isStudent?: boolean;
// };

let person: Person<Student[]> = {
  name: "John Doe",
  age: 10,
  isStudent: true,
};

person.field?.map((student) => {
  console.log(student.class);
});

let res: ApiResponse<Person<Student>> = {
  data: {
    name: "John Doe",
    age: 10,
    isStudent: true,
    field: {
      teacher: "Jane Doe",
      class: "10",
      grade: 1,
    },
  },
  status: {
    message: "Success",
    code: 200,
  },
};
