create database LibraryDB;

use LibraryDB;

create table Books(
	BookID int primary key auto_increment,
    Title varchar(255) not null,
    Author varchar(100),
    PublishedYear int
);


    
