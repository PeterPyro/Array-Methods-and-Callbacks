import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let hometeam2014 = fifaData.filter((game) => {
  if (game["Year"] === 2014 && game["Stage"] === "final") {
    console.log(game["Home Team Name"]);
  }
});

let awayteam2014 = fifaData.filter((game) => {
  if (game["Year"] === 2014 && game["Stage"] === "final") {
    console.log(game["Away Team Name"]);
  }
});

let homeGoals2014 = fifaData.filter((game) => {
  if (game["Year"] === 2014 && game["Stage"] === "final") {
    console.log(game["Home Team Goals"]);
  }
});

let awayGoals2014 = fifaData.filter((game) => {
  if (game["Year"] === 2014 && game["Stage"] === "final") {
    console.log(game["Away Team Goals"]);
  }
});

let winner2014 = fifaData.filter((game) => {
  if (game["Year"] === 2014 && game["Stage"] === "final") {
    console.log(game["Winner"]);
  }
});
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  let newArray = data.filter((game) => game.Stage === "fianl");
  return newArray;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(years) {
  let yearsArray = years.map((game) => game.Year);
  return yearsArray;
}
console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(winner) {
  let winners = winner.map((game) => {
    if (game["Home Team Goals"] > game["Away Team Goals"]) {
      return game["Home Team Name"];
    } else {
      return game["Away Team Name"];
    }
  });
  return winner;
}

console.log(getWinners(getFinals(fifaData)));

/*g Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(finalWinners, finalYears) {
  const msg = finalYears.map((year, country) => {
    return `In ${year}, ${finalWinners[country]} won the world cup!`;
  });
  return msg;
}
console.log(
  getWinnersByYear(
    getWinners(getFinals(fifaData)),
    getYears(getFinals(fifaData))
  )
);
/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  for (let i = 0; i < data.length; i++) {
    let currentMatch = data[i];

    let homeGoals = currentMatch["Home Team Goals"];
    let awayGoals = currentMatch["Away Team Goals"];

    let homeAverage = (awayGoals / 637) * 90;
    let awayAverage = (homeGoals / 637) * 90;

    console.log(
      `Home average: ${homeAverage.toFixed(
        3
      )}, Away average: ${awayAverage.toFixed(3)}.`
    );
  }
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
  const totalWins = data.reduce((acc, obj) => {
    const winCondition = obj["Home Team Goals"] > obj["Away Team Goals"];
    let key = obj["Home Team Initials"];

    winCondition ? acc + 1 : obj, 0;
    if (!acc[key]) {
      acc[key] = 0;
    }
    if (winCondition) {
      acc[key]++;
    } else {
      acc[obj[["Home Team Initials"]]]++;
    }

    return acc;
  }, {})[teamInitials];

  return `${teamInitials} has had ${totalWins} total world cup wins.`;
}

console.log(getCountryWins(getFinals(fifaData), "USA"));

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
