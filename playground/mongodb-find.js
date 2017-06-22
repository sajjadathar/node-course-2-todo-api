//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID, } = require('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').find({name: 'soomro'}).toArray()
    .then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch the users.');
    });

  //db.close();
});
