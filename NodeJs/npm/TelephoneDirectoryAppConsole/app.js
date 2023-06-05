/* 
p1> node .\app.js add --name="emre"
console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[3]);

let getCommand = process.argv[2];

if (getCommand === "add") {
  console.log("adding");
}
 */

// node .\app.js add --name="emre" --tel="123356"

const yargs = require("yargs");
const person=require("./person.js");

yargs.command({
  command: "add",
  describe: "You Can Add New People",
  handler(argv) {
   // console.log("name: " + argv.name + " Tel no: " + argv.tel);
   person.add(argv.name,argv.tel);
  },
  builder: {
    name: {
      describe: "Added Name",
      demandOption: true,
      type: "string",
    },
    tel: {
      describe: "Added Tel",
      demandOption: true,
      type: "string",
    },
  },
});

yargs.command({
  command: "show",
  describe: "person name shown",
  handler(argv) {
    //console.log("person name shown: " + argv.name);
    person.show(argv.name);
  },
  builder: {
    name: {
      describe: "Show Name",
      demandOption: true,
      type: "string",
    },
  },
});

yargs.command({
  command: "delete",
  describe: "deleting the  people ",
  handler(argv) {
   // console.log("Deleting Name: " + argv.name);
   person.deleteName(argv.tel);
  },
  builder: {
    tel: {
      describe: "Deleting tel",
      demandOption: true,
      type: "string",
    },
  },
});

yargs.command({
  command: "list",
  describe: "All people Lists",
  handler(argv) {
    //console.log("All Name: " + argv.name);
    person.list();
  },
});

//console.log(yargs.argv);
yargs.parse();
