const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "udemy-task-manager";

const id = new ObjectId();

// async function main() {
//   await client.connect();
//   console.log("Connected correctly!");
//   const db = client.db(databaseName);
//   const collection = db.collection("users");

//   const insertResult = await collection.insertOne({
//     name: "Andrew",
//     age: 27,
//   });
//   console.log(insertResult);

//   const insertResults = await collection.insertMany([
//     { name: "Jen", age: 28 },
//     { name: "Gunther", age: 29 },
//   ]);
//   console.log(insertResults);

//   return "done";
// }

async function second() {
  await client.connect();
  console.log("Connected correctly!");
  const db = client.db(databaseName);
  const collection = db.collection("tasks");

  // const insertResult = await collection.insertOne({
  //   name: "Andrew",
  //   age: 27,
  // });
  // console.log(insertResult);

  const insertResults = await collection.insertMany([
    { description: "Clean the house", completed: true },
    { description: "Renew inspection", completed: false },
    { description: "Pot plants", completed: false },
  ]);
  console.log(insertResults);

  return "done";
}

second()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
