const express  = require( "express" );
const mongoose = require( "mongoose" );


// 1. Require dependencies /////////////////////////////////////////
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
require("dotenv").config();
////////////////////////////////////////////////////////////////////

const app = express(); 
const port = 3000; 

app.use( express.urlencoded( { extended: true} ) ); 

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use (passport.initialize());
app.use (passport.session());

app.set("view engine", "ejs");


// connect to mongoose on port 27017
mongoose.connect( "mongodb://localhost:27017/laforgedb", { useNewUrlParser: true, useUnifiedTopology: true});


const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// plugins extend Schema functionality
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

const forumSchema = new mongoose.Schema({
    text: String,
    prov: String,
    creator: String,
    isForumCleared: Boolean
});

const Forum = mongoose.model("Forum", forumSchema);

const provinceSchema = new mongoose.Schema({
    province: String,
    about: String,
    tourism: String,
    cfl: String,
    background: String,
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String
});

const Province = mongoose.model("Province", provinceSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen (port, () => {
    console.log (`Server is running on http://localhost:${port}`);
});

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/Loginpage.html")
});

var loginUser;
var selProvince;

////////////////////////////////////////////////////////////////////////////////////

app.get( "/mainpage", async( req, res ) => {
    selProvince = null;

    console.log("A user is accessing the todo route using get, and...");
    if ( req.isAuthenticated() ){
        try {
            console.log( "was authorized and found:" );
            res.render( "mainpage", { username: loginUser });
        } catch ( error ) {
            console.log( error );
        }
    } else {
        console.log( "was not authorized." );
        res.redirect( "/" );
    }
});

app.get( "/province", async( req, res ) => {

    console.log("A user is accessing the todo route using get, and...");
    if ( req.isAuthenticated() ){
        try {
            console.log( "was authorized and found:" );
            const provinces = await Province.findOne({ province: selProvince });
            const forums = await Forum.find();
            res.render( "province", { username: loginUser, provinces : provinces, forums : forums });
        } catch ( error ) {
            console.log( error );
        }
    } else {
        console.log( "was not authorized." );
        res.redirect( "/" );
    }
});

app.post( "/register", (req, res) => {

    console.log( "User " + req.body.username + " is attempting to register" );

    loginUser = req.body.username;

    User.register({ username : req.body.username }, 
        req.body.password, 
        ( err, user ) => {
            if ( err ) {
                console.log( err );
                res.redirect( "/" );
            } else {
                passport.authenticate( "local" )( req, res, () => {
                    res.redirect( "/mainpage" );
                });
            }
        }
    );
});

app.post( "/login", ( req, res ) => {
    loginUser = req.body.username;

    console.log( "User " + req.body.username + " is attempting to log in" );
    const user = new User ({
        username: req.body.username,
        password: req.body.password
    });
    req.login ( user, ( err ) => {
        if ( err ) {
            console.log( err );
            res.redirect( "/" );
        } else {
            passport.authenticate( "local" )( req, res, () => {
                res.redirect( "/mainpage" ); 
            });
        }
    });
});

app.get('/logout', function(req, res, next) {
    loginUser = null;

    req.logout(function(err) {
      if (err) { 
          return next(err); 
      }
      res.redirect('/');
    });
});


////////////////////////////////////////////////////////////////////////////////

app.post( "/AB", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "Alberta";

    res.redirect( "/province" );
});

app.post( "/SK", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "Saskatchewan";

    res.redirect( "/province" );
});

app.post( "/ON", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "Ontario";

    res.redirect( "/province" );
});

app.post( "/QC", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "Quebec";

    res.redirect( "/province" );
});

app.post( "/NS", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "Nova Scotia";

    res.redirect( "/province" );
});

app.post( "/MB", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "Manitoba";

    res.redirect( "/province" );
});

app.post( "/BC", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "British Columbia";

    res.redirect( "/province" );
});

app.post( "/NL", async( req, res ) => {
    loginUser = req.user.username;
    selProvince = "Newfoundland and Labrador";

    res.redirect( "/province" );
});

////////////////////////////////////////////////////////////////////////////////

app.post( "/addForum", async( req, res ) => {
    loginUser = req.user.username;

    console.log( "User " + req.user.username + " is adding the task:" );
    console.log( req.body )
    const forumadd = new Forum({
        text: req.body.enterText,
        prov: selProvince,
        creator: loginUser,
        isForumCleared: false
    });

    forumadd.save();

    res.redirect( "/province" );
});

app.post( "/removeForum", async( req, res ) => {
    loginUser = req.user.username;
    var id = req.body.f_id;

    await Forum.findOneAndUpdate({_id: id}, {isForumCleared: true});
    await Forum.deleteMany({isForumCleared: true});

    res.redirect( "/province" );
});