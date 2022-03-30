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
  
/*------------------------------------------------------------------*/ (year = 1)  (à voir)
SELECT *
FROM students
WHERE major = 'Biology'
OR year = 1;
// name            int        major  
// Ava Smith       1          Biology
// Luis Garcia     1          Physics
/*------------------------------------------------------------------*/ (major = 'Biology')  (à voir)
SELECT *
FROM students
WHERE major = 'Biology'
// name            int        major  
// Ava Smith       1          Biology
// Lin Wong        3          Biology
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ (major = 'Biology'  OR  year = 1) (OK)
SELECT *
FROM students
WHERE major = 'Biology'
OR year = 1;
// name            int        major  
// Ava Smith       1          Biology
// Luis Garcia     1          Biology
// Lin Wong        3          Biology
// Nora Hansen     4          Biology



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

SELECT *
FROM inventory
WHERE manufacturer = 'Jaguar'
OR year = 2019;
// ID    manufacturer    year 
// 2     Bentley         2019
// 4     Jaguar          1955

SELECT *
FROM inventory
WHERE manufacturer = 'Bentley'
OR year = 1970;
// ID    manufacturer    year 
// 2     Bentley         2019
// 3     Ford            1970




