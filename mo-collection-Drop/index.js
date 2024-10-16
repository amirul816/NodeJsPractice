const { MongoClient } = require("mongodb"); // Correct MongoClient import
const uri = "mongodb+srv://amirul:amirul816357@cluster0.d4gum.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri);

  async function DropCollection(client) {
    try{
      await client.connect(); // Connect to the MongoDB server

      const MyDatabase = client.db("school"); // Correct use of 'client'

      await MyDatabase.dropCollection("teachers");``
    
      console.log("Collection drop");
    } 
    
    catch(err){
      console.log("Error on collection drop");
    }

   finally{
    await client.close(); // Close the connection
   } 
}
   DropCollection(client);
