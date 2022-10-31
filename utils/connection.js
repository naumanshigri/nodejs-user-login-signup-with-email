const Web3 = require("web3");
const web3 = new Web3();
const mongoose = require("mongoose");
const { MongoURI } = require("../config/database");

const dbConnection = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('before connect', process.env.mongoUri)
             mongoose.connect(process.env.mongoUri, { useNewUrlParser: true, useUnifiedTopology:true }, async (err, db)=>{
                  if(err) return reject('Database not found')
                  return resolve(db)
              }) 

        } catch (e) {
            console.log('error in connection', e)
            return reject(e)
        }
    })
}

module.exports = { dbConnection }