import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.mongodbURI, { dbName: "Hotel_db" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};