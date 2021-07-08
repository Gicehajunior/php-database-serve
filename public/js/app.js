'use strict';

const mysql = require('mysql2');
const inquirer = require('inquirer');
const read_user_line = require('readline');

module.exports = class Database {
    constructor(database_host='', database_name='',  database_username='', database_password='', database_tables_path='', args) {
        this.database_host = database_host
        this.database_name = database_name;
        this.database_username = database_username;
        this.database_password = database_password;
        this.database_tables_path = database_tables_path;
        this.args = args;
    }

    execute_commands() { 
        if (this.args.length > 0) {
            this.inquire_user(this.database_name);
        }
        else {
            console.log('No arguments provided. Please see Help below.');
        }
    }

    inquire_user(database_name) {
        let query;

        if (database_name == '' || database_name !== '') { 
            query = { type: 'confirm', name: 'database_name', message: 'Ready to continue with the existing database name?', default: false }
            this.prompt_user(query);
        }
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
            this.database_name = database_name;
            this.create_database(this.database_name);

            read.close();
        })
    }


    migrate_database_tables() {
        
    }

    check_database_exists() { 

    }

    create_database(database) {
        console.log('Ready to create your database. Please wait...'); 
        let connection = this.database_connection(database);

        connection.query(`CREATE DATABASE ${database}`, function (err, result) {
            if (err) { 
                console.log(`ERROR: ${err.sqlMessage}`);
                return;
            }
            else {
                console.log("Database created");
            } 
        }); 
    }

    database_connection(database_name) {
        this.database_name = database_name;

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
