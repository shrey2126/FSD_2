// Importing the chalk module
import chalk from "chalk";

// Example usage of chalk
console.log(chalk.blue('Hello, World!')); // Blue text
console.log(chalk.green('This is green text!')); // Green text
console.log(chalk.bold('This is bold text!')); // Bold text
console.log(chalk.bgRed('This text has a red background!')); // Red background
console.log(chalk.red('This is a ') + chalk.underline.bgYellow('combined text!')); // Combined styles
