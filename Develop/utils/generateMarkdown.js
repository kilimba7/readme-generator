// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// const renderLicenseBadge = licenseBadge => {

// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// const renderLicenseLink = licenseLink => {

// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// const renderLicenseSection = (license, licenseBadge, licenseLink) => {
//   if (!licenseSection) {
//     return '';
//   }

//   return `
//     <section id="license">
//       <h2> License Section ${license} </h2>
//       <p>Is this working?</p>
//       <a>
//       ${licenseLink}
//       <span>${licenseBadge}</span>
//       </a>
//     </section>
//   `;
// };



// // create the projects section
// const generateQuestions = questionsArr => {
//   const questionsHtmlArr = questionsArr.map(({ title, description, installation}) => {
//       return `
//           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//             <h3 class="portfolio-item-title text-light">${title}</h3>
//             <h5 class="portfolio-languages">
//               Built With:
//             </h5>
//             <p>${description}</p>
//             <p>${installation}</p>
//           </div>
//         `;
//     });
  
//     return `
//       <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${questionsHtmlArr.join('')}
//         </div>
//       </section>
//     `;
//   };
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  Description:
  # ${data.description}

  Installation:
  # ${data.installation}

  Usage:
  # ${data.usage}

  Contribution:
  # ${data.contribution}
`;
}


module.exports = generateMarkdown;
