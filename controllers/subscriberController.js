const Subscriber = require("../models/subscriber"),
      mongoose = require("mongoose")

    //   exports.getAllSubscribers = (req, res, next) =>{
    //       Subscriber.find({}, (error, subscribers) =>{
    //         if (error) next(error);
    //         req.data = subscribers;
    //         next();
    //       });
    //     };
  
        //using promises to get all subscribers
        exports.getAllSubscribers = (req, res) =>{
            Subscriber.find({})
            .exec() //return a promise from the find query
            .then((subscribers) => {
                res.render("subscribers", {subscribers:subscribers}); //serve results from the data-base
            })
            .catch((error) =>{ //catch the errors that are rejected in the promise
                console.log(error.message);
                return [];
            })
            .then(() =>{
                console.log("Promise Complete")
            });
        };


        exports.getSubscriptionPage = (req, res) =>{
            res.render("contact");
        };
        exports.saveSubscriber = (req, res) =>{
            let newSubscriber = new Subscriber({
                name: req.body.name,
                email: req.body.email,
                zipCode: req.body.zipCode
            });
            newSubscriber.save()
            .then(result => {
                res.render("thanks")
            })
            .catch(error =>{
                if(error) res.send(error);
            });
          };