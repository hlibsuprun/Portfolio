const fs = require('fs');

const timeDelay = require('./helpers/timeDelay.js');
const getUserValidationResult = require('./helpers/getUserValidationResult.js');

async function filteringUsers({ userId, numberOfUsers, typeOfCycle}) {
  nextUserCheck: for (let i = 0n; i <= numberOfUsers; i++) {
    const profileLink = `https://steamcommunity.com/profiles/${userId}`;
    const wrongUser = `${userId} - wrong user (${i}/${numberOfUsers})`;

    fs.appendFileSync('./all-checked-ids.txt', `${userId}\n`);

    try {
      if (await getUserValidationResult(userId)) {
        fs.appendFileSync('./filtered-users.txt', `${profileLink}\n`);
        console.log(profileLink);
        userId = typeOfCycle === '+' ? ++userId : --userId;
      } else {
        await timeDelay();
        console.log(wrongUser);
        userId = typeOfCycle === '+' ? ++userId : --userId;
        continue nextUserCheck;
      }
    } catch (error) {
      console.log('Pause for technical reasons, break 5 minutes');
      await timeDelay(300000);
      continue nextUserCheck;
    }
  }
}

module.exports = filteringUsers;
