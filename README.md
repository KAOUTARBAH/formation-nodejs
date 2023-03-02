
https://github.com/Djeg/formation-nodejs-mongo/blob/session/27-02-23/03-03-23/assets/exos/first-server.md


# formation-nodejs
Créer son repository github 
créer un nouveau repository formation-nodejs.

Cloner le repository sur votre ordinateur
Pour cela, vous pouvez utiliser le ligne de commande :

$ git clone <urlDuRepository>
Oou bien VSCode (séction Controle de source, puis les 3 petits points verticaux puis cloner)

OUvrir le projet avec VSCode
Ouvreé le dossier clonné avec VSCode, et réaliser un premier commit avec une petite description de la formation dans le fichier README.md

Envoyer le lien de votre repository github à votre formateur !


# Votre premier server logique
Installer fastify
Dans le fichier index.ts, créé une application fastify qui écoute sur votre machine, sur le port 4646
Ajouter 2 routes :
GET /: Qui retourne la chaine de caractère Bienvenue sur mon serveur
GET /hello: Qui retourne la chaine de caractère Bonjour tout le monde
Utiliser des variables d'environement pour le port et le host de votre serveur ...
L'objéctif de l'exercice 4 est de rendre configurable pour Alban le host et le port de notre serveur !

# Tester votre server
Créer une fichier request.http à la racine de votre projet afin de pouvoir tester notre server
Dans ce fichier écrivez une request en méthode GET sur la page d'acceuil de notre server
Toujours dans ce fichier, écrivez une seconde requête pour la resource /hello sur notre serveur
Envoyé chacune des requêtes assurez-vous que tout fonctionne
Commit sur gitub et de partager le lien github

# Le format json et la réponse
Dans le fichier index.ts, créer une route : /eleves qui retourne le tableaux suivant :
id	nom	prenom	age
1	john	john	32
2	rose	john	36
3	jane	john	40
4	jean	john	38
il faudra essayer de transformer les données au dessus en tableaux javascript

Tester votre route en utilusant le fichier request.http
Ajouter dans la réponse une en-tête http : Developed-With: fastify
Tester votre route en utilusant le fichier request.http
Faite un commit, pousser sur github et envoyer le lien github sur le chat !


# La calculatrice !
Dans le fichier index.ts, réaliser les routes suivantes :

L'addition
Créer une route get /calc/add/:x/:y avec le bon type associer
Retourner un objet json de cette forme :
{
  "result": <resultat>,
  "x": <x>,
  "y": <y>,
  "operation": "addition"
}

#La route calculatrice
Créer la route suivante post /calculate
Cette route accépte un en tête HTTP : Operation pouvant contenir la chaine de caractère suivante :
add
mul
sub
div
Cette route accépte aussi des données JSON dans son body, ces données doivent être de cette forme :
{
  "x": 15,
  "y": 26
}

# Le plugin calulcatrice
Installer fastify plugin
Créer un dossier dans src/ nommé routes
Ajouter un fichier calculatrice.ts dans le dossier src/routes
Placez toutes les routes concernant la calculatrice dans un plugin du fichier calculatrice.ts
Branchez votre plugin dans le fichier index.ts (vous pouvez supprimer les routes concernant la calculatrice)
Tester puis publié sur github


# Exercice MongoDB
##Enregistrer et mémoriser les résultat de notre calculatrice !
Dans le plugin des calculatrice src/routes/calculatrice.ts

Il vous faut au préalable une base de données mongodb ATLAS

Installer et le plugin mongodb
Enregistrer et configurer le plugin mongodb dans src/index.ts
Dans toutes les routes du plugin src/routes/calculatrice.ts, enregistré le retour de la fonction dans une collection mongodb nommé calculatrices
(BONUS) Créer une routes /calculatrice/results qui retourne tout les résultats enregistré dans mongodb