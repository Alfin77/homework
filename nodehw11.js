const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let booksCollection; 
client.connect()
  .then(() => {
    console.log("Connected to MongoDB");

    const db = client.db("library_DB");
    booksCollection = db.collection("books");

    return booksCollection.deleteMany({});
  })
  .then(() => {
    const books = [
      { title: "Java Basics", author: "John", location: "Shelf A" },
      { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
      { title: "Python 101", author: "Deepak", location: "Shelf D" },
      { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
      { title: "Data Structures", author: "Ravi", location: "Shelf B" },
      { title: "React Handbook", author: "Derek", location: "Shelf D" }
    ];

    return booksCollection.insertMany(books);
  })
  .then(() => {
    return booksCollection.updateOne(
      { title: "Java Basics" },
      { $set: { location: "Shelf Z" } }
    );
  })
  .then(() => {
    return booksCollection.updateMany(
      { author: "Dean" },
      { $set: { location: "Shelf E" } }
    );
  })
  .then(() => {
    return booksCollection.deleteOne({ title: "Python 101" });
  })
  .then(() => {
    return booksCollection.deleteMany({
      title: { $regex: /^D/i }
    });
  })
  .then(() => {
    return booksCollection.find({}).toArray();
  })
  .then(result => {
    console.log("Final Books Collection:");
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    client.close();
  });