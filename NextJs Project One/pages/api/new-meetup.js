// Basic API Route
//this allows us to connect to our db
import { MongoClient } from "mongodb";
//POST /api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://12345:12345@cluster0.dizvn9k.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    //nosql collections are kind of like sql tables but are documents with JSON data
    const meetupsCollection = db.collection("meetups");
    //inserts a single document into MongoDb
    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    //closes the db's underlying connections
    client.close();
    //status args are a 201 http success code and an object with a message key with a success message for db connection 
    res.status(201).json({ message: 'Meetup Inserted!' })
  }
}

export default handler;
