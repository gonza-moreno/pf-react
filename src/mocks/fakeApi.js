const productos = [
  {
    titulo: "Guitarra Eléctrica",
    precio: 60000,
    img: "https://images.unsplash.com/photo-1607560105214-0aaa5f8fcba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "guitarras",
    marca: "Fender",
    id: "1",
    stock: 8,
  },
  {
    titulo: "Guitarra Electroacústica",
    precio: 56000,
    img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "guitarras",
    marca: "Ibanez",
    id: "2",

    stock: 7,
  },
  {
    titulo: "Guitarra Española",
    precio: 30000,
    img: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "guitarras",
    marca: "Ibanez",
    id: "3",

    stock: 8,
  },
  {
    titulo: "Guitarra de 12 cuerdas",
    precio: 48000,
    img: "https://images.unsplash.com/photo-1536594527669-2f555de54e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "guitarras",
    marca: "Taylor",
    id: "4",

    stock: 4,
  },
  {
    titulo: "Bajo",
    precio: 38000,
    img: "https://images.unsplash.com/photo-1617165162694-9703691c370b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "bajos",
    marca: "Fender",
    id: "5",

    stock: 12,
  },
  {
    titulo: "Bateria",
    precio: 60000,
    img: "https://images.unsplash.com/photo-1580625528104-830b09667e42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "baterias",
    marca: "Yamaha",
    id: "6",

    stock: 10,
  },
  {
    titulo: "Bateria",
    precio: 64000,
    img: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80g",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "baterias",
    marca: "Yamaha",
    id: "7",

    stock: 3,
  },
  {
    titulo: "Guitarra Criolla",
    precio: 45000,
    img: "https://images.unsplash.com/photo-1609979100247-9ce6d45b386b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGd1aXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "guitarras",
    marca: "Fender",
    id: "8",

    stock: 15,
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(productos);
      } else {
        reject("Hubo un error intente mas tarde");
      }
    }, 1000);
  });
};
