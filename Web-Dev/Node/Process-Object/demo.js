//Getting info about enviroment
// console.log(process.env.NODE_ENV); //access env variables
// console.log(process.version);//get node version
// console.log(process.platform);//get OS
//console.log(process.arch);//Get CPU architecture

//Command Line Argument

// console.log(process.argv); //Get Command Line

//Wprking Dir

// console.log(process.cwd());

//Process Control

// process.exit(0); //exiting application

//Process EVENTS

process.on("exit", (code) => {
  console.log(`Process Exiting with code ${code}`);
});
