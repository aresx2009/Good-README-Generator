const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const questions = require("./utils/questions")
const gererateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt(questions);
}
async function init() {
    console.log("Hi");

    try {
        const answer = await promptUser();
        let githubInfo = await axios.get(`https://api.github.com/users/${answer.username}`);
        const md = gererateMarkdown(answer, githubInfo.data);
        await writeFileAsync("README.md", md);
        console.log("Successfully wrote to readme.md");
    }
    catch (err) {
        console.log(err);
    }
}
init();
