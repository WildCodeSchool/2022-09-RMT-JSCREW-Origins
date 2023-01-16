-- SQLBook: Code

DROP DATABASE IF EXISTS origin_database;

CREATE DATABASE origin_database;

USE origin_database;

CREATE TABLE
    category (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        Name VARCHAR(500) NOT NULL,
        Icon VARCHAR(1000),
        Description VARCHAR(1000) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    category (id, name, icon, description)
VALUES (
        1,
        'League of Legends',
        'https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png',
        'Moba Format 5v5'
    );

INSERT INTO
    category (id, name, icon, description)
VALUES (
        2,
        'Rocket League',
        'https://camo.githubusercontent.com/b5430e8a1bcdb553200e0eb04abae27e7bec310a0b26c284eb745e43e8ead593/68747470733a2f2f696d672e666176706e672e636f6d2f32312f31322f32312f726f636b65742d6c65616775652d766964656f2d67616d652d7073796f6e69782d6c6f676f2d646563616c2d706e672d666176706e672d7959683641334652434a4e68374a5967595a636848784169612e6a7067',
        'Soccer games with cars Format 3v3'
    );

INSERT INTO
    category (id, name, icon, description)
VALUES (
        3,
        'FIFA',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Easports_fifa_logo.svg/2560px-Easports_fifa_logo.svg.png',
        'Football games Format 1v1'
    );

INSERT INTO
    category (id, name, icon, description)
VALUES (
        4,
        'Counter-strike: GO',
        'https://w7.pngwing.com/pngs/25/642/png-transparent-counter-strike-global-offensive-counter-strike-source-dota-2-logo-others-emblem-text-orange-thumbnail.png',
        'Shooting games Format 5v5'
    );

CREATE TABLE
    video (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        Name VARCHAR(500) NOT NULL,
        id_Category INTEGER,
        Url VARCHAR(1000) NOT NULL,
        Description VARCHAR(1000),
        Premium TINYINT NOT NULL,
        Foreign Key (id_Category) REFERENCES category(id) ON DELETE
        SET
            NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        1,
        'Top Play LOL 2022',
        1,
        'https://www.youtube.com/embed/OKL8BLAec1U',
        'Top Play during the worlds of LOL 2022',
        0
    );

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        2,
        'World 2022 final',
        1,
        'https://www.youtube.com/embed/UUOBtkiDrE8',
        'World 2022 - final T1 vs DRX',
        1
    );

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        3,
        'Best Goal saison 2022',
        2,
        'https://www.youtube.com/embed/WVB6hpik6z8',
        'Best Goal during the seasons RLCS 2022',
        0
    );

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        4,
        'Finale World RLCS',
        2,
        'https://www.youtube.com/embed/0-UxFn596zI',
        'RLCS 2021-2022 Grand Finals commented by Bachi & Lifeiscool !',
        1
    );

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        5,
        'Match Finale eChampions League 2022',
        3,
        'https://www.youtube.com/embed/Da63ohdBFQo',
        'Two TITANS of the FIFA eSports scene - Tekkz and Nicolas99FC - go head-to-head in the Winners Final of the FIFA 22 eChampions League. Whoever wins guarantees their spot in the Grand Final.',
        1
    );

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        6,
        'Finale eChampions League 2022',
        3,
        'https://www.youtube.com/embed/Ez4FCB7aJng',
        'The FIFA 22 eChampions League Finals are finally here - and featuring legendary icons as well as heroes! Who do YOU think will walk away with the $280,000, eChampions League Trophy, and the coveted spot at the Global Series Playoffs? Also watch Kaká, Ashley Cole, Fernando Morientes, and Henrik Larsson compete in the Icon Faceoff, presented by Playstation.',
        0
    );

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        7,
        'Highlight final ESL 2022',
        4,
        'https://www.youtube.com/embed/Xn-bGsnfu9w',
        'Best moments & highlights is the video where all the the best CS:GO clips, best moments, pro highlights,',
        0
    );

INSERT INTO
    video (
        id,
        Name,
        id_Category,
        Url,
        Description,
        premium
    )
VALUES (
        8,
        'Map 1 final ESL 2022',
        4,
        'https://www.youtube.com/embed/G1qhsp-HS80',
        'Map 1 of the final ESL 2022 NAVY vs FAZE',
        1
    );

CREATE TABLE
    user (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        isAdmin TINYINT NOT NULL,
        email VARCHAR(200) NOT NULL UNIQUE,
        hashedpassword VARCHAR(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    user (
        id,
        isAdmin,
        email,
        hashedpassword
    )
VALUES (
        1,
        1,
        'admin1@mail.com',
        "$argon2id$v=19$m=65536,t=5,p=1$BCdEiXsQ67+VfP/x/RxEFQ$+Rov1GY2hUrZvULi9NfH1sfah5uz1dKXs4mhXcL33tA"
    );

CREATE TABLE
    play_by_id (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        id_Video INT NOT NULL,
        Type INT NOT NULL,
        Foreign Key (id_Video) REFERENCES video(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    play_by_id (id_Video, Type)
VALUES (1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1), (7, 1), (8, 1);

CREATE TABLE
    display_by_id (
        id INT NOT NULL PRIMARY KEY,
        id_Category INT NOT NULL,
        Number INT NOT NULL,
        Foreign Key (id_Category) REFERENCES category(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;