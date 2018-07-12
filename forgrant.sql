-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 12 2018 г., 12:20
-- Версия сервера: 5.6.34
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `forgrant`
--

-- --------------------------------------------------------

--
-- Структура таблицы `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'school_uniform',
  `start_price` timestamp NOT NULL,
  `end_price` timestamp NOT NULL,
  `period_number` int(11) NOT NULL,
  `period_priority` varchar(255) NOT NULL DEFAULT 'by_less',
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `goods`
--

INSERT INTO `goods` (`id`, `name`, `start_price`, `end_price`, `period_number`, `period_priority`, `price`) VALUES
(1, 'school_uniform', '1999-12-31 22:00:00', '2029-12-31 22:00:00', 1, 'by_last', 9999),
(2, 'school_uniform', '2015-12-31 22:00:00', '2029-12-31 22:00:00', 2, 'by_last', 8000),
(3, 'school_uniform', '2016-04-30 21:00:00', '2016-12-31 22:00:00', 3, 'by_last', 12000),
(4, 'school_uniform', '2016-06-30 21:00:00', '2016-09-09 21:00:00', 4, 'by_last', 15000),
(5, 'school_uniform', '2017-05-31 21:00:00', '2017-10-19 21:00:00', 5, 'by_last', 20000),
(6, 'school_uniform', '2017-12-16 22:00:00', '2017-12-30 22:00:00', 6, 'by_last', 5000);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
