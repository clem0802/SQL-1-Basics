SQL (2022.03.29) - Mimo app (SQL - AND(ii))
=> "AND", to chain any kind of conditions, including conditions with   BETWEEN / IN / LIKE

__________________________________
| students                        |
-----------------------------------
| name          | int   | major   |
-----------------------------------
| Ava Smith     | 1     | Biology |
-----------------------------------
| Lin Wong      | 3     | Biology |
-----------------------------------
| Sam Mitchell  | 2     | History |
-----------------------------------
| Nora Hansen   | 4     | Biology |
-----------------------------------
  
SELECT *
FROM students
WHERE major = 'Biology'
AND year BETWEEN 2 AND 4;
// name            int        major  
// Lin Wong        3          Biology
// Nora Hansen     4          Biology


/*------------------------------------------------------------------*/ (exo)
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

// this query selects: items manufactured by either For or Jaguar
// between the years 1950 and 1960
SELECT *
FROM inventory
WHERE manufacturer IN ('Ford', 'Jaguar')
AND year BETWEEN 1950 AND 1960;


// code "AND" followed by a condition that checks if the "manufacturer" starts with the letter f
SELECT *
FROM inventory
WHERE year BETWEEN 1950 AND 1960
AND manufacturer LIKE 'f%';
// ID    manufacturer    year 
// 1     Ford            1955


// link two conditions such that the query selects
// items with an ID between 2 and 4
// year of either 1960 or 1970
SELECT *
FROM inventory
WHERE ID BETWEEN 2 AND 4
AND year IN (1960, 1970);
// ID    manufacturer    year 
// 3     Ford            1970




