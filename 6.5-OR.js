SQL (2022.03.30) - Mimo app (SQL - OR)
=> "OR", to chain different filtering options, 
   // like selecting students who are majoring in Biology
   // "OR" are in their first year
   // items that satisfy AT LEAST one of the conditions linked with "OR"
   // the query selects an item "ONLE ONCE" even if it satisfies conditions multiple times

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
  
/*------------------------------------------------------------------*/ (year = 1)  
SELECT *
FROM students
WHERE major = 'Biology'
OR year = 1;
// name            int        major  
// Ava Smith       1          Biology
// Luis Garcia     1          Physics
/*------------------------------------------------------------------*/ (major = 'Biology') 
SELECT *
FROM students
WHERE major = 'Biology'
// name            int        major  
// Ava Smith       1          Biology
// Lin Wong        3          Biology
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ (major = 'Biology'  OR  year = 1) 
SELECT *
FROM students
WHERE major = 'Biology'
OR year = 1;
// name            int        major  
// Ava Smith       1          Biology
// Luis Garcia     1          Physics
// Lin Wong        3          Biology
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ (major = 'Biology'  OR  year <= 2) 
SELECT *
FROM students
WHERE major = 'Biology'
OR year <= 2;
// name            int        major  
// Ava Smith       1          Biology
// Luis Garcia     1          Physics
// Sam Mitchell    2          History
/*------------------------------------------------------------------*/ (major = 'Biology'  OR  name starting with s) 
SELECT *
FROM students
WHERE major = 'Biology'
OR name LIKE 's%';
// name            int        major  
// Ava Smith       1          Biology
// Lin Wong        3          Biology
// Sam Mitchell    2          History
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ (major = 'History'  OR  major <> 'Physics') 
SELECT *
FROM students
WHERE major = 'History'
OR major <> 'Physics';
// name            int        major  
// Ava Smith       1          Biology
// Lin Wong        3          Biology
// Sam Mitchell    2          History
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ (major = 'Biology'  OR  name starting with s  OR  year = 1) 
SELECT *
FROM students
WHERE major = 'Biology'
OR name LIKE 's%'
OR year = 1;
// name            int        major  
// Ava Smith       1          Biology
// Luis Garcia     1          Physics
// Lin Wong        3          Biology
// Sam Mitchell    2          History
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ major = 'Biology' OR major = 'Physics'   (SAME AS)
/*------------------------------------------------------------------*/ major IN ('History, 'Physics') 
// because they are from the same COLUMN !!
SELECT *
FROM students
WHERE IN ('History, 'Physics') 
// name            int        major  
// Luis Garcia     1          Physics
// Sam Mitchell    2          History




/*------------------------------------------------------------------*/ 
/*------------------------------------------------------------------*/
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

SELECT *
FROM inventory
WHERE manufacturer = 'Ford'
OR year = 2019;
// ID    manufacturer    year 
// 1     Ford            1955
// 2     Bentley         2019
// 3     Ford            1970
/*---------------------------------*/
SELECT *
FROM inventory
WHERE manufacturer = 'Jaguar'
OR year = 2019;
// ID    manufacturer    year 
// 2     Bentley         2019
// 4     Jaguar          1955
/*---------------------------------*/
SELECT *
FROM inventory
WHERE manufacturer = 'Bentley'
OR year = 1970;
// ID    manufacturer    year 
// 2     Bentley         2019
// 3     Ford            1970
/*---------------------------------*/
// items with an ID of 2
// with year greater than 1960
SELECT *
FROM inventory
WHERE ID = 2
OR year > 1960;
// ID    manufacturer    year 
// 2     Bentley         2019
// 3     Ford            1970
/*---------------------------------*/
// items with ayear between 1950 and 1970
// OR manufacturer starting with j
SELECT *
FROM inventory
WHERE year BETWEEN 1950 AND 1970
OR manufacturer LIKE 'j%';
// ID    manufacturer    year 
// 1     Ford            1955
// 3     Ford            1970
// 4     Jaguar          1955
/*---------------------------------*/
// items with ayear between 1950 and 1970
// OR manufacturer starting with j
// OR the ID = 4
SELECT *
FROM inventory
WHERE year BETWEEN 1950 AND 1970
OR manufacturer LIKE 'j%'
OR ID = 4;
// ID    manufacturer    year 
// 4     Jaguar          1955
/*---------------------------------*/
// items with an ID between 1 and 3, "OR"
// manufacturer of either 'Jaguar' or 'Ford'
SELECT *
FROM inventory
WHERE ID BETWEEN 1 AND 3
OR manufacturer IN ('Jaguar', 'Ford')
/*---------------------------------*/
// year >= 1950 OR year <= 1970   (NOT EQUIVALENT TO)
// year IN (1950, 1970)
/*---------------------------------*/
// year IN (1950, 3)   (NOT EQUIVALENT TO)
// year = 1950 OR ID = 3
// cause "year = 1950 OR ID = 3" sets conditions on two different columns





