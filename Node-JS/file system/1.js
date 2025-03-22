var ps=require("fs")
// ps.mkdirSync("node")
ps.writeFileSync("node/write.txt","Hello ")
ps.appendFileSync("node/write.txt","How are you??")
data=ps.readFileSync("node/write.txt");
console.log(data) //<Buffer 48 65 6c 6c 6f 20 48 6f 77 20 61 72 65 20 79 6f 75 3f 3f>
console.log(data.toString()) //Hello How are you??

ps.writeFileSync("node/example.txt","This file is to know deletion and rename")
ps.renameSync("node/example.txt","node/readwrite.txt")
//ps.unlinkSync("node/example.txt") //deletes the file
