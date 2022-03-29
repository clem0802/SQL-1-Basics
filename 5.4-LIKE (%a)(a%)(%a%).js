SQL (2022.03.29) - Mimo app (SQL - LIKE  (%a) (a%') (%a%))
//  %  => is a WILDCARD

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

/*------------------------------------------------------------------*/ '%'
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
/*------------------------------------------------------------------*/ a
// with a pattern like 'a' we can have only "A, Milne"
// the first_name has no other letter beside 'a'
SELECT *
FROM writers
WHERE first_name LIKE 'a';
// first_name      last_name    
// A               Milne
/*------------------------------------------------------------------*/  %a  => END in a
// writers (with first_name ENDING in 'a')
SELECT *
FROM writers
WHERE first_name LIKE '%a';
// first_name      last_name 
// A               Milne
// Ursula          Le Guin
/*------------------------------------------------------------------*/ a%  => START with a
// writers (with first_name STARTING with 'a')
// use "LIKE" to check if values in a column follows a "pattern"
// and this is ONLY for "TEXT" values
// the text after the "LIKE" keyword is a "pattern", like 'a%' below
// a pattern is a piece of text we want the values in a column to match
SELECT *
FROM writers
WHERE first_name LIKE 'a%';
// first_name      last_name    
// A               Milne
// Anne            Tyler
/*------------------------------------------------------------------*/ %a%  => CONTAIN a
// writers (with first_name CONTAINING 'a'
SELECT *
FROM writers
WHERE first_name LIKE '%a%';
// first_name      last_name  
// A               Milne
// Ursula          Le Guin
// Anne            Tyler
// Mark            Twain

/*------------------------------------------------------------------*/ %cc%  => CONTAIN cc
// select only items with "NAME" values containing the letter "c doubled", like "cc"
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
WHERE name LIKE '%cc%';
// name                aroma   
// Nocciola Organic    chocolate, nuts


