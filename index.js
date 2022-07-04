// Packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generatePage = require('./Develop/utils/generateMarkdown');


// Created an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project! (Required)',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license to use if applicable',
        choices: [
        'Apache License 2.0',
        'The MIT License',
        'GNU General Public License 3.0',
        'None']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you would like other developers to contribute, you can include guidelines for how to do so'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email for a point of contact(Required)!',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
    }
    
    ]);
};

// Create a function to write README file
questions()
.then(readmeData => {
    const projectReadme = generatePage(readmeData);

    fs.writeFile('./projectREADME.md', projectReadme, err => {
        if (err) throw new Error (err);

        console.log('README created! Check out the index to see it displayed!')
    });
});

