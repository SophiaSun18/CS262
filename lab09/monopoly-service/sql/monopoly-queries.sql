--
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author Sophia Sun
-- @version Fall, 2022
--

-- Get a list of games, ordered by date.
SELECT * 
    FROM game
    ORDER BY time DESC
    ;

-- Get a list of games occurred last week.
SELECT * 
    FROM game
    WHERE time BETWEEN '2022-10-14 00:00:00 +0000'
    AND '2022-10-22 00:00:00 +0000'
    ;

-- Get a list of players who have (non-NULL) names.
SELECT *
    FROM player
    WHERE name IS NOT NULL
    ;

-- Get a list of players with score higher than 2000.
SELECT DISTINCT playerid
    FROM player, playergame
    WHERE playergame.score > 2000
    ;

-- Get a list of players with GMail accounts.
SELECT *
    FROM Player
    WHERE emailAddress LIKE '%gmail%'
    ;

-- Get all "The King"'s game scores in decreasing order.
SELECT score
    FROM player, playergame
    WHERE player.id = playergame.playerid
    AND player.name = 'The King'
    ;

-- Get the name of the winner of the game played on 2006-06-28 13:20:00.
SELECT name
    FROM player, playergame, game
    WHERE player.id = playergame.playerid
    AND game.id = playergame.gameid
    AND game.time = '2006-06-28 13:20:00 +0000'
    AND playergame.score = 1000
    ;