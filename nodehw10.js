const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("mashUSdb");
    const leadsCollection = db.collection("leads");

    const leads = [
      { name: "John", city: "Trivandrum" },
      { name: "Rahul", city: "Calicut" },
      { name: "Dean", city: "Trivandrum" },
      { name: "Deepak", city: "Kollam" },
      { name: "Ashwin", city: "Calicut" },
      { name: "Rolly", city: "Alleppy" },
      { name: "Nikhil", city: "Kottayam" },
      { name: "Raymond", city: "Trivandrum" }
    ];

    await leadsCollection.insertMany(leads);
    console.log("Leads inserted successfully");

    const calicutLeads = await leadsCollection
      .find({ city: "Calicut" })
      .project({ _id: 0, name: 1 })
      .toArray();

    console.log("Leads from Calicut:");
    calicutLeads.forEach(lead => {
      console.log(lead.name);
    });

  } catch (error) {
    console.error(error);
  } finally {
    
    await client.close();
  }
}

run();