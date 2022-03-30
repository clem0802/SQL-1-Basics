SQL (2022.03.30) - Mimo app (SQL - OR)
// we use "NOT" to get all items that don't satisfy a condition
// like all students with a "name" not starting with "a"
// to get items that don't satisfy a condition
// we code "NOT" between the "column name" and the "condition's operator"

__________________________________
| students                        |
-----------------------------------
| name          | int   | major   |
-----------------------------------
| Ava Smith     | 1     | Biology |
-----------------------------------
| Luis Garcia   | 1     | Physics |
-----------------------------------
| Lin Wong      | 3     | Biology |
-----------------------------------
| Sam Mitchell  | 2     | History |
-----------------------------------
| Nora Hansen   | 4     | Biology |
-----------------------------------
  
/*------------------------------------------------------------------*/ (LIKE 'a%') 
SELECT *
FROM students
WHERE name LIKE 'a%';
// name            int        major  
// Ava Smith       1          Biology
/*------------------------------------------------------------------*/ NOT LIKE 'a%'
SELECT *
FROM students
WHERE name NOT LIKE 'a%';
// name            int        major  
// Luis Garcia     1          Physics
// Lin Wong        3          Biology
// Sam Mitchell    2          History
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ NOT LIKE '%a%'
SELECT *
FROM students
WHERE name NOT LIKE '%a%';
// name            int        major  
// Lin Wong        3          Biology
/*------------------------------------------------------------------*/ NOT IN ('History', 'Physics') 
SELECT *
FROM students
WHERE major NOT IN ('History', 'Physics');
// name            int        major  
// Ava Smith       1          Biology
// Lin Wong        3          Biology
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ NOT BETWEEN 1 AND 3
SELECT *
FROM students
WHERE year NOT BETWEEN 1 AND 3;
// name            int        major  
// Nora Hansen     4          Biology


/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
________________________________
| inventory                    |
--------------------------------
| ID   | manufacturer   | year |
--------------------------------
| 1    | Ford           | 1955 |
--------------------------------
| 2    | Bentley        | 2019 |
--------------------------------
| 3    | Ford           | 1970 |
--------------------------------
| 4    | Jaguar         | 1955 |
--------------------------------

// items with a "year"
// NOT equal to 1950 "OR" 1970
SELECT *
FROM inventory
WHERE year NOT IN (1950, 1970);


// items with an ID 
// lesss than 1 "OR"
// larger than 3
SELECT *
FROM inventory
WHERE ID NOT BETWEEN 1 AND 3;


// select only the ID values of cars with a 
// manufacturer NOT starting with the letter b
SELECT ID
FROM inventory
WHERE manufacturer NOT LIKE 'b%';
// ID    
// 1   
// 3  
// 4


// use "NOT" and 'b%' to select items with a
// manufacturer NOT starting with the letter b
SELECT *
FROM inventory
WHERE manufacturer NOT LIKE 'b%';
// ID    manufacturer    year 
// 1     Ford            1955
// 3     Ford            1970
// 4     Jaguar          1955


// select all items with an ID 
// different from 1 OR 2
SELECT *
FROM inventory
WHERE ID NOT IN (1, 2);
// ID    manufacturer    year 
// 3     Ford            1970
// 4     Jaguar          1955


// select items with a year
// less than 1950 and greater than 1970
// with "NOT BETWEEN3
SELECT *
FROM inventory
WHERE year NOT BETWEEN 1950 AND 1970;
// ID    manufacturer    year 
// 2     Bentley         2019






