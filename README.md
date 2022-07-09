# Duolingo friends cheerer
Receiving and giving cheers in Duolingo is very nice, but manually clicking cheer buttons is easy to forget and feels boring for long time. So let's try to add a bit automation to take care of my learning friends.
<img width="807" alt="duolingo_friends_cheerer" src="https://user-images.githubusercontent.com/16792417/177190174-a569ec8b-9dc4-4727-9603-d533dbc9a858.png">

## Commands:
- Run NodeJS app: `node duolingo-friends-cheerer.js`
- Url to start app: http://localhost:4000/cheer-friends?url=https://www.duolingo.com

## Progress planning
### Duolingo NodeJS app
Trying first time [Puppeteer](https://github.com/puppeteer/puppeteer) library make the goal done
- [x] Init NodeJS app with required libraries
- [x] Enter the Duolingo website https://www.duolingo.com/
- [x] Reveal the login form from the "I already have a account" button
- [x] Fill the login form
- [x] Successfully open the profile page after login
- [x] Navigate to Friend updates page
- [x] Find all of the cheer buttons not clicked yet
- [x] Loop and click the buttons

### Scheduled automation on Mac or Windows
#### Create Bash script
- [ ] Start Node.js server
- [ ] Create curl request to the server and run the app
- [ ] Close server
####
- [ ] Schedule on mac somehow (Automator app + iCal seems to be one alternative based on fast googling)
OR
- [ ] Run on startup once a day

Let's see how many steps are missing from my planning. Wish me luck!
