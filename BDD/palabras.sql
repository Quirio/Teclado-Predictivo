-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 19-01-2015 a las 12:52:26
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `palabras`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabras`
--

CREATE TABLE IF NOT EXISTS `palabras` (
  `PalabraAnterior` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `PalabraSiguiente` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Coincidencia` int(11) NOT NULL DEFAULT '0',
  `Tiempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `palabras`
--

INSERT INTO `palabras` (`PalabraAnterior`, `PalabraSiguiente`, `Coincidencia`, `Tiempo`) VALUES
('$', 'buenas', 2, '2015-01-16 16:58:14'),
('$', 'buenos', 1, '2015-01-16 16:58:04'),
('$', 'en', 1, '2015-01-16 16:59:02'),
('$', 'feliz', 2, '2015-01-16 16:58:36'),
('$', 'hola', 19, '2015-01-16 17:40:49'),
('$', 'mozilla', 1, '2015-01-16 17:03:56'),
('buenas', 'noches', 2, '2015-01-16 16:58:20'),
('buenas', 'tardes', 2, '2015-01-16 16:58:12'),
('buenos', 'días', 2, '2015-01-16 16:58:07'),
('en', 'casa', 2, '2015-01-16 16:59:05'),
('está', 'usted', 1, '2015-01-16 17:41:06'),
('feliz', 'cumpleaños', 2, '2015-01-16 16:58:35'),
('feliz', 'navidad', 2, '2015-01-16 16:58:40'),
('hola', 'que', 7, '2015-01-16 17:40:50'),
('mozilla', 'firefox', 2, '2015-01-16 17:03:59'),
('que', 'tal', 4, '2015-01-16 17:40:58'),
('tal', 'está', 3, '2015-01-16 17:41:08'),
('tal', 'estas', 3, '2015-01-16 17:40:40');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `palabras`
--
ALTER TABLE `palabras`
 ADD PRIMARY KEY (`PalabraAnterior`,`PalabraSiguiente`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
