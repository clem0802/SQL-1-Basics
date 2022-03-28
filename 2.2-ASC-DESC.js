
SQL (2022.03.28) - Mimo app (SQL - ASC, DESC)
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
// "ORDER BY" order items ascending by default
// "ASC" is a default value
// to be place at the end
  SELECT *
  FROM patients
  ORDER BY age ASC;
// name      age
// Smith     19
// Theophin  28
// Wilson    45
// Jones     60

  SELECT *
  FROM patients
  ORDER BY age DESC;
// name      age
// Jones     60
// Wilson    45
// Theophin  28
// Smith     19


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

SELECT *
FROM countries
ORDER BY gdp ASC;
// name      gdp
// Iceland   21.6
// Greece    187.46
// Sweden    474.15
// Germany   3449.05

SELECT *
FROM countries
ORDER BY name DESC;
// name      gdp
// Sweden    474.15
// Iceland   21.6
// Greece    187.46
// Germany   3449.05


