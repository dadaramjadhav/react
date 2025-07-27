let users = [
  { id: 1, name: "u1", marks: 10 },
  { id: 2, name: "u2", marks: 20},
  { id: 3, name: "u3", marks: 30 },
];

const total = users.reduce((acc, u)=>{return acc+u.marks},0)
console.log(total)