CREATE TABLE `ScheduledActivity` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `startDateTime` DATETIME,
  `endDateTime` DATETIME,
  `activityId` INTEGER,
  `locationId` INTEGER,
  `ticketsAvailableOn` DATETIME,
  `ticketsCloseOn` DATETIME
);


CREATE TABLE `AutoSchedule` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `repeatById` INTEGER,
  `repeatValue` TEXT,
  `startDate` DATE,
  `endDate` DATE
);

CREATE TABLE `Ticket` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` TEXT,
  `count` INTEGER,
  `price` DOUBLE,
  `activityId` INTEGER,
  `isAutoGenerated` BOOLEAN
);

CREATE TABLE `TicketInstance` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `ref` TEXT,
  `purchasedOn` DATETIME,
  `purcharsedBy` INTEGER,
  `price` DOUBLE,
  `invoiceId` INTEGER,
  `isBlocked` BOOLEAN
);
