// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  
  # Description:
  ${data.description}

  # Installation:
  ${data.installation}

  # Usage:
  ${data.usage}

  # Contribution:
  ${data.contribution}
`;
}


module.exports = generateMarkdown;
