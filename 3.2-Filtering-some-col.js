SQL (2022.03.28) - Mimo app (SQL - Filtering Some Columns)

____________________________________
| students                         |
------------------------------------
| name           |  year | major   |
------------------------------------
| Ava Smith      |  1    | Biology |
------------------------------------
| Luis Garcia    |  1    | Physics |
------------------------------------
| Hans Theophin  |  3    | Biology |
------------------------------------
// if we want to select only two columns, instead of => SELECT *
SELECT name, year
FROM students
WHERE year = 1;
// name            year  
// Ava Smith       1     
// Luis Garcia     1   

SELECT name, major
FROM students
WHERE year = 1;
// name            major 
// Ava Smith       Biology     
// Luis Garcia     Physics


/*------------------------------------------------------------------*/
_____________________________________
| membership                        |
-------------------------------------
| name    | email           | type  |
-------------------------------------
| Sam     | sam17@mail.com  | free  |
-------------------------------------
| Remy    | rem@mail.com    | pro   |
-------------------------------------
| Luis    | luis_99@mail.com| basic |
-------------------------------------
| Kim     | kim_22@mail.com | pro   |
-------------------------------------
// we don't have to select the column we're puttin g a condition
  
SELECT name, type
FROM membershiop
WHERE type = 'pro';
// name    type
// Remy    pro
// Kim     pro
  

SELECT email, type
FROM membershiop
WHERE type = 'pro';
// email             type
// rem@mail.com      pro
// kim_22@mail.com   pro


SELECT email
FROM membershiop
WHERE type = 'free';
// email            
// sam17@mail.com   
