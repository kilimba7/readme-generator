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
        message: 'Please enter any installation instructions if applicable'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information if applicable'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contributors if applicable'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide examples on how to run your application'
    }
    ]);
};


    


// TODO: Create a function to write README file
questions()
.then(readmeData => {
    const projectReadme = generatePage(readmeData);

    fs.writeFile('./projectREADME.md', projectReadme, err => {
        if (err) throw new Error (err);

        console.log('README created! Check out the index to see it displayed!')
    });
});


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();