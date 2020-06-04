const questions = [
    {
        name: "name",
        message: "What's your Github username?"
    },
    {
        name: "project",
        message: "What's your project's name?"
    },
    {
        name: "link",
        message: "Add link?"
    },
    {
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        name: "license",
        message: "What kind of license should your project have?",
        type: "list",
        choices: ["MIT", "APACHE 2.0", "GPL3.0", "BSD 3", "None"]
    },
    {
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        name: "email",
        message: "What is your email?"
    },
    {
        name: "contributing",
        message: "What does user need to know about contributing to the repo?"
    }
];
module.exports = questions