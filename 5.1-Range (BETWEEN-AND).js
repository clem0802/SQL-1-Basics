SQL (2022.03.29) - Mimo app (SQL - Filtering with Ranges)

_______________________________
| movies                      |
-------------------------------
| title             | rating  |
-------------------------------
| The God fahter    | 9.2     |
-------------------------------
| The Matrix        | 8.7     |
-------------------------------
| La Strada         | 8       |
-------------------------------
| The Dark Knight   | 9       |
-------------------------------
// use a condition to select items that have property withing a range
// between 9 and 10
  SELECT * 
  FROM movies
  WHERE rating BETWEEN 9 AND 10;
// title             rating
// The Godfather     9.2
// The Dark Knight   9


  SELECT * 
  FROM movies
  WHERE rating BETWEEN 8 AND 9;
// title             rating
// The GMatrix       8.7
// La Strada         8
// The Dark Knight   9
