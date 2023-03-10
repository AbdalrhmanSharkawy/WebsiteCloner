const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('WEBSITE CLONER V1!')
});
app.listen(3000, () => {
})
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
const scrape = require('website-scraper');
console.log("\x1b[44m%s\x1b[0m", `\x1b[33mWEBSITE \x1b[32mCLONER \x1b[35mBY \x1b[36mTIGER!`);
console.log()
rl.question(`\x1b[36m[-] Please Type Website Url: \n`, (websiteUrl) => {
console.log()
rl.question(`\x1b[36m[-] Please Type New File Name: \n`, (FileName) => {
console.clear()
console.log("\x1b[44m%s\x1b[0m", `\x1b[33mWEBSITE \x1b[32mCLONER \x1b[35mBY \x1b[36mTIGER!`);
console.log()
if (!websiteUrl) return console.error("\x1b[31m%s\x1b[0m", `[Error] Can't Find Website Url`);
if (!FileName) return console.error("\x1b[31m%s\x1b[0m", `[Error] Can't Find File Name`);
console.log("\x1b[33m%s\x1b[0m", `Please Wait For Downloading The Website..`)
scrape({
urls: [websiteUrl],
urlFilter: function(url) {
return url.indexOf(websiteUrl) === 0;
},
recursive: true,
maxDepth: 100,
prettifyUrls: true,
directory: `./${FileName}`     
}).then((data) => {
console.log("\x1b[32m%s\x1b[0m", `Succesfully Downloaded The Website`);
}).catch((err) => { 
console.clear()
console.log("\x1b[44m%s\x1b[0m", `\x1b[33mWEBSITE \x1b[32mCLONER \x1b[35mBY \x1b[36mTIGER!`);
console.log()
console.log("\x1b[31m[Error]", err.message);
});
});
});