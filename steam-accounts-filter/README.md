# Steam accounts filter
The script was created to replace manual filtering of Steam accounts with automatic.

### Tasks set:
- filtering accounts by requirements: recent activity, level 0, no ban, at least 1 item in inventory
- improved performance in relation to manual filtering
- compliance with the order of counting id

### How to use?
1) Install [Node.js](https://nodejs.org/en/download/)
2) Open the folder with the script in the console and write:
``` 
npm install 
```
``` 
npm start
```
3) Enter the data that the script will ask

After that, the script will start working and will write all ids to the file `all-checked-ids.txt` and links to the profile of filtered users to the file `filtered-users.txt`

### Pros:
- speed
- works without human intervention
- no extra dependencies other than the Steam platform

### Cons:
- forced delays and pauses in work due to request restrictions

### Technologies:
- JavaScript
- Node.js
