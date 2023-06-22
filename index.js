import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Do You Want To Be a Developer? \n' 
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgCyanBright('HOW TO START')}
        I am but a Conscience.
        If you get any Tasks wrong I will be ${chalk.bgRedBright('Killed')}
        so get all of them Right...
    `);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking your Answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ 
            text: ` ${playerName} oru killadi thanne... 🔥🔥🔥` 
        });
    } else {
        spinner.error({ 
            text: ` ${playerName} ded aayi 💀 💀 💀 !`
         });
         process.exit(1);
    }
}

async function askname() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Ninte name entha?',
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

    return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
      choices: ['4', '"4"', '"1111"', '69420'],
    });

    return handleAnswer(answers.question_2 === '"1111"');
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
      choices: ['0', '🐏', '🐍', 'undefined'],
    });
  
    return handleAnswer(answers.question_3 === 'undefined');
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'Which of the following is NOT a primitive type?\n',
      choices: [
        'boolean',
        'number',
        'null',
        'object',
      ],
    });

    return handleAnswer(answers.question_4 === 'object');
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message:
        'JS is a high-level single-threaded, garbage-collected,\n' +
        'interpreted(or just-in-time compiled), prototype-based,\n' +
        'multi-paradigm, dynamic language with a ____ event loop\n',
      choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
    });
  
    return handleAnswer(answers.question_5 === 'non-blocking');
  }

function winner() {
    console.clear();
    const msg = `Congrats, ${playerName} !\n $ 1, 0 0 0, 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

console.clear();
await welcome()
await askname()
await question1();
await question2();
await question3();
await question4();
await question5();
winner()