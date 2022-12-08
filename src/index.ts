import Fun from "./fun";

const main = async () => {
  const fun = new Fun();

  console.log(fun.printId());
  console.log(fun.createUUID());
  console.log(fun.sum(1, 2));
  console.log(fun.renderHTML({ title: "Hello World", name: "Der Kuba" }));
  console.log(await fun.fetchCharacter());
};

main();
