'use strict';

module.exports = class Database {
    constructor(database_name) {
        this.database_name = database_name;
    }

    execute_commands() {
        console.log(this.database_name);
    }

    migrate_database_tables() {

    }

    check_database_exists() {

    }

    create_database() {

    }

    database_connection() {
        
    }
}
