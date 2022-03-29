SQL (2022.03.29) - Mimo app (SQL - AND => &&)
// use the keyword "AND" to chain two or more conditions withing a "WHERE" clause

__________________________________
| students                        |
-----------------------------------
| name          | int   | Biology |
-----------------------------------
| Ava Smith     | 1     | Physics |
-----------------------------------
| Luis Garcia   | 1     | Biology |
-----------------------------------
| Lin Wong      | 3     | History |
-----------------------------------
| Sam Mitchell  | 2     | Biology |
-----------------------------------
| Nora Hansen   | 4     | Biology |
-----------------------------------

/*------------------------------------------------------------------*/ (year=1)
SELECT *
FROM students
WHERE int = 1; 
// name            int        major  
// Ava Smith       1          Biology
// Luis Garcia     1          Physics
/*------------------------------------------------------------------*/ (major='Biology')
SELECT *
FROM students
WHERE major='Biology'; 
// name            int        major  
// Ava Smith       1          Biology
// Lin Wong        3          Biology
// Nora Hansen     4          Biology
/*------------------------------------------------------------------*/ (major='Biology' AND year=1)
SELECT *
FROM students
WHERE major='Biology'
AND year = 1;
// name            int        major  
// Ava Smith       1          Biology








