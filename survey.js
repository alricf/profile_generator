const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (listen) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (eat) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what your are amazing at! `, (superpower) => {

              // TODO: Log the answer in a database
              console.log(`\nFun Profile Generator:\nMy name is ${name}. My favourite activity is ${activity}. While doing this I listen to ${listen}. My favourite meal is ${meal}. For ${meal}, my favourite thing to eat is ${eat}. My absolute favourite sport is ${sport}. My superpower is ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});