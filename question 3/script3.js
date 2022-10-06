var fs = require("fs")
var path = require("path")

const DIRECTORY = "Logs"
const EXTENSION = ".txt"


function dealWithLogs(){
    fs.readdir(DIRECTORY, 'utf-8', function(error, files) {
        if (error) {
            console.log("--- CREATING LOGS --- ")
            fs.mkdir(DIRECTORY, (err) => {
                if (err) {
                    return console.error(err);
                }
            })
            console.log("Created Logs Directory")
            process.chdir(__dirname + "/" + DIRECTORY)
            let fileNum = 0
            while (fileNum < 10) {
                let filename = "log" + fileNum + EXTENSION
                fs.appendFile(filename, 'Something in the file', function (err) {
                    if (err) throw err;
                    console.log('Created file: ' + filename);
                  });
                fileNum++
            }
            return
        }
        console.log("--- DELETING LOGS --- ")
        files.forEach((file) => {
            console.log("deleting: " + file)
            fs.unlink(DIRECTORY + "/" + file, function (err) {
                if (err) throw err;
            });
        })
        fs.rmdir(DIRECTORY, () => {
            console.log("Logs Directory Deleted!");
          });
    })
}

dealWithLogs()
