SQL (2022.03.28) - Mimo app (SQL - SELECT Data)
// SQL is a language for manipulating data
// we use "SELECT" to select data

__________________________________
| Users                           |
-----------------------------------
| userID | name | email           |
-----------------------------------
| 1      | Sam  | sam17@mail.com  |
-----------------------------------
| 2      | Remy | rem@mail.com    |
-----------------------------------
| 3      | Luis | luis_99@mail.com|
-----------------------------------

// in script.sql we type as below to select the values on the "name" column
    SELECT name 
    FROM users
// "FROM users" says which "TABLE" we want to select the "name" column from
// when requesting data with SQL statments like SELECT we are making a "QUERY"
  
/*------------------------------------------------------------------*/
  
__________________________________
| Movies                          |
-----------------------------------
| title          | year | rating  |
-----------------------------------
| The God fahter | 1972 |   9.2   |
-----------------------------------
| The Matrix     | 1999 |   8.7   |
-----------------------------------
| Alien          | 1979 |   8.4   |
-----------------------------------

SEKECT title 
FROM movies;
  
  
  
  
 
