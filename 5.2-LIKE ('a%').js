SQL (2022.03.29) - Mimo app (SQL - LIKE 'a%')
// "%" is a  => "WILDCARD"

______________________________
| writers                    |
------------------------------
| frist_name    | last_name  |
------------------------------
| A             | Milne      |
------------------------------
| Ursula        | Le Guin    |
------------------------------
| Anne          | Tyler      |
------------------------------
| Mark          | Twain      |
------------------------------

// use "LIKE" to check if values in a column follows a "pattern"
// and this is ONLY for "TEXT" values
// we CANNOT use LIKE for "NUMERICAL" values
// the text after the "LIKE" keyword is a "pattern", like 'a%' below
// a pattern is a piece of text we want the values in a column to match
SELECT *
FROM writers
WHERE first_name LIKE 'a%';
// first_name      last_name    
// A               Milne
// Anne            Tyler


// this % matches any text of any length, any text of zero or more characters
// so all first_name that contains a letter "A"
SELECT *
FROM writers
WHERE first_name LIKE '%';
// first_name      last_name    
// A               Milne
// Ursula          Le Guin
// Anne            Tyler
// Mark            Twain



/*------------------------------------------------------------------*/
_________________________________________________
| coffee                                        |
-------------------------------------------------
| name                | aroma                   |
-------------------------------------------------
| Nocciola Organic    | chocolate, nuts         |
-------------------------------------------------
| El Capitan          | caramel, butterscottch  |
-------------------------------------------------
| Los Robles          | grapes, white chocolate |
-------------------------------------------------
| Montecristo         | walnut, apricot         |
-------------------------------------------------
  
SELECT *
FROM coffee
WHERE aroma LIKE 'c%';
// name                aroma   
// Nocciola Organic    chocolate, nuts
// El Capitan          caramel, butterscottch


SELECT *
FROM coffee
WHERE aroma LIKE 'chocolate%';
// name                aroma   
// Nocciola Organic    chocolate, nuts








