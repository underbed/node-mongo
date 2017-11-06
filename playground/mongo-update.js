const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB');
    }

    console.log('Connected to MongoDB');

    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a00c8265797eb0abc3ed050')},{
        $set: {
            completed:true
        }},{
            returnOriginal: false
        }).then( (result) => {
            console.log(result);
        });

    
    //     text: 'Eat lunch'
    // }).then( (result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then( (result) => {
    //     console.log(result);
    // });

    //     db.collection('Todos').findOneAndDelete({
    //     completed : false
    // }).then( (result) => {
    //     console.log(result);
    // });

});