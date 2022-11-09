const mongoose = require("mongoose");

let connection = async () => {
  // intento conectarme a la base datos con el metodo connect de mongoose
  try {
    mongoose.connect(
      // requier link de conexion a base de datos
      process.env.DB_LINK,
      // objeto con configuraciones de conexion
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error.message);
  }
};

connection();
