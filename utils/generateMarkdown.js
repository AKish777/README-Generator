// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  } return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
Project contains a license under the ${license} license.`;
  } return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
  ${data.description}

## Contributing
  ${data.contribution}

## Installation
  ${data.install}

## Test
  ${data.test}

## Usage
  ${data.usage}
  
${renderLicenseSection(data.license)}

## Collaborators
  ${data.collaborators}

## Contact
  In case of any questions on this application contact me at: ${data.email}.
  Also! If you're interested, you can find a variety of my work on my githuh: [${data.username}](https://github.com/${data.username}/).
  `;
}

module.exports = generateMarkdown;