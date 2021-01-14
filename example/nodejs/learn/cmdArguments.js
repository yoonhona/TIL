process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const ts = process.argv.slice(2);
console.log(ts);
