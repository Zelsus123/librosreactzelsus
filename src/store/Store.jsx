import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([
     {
      id: "2ad6b5e2-9c2b-4959-b740-9335c85eed74",
      title: "Harry Potter y el caliz de fuego",
      author: "J.K. Rowling",
      cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/ad/66/ad6612443362bc3bd1c6973d87fc3d90.jpg",
      intro: "Harry Potter y el caliz de fuego descripcion",
      completed: true,
      review: "Está bueno",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b76",
      title: "Los ojos de la ciudad",
      author: "Marcos Rivas",
      cover: "https://www.mrbooks.com/mrbooks/portadas/9788445007013.jpg",
      intro: "Esta es la descripcion",
      completed: false,
      review: "No lo he leido todavia",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b72",
      title: "Harry Potter y La Camara de los Secretos",
      author: "J.K Rowling",
      cover: "https://tavapy.gov.py/biblioteca/wp-content/uploads/2022/03/71ff77s0XoL-1.jpg",
      intro: "Descripcion de Harry Potter y la camara de los secretos",
      completed: true,
      review: "Está buenardo",
    },
  ]);

  function createItem(item) {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);

    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);

    const temp = [...items];

    temp[index] = { ...item };

    return true;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}