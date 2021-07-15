'use strict';

const mysql = require('mysql2');
const inquirer = require('inquirer');
const read_user_line = require('readline');
const fs = require('fs');

module.exports = class Database {
    constructor(dotenv_filepath, database_host='', database_name='',  database_username='', database_password='', database_tables_path='', args) {
        this.dotenv_filepath = dotenv_filepath
        this.database_host = database_host 
        this.database_name = database_name;
        this.database_username = database_username;
        this.database_password = database_password;
        this.database_tables_path = database_tables_path;
        this.args = args;
        this.new_database_name = '';
    }

    execute_commands() { 
        if (this.args.length > 0) {
            if (!this.args.includes('create') && this.args.includes('push')) {
                this.migrate_database_tables(); 
            }
            else {
                this.inquire_user(this.database_name);
            }
        }
        else {
            console.log(`No arguments provided. Please see Help, https://github.com/Gicehajunior/php-database-serve.`);
        }
    }

    inquire_user(database_name) {
        let query;

        if (database_name == '') {
            console.log('Database name seems to be null in your dotenv file');
            this.read_user_lines();
        }
        else if (database_name !== '') { 
            query = { type: 'confirm', name: 'database_name', message: 'Ready to continue with the existing database name?', default: false }
            this.prompt_user(query);
        }
    }

    overwrite_env_file(dotenv_filepath) {
        const dotenv_path = dotenv_filepath; 

        fs.readFile(`${dotenv_path}`, 'utf8', (error, data) => {
            if (error) {
                console.log(error);

            }
            else {
                let env_replacement = data.replace(`${this.database_name}`, this.new_database_name);
                console.log(`Old Database: ${this.database_name}`);
                console.log(`New Database: ${this.new_database_name}`);

                fs.writeFile(`${dotenv_path}`, `${env_replacement}`, 'utf8', (error) => {
                    if (error) {
                        console.log(error);
                    }
                });
            }
        });
    }

    prompt_user(query) {
        inquirer.prompt([
            query
        ])
        .then((answer) => {  
            if (answer.database_name == false) {  
                this.read_user_lines();
            }
            else if (answer.database_name == true) {  
                this.create_database(this.database_name); 
            }
        });
    }

    read_user_lines() { 
        const read = read_user_line.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        read.question("Enter database name to create, ", (database_name) => {
            this.new_database_name = database_name;
            this.create_database(this.new_database_name); 
            this.overwrite_env_file(this.dotenv_filepath);

            read.close();
        })
    }


    migrate_database_tables() {
        console.log(`Ready to migrate the database tables. Please wait...`);
    }

    check_database_exists() { 

    }

    create_database(database) {
        console.log('Ready to create your database. Please wait...'); 
        let connection = this.database_connection(database);
        let message;
        let args = this.args;
        let migrate_database_tables = this.migrate_database_tables;

        connection.query(`CREATE DATABASE ${database}`, function (err, result) {
            if (err) { 
                console.log(`ERROR: ${err.sqlMessage}`);
                return;
            }
            else {
                message = `Database created successfully!`;
                console.log(`${message}`); 
                
                if (args.includes('push')) { 
                    migrate_database_tables(); 
                }
            } 
        }); 
    }

    database_connection() { 
        const connection = mysql.createConnection({
            'host': this.database_host,
            'user': this.database_username,
            'password': this.database_password
        });
        connection.connect((err) => {
            if (err) { 
                console.log(`ERROR:  ${err.sqlMessage}`);
                return;
            } 
            
        });

        return connection;
    }
}
