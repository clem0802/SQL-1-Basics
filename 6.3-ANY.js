SQL (2022.03.29) - Mimo app (SQL - ANY)

__________________________________
| students                        |
-----------------------------------
| name          | int   | Biology |
-----------------------------------
| Ava Smith     | 1     | Physics |
-----------------------------------
| Lin Wong      | 3     | Biology |
-----------------------------------
| Sam Mitchell  | 2     | History |
-----------------------------------
| Nora Hansen   | 4     | Biology |
-----------------------------------
  
/*------------------------------------------------------------------*/ 
SELECT *
FROM students
WHERE major = 'Biology'
AND name = 'Lin Wong'
AND year = 3;
// name            int        major  
// Lin Wong        3          Biology
/*------------------------------------------------------------------*/ (major = 'Biology' AND year <> 1)
SELECT *
FROM students
WHERE major = 'Biology'
AND year <> 1;
// name            int        major  
// Lin Wong        3          Biology
// Nora Hansen     4          Biology

/*----------------------------------(the same)---------------------------------*/ (year >= 2 AND year <= 4)
/*----------------------------------(the same)---------------------------------*/ (BETWEEN 2 AND 4)
SELECT *
FROM students
WHERE year >= 2
AND year <= 4;
// name            int        major  
// Lin Wong        3          Biology
// Sam Mitchell    2          History
// Nora Hansen     4          Biology

SELECT *
FROM students
WHERE year BETWEEN 2 AND 4;
// name            int        major  
// Lin Wong        3          Biology
// Sam Mitchell    2          History
// Nora Hansen     4          Biology


/*------------------------------------------------------------------*/
// get items made before 1970 byt a "manufacturer" other than "Ford"
SELECT *
FROM inventory
WHERE year < 1970
AND manufacturer <> 'Ford';
/*------------------------------------------------------------------*/
// get items with and "ID" of 2 or more, and a "year" greater than 1955
SELECT *
FROM inventory
WHERE ID >= 2
AND year > 1955;






