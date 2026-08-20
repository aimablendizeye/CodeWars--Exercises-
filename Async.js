
// Q 1

// Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the `launchAll` function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...

// Can you fix this for us? You know, it's pretty critical code...

// **Note**: There are 5 missiles labeled `i` which is a number in {0, 1, 2, 3, 4}. The missile `i` should be launched after `i` seconds

function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(() => {
      launchMissile(i);
    }, i * 1000);
  }
}


// Q 2 

// Here are some classic Christmas cracker jokes.

// There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.

// Your challenge
// Write an async function which takes an apiUrl and jokeId which returns a promise.
// The data will need to be filtered to get the specified joke by id.
// When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.
// Handle error cases

// If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
// Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.


async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  
  if (!data || !Array.isArray(data.jokes)) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find(joke => joke.id === jokeId);

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup() {
      return joke.setup;
    },

    sayPunchLine() {
      return joke.punchLine;
    }
  };
}