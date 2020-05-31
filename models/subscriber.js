const  mongoose = require("mongoose"),
       subscriberSchema = mongoose.Schema({ //add subscriber schema
            //add schema properties
            name: String,
            email: String,
            zipCode: Number
        });

        //create a model
        module.exports = mongoose.model("Subscriber", subscriberSchema); //export the Subscriber model as the only module export

        
