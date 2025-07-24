import axios from "axios";

//using fetch api
export const fetchEmployees = async (page) => {
  console.log("fetching employees page number " + page + "    " + new Date());
  const response = await fetch(
    `https://dummyjson.com/users?limit=5&skip=${page}`
  );
  return response.json();
};

// using axios library
// import axios from "axios";
// export const fetchEmployees = async (page) => {
//   const response = await axios.get(
//     `https://dummyjson.com/users?limit=5&skip=${page}`
//   );
//   return response.data;
// };

export const addProduct = async (prod) => {
  console.log("adding product");
  const response = await axios.post("https://dummyjson.com/products/add", prod);
  return response.data;
};
