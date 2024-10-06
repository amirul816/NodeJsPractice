
// delete all database
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function FindRollProjection(client) {
  await client.connect();
  const database = client.db("school");
  const collection = database.collection("students");

  // Find all documents and project only the 'roll' field
  const cursor = collection.find({}, { projection: { grade: 1, _id: 0 } });

  // Convert cursor to array and log the documents
  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log("Roll numbers found:", results);
  } else {
    console.log("No documents found.");
  }

  await client.close();
}

FindRollProjection(client);
