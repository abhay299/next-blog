const { default: mongoose } = require("mongoose");

const connection = {};

export const dbConnetion = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existed connection...");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};
