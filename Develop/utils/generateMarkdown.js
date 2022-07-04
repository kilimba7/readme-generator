// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === 'None') {
    return ''
  
  } else if (license === 'Apache License 2.0' ) { 
    return "[![License](https://img.shields.io/badge/License-Apache%20License%202.0-red)](https://opensource.org/licenses/Apache-2.0)"
 
  } else if (license === 'The MIT License' ) { 
    return "[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/mit)"
  
  } else if (license === 'GNU General Public License 3.0' ) { 
    return "[![License](https://img.shields.io/badge/License-GNU%20General%20Public%20License%203.0-brightgreen)](https://opensource.org/licenses/GPL-3.0)"
  }
  
};

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  
  } else if (license === 'Apache License 2.0' ) { 
    return 'Apache License 2.0: https://opensource.org/licenses/Apache-2.0'
 
  } else if (license === 'The MIT License' ) { 
    return 'The MIT License: https://opensource.org/licenses/mit'
  
  } else if (license === 'GNU General Public License 3.0' ) { 
    return 'GNU General Public License 3.0: https://opensource.org/licenses/GPL-3.0'
  }
}


// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)



  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  - Github Username: https://github.com/${data.github}
  - Please feel free to email me: ${data.email}
`;
}


module.exports = generateMarkdown;
