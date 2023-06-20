import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Do You Want To Be a Developer? \n' 
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgGreenBrigh('HOW TO START')}
        I am but a conscience.
        If you get any tasks wrong I will be ${chalk.bgRedBright('Killed')}
        so get all of them Right...

    `);
}

await welcome()