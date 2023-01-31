-- SQLBook: Code
USE origin_database;
DROP TABLE IF EXISTS favorite;
DROP TABLE IF EXISTS display_by_id;
DROP TABLE IF EXISTS play_by_id;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS video;
DROP TABLE IF EXISTS category;

CREATE TABLE category (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
Name VARCHAR(500) NOT NULL,
Icon VARCHAR(1000),
Description VARCHAR(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO category (id,name,icon,description) VALUES (1,'League of Legends','https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png','Moba Format 5v5');
INSERT INTO category (id,name,icon,description) VALUES (2,'Rocket League','https://camo.githubusercontent.com/b5430e8a1bcdb553200e0eb04abae27e7bec310a0b26c284eb745e43e8ead593/68747470733a2f2f696d672e666176706e672e636f6d2f32312f31322f32312f726f636b65742d6c65616775652d766964656f2d67616d652d7073796f6e69782d6c6f676f2d646563616c2d706e672d666176706e672d7959683641334652434a4e68374a5967595a636848784169612e6a7067','Soccer games with cars Format 3v3');
INSERT INTO category (id,name,icon,description) VALUES (3,'FIFA','https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Easports_fifa_logo.svg/2560px-Easports_fifa_logo.svg.png','Football games Format 1v1');
INSERT INTO category (id,name,icon,description) VALUES (4,'Counter-strike: GO','https://w7.pngwing.com/pngs/25/642/png-transparent-counter-strike-global-offensive-counter-strike-source-dota-2-logo-others-emblem-text-orange-thumbnail.png','Shooting games Format 5v5');

CREATE TABLE video (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
Name VARCHAR(500) NOT NULL,
id_Category INTEGER,
Url VARCHAR(1000) NOT NULL,
Description VARCHAR(1000),
Premium TINYINT NOT NULL,
Screenshot VARCHAR(1000),
Foreign Key (id_Category) REFERENCES category(id)
ON DELETE SET NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (1,'Top Play LOL 2022',1,'https://www.youtube.com/embed/OKL8BLAec1U','Top Play during the worlds of LOL 2022',0,"/uploads/Screen1_1675072373908.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (2,'World 2022 final',1,'https://www.youtube.com/embed/UUOBtkiDrE8','World 2022 - final T1 vs DRX',1,"/uploads/Screen2_1675072453092.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (3,'LCS Winter : 100 - IMT',1,'https://www.youtube.com/embed/zgDWeibMGoE','100 Thieves vs Immortals Highlights | LCS Winter 2023 Week 1 Day 2 | 100 vs IMT',0,"/uploads/Screen3_1675072495481.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (4,'LCS Spring : C9 - 100',1,'https://www.youtube.com/embed/E-hmb5bDt90','100 vs C9 W1D1 S13 LCS 2023 Spring - 100 Thieves vs Cloud 9 Game 1 lol eSports NA LCS 2023. LoL eSports S13 LCS Regular Split 2023 - C9 vs 100 League of Legends NA LCS 2023. Cloud 9 vs 100 Thieves best of 1.',1,"/uploads/Screen4_1675073090026.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (5,'LCS Spring : GG - C9',1,'https://www.youtube.com/embed/e27y_Vlfswc','C9 vs GG W1D2 S13 LCS 2023 Spring - Cloud 9 vs Golden Guardians Game 1 lol eSports NA LCS 2023. LoL eSports S13 LCS Regular Split 2023 - Second match of the day - best of 1.',0,"/uploads/Screen5_1675073121374.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (6,'Best Goal saison 2022',2,'https://www.youtube.com/embed/WVB6hpik6z8','Best Goal during the seasons RLCS 2022',0,"/uploads/Screen6_1675073243784.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (7,'Finale World RLCS',2,'https://www.youtube.com/embed/0-UxFn596zI','RLCS 2021-2022 Grand Finals commented by Bachi & Lifeiscool !',1,"/uploads/Screen7_1675073270482.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (8,'RLCS 2022-23 Aftermovie',2,'https://www.youtube.com/embed/nX6cWacjLZE','Watch the RLCS 2022-23 Fall Major Aftermovie now! The 2022-23 RLCS Fall Major in Rotterdam, Netherlands kicked off the first live event of the 2022-23 RLCS Season with a bang! It was full of shocking moments and epic triumphs. Grab a snack and settle in to watch one of our best Majors yet!',0,"/uploads/Screen8_1675073306288.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (9,'Best Rocket League RLCS Rotterdam Major',2,'https://www.youtube.com/embed/jWraTbrf_kY','rocket league rlcs ROTTERDAM recap rlcs goals montage full rlcs best goals recap - rocket league pro goals of rlcs major 2022! rocket league best of rlcs highlights - rlcs fall major - rocket league epic impossible saves , goals by pros, best or rocket league major so far - best highlights with best saves reset goals, insane rocket league freestyles in rlcs Rocket League Championship Series 2022 ! ',0,"/uploads/Screen9_1675073330657.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (10,'RLCS Open Winter #1',2,'https://www.youtube.com/embed/xWOAwXO4FS0','One more victory for the Main Stage of the RLCS! #Solary #kaydop #chausette45 #fairyPeak!',1,"/uploads/Screen10_1675073356481.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (11,'Finals eChampions League Winners 2022',3,'https://www.youtube.com/embed/Da63ohdBFQo','Two TITANS of the FIFA eSports scene - Tekkz and Nicolas99FC - go head-to-head in the Winners Final of the FIFA 22 eChampions League. Whoever wins guarantees their spot in the Grand Final.',1,"/uploads/Screen11_1675073380531.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (12,'Finals eChampions League 2022',3,'https://www.youtube.com/embed/Ez4FCB7aJng','The FIFA 22 eChampions League Finals are finally here - and featuring legendary icons as well as heroes! Who do YOU think will walk away with the $280,000, eChampions League Trophy, and the coveted spot at the Global Series Playoffs? Also watch Kaká, Ashley Cole, Fernando Morientes, and Henrik Larsson compete in the Icon Faceoff, presented by Playstation.',0,"/uploads/Screen12_1675073405128.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (13,'EASport Cup Final FNATIC - TG-NIP',3,'https://www.youtube.com/embed/k6_SVtfFjQA','The #EASPORTCup Finals featured two of the best FIFA 23 teams in the WORLD: TG.NIP (Levi de Weerd, Ollelito) and FNATIC (Tekkz, Diogo.) The battle they had on the field was INTENSE. Both teams secured their spot in the FIFAe Club World Cup but only one lifted the epic EA SPORTS Cup Trophy and took home the grand prize ',1,"/uploads/Screen13_1675073464162.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (14,'NICOLAS99FC - TEKKZ : eCHAMPIONS LEAGUE QUALIFIER',3,'https://www.youtube.com/embed/xP_At04VLRk','NICOLAS99FC VS TEKKZ FIFA 23 eCHAMPIONS LEAGUE QUALIFIER FGS23 PRO VS PRO. GAMEPLAY PS5.',1,"/uploads/Screen14_1675073493212.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (15,'Fifa eWorld Cup Final Highlights',3,'https://www.youtube.com/embed/-iPiZWrPNJg','Mohammed MoAuba Harkous took on Mosaad Msdossary Aldossary in the 2019 Fifa eWorld Cup at the 02 Arena in London. Catch all the highlights here.',1,"/uploads/Screen15_1675073522879.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (16,'Highlight final ESL 2022',4,'https://www.youtube.com/embed/Xn-bGsnfu9w','Best moments & highlights is the video where all the the best CS:GO clips, best moments, pro highlights,',0,"/uploads/Screen16_1675073562815.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (17,'NaVi vs G2 - HIGHLIGHTS - BLAST',4,'https://www.youtube.com/embed/9JAFFOOAlno','Best moments is the video where you find the best plays of the game with the best clips, best frags, csgo pro highlights, twitch highlights, with the best players in the world like coldzera, s1mple, device, stewie2k,kennys, niko, scream, fallen, zywoo, trk and much more.',1,"/uploads/Screen17_1675073601246.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (18,'Map 1 final ESL 2022',4,'https://www.youtube.com/embed/G1qhsp-HS80','Map 1 of the final ESL 2022 NAVY vs FAZE',1,"/uploads/Screen18_1675073631671.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (19,'G2 - Liquid : world final',4,'https://www.youtube.com/embed/V-7FYTNVHpg','Best moments is the video where you find the best plays of the game with the best clips, best frags, csgo pro highlights, twitch highlights, with the best players in the world like coldzera, s1mple, device, stewie2k,kennys, niko, scream, fallen, zywoo, trk and much more.',0,"/uploads/Screen19_1675073678339.jpeg");
INSERT INTO video (id,Name,id_Category,Url,Description,premium,Screenshot) VALUES (20,'NaVi vs G2 - BLAST Premier',4,'https://www.youtube.com/embed/Hq89OctGJSk','Best moments & highlights is the video where all the the best CS:GO clips. In this video you can find compilation of best ace, clutch, 200iq play made by top players of csgo scene such as s1mple, stewie2k, coldzera, niko, device, fallen, scream, kennys, shox, simple, xantares, woxic',0,"/uploads/Screen20_1675073708293.jpeg");

CREATE TABLE user (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
isAdmin TINYINT NOT NULL,
email VARCHAR(200) NOT NULL UNIQUE,
hashedpassword VARCHAR(255) NOT NULL,
isDeletable TINYINT
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (id,isAdmin, email, hashedpassword, isDeletable) VALUES (1,1, 'admin1@mail.com', "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA", 1);
INSERT INTO user (id,isAdmin, email, hashedpassword) VALUES (2,1, 'admin2@mail.com', "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA");
INSERT INTO user (id,isAdmin, email, hashedpassword) VALUES (3,0, 'admin3@mail.com', "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA");

CREATE TABLE play_by_id (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
id_Video INT NOT NULL,
Type INT NOT NULL,
Foreign Key (id_Video) REFERENCES video(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO play_by_id (id_Video, Type) VALUES (1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1), (7, 1), (8, 1), (1, 2), (2, 2), (3, 2), (4, 2), (5, 2), (6, 2), (7, 2), (8, 2);

CREATE TABLE display_by_id (
id INT NOT NULL PRIMARY KEY,
id_Category INT NOT NULL,
Number INT NOT NULL,
Foreign Key (id_Category) REFERENCES category(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO display_by_id (id, id_Category, Number) VALUES (1, 2, 8), (2, 1, 8), (3, 2, 8), (4, 3, 8), (5, 4, 8);

CREATE TABLE favorite (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
id_user INT NOT NULL,
id_video INT NOT NULL,
CONSTRAINT video_user UNIQUE (id_user,id_video),
Foreign Key (id_user) REFERENCES user(id) ON DELETE CASCADE,
Foreign Key (id_video) REFERENCES video(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO favorite ( id_user, id_video) VALUES (2, 2), (2, 3), (3, 8),(2, 7), (2, 4),(2, 5), (2, 6), (3, 3);
