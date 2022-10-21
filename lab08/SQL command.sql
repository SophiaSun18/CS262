-- Single-Table Queries in PostgreSQL

-- a) Retrieve a list of all the games, ordered by date with the most recent game coming first.
-- SELECT * FROM game ORDER BY time DESC

-- b) Retrieve all the games that occurred in the past week.
-- SELECT * FROM game WHERE time BETWEEN '2022-10-14 00:00:00 +0000' AND '2022-10-22 00:00:00 +0000'

-- c) Retrieve a list of players who have (non-NULL) names.
-- SELECT * FROM player WHERE name IS NOT NULL

-- d) Retrieve a list of IDs for players who have some game score larger than 2000.
-- SELECT DISTINCT playerid FROM player, playergame WHERE playergame.score > 2000

-- e) Retrieve a list of players who have GMail accounts.
-- SELECT * FROM Player WHERE emailAddress LIKE '%gmail%'


-- Multiple-Table Queries in PostgreSQL

-- a) Retrieve all “The King”’s game scores in decreasing order.
-- SELECT score FROM player, playergame WHERE player.id = playergame.playerid AND player.name = 'The King'

-- b) Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
-- SELECT name FROM player, playergame, game WHERE player.id = playergame.playerid AND game.id = playergame.gameid AND game.time = '2006-06-28 13:20:00 +0000' AND playergame.score = 1000

-- c) So what does that P1.ID < P2.ID clause do in the last example query (i.e., the from SQL Examples)?
-- When a player shows up more than once in the joined table, keeps only the first time the player shows up.

-- d) The query that joined the Player table to itself seems rather contrived. Can you think of a realistic situation in which you’d want to join a table to itself?
-- When a table is updated in the copy version and in the original version, we need to join the two tables to get the most updated version.