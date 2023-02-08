#!/usr/bin/env node

import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'
import inquirer from "inquirer";
import figlet from "figlet";
import gradient from "gradient-string";
dotenv.config()


let ques;
const greet = () => {
    console.clear();
    const msg = `Chat GPT`
    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data));
    })
}

greet()

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

async function askQues() {
    const answers = await inquirer.prompt({
       name:'Ask Chat GPT',
       type:'input',
       question:'Chat GPT',
       default(){
        return 'chatGPT'
       },
    });
    ques = answers.question;
    return ques
   
}


const openai = new OpenAIApi(configuration);
async function runCompletion (ques) {
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `how are you ?`
    });
    console.log(completion.data.choices[0].text);
}


await runCompletion();



