# Golf Player Selector

## Project Functionality

This is an app that assists a user in the selection of players for a fanstasy golf pool. After logging in, the user sees an adjusted ranking of players based on the results of an algorithm that is built in MySQL. There are 5 tiers of players, and the user selects 1 golfer from each tier. 4 players are displayed at a time, ordered by adjusted ranking, and each time the user 'rejects' a golfer, the next highest ranked player is displayed. After selections from all 5 tiers have been made, the app displays the final team of players.

## Project Challenges

The main challenges of this project, and the solutions used, were as follows:

1. user authentication: achieved by using jsonwebtoken (JWT) and bcrypt.js
2. web scraping: achieved by using axios, cheerio and a chrome extension called web scraper
3. algorithm: manipulated data from 2 APIs and 4 web scrapes in MySQL to re-rank the players
4. display of cards: React.js was used to display the player 'cards' and to manage the stateful conditions

## Project Usefulness

Full-stack Node.js app that demonstrates many technologies but also assists a user with the research required to make intelligent choices for a fantasy golf pool.

## How to get started

On page load, the user needs to enter a username (testun) and password (testpw). Then, on the Home page, they need to select 1 player from each tier.

## Project maintenance and contributions

This is an original app that was built for the final project during my attendance at Georgia Tech's Coding Boot Camp (Oct 2019 - Jan 2020).

## Deployed link

https://golf-player-selector.herokuapp.com/login
