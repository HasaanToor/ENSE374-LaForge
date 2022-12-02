# INSTALLATION REQUIREMENTS
This project will require Node.js and MongoDB to function

### [Node.js](https://nodejs.org/en/download)
* Generally easy install

### [MongoDB](https://www.mongodb.com/try/download/community)
* Download and run the MSI package
* Install as a Network Service User
* DO NOT install Mongo Compass
* Once done, you need to restart your PC

# INSTALLATION INSTRUCTIONS
* Once you have ensured you have the above dependencies and our project code, you will want to open a terminal of some kind and proceed to the /project-front directory on your PC

*The easiest way to do this is to open the project in Visual Studio Code, right-click the "project-front" folder and click "Open in Integrated Terminal"*


* In this terminal you want to run the following commands in order:
```
npm init
```
* This will prompt many settings, we want to keep the default ones so just keep hitting the Enter key until the normal terminal re-appears, then run:
```
npm i express ejs mongoose
```
* This may take a while, but once it's done we want to run one more command:
```
npm i passport passport-local passport-local-mongoose express-session dotenv
```
* This finishes setting up our project for use, now we will want to load the database with the information about the provinces with:
```
node loadDB.js
```
* This may automatically end or it may not, if it does not, end it manually after about 10 seconds just to be safe by pressing Ctrl+C, then run:
```
node app.js
```
* Finally, the project is ready for use, simply head over to any browser and go to [http://localhost:3000/](http://localhost:3000/)
