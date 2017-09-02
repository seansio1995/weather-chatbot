'use strict';

const Readline=require("readline");
const rl=Readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  terminal:false
});

const matcher=require("./matcher");
rl.setPrompt("> ");
rl.prompt();
rl.on("line",reply => {
  matcher(reply,data =>{
    switch(data.intent){
      case "Hello":
        console.log("Hello From Sean bot!");
        rl.prompt();
        break
      case "Exit":
        console.log("Bye Bye!!!");
        process.exit(0);
        rl.prompt();
        break
      case "Bad":
        console.log("Don't be mean!");
        rl.prompt();
        break
      case "thank":
        console.log("Thank you too!");
        rl.prompt();
        break
      default:
      console.log("I don't know what you mean");
      rl.prompt();
    }
  });

});
