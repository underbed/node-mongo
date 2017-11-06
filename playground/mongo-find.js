const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB');
    }

    console.log('Connected to MongoDB');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a00c25d1a470c3330238461')
    // }).toArray()
    // .then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // }) ;

    db.collection('Todos').find().count()
    .then( (count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }) ;

  //  db.close();
});