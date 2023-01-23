# SQL ÖDEV 8

1.  test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

    ```
    CREATE TABLE employee(
    	id INTEGER,
    	name VARCHAR(50) NOT NULL,
    	birthday DATE,
    	email VARCHAR(100)
    );
    ```

2.  Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

    ```
    insert into employee (id, name, birthday, email) values (1, 'Kristo', '1946/05/10', 'klilford0@kickstarter.com');
    insert into employee (id, name, birthday, email) values (2, 'Mickie', '1974/01/27', 'mplaster1@skyrock.com');
    insert into employee (id, name, birthday, email) values (3, 'Urbain', '1945/07/09', 'ucollum2@usa.gov');
    insert into employee (id, name, birthday, email) values (4, 'Edsel', '2001/01/02', 'ejakel3@ucla.edu');
    insert into employee (id, name, birthday, email) values (5, 'Averil', '1978/12/12', 'acoale4@businessweek.com');
    insert into employee (id, name, birthday, email) values (6, 'Kaylee', '2009/06/19', 'kedlyn5@seattletimes.com');
    insert into employee (id, name, birthday, email) values (7, 'Noelyn', '1934/06/29', 'nkey6@reverbnation.com');
    insert into employee (id, name, birthday, email) values (8, 'Ferris', '2006/08/06', 'fgencke7@tmall.com');
    insert into employee (id, name, birthday, email) values (9, 'Shirl', '2001/12/30', 'sjackling8@trellian.com');
    insert into employee (id, name, birthday, email) values (10, 'Pauly', '1965/02/08', 'pbrason9@usa.gov');
    insert into employee (id, name, birthday, email) values (11, 'Scarface', '1961/06/06', 'spainea@webnode.com');
    insert into employee (id, name, birthday, email) values (12, 'Norry', '1935/09/08', 'ncossarb@opera.com');
    insert into employee (id, name, birthday, email) values (13, 'Paxton', '1923/12/17', 'pklimowskic@samsung.com');
    insert into employee (id, name, birthday, email) values (14, 'Meriel', '1950/09/12', 'mpaulingd@acquirethisname.com');
    insert into employee (id, name, birthday, email) values (15, 'Carlyle', '2002/06/23', 'cmessame@taobao.com');
    insert into employee (id, name, birthday, email) values (16, 'Eddy', '2015/11/22', 'eduffetf@google.fr');
    insert into employee (id, name, birthday, email) values (17, 'Richmound', '1936/08/13', 'rcluattg@taobao.com');
    insert into employee (id, name, birthday, email) values (18, 'Consuelo', '2010/08/15', 'ckiwitzh@hhs.gov');
    insert into employee (id, name, birthday, email) values (19, 'Kristine', '2022/05/07', 'kskepi@jimdo.com');
    insert into employee (id, name, birthday, email) values (20, 'Mackenzie', '1981/10/07', 'mlinkj@newyorker.com');
    insert into employee (id, name, birthday, email) values (21, 'Carlie', '1999/09/10', 'cbarwisk@drupal.org');
    insert into employee (id, name, birthday, email) values (22, 'Briggs', '1934/12/23', 'bstokeyl@flickr.com');
    insert into employee (id, name, birthday, email) values (23, 'Jorey', '1973/09/26', 'jkippinm@uol.com.br');
    insert into employee (id, name, birthday, email) values (24, 'Perl', '1962/06/22', 'plivensn@eepurl.com');
    insert into employee (id, name, birthday, email) values (25, 'Marie-ann', '2015/07/18', 'mstigerso@ftc.gov');
    insert into employee (id, name, birthday, email) values (26, 'Dinny', '1921/07/18', 'dkaysp@mail.ru');
    insert into employee (id, name, birthday, email) values (27, 'Weider', '1987/08/17', 'wtolleq@rakuten.co.jp');
    insert into employee (id, name, birthday, email) values (28, 'Rowen', '1974/07/17', 'rkernermannr@pagesperso-orange.fr');
    insert into employee (id, name, birthday, email) values (29, 'Neel', '1967/12/02', 'npatullos@histats.com');
    insert into employee (id, name, birthday, email) values (30, 'Tabb', '1931/12/23', 'tcaultont@google.com');
    insert into employee (id, name, birthday, email) values (31, 'Jaquenetta', '1995/08/19', 'jscarisbricku@paginegialle.it');
    insert into employee (id, name, birthday, email) values (32, 'Corilla', '2002/01/17', 'cbassetv@issuu.com');
    insert into employee (id, name, birthday, email) values (33, 'Merralee', '2021/01/26', 'mvigneronw@opensource.org');
    insert into employee (id, name, birthday, email) values (34, 'Missy', '1942/09/28', 'msoarsx@t.co');
    insert into employee (id, name, birthday, email) values (35, 'Gavra', '1928/06/13', 'gharletty@businessinsider.com');
    insert into employee (id, name, birthday, email) values (36, 'Russ', '1934/08/28', 'rwhitmellz@hhs.gov');
    insert into employee (id, name, birthday, email) values (37, 'Mariam', '2021/10/24', 'mpetegre10@epa.gov');
    insert into employee (id, name, birthday, email) values (38, 'Mersey', '1983/11/05', 'mpaul11@boston.com');
    insert into employee (id, name, birthday, email) values (39, 'Brien', '1984/05/18', 'bsquibe12@mediafire.com');
    insert into employee (id, name, birthday, email) values (40, 'Rutledge', '2003/07/17', 'rsaynor13@php.net');
    insert into employee (id, name, birthday, email) values (41, 'Natividad', '2003/09/24', 'nalgie14@last.fm');
    insert into employee (id, name, birthday, email) values (42, 'Allianora', '1992/08/14', 'aludlam15@wunderground.com');
    insert into employee (id, name, birthday, email) values (43, 'Eustace', '1948/09/13', 'edowbekin16@princeton.edu');
    insert into employee (id, name, birthday, email) values (44, 'Feliza', '2006/08/26', 'fbramhall17@nbcnews.com');
    insert into employee (id, name, birthday, email) values (45, 'Jake', '1953/02/16', 'jledward18@netvibes.com');
    insert into employee (id, name, birthday, email) values (46, 'Khalil', '1932/02/06', 'kfinlry19@cmu.edu');
    insert into employee (id, name, birthday, email) values (47, 'Nancy', '1970/07/19', 'ntreweek1a@blogs.com');
    insert into employee (id, name, birthday, email) values (48, 'Jimmie', '1950/06/20', 'jmcgriffin1b@examiner.com');
    insert into employee (id, name, birthday, email) values (49, 'Stoddard', '1975/08/28', 'sowens1c@newyorker.com');
    insert into employee (id, name, birthday, email) values (50, 'Cobbie', '2000/07/11', 'cspeke1d@bravesites.com');
    ```

3.  Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

    ```
    UPDATE employee
    SET name= 'Bismarck',
    birthday= '1970-05-01',
    email= 'bismarck@gmail.com'
    WHERE id=13;


    UPDATE employee
    SET name= 'ClauseWitz',
    birthday= '1977-11-01',
    email= 'carlvon@gmail.com'
    WHERE name='Mickie';


    UPDATE employee
    SET name= 'Unknown'
    WHERE birthday='1978-12-12';

    UPDATE employee
    SET email= 'Invalid'
    WHERE email LIKE '%hhs%';

    UPDATE employee
    SET birthday= '1978-11-06',
    name='Modified'
    WHERE email='edowbekin16@princeton.edu';


    ```

4.  Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

```
    DELETE FROM employee
    WHERE id=13;

    DELETE FROM employee
    WHERE name='ClauseWitz';

    DELETE FROM employee
    WHERE email LIKE '%php%' OR email='Invalid';

    DELETE FROM employee
    WHERE name LIKE '____'

    DELETE FROM employee
    WHERE email NOT LIKE '%m'
```
