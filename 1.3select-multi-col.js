SQL (2022.03.28) - Mimo app (SQL - SELECT Multiple Columns)

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
  
// to select multiple columns (name & email)
SELECT name, email
FROM users;


/*------------------------------------------------------------------*/
___________________________________
| stock                            |
------------------------------------
| description    |  S  |  M  |  L  |
-----------------------------------
| jeans          |  S  |  M  |  L  |
-----------------------------------
| t-shirt        |  S  |  M  |  L  |
-----------------------------------
| sweater        |  S  |  M  |  L  |
------------------------------------

// to select "ALL columns" of a table, have to code all of their names (description, S, M, L)
SELECT description, S, M, L
FROM stock;
// to avoid wasting time coding all column names, 
// we can select all columns of a table using the select all symbol * instead
SELECT * 
FROM stock;





