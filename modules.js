// Globals - NO WINDOW

// __dirname  - path to current directory
// __filename - file name
// require	  - function to use modules (CommonJS)
// module	  - info about current module (file)
// process    - info about env where the program is being executed

// Modules
const {john, peter} = require('./names');
const sayHi = require('./utils');
const data = require('./alternativeExport');
require('./mindGrenade');
// console.log(data);

// sayHi('Susan');
// sayHi(john);
// sayHi(peter);