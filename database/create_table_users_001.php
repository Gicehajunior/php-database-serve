<?php
include('database.php');

class CreateUsersTable{

    /******
     * Run the create table query
     * 
     * @return void
     */
    public function create() {
        $table = array(
            'id' => 'id int(11) PRIMARY KEY AUTOINCREMENT NOT NULL', 
            'created_at' => 'created_at datetime NOT NULL',
            'updated_at' => 'updated_at datetime NOT NULL'
        );

        return $table;
    }

}