// 1.write file-------->>
// const fs = require("fs");
// fs.writeFile("sample.txt", "hello motto", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Done");
// });

// 2.Append file---------->
// const fs = require("fs");
// fs.appendFile("sample.txt", "going to home", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Done");
// });

// 3.Rename file--------->
// const fs = require("fs");
// fs.rename("first_file.txt", "files/first_file.txt", (err) => {
//   if (err) console.log(err);
//   console.log("Done");
// });

// 4.Unlink File
const fs = require("fs");
fs.unlink("files/first_file.txt", (err) => {
  if (err) console.log(err);
  console.log("Done");
});
