-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-12-2014 a las 19:42:34
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

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
('a', 'hola', 1, '2014-12-29 18:40:11'),
('antonio', 'benavente', 1, '2014-12-29 18:40:21'),
('antonio', 'jooapeoa', 1, '2014-12-29 16:14:30'),
('como', 'estás', 1, '2014-12-29 15:11:42'),
('hola', 'antonio', 20, '2014-12-29 18:40:15'),
('hola', 'hola', 5, '2014-12-29 16:21:19'),
('hola', 'pollo', 3, '2014-12-29 16:04:42'),
('hola', 'Suso', 5, '2014-12-29 16:02:11'),
('me', 'voy', 1, '2014-12-29 18:40:05'),
('que', 'tal?', 1, '2014-12-29 15:11:42'),
('voy', 'a', 1, '2014-12-29 18:40:10');

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
