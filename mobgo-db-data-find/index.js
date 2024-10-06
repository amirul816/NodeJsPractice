
// delete all database
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function FindItem(client) {
  await client.connect();

  const database = client.db("school");
  const collection = database.collection("students");

  /* Define the filter to find the specific document
  const query = { name: "Abrar Galib2" };
   const result = await collection.findOne(query);*/

  // for find all data os table
  const cursor = await collection.find({});
  const result = await cursor.toArray();

  /* Find first row of the students data
  const result = await collection.findOne({});*/

  if (result) {
    console.log("Document found:", result);
  } else {
    console.log("No document matches the query.");
  }

  await client.close();
}

FindItem(client);

