SQL (2022.03.28) - Mimo app (SQL - Using Conditions)

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
// if we want to filter for items that satisfy a condition, 
// like only students majoring in Biology
SELECT *
FROM students
WHERE major = "Biology";
// name            year   major
// Ava Smith       1      Biology
// Hans Theophin   3      Biology


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
// code a query that uses * to select all columns of all entries from the "membership" table
SELECT *
FROM membershiop;

SELECT *
FROM membershiop
WHERE type = "pro";
// name    email             type
// Remy    rem@mail.com      pro
// Kim     kim_22@mail.com   pro
  
  
  
  
