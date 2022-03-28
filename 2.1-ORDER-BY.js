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
// like "patients" ordered by their "name"
  SELECT *
  FROM patients
  ORDER BY name
