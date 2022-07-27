const getHTML = require('./getHTML.js');

async function getUserValidationResult(userId) {
  const profileData = await getHTML(`https://steamcommunity.com/profiles/${userId}`);
  const inventoryData = await getHTML(`https://steamcommunity.com/profiles/${userId}/inventory/`);

  const activity = profileData('div.recentgame_quicklinks.recentgame_recentplaytime').eq(0).text().trim() !== '';
  const lvl = profileData('span.friendPlayerLevelNum').eq(0).text() === '0';
  const ban = profileData('span.profile_ban_info').eq(0).text().trim() !== '| Info';
  const inventory = inventoryData('div.item_desc_descriptors').eq(2).text().trim() === 'Tags:';

  return activity && lvl && ban && inventory;
}

module.exports = getUserValidationResult;
