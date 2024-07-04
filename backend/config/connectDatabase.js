const mongoose = require('mongoose');

const connectDatabase = ()=>{

mongoose.connect(process.env.DB_ENV).then((con)=>{
    
    console.log('MongoDB Database Connected to host :'+con.connection.host)

})
}

module.exports=connectDatabase;

