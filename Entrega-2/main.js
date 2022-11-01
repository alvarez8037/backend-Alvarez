const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.json");

const main = async () => {
  const id1 = await contenedor.save({ title: "Regla", price: 75.66 });
  const id2 = await contenedor.save({ title: "Goma", price: 57.75 });
  const id3 = await contenedor.save({ title: "Lapicera", price: 100 });

  console.log(id1, id2, id3);

  const object2 = await contenedor.getById(2);
  console.log(object2); 

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
  
};

main();