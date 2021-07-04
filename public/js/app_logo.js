const chalk = require('chalk');
const figlet = require('figlet');

module.exports = () => {
    console.log(
        chalk.yellow(
            figlet.textSync('Database Serve', { horizontalLayout: 'full' })
        )
    );
}