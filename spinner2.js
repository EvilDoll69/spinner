const spinnedChar = ['|', '/', '-', '|', '/', '-', '\\', '|'];
let delay = 0;

for (const char of spinnedChar) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, delay);
};

setTimeout(() => {
  process.stdout.write('\n'); 
}, delay);






