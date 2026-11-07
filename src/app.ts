import { error } from "console";
import {promises as fs} from "fs";


const FILE = "example.txt";

async function main() {
    try {
        // write (create file)
        await fs.writeFile(FILE, "first row\n", "utf8");
        console.log("finished writing");

        // append file
        await fs.appendFile(FILE, "second row\n", "utf8");
        console.log("finished append");

        // read file (read and print)
        const content = await fs.readFile(FILE, "utf8");
        console.log("Content:\n" + content);

        //unlink (delete file)
        await fs.unlink(FILE);
        console.log("file deleted");

    } 
    catch (err){
        console.error("error", error);
    }

}

main();