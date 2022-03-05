import mongoose from 'mongoose';

export class MongoConnection{

    dbPath = 'mongodb://mongo-container:27017/apiserver'
    options = {useNewUrlParser: true, useUnifiedTopology: true};

    connect(){
        mongoose.connect(this.dbPath); 
        mongoose.connection
        .on('connected', () => {
            console.log('connected!')
        })
        .on('error', err => {
            console.log(err);
          });
          
    }
}