-- 3 first students in the Batch ID=3
-- because Batch 3 is the best!
SELECT score,count(score) AS number FROM second_table GROUP BY score;
