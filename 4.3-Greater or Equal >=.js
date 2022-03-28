SQL (2022.03.28) - Mimo app (SQL - Greater than or Equal to >=)

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
WHERE price >= 2;
// description        price
// 90% cacao          3
// Milk Chocolate     2.5
// Brownie core       2
