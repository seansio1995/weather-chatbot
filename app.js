'use strict';

const Readline=require("readline");
const rl=Readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  terminal:false
});

const matcher=require("./matcher");
const weather=require("./weather");
const {currentWeather}=require("./parser");
const colors=require("colors");
rl.setPrompt("> ");
rl.prompt();
rl.on("line",reply => {
  matcher(reply,data =>{
    switch(data.intent){
      case "Hello":
        console.log(`${data.entities.greeting} to you too!`);
        rl.prompt();
        break;
      case "Exit":
        console.log("Bye Bye!!!".blue.bold);
        process.exit(0);
        rl.prompt();
        break;
      case "Bad":
        console.log("Don't be mean!");
        rl.prompt();
        break;
      case "thank":
        console.log("Thank you too!");
        rl.prompt();
        break;
      case "currentweather":
        console.log("Let me check.......");
        weather(data.entities.city,"current")
        .then(response=>{
          let parseResult=currentWeather(response);
          console.log(parseResult);
          rl.prompt();
        })
        .catch(error=>{
          console.log("There seems to be a problem connecting to the Weather service!");
          rl.prompt();
        });
        //rl.prompt();
        break;
      default:
      console.log("I don't know what you mean");
      rl.prompt();
    }
  });

});
