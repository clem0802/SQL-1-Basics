SQL (2022.03.28) - Mimo app (SQL - Less than or Equal to <=)
                             
___________________________________
| chocolate                       |
-----------------------------------
| description             | price |
-----------------------------------
| 90% cacao               | 3     |
-----------------------------------
| Caramel sea salt        | 1.99  |
-----------------------------------
| Milk Chocolate          | 2.5   |
-----------------------------------
| Brownie core            | 2     |
-----------------------------------

// select items having a price less than 2$
SELECT *
FROM chocolate
WHERE price < 2;
// description         price
// Caramel sea salt    1.99
                         
     
// select items having a price less than or equal to 2$
SELECT *
FROM chocolate
WHERE price <= 2;
// description         price
// Caramel sea salt    1.99
// brownie core        2
                             
                             
/*------------------------------------------------------------------*/
___________________________________
| pollution                       |
-----------------------------------
| city          | pollution_index |
-----------------------------------
| Delhi         | 168             |
-----------------------------------
| Milano        | 122             |
-----------------------------------
| Shanghai      | 74              |
-----------------------------------
| Tokyo         | 21              |
-----------------------------------
                             
// select items where the "pollution_index" is less than 100
SELECT *
FROM pollution
WHERE pollution_index < 100;
// city        pollution_index    
// Shanghai    74
// Tokyo       21


// select items where the "pollution_index" is less than 100
SELECT *
FROM pollution
WHERE pollution_index < 150;
// city        pollution_index    
// Milano      122
// Shanghai    74
// Tokyo       21
                             
                             
                             
