const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer.prompt([
 {
   type: 'input',
   name: 'name',
   message: 'What is your name?'
 },
 {
   type: 'input',
   name: 'phone',
   message: `What is your number`
 }
])

.then(answers => {
 let {phone, name} = answers;
 console.log(chalk.red(name));
 console.log(phone);
})
.catch(error => console.log(error));