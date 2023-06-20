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
        ${chalk.bgCyanBright('HOW TO START')}
        I am but a conscience.
        If you get any Tasks wrong I will be ${chalk.bgRedBright('Killed')}
        so get all of them Right...

    `);
}

async function askname() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Javascript was created in 10 days then released on\n',
        choices: [
            'May 23rd, 1995',
            'Nov 24th, 1995' ,
            'Dec 4th, 1995',
            'Dec 17th, 1996',
        ],
    });

    return handleAnswer(answer.question_1);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking your Answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ 
            text: `Nice work ${playerName}. That's the legit one.` 
        });
    } else {
        spinner.error({ 
            text: `GAME OVER mwonuse...., you have failed ${playerName}!`
         });
         process.exit(1);
    }
}




// await welcome()
// await askname()
await question1();