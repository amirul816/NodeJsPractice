// include mongo db module
const { MongoClient } = require("mongodb");

// MongoDB connection string
const uri = "mongodb://localhost:27017";

// Create a new MongoClient (without deprecated options)
const client = new MongoClient(uri);

async function insertStudentData() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected successfully to MongoDB cluster");

    // Select the 'school' database
    const database = client.db("school");

    // Select the 'students' collection
    const collection = database.collection("students");

    // Sample data to be inserted
    const student = {
      roll: "51",
      name: "Abrar Galib36",
      age: 89,
      grade: "1st",
      subjects: ["Math", "Bangla", "English"],
      enrolledDate: new Date(),
    };

    // Insert the student document into the 'students' collection
    const result = await collection.insertOne(student);

    console.log(`Student inserted with _id: ${result.insertedId}`);
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    // Close the connection
    await client.close();
  }
}

insertStudentData();
