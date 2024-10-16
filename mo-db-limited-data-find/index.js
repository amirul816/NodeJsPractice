const { MongoClient } = require("mongodb"); // Correct MongoClient import
const uri = "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function FindAllDataByLimit(client) {
  await client.connect(); // Connect to the MongoDB server

  const MyDatabase = client.db("school"); // Correct use of 'client'
  const MyCollection = MyDatabase.collection("students"); // Use correct collection name ('students')

  // Use async/await for the find operation and remove TypeScript types if this is JavaScript
  const result = await MyCollection.find().limit(3).toArray();

  console.log(result);

  await client.close(); // Close the connection
}

FindAllDataByLimit(client);
