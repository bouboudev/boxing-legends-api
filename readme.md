# 🥊 Boxing Legends API

## 📌 Description

Boxing Legends API est une API REST développée avec Node.js et Express permettant de classifier des boxeurs selon un système de scoring personnalisé afin de déterminer s'ils peuvent être considérés comme des "légendes".

L'API ne se contente pas d'afficher des données : elle applique une logique métier pour analyser les performances des boxeurs.

---

## 🚀 Fonctionnalités

* Liste des boxeurs avec score calculé
* Détection automatique des légendes
* Classement des boxeurs
* Détail d’un boxeur avec explication du score

---

## 🧠 Système de scoring

Chaque boxeur reçoit un score basé sur les critères suivants :

* ≥ 40 victoires → +20 points
* Taux de victoire > 85% → +20 points
* ≥ 20 KO → +10 points
* Champion du monde → +20 points
* Multi-titres (≥ 2 catégories) → +15 points

👉 Un boxeur est considéré comme **légende** si son score ≥ 70

---

## 🔌 Endpoints

### 📋 Tous les boxeurs

GET /boxers

---

### 🥇 Légendes

GET /legends

---

### ⭐ Classement

GET /boxers/top

---

### 🔎 Détail d’un boxeur

GET /boxers/:id

---

## ▶️ Lancer le projet en local

```bash
git clone https://github.com/bouboudev/boxing-legends-api.git
cd boxing-legends-api
npm install
node index.js
```

API disponible sur :
http://localhost:3000

---

## 🌐 Démo en ligne

👉 (à compléter après déploiement)

* https://boxing-legends-api.onrender.com/boxers
* https://boxing-legends-api.onrender.com/legends
* https://boxing-legends-api.onrender.com/boxers/top


---

## 🛠️ Technologies

* Node.js
* Express
* JSON (data locale)

---

## 💡 Objectif du projet

Ce projet a été réalisé dans le but de démontrer :

* la création d’une API REST
* l’implémentation d’une logique métier
* la transformation de données
* la structuration d’un backend simple et propre

---

## 📈 Améliorations possibles

* Ajout d’une base de données
* Système d’authentification
* Ajout de filtres avancés (catégorie, KO, etc.)
* Intégration d’une API externe de boxe
* Interface frontend (Vue.js)

---

## 👨‍💻 Auteur

Développé par bouboudev

---
