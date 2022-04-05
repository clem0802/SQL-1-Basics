SQL (2022.03.29) - Mimo app (SQL - IN)
// after "IN" keyword, we code the options between parentheses => ()
// with conditions equal to EITHER '1st one' OR '2nd cone'

______________________________
| customers                  |
------------------------------
| name          | countries  |
------------------------------
| Maria Sousa   | Brazil     |
------------------------------
| Paul Vagner   | Germany    |
------------------------------
| Sara Sato     | Japan      |
------------------------------
| Louis Martin  | France     |
------------------------------
// use "IN" keyword to specify options when intende for (Germany OR France)
// after "IN" keyword, we code the options between parentheses => ()
// with conditions equal to EITHER 'France' OR 'Germany'
SELECT *
FROM customers
WHERE country IN ('France', 'Germany');
// name            country  
// Paul Wagner     Germany
// Louis Martin    France

SELECT *
FROM customers
WHERE country IN ('France', 'Germany', 'Japan');
// name            country  
// Paul Wagner     Germany
// Sara Sato       Japan
// Louis Martin    France

/*------------------------------------------------------------------*/
__________________________
| customers               |
--------------------------
| name          | orders  |
--------------------------
| Maria Sousa   | 8       |
--------------------------
| Paul Vagner   | 0       |
--------------------------
| Sara Sato     | 5       |
--------------------------
| Louis Martin  | 1       |
--------------------------

SELECT *
FROM customers
WHERE orders IN (0, 8);
// name            country  
// Maria Sousa     8
// Paul Wagner     0

