function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function asyncCounter() {
  const numbers = [];

  for (let i = 1; i <= 5; i++) {
    await delay(1000);

    console.log(i);
    numbers.push(i);
  }

  return numbers;
}

// Example usage
asyncCounter().then(numbers => {
  console.log(numbers);
});
