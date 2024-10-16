
// delete all database
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function FindSpecificData(client) {
  await client.connect();

  const database = client.db("school");
  const collection = database.collection("students");

  // Define the query to find specific documents
  const query = { roll: 102 }; // This will find all students with roll number 102

  // Find documents that match the query
  const cursor = collection.find(query);

  // Convert the cursor to an array and log the results
  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log("Documents found:", results);
  } else {
    console.log("No documents found.");
  }

  await client.close();
}

FindSpecificData(client);
