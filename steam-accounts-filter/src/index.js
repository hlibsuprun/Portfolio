const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const util = require('util');

const filteringUsers = require('./filteringUsers/filteringUsers.js');

(async () => {
  const question = util.promisify(readline.question).bind(readline);

  const dataToFilter = {
    userId: BigInt(await question('Enter the user id (the search will start with it): ')),
    numberOfUsers: BigInt(await question('Enter the number of users: ')),
    typeOfCycle: await question('If you want to search for newer users enter "+", for older users enter "-": ')
  };

  console.log('Loading data...');
  await filteringUsers(dataToFilter);

  console.log('Loading is complete');
  process.exit();
})();
