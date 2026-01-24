# Extension Chrome - Audit d'Accessibilité Web

## 📋 Description

Cette extension Chrome permet d'auditer l'accessibilité d'une page web selon les normes WCAG (Web Content Accessibility Guidelines). Elle analyse automatiquement la page active et présente un rapport détaillé des problèmes d'accessibilité détectés.

## ✨ Fonctionnalités

L'extension vérifie les aspects suivants :

- **🖼️ Images** : Détecte les images sans texte alternatif
- **🔗 Liens** : Identifie les liens sans texte ou avec un texte non descriptif
- **📋 Titres** : Vérifie la hiérarchie et la structure des titres (H1-H6)
- **📝 Formulaires** : Détecte les champs de formulaire sans étiquettes
- **🎨 Contraste** : Analyse le ratio de contraste entre le texte et l'arrière-plan
- **🏗️ Structure** : Vérifie l'attribut lang, les landmarks ARIA et les boutons

## 📦 Installation

### Étape 1 : Créer les icônes (IMPORTANT)

Avant d'installer l'extension, ajoutez 3 fichiers d'icônes au dossier :

**Option facile** : Allez sur https://favicon.io/emoji-favicons/

1. Cherchez "wheelchair" ou utilisez l'emoji ♿
2. Téléchargez le pack
3. Renommez les fichiers :
   - `favicon-16x16.png` → `icon16.png`
   - `favicon-32x32.png` → `icon48.png` (ou utilisez 48x48)
   - `android-chrome-192x192.png` → `icon128.png` (ou utilisez 128x128)
4. Placez-les dans le dossier `C:\Users\P193\accessibility-audit-extension\`

**Alternative** : Supprimez temporairement les références aux icônes dans manifest.json

### Étape 2 : Installer l'extension dans Chrome

1. Ouvrez Chrome
2. Tapez `chrome://extensions/` dans la barre d'adresse
3. Activez le **Mode développeur** (bouton en haut à droite)
4. Cliquez sur **Charger l'extension non empaquetée**
5. Sélectionnez le dossier : `C:\Users\P193\accessibility-audit-extension`
6. ✅ L'extension est installée !

## 🚀 Utilisation

1. Visitez n'importe quelle page web
2. Cliquez sur l'icône de l'extension dans la barre d'outils Chrome
3. L'analyse démarre automatiquement
4. Consultez les résultats organisés par catégorie
5. Cliquez sur **📥 Exporter le rapport** pour télécharger un rapport détaillé

## 📁 Structure du projet

```
accessibility-audit-extension/
│
├── manifest.json          # Configuration de l'extension
├── content.js            # Script d'analyse de la page (420 lignes)
├── popup.html            # Interface utilisateur
├── popup.js              # Logique de l'interface
├── popup.css             # Styles de l'interface
├── README.md             # Cette documentation
│
└── (icônes à ajouter)
    ├── icon16.png        # 16x16 pixels
    ├── icon48.png        # 48x48 pixels
    └── icon128.png       # 128x128 pixels
```

## 🛠️ Technologies utilisées

- **Manifest V3** : Dernière version du système d'extensions Chrome
- **Content Scripts** : Pour analyser le DOM de la page
- **Chrome Extensions API** : Pour communiquer entre les composants
- **JavaScript vanilla** : Pas de dépendances externes
- **CSS moderne** : Design responsive et accessible

## 📚 Ce que vous allez apprendre

### 1. Architecture d'une extension Chrome

- **manifest.json** : Configuration et permissions
- **Content scripts** : Injection de code dans les pages web
- **Popup** : Interface utilisateur de l'extension
- **Message passing** : Communication entre composants

### 2. Concepts d'accessibilité web (WCAG)

- Textes alternatifs pour les images
- Structure sémantique (titres H1-H6)
- Étiquettes de formulaires
- Contraste des couleurs
- Landmarks ARIA
- Navigation au clavier

### 3. Manipulation du DOM

- Sélection d'éléments avec querySelector
- Analyse des attributs ARIA
- Calcul du ratio de contraste
- Parcours de la structure HTML

## 🎯 Améliorations possibles pour votre portfolio

1. **Tests automatisés** avec Jest ou Mocha
2. **Support multilingue** (i18n) pour l'interface
3. **Historique des audits** avec Chrome Storage API
4. **Export PDF** avec jsPDF
5. **Suggestions de correction** automatiques
6. **Mode sombre** pour l'interface
7. **Intégration axe-core** pour des analyses plus poussées
8. **Graphiques visuels** des scores avec Chart.js
9. **Vérification du focus** au clavier
10. **Détection des animations** problématiques

## 💡 Conseils pour impressionner les recruteurs

### Pour votre CV

- ✅ "Développement d'une extension Chrome d'audit d'accessibilité WCAG"
- ✅ "Maîtrise de l'API Chrome Extensions (Manifest V3)"
- ✅ "Analyse automatisée de l'accessibilité web"

### Pour votre portfolio

1. **GitHub** : Créez un repo avec des commits propres
2. **README** : Documentation claire avec captures d'écran
3. **Démo vidéo** : Screencast de 1-2 minutes sur YouTube
4. **Article de blog** : Expliquez vos choix techniques
5. **Live demo** : Publiez l'extension (optionnel)

### Pour l'entretien

Préparez-vous à expliquer :

- Pourquoi l'accessibilité web est importante
- Comment fonctionne l'architecture d'une extension Chrome
- Les défis techniques rencontrés et comment vous les avez résolus
- Les normes WCAG et leur application pratique

## 🔗 Ressources utiles

- [Documentation Chrome Extensions](https://developer.chrome.com/docs/extensions/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN - Accessibilité](https://developer.mozilla.org/fr/docs/Web/Accessibility)
- [axe DevTools](https://www.deque.com/axe/devtools/) - Extension professionnelle de référence
- [WebAIM](https://webaim.org/) - Ressources sur l'accessibilité

## 🐛 Dépannage

### L'extension ne s'installe pas

- Vérifiez que les icônes sont présentes ou supprimez leurs références
- Validez le manifest.json sur jsonlint.com

### L'analyse ne démarre pas

- Actualisez la page web
- Vérifiez la console (F12) pour voir les erreurs
- Certaines pages (chrome://, file://) ne peuvent pas être analysées

### Les résultats sont vides

- Assurez-vous d'être sur une vraie page web (pas chrome://)
- Vérifiez que le content script est bien injecté

## 📝 Licence

Projet éducatif - Libre d'utilisation pour votre portfolio

---

**Créé pour démontrer des compétences en développement web et accessibilité**

Bonne chance pour votre recherche d'emploi ! 🚀

┌─────────────┐ ┌──────────────┐
│ POPUP │ │ PAGE WEB │
│ popup.js │ │ content.js │
└──────┬──────┘ └──────┬───────┘
│ │
│ 1. sendMessage({action: "runAudit"}) │
│────────────────────────────────────────>│
│ │
│ 2. Analyse DOM │
│ Détecte img │
│ sans alt │
│ │
│ 3. sendResponse({results: ...}) │
│<────────────────────────────────────────│
│ │ 4. Affiche │
les résultats │

popup.js popup visuel pas accès au DOM de la page et peut envoyer des messages au content.js qui lui a accès au DOM de la page web active.
content.js content injecté dans la page web active, a accès au DOM de la page et peut recevoir des messages du popup.js et lui envoyer des réponses.

Si l'image transmet une information (un logo, un graphique, une icône de bouton sans texte), elle DOIT être décrite.

Pour une balise <img> : Utilise simplement alt="Description". Pas besoin de role ou de aria, le navigateur comprend déjà que c'est une image.

Pour un <svg> : Comme le navigateur ne sait pas par défaut si un SVG est une icône, une illustration ou juste un décor, il faut être précis :

role="img" (pour dire : "ceci est une image").

<title>Description</title> (le texte lu par l'ordinateur).

aria-labelledby="ID_du_titre" (pour lier techniquement le rôle au titre).

2. L'image est "Décorative"
   Si l'image est juste là pour faire joli (une bordure, un séparateur, une icône à côté d'un texte qui dit déjà la même chose), elle doit être muette.

Pour une balise <img> : Utilise un attribut vide alt="". C'est le signal universel pour dire aux lecteurs d'écran : "Ignore cet élément".

Pour un <svg> : Utilise aria-hidden="true". Cela retire le SVG de l'arbre d'accessibilité.

Type d'élément,Cas d'usage,Ce que ton extension doit vérifier
<img>,Informatif,Présence d'un alt non vide.
<img>,Décoratif,"Présence d'un alt="""" (si l'attribut manque, c'est une erreur)."
<svg>,Informatif,"Présence de role=""img"" ET d'un <title>."
<svg>,Décoratif,"Présence de aria-hidden=""true""."
