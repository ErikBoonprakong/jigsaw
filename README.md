# Puzzle Game Website
A continually deployed version of this can be found at https://erikspuzzlegame.netlify.app/

This is a pet project that I am currently working on. It's a full-stack React app where the user can sign up and earn varying amounts of points for completing different puzzles. I'm currently working on adding different difficulties and new puzzles for the user to chose from.

Note: the header may take around 30 seconds or so to update if the database has not been connected to for a while. This is just a result of using the free hosting plan with ElephantSQL and would not occur if I chose to use one of their paid plans.

List of features:
- User Account system
- Home Page
- Relative style sizing, so the app should be comfortable to play on different sized screens
- Slider Puzzle game
- Instructions Page
- Difficulty Selection (work in progress)
- Sodoku (unfinished)
- Database + Server to connect with DB
- Header displaying user info
- If signed in, the user earns points upon completion of the puzzle
- Win message is displayed once puzzle is completed

This is a full stack React app. I chose React for this app to minimise loading time as it enables me to just reload the game board each time a move is made instead of reloading the entire page.

I deployed this to Netlify. The server is deployed to Heroku. I chose to use Netlify and Heroku as they both offer continuous deployment from a GitHub repo. I used PostgreSQL for my online database as I was already familiar with it from using it in my chess project and it is the most complex option (as opposed to something like MySql), meaning it is less likely to cause limitations if I want to continue developing this project long into the future.

My future goals for this project are:
- Come up with a better name
- Finish Sodoku
  - Add validation upon completion
  - Update score upon successful validation
  - Highlight errors upon bad validation
  - Highlight selected table cell
  - Make preloaded cells unchangeable
  - Style buttons
  - Add restart and reload buttons
- Add more puzzles
- Implement multiple difficulties for the player to chose from in a way that doesn't repeat code unnecessarily and that I could add more difficulties without too much extra code
- Add more pictures for the user to chose as their puzzle.
- Potentially look into letting the user upload a picture to use
- Leader Board
- Rewards to be purchased with points
