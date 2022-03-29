SQL (2022.03.28) - Mimo app (SQL - Inequality <>)
                             
// sometimes we want to select data that doesn't satisfy a condition
// like all students that are not in their first year
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

SELECT *
FROM students
WHERE year <> 1;
// name             year   major
// Hans Theophin    3      Biology


SELECT *
FROM students
WHERE year <> 'Biology';
// name           year   major
// Luis Garcia    1      Physics


/*------------------------------------------------------------------*/
___________________________________
| companies                       |
-----------------------------------
| name             | years_active |
-----------------------------------
| Rocket Delivery  | 3            |
-----------------------------------
| Teachya          | 1            |
-----------------------------------
| Hyped            | 8            |
-----------------------------------
| Thread Co.       | 1            |
-----------------------------------
  
SELECT *
FROM companies
WHERE years_active <> 8;
// name                years_active
// Rocket Delievery    3    
// Teachya             1
// Thread Co.          1
  
  
