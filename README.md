# Multer File Upload Project

## Overview

This project demonstrates a simple file upload system with a front-end and back-end using Multer, Express, and Bootstrap. Users can select a file through the front-end interface, and the file is then uploaded to the server. The server, implemented with Node.js and Express, handles the file upload using the Multer middleware and stores the files in the "uploads/" directory.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Front-end (multerfrontend)

1. Open a terminal and navigate to the `multerfrontend` directory.
2. Open the `index.html` file in a web browser.

### Back-end (multerbackend)

1. Open a terminal and navigate to the `multerbackend` directory.
2. Run the following commands:

   ```bash
   npm install
   npm start
   ```

3. The server will start on http://localhost:5000.

## Usage

1. Open the front-end interface in a web browser.
2. Click the "Choose File" button to select a file for upload.
3. Click the "Upload" button to initiate the file upload process.
4. The back-end server will handle the file upload and respond with a success message or an error alert.

## Project Structure

### Front-end (multerfrontend)

- `index.html`: HTML file containing the front-end interface.
- `index.js`: JavaScript file handling the file upload process.

### Back-end (multerbackend)

- `index.js`: Entry point for the Express server.
- `package.json`: Node.js package configuration file.
- `uploads/`: Directory to store uploaded files.

## Dependencies

- **multer:** ^1.4.5-lts.1
- **express:** ^4.18.2
- **cors:** ^2.8.5
- **nodemon:** ^3.0.2

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, please open an issue or submit a pull request.
