DROP DATABASE IF EXISTS origin_database;
CREATE DATABASE origin_database;
USE origin_database;

CREATE TABLE category (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
Name VARCHAR(500) NOT NULL,
Icon VARCHAR(1000),
Description VARCHAR(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO category (id,name,icon,description) VALUES (1,'League of ledengs','https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png','Moba Fromat 5v5');
INSERT INTO category (id,name,icon,description) VALUES (2,'Rocket League','https://camo.githubusercontent.com/b5430e8a1bcdb553200e0eb04abae27e7bec310a0b26c284eb745e43e8ead593/68747470733a2f2f696d672e666176706e672e636f6d2f32312f31322f32312f726f636b65742d6c65616775652d766964656f2d67616d652d7073796f6e69782d6c6f676f2d646563616c2d706e672d666176706e672d7959683641334652434a4e68374a5967595a636848784169612e6a7067','Jeux de foot avec des voitures Fromat 3v3');
INSERT INTO category (id,name,icon,description) VALUES (3,'FIFA',NULL,'Jeux de foot Fromat 1v1');
INSERT INTO category (id,name,icon,description) VALUES (4,'Counter-strike: GO','https://w7.pngwing.com/pngs/25/642/png-transparent-counter-strike-global-offensive-counter-strike-source-dota-2-logo-others-emblem-text-orange-thumbnail.png','Jeux de tir Fromat 5v5');

CREATE TABLE video (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
id_Category INTEGER,
Url VARCHAR(255) NOT NULL,
Description VARCHAR(255),
Premium TINYINT NOT NULL,
Foreign Key (id_Category) REFERENCES category(id)
ON DELETE SET NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (1,1,'https://www.youtube.com/watch?v=OKL8BLAec1U','Top Play durant les worlds de LOL 2022',0);
INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (2,1,'https://www.youtube.com/watch?v=UUOBtkiDrE8','World 2022 - finale T1 vs DRX',1);
INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (3,2,'https://www.youtube.com/watch?v=WVB6hpik6z8','Best Goal lors de la saison RLCS 2022',0);
INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (4,2,'https://www.youtube.com/watch?v=0-UxFn596zI','Finale World RLCS BDS vs G2',1);
INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (5,3,'https://www.youtube.com/watch?v=l6a57U84r1M','Resumé de la finale 2022 Lorien/Olympique de Marseille',0);
INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (6,3,'https://www.youtube.com/watch?v=vXtibpOjrHw','Video entière de la finale Lorient / Olympique de Marseille 2022',1);
INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (7,4,'https://www.youtube.com/watch?v=Xn-bGsnfu9w&t=132s','Highlight de la final ESL 2022 NAVI vs FAZE',0);
INSERT INTO video (id,id_Category,Url,Description,premium) VALUES (8,4,'https://www.youtube.com/watch?v=G1qhsp-HS80','Map 1 de la final ESL 2022 NAVY vs FAZE',1);

CREATE TABLE user (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
isAdmin TINYINT NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(20) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (id,isAdmin, email, password) VALUES (1,1, 'admin1@mail.com', 1234);
INSERT INTO user (id,isAdmin, email, password) VALUES (2,1, 'admin2@mail.com', 12345);

CREATE TABLE play_by_id (
id INT NOT NULL PRIMARY KEY,
id_Video INT NOT NULL,
Type INT NOT NULL,
Foreign Key (id_Video) REFERENCES video(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE display_by_id (
id INT NOT NULL PRIMARY KEY,
id_Category INT NOT NULL,
Number INT NOT NULL,
Foreign Key (id_Category) REFERENCES category(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;