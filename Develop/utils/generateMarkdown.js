// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description:
  ${data.description}

  ## Table of Contents:
  - Installation
  - Usage
  - Credits
  - License
  - Badges
  - Features



  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}
  
  ## Credits:
  ${data.credits}

  ## License:
  ${data.license}
  ${data.link}

  ## Badges:
  ${data.badges}

  ## Features:
  ${data.features}

  ## How to Contribute:
  ${data.contribution}

  ## Tests:
  ${data.tests}
`;
}


module.exports = generateMarkdown;
