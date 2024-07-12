const fs = require("fs");

fs.writeFile("./Ejercicio_7/example.txt", "Hello, World!", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File written successfully");
});