# Entraînement checkpoint 2

> :warning: :warning: :warning: **NE. PAS. FORKER... NE. PAS. FORKER...** :warning: :warning: :warning:

**Note** : le vrai checkpoint comportera également un quiz. Ce sujet d'entraînement porte uniquement sur la partie React.

## Compétences évaluées

Pas de panique si tu ne te sens pas à l'aise sur tout : cet entraînement se veut progressif.

- Afficher un composant (React 02.1)
- Passer des props (React 02.2)
- Répéter un composant (React 03)
- Réagir à un évènement (React 04)
- Gérer un state (React 05)
- Requêter une API (React 07)
- Cycle de vie de base (React 08)
- **bonus 1** : filtrer une liste (React 09)
- **bonus 2** : supprimer un élément d'une liste (livecoding lundi 9 novembre)

> :warning: **conseil** : _commit_ souvent, et avec des messages explicites. Par exemple : `"Add Header component"`.

## L'API

Tu ne vas pas t'en servir _tout de suite_, mais l'API que tu vas utiliser est hébergée ici : <https://my-json-server.typicode.com/bhubr/people-api/people>

## Commencer

- **Clone** ce repo, et après t'être placé **dedans**, créé une branche `nom_prenom`
- Crée un nouveau projet React nommé **people-of-europe** grâce à `create-react-app` (la [doc](https://create-react-app.dev/docs/getting-started#quick-start) pour rappel)

## Afficher des composants

- Crée d'abord un composant `Header` qui affiche "en dur" le titre `This is a fake title`, dans un `h1`.
- Crée un composant `Person` qui affiche les données d'une personne. Pour faire simple, utilise une `div` pour ouvrir le composant, dans laquelle on trouvera, pour l'instant, des données en dur :

  - le nom de la personne dans un `h3` : `Foo Bar`,
  - un "placeholder" pour la photo. Une balise `img` affichant l'image <https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png>, avec en attribut `alt` le nom `Foo Bar`.
  - sous l'image, la ville et le pays de résidence de la personne, dans un `p` : `Paris, France` (en dur pour l'instant)

- Crée également un composant `Footer` qui affiche "en dur" `© 2020 Your Name`.
- Appelle ces composants depuis `App`

## Passer des props

Il est temps de remplacer les contenus en dur, en utilisant des props !

- Tu devras passer une props `title` au composant `Header` : passe le titre que tu veux, et fais en sorte que `Header` l'affiche dans le `h1`, au lieu du titre en dur.
- De même, tu devras passer deux props `year` et `authorName` au composant `Footer`, et remplacer l'année en dur par la prop `year`,et `Your Name` par la prop `authorName`.
- Tu devras passer cinq props au composant `Person`. `firstName` et `lastName` seront utilisés pour remplacer le contenu du `h3`, `pic` pour fournir l'adresse de l'image, `city` et `country` pour remplacer le contenu du `p` :

  - `firstName`,
  - `lastName`,
  - `pic` (l'avatar ou image de profil),
  - `city`,
  - `country`

- Appelle deux fois `Person` en lui passant des props différentes

## Répéter un composant

Crée un composant `PersonList` et fais lui répéter le composant `Person` à partir du tableau de personnes ci-dessous.

```javascript
const samplePersons = [
  {
    id: 3,
    firstName: "Léa",
    lastName: "Marchand",
    gender: "female",
    loc: {
      city: "Dunkerque",
      country: "France",
    },
    email: "lea.marchand@example.com",
    pic: "https://randomuser.me/api/portraits/women/0.jpg",
    nat: "French",
  },
  {
    id: 4,
    firstName: "Matteo",
    lastName: "Michel",
    gender: "male",
    loc: {
      city: "Boulogne-Billancourt",
      country: "France",
    },
    email: "matteo.michel@example.com",
    pic: "https://randomuser.me/api/portraits/men/46.jpg",
    nat: "French",
  },
  {
    id: 5,
    firstName: "Anett",
    lastName: "Schenkel",
    gender: "female",
    loc: {
      city: "Lennestadt",
      country: "Germany",
    },
    email: "anett.schenkel@example.com",
    pic: "https://randomuser.me/api/portraits/women/36.jpg",
    nat: "German",
  },
];
```

## Requêter l'API

Cette partie implique d'utiliser deux, voire trois notions :

- Utilisation du state (React 05)
- Requêtes API avec Fetch ou Axios (React 07)
- Pour déclencher la requête :

  - Soit utiliser un bouton pour déclencher la requête (quête React 04 sur les évènements)
  - Soit déclencher l'appel à l'API via `componentDidMount` (quête React 08)

Il va te falloir :

- Requêter l'URL de l'API : <https://my-json-server.typicode.com/bhubr/people-api/people>
- Stocker les données dans le state de `App`
- Faire passer les données de `App` à `PersonList`
- Supprimer les données en dur (`samplePersons`) qui ne serviront plus

## Filtrer la liste de personnes

On peut imaginer plusieurs critères de filtrage :

- Par genre (`gender`) en utilisant un `select`,
- Par nationalité (`nat`), toujours avec un `select`,
- Par prénom/nom, en utilisant un champ `input`.

Tu peux implémenter un ou plusieurs de ces filtres. Chaque champ (select ou input) doit avoir une donnée correspondante dans le state, permettant de filtrer le jeu de résultats.

Le mieux est ensuite d'implémenter le filtrage dans le `render` de `App`.
