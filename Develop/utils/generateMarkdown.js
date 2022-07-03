// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// const renderLicenseBadge = licenseBadge => {

// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// const renderLicenseLink = licenseLink => {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, licenseBadge, licenseLink) => {
  if (!licenseSection) {
    return '';
  }

  return `
    <section id="license">
      <h2> License Section ${license} </h2>
      <p>Is this working?</p>
      <a>
      ${licenseLink}
      <span>${licenseBadge}</span>
      </a>
    </section>
  `;
};

// Created a function to generate markdown for README

module.exports = generateMarkdown => {

  const { data, description, ...license } = generateMarkdown;
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${data.title}</h1>
        <nav class="flex-row">
        </nav>
      </div>
    </header>
    <main class="container my-5">
      
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${data.title}</h3>
    </footer>
  </body>
  </html>
  `;
};
