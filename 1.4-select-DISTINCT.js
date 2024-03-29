SQL (2022.03.28) - Mimo app (SQL - SELECT Distinct Values)

_______________________________________
| subscribers                         |
---------------------------------------
| name    | email           | country |
---------------------------------------
| Sam     | sam17@mail.com  | England |
---------------------------------------
| Remy    | rem@mail.com    | France  |
---------------------------------------
| Luis    | luis_99@mail.com| France  |
---------------------------------------
| Kim     | kim_22@mail.com | England |
---------------------------------------

// when selecting a column that has duplicate values (valeurs en doublon) like "country"
// we get all the values, including duplicates
SELECT country
FROM subscribers;
// country
// England
// France
// France
// England

// the keyword "DISTINCT" in this query selects values from the "country" column, excluding duplicates
// "DISTINCT" supprime les DOUBLONS !!!
SELECT DISTINCT country
FROM subscribers;
// country
// England
// France


/*------------------------------------------------------------------*/
________________________________
| favorites                    |
--------------------------------
| song          | gnere        |
--------------------------------
| All Blues     | jazz         |
--------------------------------
| What goes on  | art rock     |
-------------------------------
| Sure Shot     | hiop hop     |
--------------------------------
| Giant Steps   | jazz         |
--------------------------------
// Use "DISTINCT" to find out what music genres this user listens to 
// (the genre "jazz" will not repeat twice)
SELECT DISTINCT gnere
FROM favorites;





