
// delete all database
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function DeleteAllItems(client) {
  await client.connect();
  const database = client.db('school');
  const collection = await database.collection('students');
  const result = await collection.deleteMany({});
  
  const delete_count = result.deletedCount;
  

  console.log(`Deleted ${delete_count} document(s).`);
  await client.close();
}

DeleteAllItems(client);

