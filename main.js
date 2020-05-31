const express = require("express"),
      app = express(),
      layouts = require("express-ejs-layouts"),
      mongoose = require("mongoose"),
      homeController = require("./controllers/homeController"),
      errorController = require("./controllers/errorController"),
      Subscriber = require("./models/subscriber"),
      subscriberController = require("./controllers/subscriberController");
      mongoose.Promise = global.Promise;

      //data base connection
      mongoose.connect("mongodb://localhost:27017/recipe_db", {useNewUrlParser: true, useUnifiedTopology: true})
      const db = mongoose.connection;
      db.once("open", () => {
        console.log("Successfully connected to MongoDB using Mongoose!");
      });


     
      
    //   // create and save new subscribers- strategy one
    //   var subscriber1 = new Subscriber({
    //       name: "Makini Makini",
    //       email: "brianmakini@gmail.com"
    //   });
    //   //save to the database
    //   subscriber1.save((error, savedDocument) =>{
    //       if(error) console.log(error); //pass potential errors
    //       console.log(savedDocument)
    //   });
    //   //    STRATEGY TWO
    //   Subscriber.create(
    //       {
    //           name: "Makini Makini",
    //           email: "brianmakini@gmail.com"
    //       },
    //       function (error, savedDocument) {
    //         if (error) console.log(error);
    //         console.log(savedDocument);}
    //   );




      app.set("port", process.env.PORT || 3000);
      app.set("view engine", "ejs");
      //adding body parsing to the top of main.js file
      app.use(express.urlencoded({extended:false})); //tell express.js to use body-parser for processing url-encoded and json parameters
      app.use(express.json());
      app.use(layouts);
      app.use(express.static("public"));
      

        //  MAIN ROUTES
      app.get("/", homeController.homePage);
      app.get("/courses", homeController.showCourses);
      app.get("/subscribers", subscriberController.getAllSubscribers, (req, res, next) =>{
          res.render("subscribers", {subscribers: req.data});
      });
      app.get("/contact", subscriberController.getSubscriptionPage);
      app.post("/subscribe", subscriberController.saveSubscriber);


     
       //   ERROR HANDLING ROUTES
      app.use(errorController.pageNotFoundError);
      app.use(errorController.internalServerError);

      app.listen(app.get("port"), () =>{
          console.log(`Server running at http://localhost:${app.get("port")}`);
      });