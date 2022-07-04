# Duolingo friends cheerer
Receiving and giving cheers in Duolingo is very nice, but manually clicking cheer buttons is easy to forget and feels boring for long time. So let's try to add a bit automation to take care of my learning friends.
<img width="807" alt="duolingo_friends_cheerer" src="https://user-images.githubusercontent.com/16792417/177190174-a569ec8b-9dc4-4727-9603-d533dbc9a858.png">

## Progress planning
### Duolingo app
Trying first time Puppeteer library make the goal done
- [] Init NodeJS app with required libraries
- [] Enter the Duolingo website https://www.duolingo.com/
- [] Reveal the login form from the "I already have a account" button
- [] Fill the login form
- [] Successfully open the profile page after login
- [] Navigate to Friend updates page
- [] Find all of the cheer buttons not clicked yet
- [] Loop and click the buttons

### Scheduled automation on Mac or Windows
#### Create Bash script
- [] Call Node.js server
- [] Create curl request to the server
- [] Close server
####
- [] Schedule on mac somehow (Automator app + iCal seems to be one alternative)
OR
- [] Run on startup once a day

Let's see how many steps are missing from my planning. Wish me luck!
