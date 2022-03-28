SQL (2022.03.28) - Mimo app (SQL - Ordering Data)

_______________________
| patients            |
-----------------------
| name       | age    |
-----------------------
| Smith      | 19     |
-----------------------
| Jones      | 60     |
-----------------------
| Wilson     | 45     |
-----------------------
| Theophin   | 28     |
-----------------------
// understanding data is easier when the items are ordered, 
// like "patients" ORDER BY their "name", alphabetically
  SELECT *
  FROM patients
  ORDER BY name
// name      age
// Jones     60
// Smith     19
// Theophin  28
// Wilson    45
  
 
/*------------------------------------------------------------------*/
__________________________
| countries              |
--------------------------
| name       | gdp       |
--------------------------
| Greece     | 187.46    |
--------------------------
| Sweden     | 474.15    |
--------------------------
| Iceland    | 21.6      |
--------------------------
| Germany    | 3449.05   |
--------------------------
// rearrange the items in the "countries" table with "ORDER BY"
SELECT *
FROM countries
ORDER BY name;
// name      gdp
// Germany   3449.05
// Greece    187.46
// Iceland   21.6
// Sweden    474.15






