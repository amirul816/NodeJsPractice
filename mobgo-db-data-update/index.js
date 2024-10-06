
// delete all database
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function UpdateItem(client) {
  await client.connect();

  const database = client.db("school");
  const collection = database.collection("students");

  // Define the query to find the document
  const query = { name: "Abrar Galib2" };

  // Define the update operation
  const update = {
    $set: { roll: 102 }, // Set the 'roll' field to a new value (e.g., 102)
  };

  // Perform the update
  const result = await collection.updateOne(query, update);

  // Log the result
  if (result.matchedCount > 0) {
    console.log(`Successfully updated ${result.modifiedCount} document(s).`);
  } else {
    console.log("No document matched the query.");
  }

  await client.close();
}

UpdateItem(client);
