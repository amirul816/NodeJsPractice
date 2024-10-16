const { MongoClient } = require("mongodb"); // Correct MongoClient import
const uri = "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);


  async function CreateCollection(client) {
    try{
      await client.connect(); // Connect to the MongoDB server

      const MyDatabase = client.db("school"); // Correct use of 'client'

      await MyDatabase.createCollection("teachers");
    
      console.log("Collection created");
    } 
    
    catch(err){
      console.log("Error on create collection");
    }

   finally{
    await client.close(); // Close the connection
   }
 
}

CreateCollection(client);
