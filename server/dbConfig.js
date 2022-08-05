const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const databaseConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "Connected to Database : " + databaseConnection.connection.host
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
