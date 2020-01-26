DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

USE calendar;

CREATE TABLE availabilityDays(
    id INT AUTO_INCREMENT PRIMARY KEY,
    startDate DATE,
    endDate DATE,
    minDaysStay INT
) ;