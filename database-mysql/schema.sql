DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

USE calendar;

-- Table will hold dates that a specific place is unavailable
-- and the minimum number of days someone has to stay to reserve the location
CREATE TABLE availability_days(
    id INT AUTO_INCREMENT PRIMARY KEY,
    startDate DATE,
    endDate DATE,
    minDaysStay INT
) ;