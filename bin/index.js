#!/usr/bin/env node

/******************************
*   MIT License

    Copyright (c) 2021 Young-Soul

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */
const current_directory = process.cwd();
const dotenv_filepath = (`${current_directory}/.env`) ? `${current_directory}/.env` : './';

require('dotenv').config({path: dotenv_filepath});
const display_app_logo = require('../public/js/app_logo');
const app_error = require('../public/js/errors');
const args = require('minimist')(process.argv.slice(2)); 
const application = require('../public/js/app');

// Display app logo
display_app_logo();

// display error.
app_error(process.argv);

/*******
 * run the application if the above
 * display error method returns success.
 */ 
const run_application = () => { 
    const database_host = process.env.DB_HOST;
    const database_name = process.env.DB_NAME; 
    const database_username = process.env.DB_USERNAME;
    const database_password = process.env.DB_PASSWORD;

    const database_tables_path = process.env.DB_TABLES_PATH;
    
    const app = new application(dotenv_filepath, database_host, database_name, database_username, database_password, database_tables_path, process.argv.slice(2));
    app.execute_commands();
}

run_application();


