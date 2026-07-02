# Plan de création du site — À Pas de Gazelles

Site de soutien à l'équipe **Les Déserteuses du 95** pour sa participation au **Trek'in Gazelles 2027**.

## Suivi du projet

- Une tâche est cochée uniquement lorsqu'elle est terminée et vérifiée.
- Pour chaque section, le contenu doit être validé avant de commencer l'intégration technique.
- Les informations relatives à l'édition 2027 ne doivent être publiées qu'après confirmation par le [site officiel du Trek'in Gazelles](https://www.trekingazelles.com/).
- La première version est une page React statique, responsive et sans formulaire ni paiement intégré.

---

## 0. Mise en place globale

### 0.1 Cadrage éditorial

- [x] Confirmer le nom public de l'association : « À pas de gazelles ».
- [x] Confirmer le nom public de l'équipe : « Les Déserteuses du 95 ».
- [x] Définir en une phrase l'objectif principal du site : obtenir des soutiens pour le Trek'in Gazelles 2027: "Rejoignez l’aventure des Déserteuses du 95 et aidez-les à prendre le départ du Trek’in Gazelles 2027"
- [x] Définir le ton rédactionnel : chaleureux, humain, positif et crédible.
- [x] Rassembler dans un même dossier les textes, photos, logos, liens et informations légales validés.

### 0.2 Architecture du site

- [x] Valider l'ordre définitif des sections : Accueil, Équipe, Trek'in, Association, Cap sur 2027, Soutenir l'aventure, Contact.
- [x] Définir les ancres stables : `accueil`, `equipe`, `trek`, `association`, `preparation`, `soutien`, `contact`.
- [X] Préparer une navigation fixe sur ordinateur et un menu accessible sur mobile.
- [ ] Prévoir des appels au contact depuis l'accueil et la section de soutien.

### 0.3 Fondations React

- [x] Conserver React, Vite et JavaScript pour la première version.
- [x] Corriger les problèmes actuels d'encodage des caractères français.
- [x] Supprimer le contenu et les styles de démonstration inutiles.
- [x] Créer un header avec le titre 
- [x] Créer un main pour l'instant vide
- [x] Créer un footer avec un lien de contact
- [x] Créer un menu de navigation avec des titres correpondants au sections
- [X] Découper la page en composants correspondant aux grandes sections.
- [X] Vérifier que le projet passe les commandes de lint et de build avant de commencer les sections.
- [X] Pousser sur github

### 0.4 Charte graphique et composants communs

- [ ] Extraire et valider la palette depuis le logo : ivoire, sable, ocre, terre cuite, brun dune et brun foncé.
- [ ] Vérifier le contraste des couleurs selon le niveau WCAG AA.
- [ ] Valider les typographies : Fraunces pour les titres et Nunito Sans pour les textes.
- [ ] Définir les tailles de texte, espacements, largeurs maximales et points de rupture responsive.
- [ ] Créer les variables CSS globales de couleurs, typographies, espacements, rayons et ombres.
- [ ] Créer les styles communs des titres, boutons, liens, cartes et conteneurs.
- [ ] Définir les motifs décoratifs : dunes, lignes topographiques et repères de boussole.
- [ ] Utiliser les motifs sans gêner la lecture ni surcharger les pages mobiles.
- [ ] Préparer le logo complet, le logo simplifié et le favicon dans des formats adaptés au web.
- [ ] Prévoir des états visibles pour le survol, le focus clavier et les boutons désactivés.
- [ ] Respecter la préférence système de réduction des animations.

### 0.5 Qualité globale

- [ ] Utiliser une structure HTML sémantique avec un seul titre principal `h1`.
- [ ] Ajouter un lien d'évitement vers le contenu principal.
- [ ] Définir un texte alternatif pertinent pour chaque image informative.
- [ ] Optimiser les photos en WebP ou AVIF avec des dimensions responsives.
- [ ] Ajouter les métadonnées SEO générales et l'image de partage social.
- [ ] Préparer les données structurées de type `Organization`.
- [ ] Ne pas ajouter de données `Event` avant la publication des informations officielles 2027.

---

## 1. Section Accueil

### 1.1 Définition du contenu

- [x] Choisir la photographie principale de l'équipe ou une image temporaire autorisée.
- [x] Rédiger une accroche courte mentionnant le Trek'in Gazelles 2027 et l'association.
- [ ] Valider le contenu final de la section.

### 1.2 Étapes techniques

- [x] Rendre l'en-tête lisible sur fond clair comme sur fond photographique.
- [x] Créer un menu mobile ouvrable et refermable au clavier.
- [x] Adapter la composition aux écrans mobiles, tablettes et ordinateurs.
- [ ] Vérifier le recadrage, le poids et le texte alternatif de l'image.

---

## 2. Section Notre équipe

### 2.1 Définition du contenu

- [x] Rassembler un portrait cohérent de chacune des trois participantes.
- [x] Confirmer le prénom et le nom affichés pour chaque participante.
- [x] Rédiger une courte présentation individuelle de longueur similaire.
- [ ] Obtenir l'accord des trois participantes sur les textes et les photos.

### 2.2 Étapes techniques

- [x] Créer les données des trois membres dans la collection `teamMembers`.
- [x] Créer un composant de portrait réutilisable.
- [x] Afficher les trois portraits dans une grille équilibrée sur ordinateur.
- [x] Transformer la grille en disposition verticale lisible sur mobile.
- [ ] Uniformiser le cadrage et le ratio des photographies.
- [x] Différencier visuellement présentation, motivation et rôle.
- [ ] Contrôler qu'aucun texte n'est tronqué aux différentes largeurs.

---

## 3. Section Le Trek'in Gazelles

### 3.1 Définition du contenu

- [x] Rédiger une explication courte du Trek'in avec des mots propres au site.
- [x] Présenter le principe d'une équipe de trois femmes.
- [x] Expliquer l'orientation sans GPS à l'aide d'une carte et d'une boussole.
- [x] Mentionner le désert marocain et une distance moyenne d'environ 20 km par jour.
- [x] Présenter brièvement les dimensions sportive, solidaire et environnementale.
- [x] Ajouter un lien clairement identifié vers le [concept officiel](https://www.trekingazelles.com/le-trek/concept/).
- [x] Vérifier les faits auprès des pages officielles sur le [trek engagé](https://www.trekingazelles.com/le-trek/trek-engage/) et la [préparation](https://www.trekingazelles.com/participer/se-preparer/).
- [x] Ne pas annoncer les dates ou modalités 2027 avant leur publication officielle.
- [x] Valider le contenu final de la section.

### 3.2 Étapes techniques

- [x] Créer une introduction courte suivie de trois points clés.
- [x] Concevoir trois cartes ou repères visuels : orientation, dépassement de soi, engagement.
- [x] Ajouter des images cohérentes et descriptives sans dépendre d'une bibliothèque lourde.
- [x] Intégrer le lien externe vers le site officiel avec un libellé explicite.
- [x] Signaler que le site d'À Pas de Gazelles n'est pas le site officiel de l'événement.
- [x] Vérifier la lisibilité des cartes sur mobile et aux forts niveaux de zoom.
- [x] Contrôler que les liens externes sont accessibles au clavier.

---

## 4. Section À Pas de Gazelles

### 4.1 Définition du contenu

- [x] Rédiger l'histoire de la création de l'association.
- [x] Expliquer que sa mission actuelle est de porter le projet Trek'in Gazelles 2027.
- [x] Présenter son lien avec Les Déserteuses du 95 et son ancrage dans le Val-d'Oise.
- [x] Choisir trois valeurs représentatives, accompagnées d'une phrase concrète chacune.
- [x] Sélectionner le logo et une éventuelle photographie illustrant l'association.
- [x] Vérifier que le texte ne promet pas de missions futures encore non décidées.
- [x] Valider le contenu final de la section.

### 4.2 Étapes techniques

- [x] Construire une composition associant le logo, l'histoire et les valeurs.
- [x] Créer un composant simple et réutilisable pour les valeurs.
- [x] Préserver les proportions du logo et fournir une alternative textuelle adaptée.
- [x] Alterner la couleur de fond avec la section précédente pour rythmer la page.
- [x] Adapter la composition en une seule colonne sur mobile.
- [x] Vérifier que la section distingue clairement l'association, l'équipe et l'organisateur du Trek'in.

---

## 5. Section Cap sur 2027

### 5.1 Définition du contenu

- [ ] Lister les grandes étapes déjà réalisées.
- [ ] Lister les étapes futures jusqu'au départ.
- [ ] Définir pour chaque étape un titre, une période, une courte description et un statut.
- [ ] Inclure au minimum : création, inscription, entraînements, recherche de soutiens, stage de navigation et départ.
- [ ] Vérifier que les dates prévisionnelles sont clairement distinguées des dates confirmées.
- [ ] Valider l'ordre chronologique et le contenu final.

### 5.2 Étapes techniques

- [ ] Créer la collection de données `timeline`.
- [ ] Prévoir les statuts `terminé`, `en cours` et `à venir`.
- [ ] Construire une frise verticale accessible et simple à maintenir.
- [ ] Différencier les statuts par le texte et les icônes, pas uniquement par la couleur.
- [ ] Mettre visuellement en avant l'étape en cours.
- [ ] Afficher les dates prévisionnelles avec une formulation non ambiguë.
- [ ] Vérifier la lecture chronologique sur mobile et avec un lecteur d'écran.

---

## 6. Section Soutenir l'aventure

Cette section unique contient trois sous-sections courtes : **Notre objectif**, **Comment nous aider** et **Ils nous soutiennent**.

### 6.1 Définition du contenu — Notre objectif

- [ ] Définir le budget total nécessaire.
- [ ] Définir le montant déjà réuni et sa date de mise à jour.
- [ ] Lister les principaux postes : inscription, transport, équipement, formation et communication.
- [ ] Définir le montant ou le pourcentage de chaque poste.
- [ ] Rédiger une phrase expliquant l'utilisation transparente des soutiens.
- [ ] Valider tous les chiffres avant publication.

### 6.2 Définition du contenu — Comment nous aider

- [ ] Définir les formes de soutien recherchées : financier, matériel, logistique et visibilité.
- [ ] Rédiger une phrase courte pour chaque forme de soutien.
- [ ] Définir l'adresse email utilisée pour les demandes de partenariat.
- [ ] Définir l'objet et le corps du message prérempli.
- [ ] Choisir le libellé principal : « Échangeons sur votre soutien ».
- [ ] Ne pas promettre de paiement en ligne dans la première version.

### 6.3 Définition du contenu — Ils nous soutiennent

- [ ] Rassembler le nom, le logo et le site de chaque partenaire.
- [ ] Obtenir l'autorisation d'afficher chaque logo.
- [ ] Définir une phrase de remerciement commune.
- [ ] Définir le message affiché tant qu'aucun partenaire n'est publié.
- [ ] Valider la liste et l'ordre d'affichage.

### 6.4 Étapes techniques

- [ ] Regrouper les trois sous-sections dans un seul composant principal `Soutien`.
- [ ] Créer une structure de données pour le budget et les partenaires.
- [ ] Calculer le pourcentage de progression à partir du montant reçu et de l'objectif.
- [ ] Limiter visuellement la jauge à 100 %, même si l'objectif est dépassé.
- [ ] Afficher les montants avec le format français et la date de mise à jour.
- [ ] Rendre la jauge compréhensible avec un libellé textuel et les attributs ARIA adaptés.
- [ ] Présenter les postes de dépense de façon compacte sur mobile.
- [ ] Créer les quatre cartes de formes de soutien.
- [ ] Ajouter un lien `mailto:` avec objet et message préremplis.
- [ ] Vérifier le fonctionnement du lien sur ordinateur et mobile.
- [ ] Afficher les partenaires dans une grille de logos homogène.
- [ ] Préserver les proportions et la lisibilité de chaque logo.
- [ ] Ouvrir les sites partenaires de manière sûre et indiquer clairement les liens externes.
- [ ] Prévoir un état vide soigné tant qu'aucun partenaire n'est disponible.

---

## 7. Section Contact

### 7.1 Définition du contenu

- [ ] Confirmer l'adresse email publique de l'association.
- [ ] Confirmer les réseaux sociaux à afficher.
- [ ] Définir la localisation publique, sans diffuser d'adresse personnelle.
- [ ] Rédiger une invitation courte destinée aux particuliers et aux entreprises.
- [ ] Choisir les libellés de contact et valider le contenu final.

### 7.2 Étapes techniques

- [ ] Construire une section courte avec email, réseaux sociaux et localisation générale.
- [ ] Rendre l'adresse email directement cliquable.
- [ ] Ajouter des libellés accessibles aux icônes sociales.
- [ ] Vérifier tous les liens et leurs états de focus.
- [ ] Ne pas créer de formulaire ni collecter de données personnelles au lancement.
- [ ] Vérifier que la section reste claire même si certains réseaux sociaux sont absents.

---

## 8. Pied de page et informations légales

### 8.1 Définition du contenu

- [ ] Rassembler le nom légal, le siège, le numéro RNA et les responsables de publication nécessaires.
- [ ] Confirmer les informations relatives à l'hébergeur après son choix définitif.
- [ ] Rédiger les mentions légales adaptées à l'association.
- [ ] Rédiger une politique de confidentialité minimale indiquant l'absence de formulaire et de suivi au lancement.
- [ ] Préparer les crédits des photographies, illustrations et logos.
- [ ] Valider juridiquement et éditorialement les textes avant publication.

### 8.2 Étapes techniques

- [ ] Créer un pied de page avec logo simplifié, coordonnées et liens utiles.
- [ ] Ajouter un lien vers le site officiel du Trek'in Gazelles.
- [ ] Ajouter les liens vers les mentions légales, la confidentialité et les crédits.
- [ ] Rendre les informations légales accessibles sans ajouter de routeur lourd.
- [ ] Afficher automatiquement l'année courante dans le copyright.
- [ ] Vérifier la lisibilité, les contrastes et la navigation clavier.

---

## 9. Vérification finale et mise en ligne

### 9.1 Validation fonctionnelle

- [ ] Tester chaque ancre de navigation.
- [ ] Tester le menu mobile au clavier et au toucher.
- [ ] Tester tous les boutons, liens externes, emails et réseaux sociaux.
- [ ] Vérifier le calcul et l'affichage de la progression financière.
- [ ] Vérifier le comportement des contenus manquants ou encore vides.
- [ ] Exécuter le lint sans erreur.
- [ ] Générer le build de production sans erreur.

### 9.2 Validation visuelle et accessibilité

- [ ] Tester au minimum aux largeurs 360 px, 768 px, 1024 px et 1440 px.
- [ ] Tester sur Chrome, Firefox, Safari et Edge si disponibles.
- [ ] Vérifier la navigation complète au clavier.
- [ ] Vérifier l'ordre des titres et les régions sémantiques.
- [ ] Vérifier les contrastes, textes alternatifs et libellés accessibles.
- [ ] Vérifier le rendu avec une taille de texte augmentée à 200 %.
- [ ] Vérifier le mode de réduction des animations.

### 9.3 Référencement et performance

- [ ] Vérifier le titre, la description, l'URL canonique et l'image de partage.
- [ ] Vérifier les données structurées de l'association.
- [ ] Générer `robots.txt` et `sitemap.xml`.
- [ ] Vérifier que toutes les images sont compressées et correctement dimensionnées.
- [ ] Contrôler l'absence de déplacement important de mise en page.
- [ ] Viser un score Lighthouse supérieur à 90 dans les quatre catégories principales.

### 9.4 Publication

- [ ] Créer une prévisualisation de production.
- [ ] Faire valider la prévisualisation par l'équipe.
- [ ] Choisir et configurer l'hébergement définitif ; Vercel est le choix par défaut.
- [ ] Raccorder le nom de domaine lorsque celui-ci est disponible.
- [ ] Vérifier HTTPS, les métadonnées et tous les liens sur le domaine public.
- [ ] Effectuer une dernière sauvegarde et identifier la version de lancement dans Git.

---

## Évolutions hors première version

- [ ] Étudier ultérieurement l'ajout d'un journal de préparation.
- [ ] Étudier une plateforme externe de dons ou d'adhésions.
- [ ] Étudier un formulaire de contact avec traitement RGPD.
- [ ] Étudier un CMS pour rendre les contenus administrables.
- [ ] Ajouter les informations et le suivi officiel de l'édition 2027 lorsqu'ils seront disponibles.
