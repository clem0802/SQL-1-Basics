SQL (2022.03.29) - Mimo app (SQL - LIKE 'a')

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

// with a pattern like 'a' we can have only "A, Milne"
// the first_name has no other letter beside 'a'
SELECT *
FROM writers
WHERE first_name LIKE 'a';
// first_name      last_name    
// A               Milne

