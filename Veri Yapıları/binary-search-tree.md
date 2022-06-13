## Binary Search Tree 


[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamaları;
- root değeri 7 
- 5 sayısı 7'den küçük olduğundan 7'nin soluna, 
- 1 sayısı 5'ten ve 7'den küçük olduğundan 7 ve 5'in soluna, 
- 8 sayısı 7'den büyük olduğundan 7'nin sağına, 
- 3 sayısı 7'den ve 5'ten küçük olduğundan 5'in soluna, 1'den büyük olduğundan 1'in sağına, 
- 6 sayısı 7'den küçük olduğundan 7'nin soluna, 5'ten büyük olduğundan 5'in sağına, 
- 0 sayısı 7'den, 5'ten ve 1'den küçük olduğundan 1'in soluna, 
- 9 sayısı 7'den ve 8'den büyük olduğundan 8'in sağına, 
- 4 sayısı 7'den ve 5'ten küçük olduğundan 5'in soluna, 1'den ve 3'ten büyük olduğundan 3'ün sağına,
- 2 sayısı 7'den ve 5'ten küçük olduğundan 5'in soluna, 1'den büyük olduğundan 1'in sağına ve 3'ten küçük olduğundan 3'ün soluna yazılır.

      |--           |--|--|-    |- |- |- |- |- |- |- |- |
|             |  |  |     |  |  |  | 7|  |  |  |  |  
|             |  |  |     |  |  | /|  |\ |  |  |  | 
|             |  |  |     |  | 5|  |  |  |8 |  |  | 
|             |  |  |     | /|  |\ |  |  |  |\ |  | 
|             |  |  | 1   |  |  |  |6 |  |  |  | 9|
|             |  | /|     |\ |  |  |  |  |  |  |  |
|             | 0|  |     |  | 3|  |  |  |  |  |  |
|             |  |  |     | /|  |\ |  |  |  |  |  |
||  |  |2|  |  |  |4 |  |  |  |  |
