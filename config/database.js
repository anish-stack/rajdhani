const mongoose = require('mongoose');


const ConnectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Db is Connected Success')
    } catch (error) {
    
        
        console.log('Db Connection Error',error)
    }
}

module.exports = ConnectDb