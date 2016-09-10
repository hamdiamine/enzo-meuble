-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 10 Septembre 2016 à 20:15
-- Version du serveur :  10.1.16-MariaDB
-- Version de PHP :  7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `enzo_compte`
--

CREATE TABLE `enzo_compte` (
  `cpt_id` int(11) NOT NULL,
  `cpt_login` varchar(40) CHARACTER SET latin1 DEFAULT NULL,
  `cpt_mdp` varchar(40) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `enzo_compte`
--

INSERT INTO `enzo_compte` (`cpt_id`, `cpt_login`, `cpt_mdp`) VALUES
(1, 'hkh', 'hkh');

-- --------------------------------------------------------

--
-- Structure de la table `enzo_image`
--

CREATE TABLE `enzo_image` (
  `img_id` int(11) NOT NULL,
  `pag_id` int(11) DEFAULT NULL,
  `lot_id` int(11) DEFAULT NULL,
  `img_code` varchar(40) CHARACTER SET latin1 NOT NULL,
  `img_value` varchar(4000) CHARACTER SET latin1 NOT NULL,
  `img_ordre` int(11) DEFAULT NULL,
  `img_actif` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `enzo_image`
--

INSERT INTO `enzo_image` (`img_id`, `pag_id`, `lot_id`, `img_code`, `img_value`, `img_ordre`, `img_actif`) VALUES
(8, 1, NULL, 'img_mbl', '1375711_10205404468419574_6390380884441217650_n.jpg', NULL, 1),
(9, 1, NULL, 'img_csn', 'Ghrayba normal1.jpg', NULL, 1),
(10, 1, NULL, 'img_prt', '7lou noisette amande1.jpg', NULL, 1),
(11, 1, NULL, 'img_agc', 'Baklawa.jpg', NULL, 1),
(12, NULL, NULL, 'img_prc', 'Ghrayba normal.jpg', NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `enzo_lot`
--

CREATE TABLE `enzo_lot` (
  `lot_id` int(11) NOT NULL,
  `pag_id` int(11) NOT NULL,
  `lot_code` varchar(40) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `enzo_lot`
--

INSERT INTO `enzo_lot` (`lot_id`, `pag_id`, `lot_code`) VALUES
(1, 1, 'lot_1');

-- --------------------------------------------------------

--
-- Structure de la table `enzo_page`
--

CREATE TABLE `enzo_page` (
  `pag_id` int(11) NOT NULL,
  `pag_code` varchar(40) CHARACTER SET latin1 DEFAULT NULL,
  `pag_libelle` varchar(100) CHARACTER SET latin1 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `enzo_page`
--

INSERT INTO `enzo_page` (`pag_id`, `pag_code`, `pag_libelle`) VALUES
(1, 'accueil', 'page d''accueil');

-- --------------------------------------------------------

--
-- Structure de la table `enzo_texte`
--

CREATE TABLE `enzo_texte` (
  `txt_id` int(11) NOT NULL,
  `pag_id` int(11) DEFAULT NULL,
  `txt_code` varchar(40) CHARACTER SET latin1 DEFAULT NULL,
  `txt_valeur` text CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `enzo_texte`
--

INSERT INTO `enzo_texte` (`txt_id`, `pag_id`, `txt_code`, `txt_valeur`) VALUES
(2, 1, 'desc_meuble', 'Meuble'),
(3, 1, 'desc_cuisine', 'Cuisine'),
(4, 1, 'desc_porte', 'Porte'),
(5, 1, 'desc_agence', 'Agencement'),
(6, 1, 'desc_pharmacie', 'Pharmacie'),
(7, 1, 'lbl_inscription', 'Inscrivez-Vous A Notre Catalogue'),
(8, 1, 'lbl_catalogue', 'Notre catalogue contient les nouveaux produits et modele et les promotions.'),
(9, 1, 'lbl_saisie', 'Veuillez saisir votre mail'),
(10, 1, 'lbl_bouton', 'Inscription');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `enzo_compte`
--
ALTER TABLE `enzo_compte`
  ADD PRIMARY KEY (`cpt_id`),
  ADD UNIQUE KEY `cpt_login` (`cpt_login`);

--
-- Index pour la table `enzo_image`
--
ALTER TABLE `enzo_image`
  ADD PRIMARY KEY (`img_id`);

--
-- Index pour la table `enzo_lot`
--
ALTER TABLE `enzo_lot`
  ADD PRIMARY KEY (`lot_id`);

--
-- Index pour la table `enzo_page`
--
ALTER TABLE `enzo_page`
  ADD PRIMARY KEY (`pag_id`),
  ADD UNIQUE KEY `pag_code` (`pag_code`);

--
-- Index pour la table `enzo_texte`
--
ALTER TABLE `enzo_texte`
  ADD PRIMARY KEY (`txt_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `enzo_compte`
--
ALTER TABLE `enzo_compte`
  MODIFY `cpt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `enzo_image`
--
ALTER TABLE `enzo_image`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `enzo_lot`
--
ALTER TABLE `enzo_lot`
  MODIFY `lot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `enzo_page`
--
ALTER TABLE `enzo_page`
  MODIFY `pag_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `enzo_texte`
--
ALTER TABLE `enzo_texte`
  MODIFY `txt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
