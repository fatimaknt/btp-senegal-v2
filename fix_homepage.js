const fs = require('fs');

// Lire le fichier
let content = fs.readFileSync('/Users/pro/btp/src/pages/Home/HomePage.js', 'utf8');

// Remplacer les cartes pour les rendre cliquables et supprimer les effets de survol
content = content.replace(
    /_jsxs\(Card, \{\s*sx: \{\s*borderRadius: 2,\s*overflow: 'hidden',\s*boxShadow: '0 4px 20px rgba\(0, 0, 0, 0\.1\)',\s*transition: 'all 0\.3s ease',\s*'&:hover': \{\s*transform: 'translateY\(-4px\)',\s*boxShadow: '0 8px 30px rgba\(0, 0, 0, 0\.15\)'\s*\}\s*\}/g,
    `_jsxs(Card, {
                        onClick: () => navigate('/actualites'),
                        sx: {
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                            }
                        }`
);

// Supprimer les effets de survol avec image-overlay et image-zoom
content = content.replace(
    /transition: 'all 0\.3s ease',\s*'&:hover': \{\s*'& \.image-overlay': \{\s*opacity: 1\s*\},\s*'& \.image-zoom': \{\s*transform: 'scale\(1\.1\)'\s*\}\s*\}/g,
    ''
);

// Supprimer les éléments image-overlay et image-zoom
content = content.replace(
    /_jsx\(Box, \{\s*className: "image-zoom",[^}]*\}/g,
    ''
);

content = content.replace(
    /_jsxs\(Box, \{\s*className: "image-overlay",[^}]*\}, children: \[[^\]]*\] \}\)/g,
    ''
);

// Écrire le fichier modifié
fs.writeFileSync('/Users/pro/btp/src/pages/Home/HomePage.js', content);

console.log('Fichier modifié avec succès');
