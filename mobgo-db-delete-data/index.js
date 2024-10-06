

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function deleteStudent() {
  await client.connect();
  const result = await client
    .db("school")
    .collection("students")
    .deleteOne({ name: "Abrar Galib" });
  console.log(result.deletedCount ? "Document deleted" : "No document found");
  await client.close();
}

deleteStudent();
