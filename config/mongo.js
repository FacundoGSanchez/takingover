const mongoose = require("mongoose");

const dbConnectNoSql = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI);
    console.log("*** Conexion dbMongo Correcta ***");
  } catch (error) {
    console.error("*** Error en la Conexion dbMongo ****", error);
  }
};

module.exports = dbConnectNoSql;
