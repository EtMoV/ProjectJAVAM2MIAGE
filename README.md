# ProjectJAVAM2MIAGE
Projet "Java applications distribuées" M2 MIAGE

# Description
Ce projet est destiné pour le projet JAVA M2 MIAGE FA DESCARTES.

Le projet a pour but de lister un ensemble de bières, selon trois catégories: 
  - Les blondes
  - Les brunes
  - Les ambrées
  
Il est composé d'une partie UI (dossier ui), d'une partie serveur (dossier bierrophile), et d'un fichier docker pour installer rabbitMQ.

# Bierrophile

La partie serveur est basée sur un springBoot+JPA+BDD-H2.

Il démarre sur le port 9090 (cf. application.properties)

Pour démarrer le projet, il faut soit le compiler et lancer le jar. Soit l'executer via un IDE tel que eclispe ou IntelliJ (Remarque : le projet a été testé sous Intellij)

Il contient une classe Bierre représentant le modèle de donnée, un controller gérant les requêtes suivantes :

- GET /Bierres : Récupérer toutes les bièrres
- GET /Bierres/{type} : Récupérer toutes les bièrres selon un type particulier
- POST /Bierre : Enregistrer une nouvelle bierre (attention au id autogénéré en cas de script SQL au démarrage de l'instance (data.sql))
- DELETE /Bierre/{id} : Supprimer une bièrre selon son id
- PUT /Bierre : Modifie une bièrre

L'application contient de plus une partie pour échanger avec le message broker rabbitMQ. 

Deux classes (Runner et Receiver) ont pour but au démarrage de l'instance de faire passer un message dans le message broker afin de déclencher une fonction mail (non codée pour l'instant).

# UI

L'interface utilisateur est une application Angular+Booststrap démarrant sur le port 4200

Lors de la récupération du projet lancer un npm install puis pour lancer la version de développement un npm run start

# RabbitMQ

Le fichier docker-compose.yml contient une image docker rabbitMQ. Le message broker est neccessaire pour le bon déroulement de l'application

