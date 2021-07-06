'use strict';

module.exports = class Database {
    constructor(database_name) {
        this.database_name = database_name;
    }

    execute_commands() {
        console.log(this.database_name);
    }

    check_database_exists() {

    }

    create_database() {

    }

    migrate_database() {

    }

    connection() {
        
    }
}
