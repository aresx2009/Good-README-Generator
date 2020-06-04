function generateMarkdown(answer, data) {
    return `
  <h1>${answer.project}</h1>
  <p>
    <a>
        <img src= "https://img.shields.io/badge/contributor-Bro!-red">
    </a>
  </p>
  App link: ${answer.link}<br>
  Description<br>
  ${answer.description}

  Table of Contents<br>
  **[License](#License)**<br>
  **[Installation](#Installation)**<br>
  **[Test](#Test)**<br>
  **[Usage](#Usage)**<br>
  **[Contributing](#Contributing)**<br>
  **[Questions](#Questions)**<br>

  ## **License**<br>
  ${answer.license}

  ## **Installation**<br>
  ${answer.installation}

  ## **Test**<br>
  ${answer.test}

  ## **Usage**<br>
  ${answer.usage}

  ## **Contributing**<br>
  ${answer.contributing}

  ## **Questions**<br>
  <img src="https://github.com/${answer.name}.png" width="150" height="150"/>
    If you have any questions about the repo, contact me directly at <a href="mailto:${answer.email}">${answer.email}</a>
  `;
}

module.exports = generateMarkdown;
