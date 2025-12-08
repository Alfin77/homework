var fs = require('fs');

fs.writeFile('profile.txt', 'Name: Riya\nAge: 22\nCity: Mumbai', function (err) {
  if (err) throw err;
  console.log("File Created!");


  fs.readFile('profile.txt', 'utf8', function (err, data) {
    if (err) throw err;

    var firstLine = data.split('\n')[0];   
    var name = firstLine.split(': ')[1];   

    checkName(name);

    var updatedContent = data + '\nStatus: Active';

    fs.writeFile('profile.txt', updatedContent, function (err) {
      if (err) throw err;
      console.log("File Updated!");

      fs.rename('profile.txt', 'verified_profile.txt', function (err) {
        if (err) throw err;
        console.log("File Renamed!");
      });
    });

  });
});

function checkName(name) {
  if (name === "Riya") {
    console.log("Profile verified");
  } else {
    console.log("Invalid profile");
  }
}