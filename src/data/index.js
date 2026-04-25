export const MEALS = {
  matin: [
    {
      id: 'm1', emoji: '🥣', name: "Flocons d'avoine au lait écrémé",
      desc: 'Onctueux, chaud — prêt en 5 min.', kcal: 280, grams: 60, bowl: '½ bol', volume: '250ml',
      ingredients: [
        { n: "Flocons d'avoine", q: '60g' }, { n: 'Lait écrémé', q: '200ml' },
        { n: 'Miel', q: '1 c.à.c' }, { n: 'Fruits rouges', q: '50g' }, { n: 'Cannelle', q: '1 pincée' },
      ],
      steps: [
        'Verser les flocons dans une casserole avec le lait écrémé.',
        'Cuire à feu doux en remuant sans arrêt pendant 4–5 minutes.',
        'Quand la texture est crémeuse, verser dans un bol.',
        'Ajouter le miel, les fruits rouges et la cannelle.',
        'Servir immédiatement. Pas de sucre blanc.',
      ],
    },
    {
      id: 'm2', emoji: '🥚', name: 'Œufs brouillés + pain complet',
      desc: 'Riche en protéines, énergie durable.', kcal: 320, grams: 150, bowl: '½ assiette', volume: '—',
      ingredients: [
        { n: 'Œufs entiers', q: '2' }, { n: 'Pain complet', q: '1 tranche (40g)' },
        { n: 'Ciboulette fraîche', q: 'quelques tiges' }, { n: 'Sel, poivre', q: 'à goût' },
      ],
      steps: [
        "Casser les œufs dans un bol. Saler, poivrer. Battre légèrement.",
        'Chauffer une poêle antiadhésive à feu très doux sans matière grasse.',
        'Verser les œufs. Remuer doucement et sans arrêt avec une spatule.',
        'Retirer du feu dès que les œufs sont encore légèrement tremblotants.',
        'Servir sur le pain complet grillé. Parsemer de ciboulette.',
      ],
    },
    {
      id: 'm3', emoji: '🍌', name: 'Yaourt grec 0% + banane',
      desc: 'Protéines + sucres naturels. Parfait avant une marche.', kcal: 200, grams: 200, bowl: '1 bol', volume: '200ml',
      ingredients: [
        { n: 'Yaourt grec 0%', q: '150g' }, { n: 'Banane (petite, pas trop mûre)', q: '1' },
        { n: 'Miel', q: '½ c.à.c' }, { n: 'Noix concassées', q: '5g (optionnel)' },
      ],
      steps: [
        'Éplucher et trancher la banane en rondelles.',
        'Verser le yaourt dans un bol.',
        'Disposer les rondelles de banane sur le dessus.',
        'Ajouter le miel et les noix concassées.',
        'Ne pas mixer — manger tel quel en savourant.',
      ],
    },
    {
      id: 'm4', emoji: '🍞', name: 'Pain complet + fromage frais 0%',
      desc: 'Simple et rapide quand on manque de temps.', kcal: 240, grams: 80, bowl: '—', volume: '—',
      ingredients: [
        { n: 'Pain complet', q: '2 tranches (80g)' }, { n: 'Fromage frais 0%', q: '40g' },
        { n: 'Tomates cerises', q: '5–6' }, { n: 'Herbes de Provence', q: 'pincée' },
      ],
      steps: [
        'Toaster les deux tranches de pain complet.',
        'Étaler le fromage frais généreusement sur chaque tranche.',
        'Couper les tomates cerises en deux. Poser dessus.',
        "Saupoudrer d'herbes de Provence.",
        'Éviter confitures et beurre. Manger immédiatement.',
      ],
    },
    {
      id: 'm5', emoji: '🫐', name: 'Smoothie fruits rouges + lait',
      desc: 'Frais et vitaminé — 2 minutes chrono.', kcal: 190, grams: 300, bowl: '1 grand verre', volume: '300ml',
      ingredients: [
        { n: 'Fruits rouges congelés (mix)', q: '100g' }, { n: 'Lait écrémé', q: '200ml' },
        { n: 'Yaourt nature 0%', q: '50g' }, { n: 'Graines de lin moulues', q: '1 c.à.c' },
      ],
      steps: [
        'Sortir les fruits rouges du congélateur 5 min avant.',
        'Placer tous les ingrédients dans un blender.',
        'Mixer 45 secondes à puissance maximale.',
        'Verser dans un grand verre. Boire lentement.',
        'Ne jamais ajouter de sucre ou sirop.',
      ],
    },
    {
      id: 'm6', emoji: '🧀', name: 'Fromage blanc + noix + pomme',
      desc: 'Équilibré graisses saines, fibres et protéines.', kcal: 250, grams: 180, bowl: '1 bol', volume: '—',
      ingredients: [
        { n: 'Fromage blanc 3%', q: '150g' }, { n: 'Pomme', q: '½' },
        { n: 'Cerneaux de noix', q: '5' }, { n: 'Cannelle', q: 'pincée' },
      ],
      steps: [
        'Éplucher et couper la pomme en petits dés.',
        'Verser le fromage blanc dans un bol.',
        'Ajouter les dés de pomme et les noix.',
        'Saupoudrer de cannelle.',
        'Ne pas sucrer — la pomme apporte la douceur naturelle.',
      ],
    },
    {
      id: 'm7', emoji: '🍳', name: 'Omelette légère aux légumes',
      desc: 'Protéinée et légère. Peut se préparer la veille.', kcal: 180, grams: 200, bowl: '½ assiette', volume: '—',
      ingredients: [
        { n: 'Œuf entier', q: '1' }, { n: "Blancs d'œufs", q: '2' },
        { n: 'Poivron rouge', q: '¼' }, { n: 'Épinards frais', q: '30g' },
        { n: 'Champignons', q: '40g' }, { n: 'Sel, poivre, ail en poudre', q: 'à goût' },
      ],
      steps: [
        'Couper poivron et champignons en petits morceaux.',
        'Faire revenir les légumes 3 min dans une poêle antiadhésive à sec.',
        "Battre l'œuf et les blancs ensemble. Assaisonner.",
        'Verser sur les légumes dans la poêle à feu moyen.',
        'Couvrir 2 minutes. Plier et servir.',
      ],
    },
    {
      id: 'm8', emoji: '☕', name: 'Café/thé + tartine + œuf dur',
      desc: 'Le classique sobre et nutritif.', kcal: 200, grams: 100, bowl: '—', volume: '200ml (boisson)',
      ingredients: [
        { n: 'Œuf dur', q: '1' }, { n: 'Pain complet', q: '1 tranche (40g)' },
        { n: 'Café ou thé', q: '200ml' }, { n: 'Fromage frais (optionnel)', q: '20g' },
      ],
      steps: [
        "Mettre l'œuf dans de l'eau froide. Porter à ébullition.",
        'Cuire exactement 9 minutes à feu doux.',
        "Plonger dans l'eau froide. Écaler après 2 minutes.",
        'Toaster le pain. Étaler le fromage frais si souhaité.',
        'Café ou thé sans sucre ni lait entier.',
      ],
    },
    {
      id: 'm9', emoji: '🥛', name: 'Céréales complètes + lait écrémé',
      desc: 'Rapide. Bien choisir les céréales.', kcal: 260, grams: 50, bowl: '⅔ bol', volume: '250ml',
      ingredients: [
        { n: 'Flocons de blé complet (sans sucre ajouté)', q: '50g' },
        { n: "Lait écrémé ou lait d'avoine", q: '200ml' },
        { n: 'Fruit frais (kiwi, pomme)', q: '1' },
      ],
      steps: [
        "Vérifier l'étiquette : moins de 5g sucre pour 100g.",
        'Verser le lait froid dans un bol.',
        'Ajouter les céréales complètes.',
        'Peler et trancher le fruit. Poser sur les céréales.',
        "Attendre 1–2 min que les céréales s'imprègnent avant de manger.",
      ],
    },
    {
      id: 'm10', emoji: '🍓', name: 'Salade de fruits frais + amandes',
      desc: 'Légère et vitaminée. Parfait en été.', kcal: 170, grams: 250, bowl: '1 bol', volume: '—',
      ingredients: [
        { n: 'Fruits de saison variés', q: '200g' },
        { n: 'Amandes brutes non salées', q: '10 (12g)' },
        { n: 'Jus de citron', q: 'quelques gouttes' },
        { n: 'Menthe fraîche', q: 'quelques feuilles' },
      ],
      steps: [
        'Laver tous les fruits soigneusement.',
        'Couper en morceaux de taille égale dans un bol.',
        "Arroser d'un filet de citron pour éviter l'oxydation.",
        'Ajouter les amandes et les feuilles de menthe.',
        'Pas de sucre — les fruits sont naturellement sucrés.',
      ],
    },
    {
      id: 'm11', emoji: '🫙', name: 'Chia pudding (préparé la veille)',
      desc: 'Ultra simple — prêt au réveil.', kcal: 220, grams: 300, bowl: '1 bol', volume: '300ml',
      ingredients: [
        { n: 'Graines de chia', q: '3 c.à.s (30g)' },
        { n: "Lait végétal (avoine ou amande)", q: '250ml' },
        { n: 'Extrait de vanille', q: '½ c.à.c' },
        { n: 'Fruits rouges', q: '50g' }, { n: 'Miel', q: '1 c.à.c' },
      ],
      steps: [
        'La veille au soir : mélanger chia, lait, vanille et miel dans un bocal.',
        'Remuer vigoureusement pendant 1 minute.',
        'Couvrir et réfrigérer toute la nuit (minimum 6 heures).',
        'Le matin : remuer à nouveau. Ajouter les fruits rouges.',
        'Consommer froid. Texture : pudding épais et crémeux.',
      ],
    },
    {
      id: 'm12', emoji: '🥑', name: 'Toast avocat + tomates cerises',
      desc: 'Tendance, nourrissant et délicieux.', kcal: 290, grams: 120, bowl: '—', volume: '—',
      ingredients: [
        { n: 'Pain complet', q: '1 tranche (40g)' }, { n: 'Avocat mûr', q: '¼' },
        { n: 'Tomates cerises', q: '5–6' }, { n: 'Citron', q: 'quelques gouttes' },
        { n: 'Sel, poivre, piment en flocons', q: 'à goût' },
      ],
      steps: [
        "Toaster le pain complet jusqu'à ce qu'il soit bien croustillant.",
        "Écraser le quart d'avocat à la fourchette avec quelques gouttes de citron.",
        "Étaler l'avocat sur le pain.",
        'Couper les tomates cerises en deux. Disposer dessus.',
        'Assaisonner de sel, poivre et piment. Manger immédiatement.',
      ],
    },
  ],

  midi: [
    {
      id: 'd1', emoji: '🥗', name: 'Salade verte + thon + tomates',
      desc: 'Légère, fraîche, très protéinée.', kcal: 280, grams: 300, bowl: '1 grand bol', volume: '—',
      ingredients: [
        { n: 'Salade verte (laitue ou roquette)', q: '80g' },
        { n: 'Thon au naturel (boîte)', q: '120g' }, { n: 'Tomates', q: '2' },
        { n: 'Oignon rouge', q: '¼' }, { n: "Huile d'olive", q: '1 c.à.s' },
        { n: 'Jus de citron + moutarde', q: '1 c.à.s chacun' },
      ],
      steps: [
        'Laver et essorer la salade soigneusement.',
        'Égoutter le thon. Couper tomates et oignon.',
        'Préparer la vinaigrette : huile, citron, moutarde, sel, poivre.',
        'Mélanger tous les ingrédients dans un grand bol.',
        'Arroser de vinaigrette juste avant de servir.',
      ],
    },
    {
      id: 'd2', emoji: '🍗', name: 'Poulet grillé + légumes vapeur',
      desc: 'Le classique du régime — simple et efficace.', kcal: 350, grams: 200, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Blanc de poulet', q: '130g' }, { n: 'Courgette', q: '100g' },
        { n: 'Carottes', q: '80g' }, { n: 'Haricots verts', q: '80g' },
        { n: "Huile d'olive", q: '1 c.à.c' }, { n: 'Herbes de Provence, ail', q: 'à goût' },
      ],
      steps: [
        'Couper les légumes en morceaux réguliers. Cuire vapeur 12 minutes.',
        "Badigeonner le poulet d'huile d'olive et d'herbes de Provence.",
        'Cuire le poulet dans une poêle antiadhésive 6 min par côté à feu moyen.',
        "Vérifier la cuisson : pas de rose à l'intérieur.",
        'Servir le poulet tranché avec les légumes vapeur.',
      ],
    },
    {
      id: 'd3', emoji: '🍚', name: 'Riz complet + lentilles + salade',
      desc: 'Association parfaite : protéines végétales complètes.', kcal: 380, grams: 300, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Riz complet (cru)', q: '60g' }, { n: 'Lentilles vertes (cuites)', q: '80g' },
        { n: 'Oignon', q: '½' }, { n: "Huile d'olive", q: '1 c.à.c' },
        { n: 'Cumin, curcuma', q: '1 c.à.c chacun' }, { n: 'Salade verte', q: '60g' },
      ],
      steps: [
        "Cuire le riz complet selon instructions (35 min dans 2× son volume en eau).",
        "Faire revenir l'oignon émincé dans l'huile 3 min.",
        'Ajouter les lentilles, cumin et curcuma. Mélanger 2 min.',
        "Combiner riz et lentilles. Rectifier l'assaisonnement.",
        'Servir avec une salade verte à la vinaigrette légère.',
      ],
    },
    {
      id: 'd4', emoji: '🥫', name: 'Soupe de légumes + pain complet',
      desc: 'Réconfortante, faible en calories, riche en fibres.', kcal: 250, grams: 400, bowl: '1 bol + 1 tranche', volume: '400ml',
      ingredients: [
        { n: 'Poireaux', q: '1 (100g)' }, { n: 'Carottes', q: '2 (150g)' },
        { n: 'Courgette', q: '1 (100g)' }, { n: 'Bouillon de légumes dégraissé', q: '800ml' },
        { n: 'Ail', q: '2 gousses' }, { n: 'Pain complet', q: '1 tranche (40g)' },
      ],
      steps: [
        'Éplucher et couper tous les légumes en morceaux.',
        'Porter le bouillon à ébullition dans une grande casserole.',
        "Ajouter tous les légumes et l'ail écrasé. Cuire 25 minutes.",
        'Mixer partiellement ou laisser en morceaux selon préférence.',
        'Servir chaud avec une tranche de pain complet sans beurre.',
      ],
    },
    {
      id: 'd5', emoji: '🐟', name: 'Poisson blanc + riz + haricots verts',
      desc: 'Maigre et nutritif — idéal pour le déjeuner.', kcal: 360, grams: 350, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Filet de cabillaud ou merlan', q: '150g' },
        { n: 'Riz basmati complet (cru)', q: '50g' },
        { n: 'Haricots verts', q: '100g' }, { n: 'Citron', q: '½' },
        { n: 'Persil, aneth frais', q: 'à goût' },
      ],
      steps: [
        "Cuire le riz dans 2× son volume d'eau + sel (25 min).",
        "Blanchir les haricots verts 7 minutes à l'eau bouillante.",
        'Cuire le poisson à la vapeur ou au four (180°C) 12 minutes.',
        "Arroser de jus de citron. Parsemer d'herbes fraîches.",
        'Servir avec le riz et les haricots verts égouttés.',
      ],
    },
    {
      id: 'd6', emoji: '🥙', name: 'Wrap au poulet + crudités',
      desc: 'Pratique en box déjeuner nomade.', kcal: 340, grams: 250, bowl: '—', volume: '—',
      ingredients: [
        { n: 'Galette de blé complet', q: '1 (50g)' },
        { n: 'Blanc de poulet cuit', q: '100g' }, { n: 'Salade verte', q: '30g' },
        { n: 'Tomate', q: '1 petite' }, { n: 'Concombre', q: '¼' },
        { n: 'Yaourt grec 0% + moutarde', q: '2 c.à.s' },
      ],
      steps: [
        'Trancher le poulet cuit en lamelles fines.',
        'Mélanger le yaourt avec la moutarde et un peu de citron.',
        'Étaler la sauce yaourt sur la galette.',
        'Disposer salade, poulet, tomate et concombre.',
        'Rouler fermement. Couper en deux. Emballer si repas nomade.',
      ],
    },
    {
      id: 'd7', emoji: '🍳', name: 'Omelette aux légumes + salade verte',
      desc: 'Rapide, économique et très protéiné.', kcal: 300, grams: 280, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Œufs entiers', q: '2' }, { n: "Blanc d'œuf", q: '1' },
        { n: 'Champignons', q: '60g' }, { n: 'Épinards frais', q: '50g' },
        { n: 'Fromage râpé allégé', q: '15g' }, { n: 'Salade verte', q: '60g' },
      ],
      steps: [
        'Nettoyer et trancher les légumes. Faire revenir 3 min à sec.',
        'Battre les œufs et le blanc. Saler, poivrer.',
        'Verser sur les légumes dans la poêle à feu moyen.',
        'Parsemer de fromage. Couvrir 2 minutes.',
        "Plier l'omelette. Servir avec la salade légèrement assaisonnée.",
      ],
    },
    {
      id: 'd8', emoji: '🫘', name: 'Pois chiches + légumes rôtis',
      desc: 'Végétalien, savoureux, très rassasiant.', kcal: 330, grams: 300, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Pois chiches cuits (boîte)', q: '150g' },
        { n: 'Tomates cerises', q: '100g' },
        { n: 'Poivrons rouge et jaune', q: '1 de chaque' },
        { n: 'Aubergine', q: '½' }, { n: "Huile d'olive", q: '1 c.à.s' },
        { n: 'Curcuma, cumin, paprika', q: '1 c.à.c chacun' },
      ],
      steps: [
        'Préchauffer le four à 200°C.',
        'Couper les légumes en morceaux. Égoutter les pois chiches.',
        "Mélanger pois chiches et légumes avec l'huile et les épices.",
        'Étaler sur une plaque. Enfourner 25 minutes.',
        'Remuer à mi-cuisson. Servir chaud ou tiède.',
      ],
    },
    {
      id: 'd9', emoji: '🥩', name: 'Steak haché 5% + purée patate douce',
      desc: 'Riche en protéines, index glycémique modéré.', kcal: 400, grams: 300, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Steak haché 5% MG', q: '150g' }, { n: 'Patate douce', q: '150g' },
        { n: 'Salade verte', q: '60g' }, { n: 'Sel, poivre, ail en poudre, muscade', q: 'à goût' },
      ],
      steps: [
        'Éplucher la patate douce. Couper en morceaux. Cuire vapeur 20 min.',
        "Écraser à la fourchette avec sel et muscade. Pas de beurre ni crème.",
        'Former le steak. Assaisonner des deux côtés.',
        'Cuire à la poêle antiadhésive 4 min de chaque côté.',
        'Servir avec la purée et une salade verte légèrement assaisonnée.',
      ],
    },
    {
      id: 'd10', emoji: '🍱', name: 'Taboulé léger + poulet froid',
      desc: 'Idéal en box. Se prépare la veille.', kcal: 320, grams: 350, bowl: '1 grand bol', volume: '—',
      ingredients: [
        { n: 'Semoule complète (crue)', q: '60g' }, { n: 'Concombre', q: '½' },
        { n: 'Tomates', q: '2' }, { n: 'Persil frais', q: '1 bouquet' },
        { n: "Jus de citron + huile d'olive", q: '2+1 c.à.s' },
        { n: 'Blanc de poulet cuit froid', q: '100g' },
      ],
      steps: [
        "Verser la semoule dans un bol. Couvrir d'eau bouillante à même hauteur. Couvrir 5 min.",
        'Égrener à la fourchette. Laisser refroidir.',
        'Couper finement concombre, tomates et persil.',
        'Mélanger avec citron et huile. Assaisonner.',
        'Ajouter le poulet tranché. Réfrigérer 30 min avant de servir.',
      ],
    },
    {
      id: 'd11', emoji: '🌿', name: 'Salade niçoise complète',
      desc: 'Repas complet dans un seul bol.', kcal: 360, grams: 350, bowl: '1 grand bol', volume: '—',
      ingredients: [
        { n: 'Thon au naturel', q: '120g' }, { n: 'Œuf dur', q: '1' },
        { n: 'Haricots verts cuits', q: '80g' }, { n: 'Tomates', q: '2' },
        { n: 'Olives noires', q: '6' }, { n: 'Salade verte', q: '60g' },
        { n: 'Vinaigrette légère', q: '1 c.à.s' },
      ],
      steps: [
        "Cuire l'œuf dur (9 min). Blanchir les haricots (7 min). Refroidir.",
        "Couper tomates et œuf. Égoutter le thon.",
        'Dresser la salade dans un grand bol.',
        'Disposer tous les ingrédients harmonieusement.',
        'Assaisonner avec la vinaigrette juste avant de manger.',
      ],
    },
    {
      id: 'd12', emoji: '🫕', name: 'Potage épais légumes + graines',
      desc: "Le repas le plus léger — si peu d'appétit.", kcal: 230, grams: 450, bowl: '1 grand bol', volume: '450ml',
      ingredients: [
        { n: 'Brocolis', q: '150g' }, { n: 'Petits pois surgelés', q: '100g' },
        { n: 'Oignon', q: '1' }, { n: 'Bouillon de légumes', q: '500ml' },
        { n: 'Graines de courge + lin', q: '1 c.à.s + 1 c.à.c' },
      ],
      steps: [
        'Faire revenir l\'oignon émincé à sec 3 min dans une casserole.',
        'Ajouter brocolis et petits pois. Verser le bouillon.',
        'Cuire 15 minutes à feu moyen.',
        "Mixer jusqu'à consistance lisse. Rectifier l'assaisonnement.",
        'Servir dans un grand bol. Parsemer de graines.',
      ],
    },
  ],

  soir: [
    {
      id: 's1', emoji: '🥣', name: 'Soupe de légumes + pain complet',
      desc: 'Le dîner idéal — léger et réconfortant.', kcal: 220, grams: 400, bowl: '1 grand bol', volume: '400ml',
      ingredients: [
        { n: 'Légumes variés (poireau, carotte, courgette)', q: '300g' },
        { n: 'Bouillon de légumes dégraissé', q: '700ml' },
        { n: 'Pain complet', q: '1 tranche (40g)' },
        { n: 'Ail, herbes aromatiques', q: 'à goût' },
      ],
      steps: [
        'Couper tous les légumes en petits morceaux.',
        "Porter le bouillon à ébullition. Ajouter légumes et ail.",
        'Cuire 20–25 minutes à frémissement.',
        'Goûter et ajuster le sel selon le bouillon utilisé.',
        'Servir chaud avec une tranche de pain complet sans beurre.',
      ],
    },
    {
      id: 's2', emoji: '🥗', name: 'Salade composée + œuf dur + thon',
      desc: 'Froid, rapide et complet en 10 minutes.', kcal: 280, grams: 300, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Salade verte', q: '80g' }, { n: 'Œuf dur', q: '1' },
        { n: 'Thon au naturel', q: '80g' }, { n: 'Concombre', q: '½' },
        { n: 'Tomate', q: '1' }, { n: 'Vinaigrette légère', q: '1 c.à.s' },
      ],
      steps: [
        "Cuire l'œuf dur à l'avance (9 min). Refroidir et écaler.",
        'Laver et couper tous les légumes.',
        "Égoutter le thon. Trancher l'œuf.",
        'Dresser dans un saladier. Arroser de vinaigrette.',
        'Pas de pain le soir. Manger lentement.',
      ],
    },
    {
      id: 's3', emoji: '🐟', name: 'Poisson vapeur + légumes verts + citron',
      desc: 'Le dîner minceur par excellence.', kcal: 300, grams: 350, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Filet de poisson blanc', q: '150g' }, { n: 'Brocolis', q: '120g' },
        { n: 'Haricots verts', q: '100g' }, { n: 'Citron', q: '½' },
        { n: 'Persil frais', q: 'quelques branches' },
      ],
      steps: [
        'Cuire brocolis et haricots verts vapeur 10 minutes.',
        'Placer le poisson dans le panier vapeur les 5 dernières minutes.',
        "Le poisson est cuit quand la chair s'effeuille facilement.",
        'Arroser de jus de citron. Parsemer de persil.',
        "Assaisonner sans ajout de matière grasse.",
      ],
    },
    {
      id: 's4', emoji: '🍗', name: 'Blanc de poulet + courgettes sautées',
      desc: 'Simple et rapide — prêt en 20 minutes.', kcal: 290, grams: 300, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Blanc de poulet', q: '120g' }, { n: 'Courgettes', q: '200g' },
        { n: 'Ail', q: '2 gousses' }, { n: "Huile d'olive", q: '1 c.à.c' },
        { n: 'Herbes de Provence', q: 'à goût' },
      ],
      steps: [
        'Couper le poulet en lanières. Couper les courgettes en demi-lunes.',
        "Chauffer l'huile dans une poêle. Cuire le poulet 5 min.",
        "Ajouter les courgettes et l'ail émincé.",
        'Cuire encore 8 minutes en remuant régulièrement.',
        'Assaisonner et servir directement de la poêle.',
      ],
    },
    {
      id: 's5', emoji: '🍳', name: 'Omelette légère aux herbes',
      desc: 'Le dîner le plus rapide — 8 minutes.', kcal: 250, grams: 250, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Œufs entiers', q: '2' }, { n: 'Ciboulette, persil, basilic', q: 'à goût' },
        { n: 'Sel, poivre', q: 'à goût' }, { n: 'Salade verte + tomate', q: '60g + 1' },
      ],
      steps: [
        'Battre les œufs avec les herbes fraîches. Saler et poivrer.',
        'Chauffer une poêle antiadhésive à feu moyen sans matière grasse.',
        'Verser les œufs. Incliner la poêle pour bien étaler.',
        'Cuire 2 min. Bords cuits, centre légèrement tremblotant.',
        'Plier. Servir avec la salade et la tomate.',
      ],
    },
    {
      id: 's6', emoji: '🫘', name: 'Lentilles corail + carottes + épices',
      desc: 'Chaud, digeste et riche en protéines végétales.', kcal: 280, grams: 300, bowl: '1 bol', volume: '300ml',
      ingredients: [
        { n: 'Lentilles corail (crues)', q: '80g' }, { n: 'Carottes', q: '2 (150g)' },
        { n: 'Oignon', q: '1' }, { n: 'Bouillon de légumes', q: '500ml' },
        { n: 'Curcuma, cumin, ail', q: '1 c.à.c chacun' },
        { n: "Huile d'olive", q: '½ c.à.c' },
      ],
      steps: [
        'Rincer les lentilles corail. Éplucher et couper carottes et oignon.',
        "Faire revenir l'oignon 2 min dans l'huile d'olive.",
        'Ajouter épices et ail. Remuer 1 minute.',
        'Verser lentilles, carottes et bouillon. Cuire 20 min à feu doux.',
        'Mixer partiellement ou laisser entier. Servir chaud.',
      ],
    },
    {
      id: 's7', emoji: '🥬', name: 'Poêlée légumes + tofu + sésame',
      desc: 'Végétalien, léger et plein de saveurs.', kcal: 260, grams: 350, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Tofu ferme', q: '120g' }, { n: 'Épinards frais', q: '80g' },
        { n: 'Champignons', q: '80g' }, { n: 'Brocolis', q: '100g' },
        { n: 'Sauce soja légère', q: '1 c.à.s' },
        { n: 'Sésame grillé + gingembre râpé', q: '1 c.à.c chacun' },
      ],
      steps: [
        "Couper le tofu en cubes. Égoutter sur papier absorbant 5 min.",
        'Faire dorer le tofu à sec dans une poêle antiadhésive 5 min. Réserver.',
        'Cuire les légumes dans la même poêle 5 min.',
        'Ajouter gingembre et sauce soja. Mélanger 1 minute.',
        'Remettre le tofu. Parsemer de sésame. Servir immédiatement.',
      ],
    },
    {
      id: 's8', emoji: '🥩', name: 'Escalope de dinde + haricots verts',
      desc: 'Très maigre et savoureux. Idéal après le sport.', kcal: 310, grams: 320, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Escalope de dinde', q: '150g' }, { n: 'Haricots verts', q: '200g' },
        { n: 'Jus de citron', q: '½' }, { n: 'Herbes de Provence, ail en poudre', q: 'à goût' },
        { n: "Huile d'olive", q: '1 c.à.c' },
      ],
      steps: [
        "Blanchir les haricots verts 8 min à l'eau bouillante salée.",
        "Badigeonner la dinde d'huile, herbes et ail.",
        'Cuire à la poêle antiadhésive 4 min de chaque côté.',
        'Arroser de citron en fin de cuisson.',
        'Servir avec les haricots verts bien égouttés.',
      ],
    },
    {
      id: 's9', emoji: '🧆', name: 'Galettes de quinoa + salade verte',
      desc: 'Croustillantes et riches en protéines végétales.', kcal: 290, grams: 280, bowl: '1 assiette', volume: '—',
      ingredients: [
        { n: 'Quinoa cuit', q: '120g' }, { n: 'Œuf', q: '1' },
        { n: 'Carottes râpées', q: '60g' }, { n: 'Oignon vert', q: '2' },
        { n: 'Farine complète', q: '2 c.à.s' },
        { n: 'Sel, poivre, cumin', q: 'à goût' }, { n: 'Salade verte', q: '60g' },
      ],
      steps: [
        "Cuire le quinoa selon les instructions (15 min dans 2× son volume en eau).",
        'Mélanger quinoa froid, œuf, carottes, oignon vert, farine et épices.',
        'Former 4 galettes avec les mains légèrement humidifiées.',
        'Cuire à la poêle antiadhésive 4 min de chaque côté sans matière grasse.',
        'Servir avec la salade verte légèrement assaisonnée.',
      ],
    },
    {
      id: 's10', emoji: '🫕', name: 'Minestrone (soupe italienne)',
      desc: 'Très léger et réconfortant — le dîner parfait.', kcal: 210, grams: 450, bowl: '1 grand bol', volume: '450ml',
      ingredients: [
        { n: 'Tomates pelées (boîte)', q: '200g' }, { n: 'Courgette', q: '1' },
        { n: 'Céleri', q: '2 branches' }, { n: 'Oignon', q: '1' },
        { n: 'Pâtes complètes courtes', q: '20g (cuites)' },
        { n: 'Bouillon de légumes', q: '700ml' }, { n: 'Basilic frais, ail', q: 'à goût' },
      ],
      steps: [
        'Couper finement oignon, céleri et courgette.',
        'Faire revenir oignon et céleri 3 min dans une grande casserole.',
        'Ajouter tomates, courgette, ail et bouillon. Porter à ébullition.',
        'Cuire 20 min. Ajouter les pâtes les 8 dernières minutes.',
        'Servir chaud avec quelques feuilles de basilic frais.',
      ],
    },
    {
      id: 's11', emoji: '🥦', name: 'Gratin de brocolis léger',
      desc: 'Gratiné et chaud — sans la culpabilité.', kcal: 240, grams: 300, bowl: '1 plat individuel', volume: '—',
      ingredients: [
        { n: 'Brocolis', q: '250g' }, { n: 'Yaourt grec 0%', q: '100g' },
        { n: 'Parmesan râpé', q: '15g' },
        { n: 'Ail en poudre, sel, poivre, muscade', q: 'à goût' },
      ],
      steps: [
        'Préchauffer le four à 190°C.',
        'Cuire les brocolis vapeur 8 minutes. Égoutter soigneusement.',
        'Mélanger yaourt, ail en poudre, sel, poivre et muscade.',
        'Disposer les brocolis dans un plat. Napper de la sauce yaourt.',
        "Parsemer de parmesan. Enfourner 15 min jusqu'à dorage.",
      ],
    },
    {
      id: 's12', emoji: '🐠', name: 'Sardines en boîte + pain + tomates',
      desc: "Le dîner express — ouvrir et manger.", kcal: 280, grams: 200, bowl: '—', volume: '—',
      ingredients: [
        { n: "Sardines à l'huile d'olive (boîte)", q: '1 (125g)' },
        { n: 'Pain complet', q: '1 tranche (40g)' },
        { n: 'Tomates', q: '2' }, { n: 'Citron', q: '½' },
        { n: 'Poivre, persil', q: 'à goût' },
      ],
      steps: [
        'Toaster légèrement le pain complet.',
        'Couper les tomates en rondelles. Disposer sur une assiette.',
        "Ouvrir la boîte de sardines. Égoutter légèrement l'huile.",
        "Disposer les sardines sur l'assiette avec les tomates.",
        'Arroser de citron. Poivrer. Parsemer de persil.',
      ],
    },
  ],

  collation: [
    {
      id: 'c1', emoji: '🍎', name: '10 amandes + pomme',
      desc: 'La collation parfaite — satiété garantie.', kcal: 130, grams: 150, bowl: '—', volume: '—',
      ingredients: [
        { n: 'Pomme', q: '1 moyenne' }, { n: 'Amandes brutes non salées', q: '10 (12g)' },
      ],
      steps: [
        'Laver la pomme. Manger avec la peau (fibres).',
        'Croquer les amandes une par une en mâchant bien.',
        "Boire un verre d'eau avant si la faim est intense.",
      ],
    },
    {
      id: 'c2', emoji: '🫙', name: 'Yaourt nature 0% + fruit frais',
      desc: 'Protéines + sucres naturels — douceur saine.', kcal: 110, grams: 200, bowl: '1 pot', volume: '—',
      ingredients: [
        { n: 'Yaourt nature 0% sans sucre ajouté', q: '150g' },
        { n: 'Fruit frais de saison', q: '1' },
      ],
      steps: [
        "Vérifier l'étiquette : 0 sucre ajouté.",
        'Couper le fruit en morceaux dans le yaourt.',
        'Manger lentement sans ajouter de miel.',
      ],
    },
    {
      id: 'c3', emoji: '🥕', name: 'Crudités + houmous (30g)',
      desc: "Craquant et nourrissant. Préparer à l'avance.", kcal: 120, grams: 150, bowl: '1 petite assiette', volume: '—',
      ingredients: [
        { n: 'Carottes', q: '2 (120g)' }, { n: 'Céleri branche', q: '2' },
        { n: 'Concombre', q: '¼' }, { n: 'Houmous', q: '30g (peser !)' },
      ],
      steps: [
        'Couper carottes, céleri et concombre en bâtonnets.',
        'Peser 30g de houmous sur une balance — ne pas excéder.',
        'Tremper les légumes et mâcher lentement.',
      ],
    },
    {
      id: 'c4', emoji: '🍌', name: 'Petite banane + fromage blanc',
      desc: 'Énergie rapide + protéines. Avant ou après sport.', kcal: 140, grams: 180, bowl: '—', volume: '—',
      ingredients: [
        { n: 'Petite banane (pas trop mûre)', q: '1 (80g)' },
        { n: 'Fromage blanc 0%', q: '100g' },
      ],
      steps: [
        'Choisir une banane pas trop mûre (index glycémique plus bas).',
        'Trancher en rondelles dans le fromage blanc.',
        'Manger directement sans ajout de sucre.',
      ],
    },
    {
      id: 'c5', emoji: '🫐', name: 'Poignée de fruits rouges',
      desc: 'La collation la plus légère — quasi sans calories.', kcal: 70, grams: 120, bowl: '½ bol', volume: '—',
      ingredients: [
        { n: 'Myrtilles, framboises ou fraises', q: '120g' },
      ],
      steps: [
        "Laver les fruits à l'eau froide.",
        'Égoutter soigneusement.',
        'Manger directement — très rafraîchissant.',
      ],
    },
    {
      id: 'c6', emoji: '🧀', name: 'Fromage blanc + noix + cannelle',
      desc: 'Satiété longue durée grâce aux bonnes graisses.', kcal: 150, grams: 180, bowl: '1 bol', volume: '—',
      ingredients: [
        { n: 'Fromage blanc 0–3%', q: '150g' },
        { n: 'Cerneaux de noix', q: '5 (ne pas excéder)' },
        { n: 'Cannelle', q: 'pincée' },
      ],
      steps: [
        'Verser le fromage blanc dans un bol.',
        'Ajouter exactement 5 noix.',
        'Saupoudrer de cannelle. Mélanger et déguster.',
      ],
    },
    {
      id: 'c7', emoji: '🍵', name: 'Thé vert + chocolat noir 70%',
      desc: 'Anti-fringale. Riche en antioxydants.', kcal: 60, grams: 10, bowl: '—', volume: '200ml (thé)',
      ingredients: [
        { n: 'Thé vert (infusion)', q: '200ml' },
        { n: 'Chocolat noir 70%+', q: '2 carrés (10g)' },
      ],
      steps: [
        'Infuser le thé vert 3 min à 75°C (pas bouillant).',
        'Laisser tiédir quelques minutes.',
        'Croquer les 2 carrés de chocolat en savourant lentement.',
      ],
    },
    {
      id: 'c8', emoji: '🥜', name: 'Mix noix-graines pesées (30g)',
      desc: 'Dense en énergie — peser OBLIGATOIREMENT.', kcal: 160, grams: 30, bowl: '—', volume: '—',
      ingredients: [
        { n: 'Amandes', q: '10g' }, { n: 'Noix de cajou', q: '10g' },
        { n: 'Graines de tournesol', q: '10g' },
      ],
      steps: [
        'Peser exactement 30g avec une balance de cuisine.',
        'Ne jamais manger directement depuis le sachet.',
        'Mâcher lentement — ces 30g sont très nourrissants.',
      ],
    },
  ],
};

export const EXERCISES = [
  {
    id: 'ex1', emoji: '🏋️', name: 'Squats', level: 'debutant',
    desc: "L'exercice roi pour les jambes et les fessiers. Brûle énormément de calories.",
    series: 3, reps: '15 répétitions', repos: '45 sec entre les séries',
    muscles: 'Cuisses, fessiers, mollets',
    tip: "Dos droit, genoux dans l'axe des pieds. Ne pas dépasser la pointe des pieds avec les genoux.",
  },
  {
    id: 'ex2', emoji: '💪', name: 'Pompes (Push-ups)', level: 'moyen',
    desc: 'Renforce bras, épaules et poitrine. Peut se faire sur les genoux pour commencer.',
    series: 3, reps: '10–12 répétitions', repos: '60 sec entre les séries',
    muscles: 'Pectoraux, triceps, épaules',
    tip: 'Corps aligné, tête dans l\'axe. Sur les genoux si trop difficile.',
  },
  {
    id: 'ex3', emoji: '🧘', name: 'Gainage (Planche)', level: 'debutant',
    desc: 'Renforce tout le centre du corps. Essentiel pour la posture et le dos.',
    series: 3, reps: '30 secondes de maintien', repos: '30 sec entre les séries',
    muscles: 'Abdominaux profonds, dos, épaules',
    tip: 'Épaules au-dessus des poignets. Ventre rentré. Respirer normalement.',
  },
  {
    id: 'ex4', emoji: '🦵', name: 'Fentes alternées', level: 'moyen',
    desc: 'Équilibre et jambes toniques. Excellent pour la musculation fonctionnelle.',
    series: 3, reps: '12 rép. de chaque jambe', repos: '45 sec entre les séries',
    muscles: 'Quadriceps, fessiers, ischio-jambiers',
    tip: 'Genou arrière proche du sol. Genou avant ne dépasse pas la pointe du pied.',
  },
  {
    id: 'ex5', emoji: '🔥', name: 'Mountain Climbers', level: 'intense',
    desc: 'Cardio intense + abdominaux. Excellent brûleur de graisses abdominales.',
    series: 3, reps: '20 secondes rapides', repos: '40 sec entre les séries',
    muscles: 'Abdominaux, épaules, cardio total',
    tip: 'En position de pompe. Ramener les genoux vers la poitrine rapidement en alternance.',
  },
  {
    id: 'ex6', emoji: '⭐', name: 'Jumping Jacks (Étoiles)', level: 'debutant',
    desc: 'Cardio léger pour chauffer et brûler des calories facilement.',
    series: 3, reps: '30 répétitions', repos: '30 sec entre les séries',
    muscles: 'Corps entier, cardio général',
    tip: 'Atterrir doucement sur les orteils. Bras bien tendus en haut. Rythme régulier.',
  },
  {
    id: 'ex7', emoji: '💥', name: 'Crunchs abdominaux', level: 'debutant',
    desc: 'Renforcement abdominal doux. À faire sur un tapis.',
    series: 3, reps: '20 répétitions', repos: '30 sec entre les séries',
    muscles: 'Abdominaux droits',
    tip: 'Ne pas tirer sur la nuque. Expirer en montant. La tête ne touche pas le sol entre les répétitions.',
  },
  {
    id: 'ex8', emoji: '🧎', name: 'Hip Bridge (Pont fessier)', level: 'debutant',
    desc: 'Fessiers et bas du dos. Simple et très efficace.',
    series: 3, reps: '15 répétitions', repos: '30 sec entre les séries',
    muscles: 'Fessiers, ischio-jambiers, bas du dos',
    tip: 'Allongé sur le dos, pieds à plat. Monter les hanches en serrant les fessiers. Tenir 1 sec en haut.',
  },
  {
    id: 'ex9', emoji: '🌪️', name: 'Burpees (version douce)', level: 'intense',
    desc: "L'exercice le plus complet. Cardio + musculation combinés.",
    series: 3, reps: '8 répétitions', repos: '60 sec entre les séries',
    muscles: 'Corps entier — brûle le maximum',
    tip: 'Version douce : retirer le saut à la fin. Prendre son temps. Augmenter progressivement.',
  },
  {
    id: 'ex10', emoji: '🚶', name: 'Marche active 30 min', level: 'debutant',
    desc: "L'exercice de base. À faire CHAQUE jour en plus des autres exercices.",
    series: 1, reps: '30 minutes continues', repos: '—',
    muscles: 'Cardio, jambes, métabolisme',
    tip: 'Marcher vite (légère transpiration). Bras qui basculent. Rentrer le ventre. Idéal après le dîner.',
  },
];

export const TIPS = [
  {
    icon: '💧', title: "2 litres d'eau par jour",
    text: "Boire un grand verre d'eau avant chaque repas. Les infusions sans sucre comptent. L'eau booste le métabolisme et réduit la faim naturellement.",
  },
  {
    icon: '🕐', title: 'Respecter les horaires',
    text: 'Petit-déjeuner 7h–9h · Déjeuner 12h–14h · Dîner avant 20h. Ne jamais sauter le petit-déjeuner. Éviter de manger après 21h absolument.',
  },
  {
    icon: '🥢', title: 'Manger lentement — 20 min minimum',
    text: 'La satiété met 20 minutes à atteindre le cerveau. Poser la fourchette entre chaque bouchée. Mâcher 20 fois par bouchée. Pas d\'écrans pendant les repas.',
  },
  {
    icon: '🚫', title: 'Aliments à bannir',
    text: 'Sodas et jus industriels, fritures, fast-food, viennoiseries, alcool, sauces industrielles, sucres cachés. Lire les étiquettes systématiquement.',
  },
  {
    icon: '✅', title: 'Aliments à privilégier',
    text: 'Légumes à volonté · Protéines maigres · Céréales complètes · Légumineuses · Graisses saines (huile olive, avocat, noix, poissons gras).',
  },
  {
    icon: '😴', title: 'Dormir 7–8h par nuit',
    text: "Le manque de sommeil augmente la ghréline (hormone de la faim). Dormir suffisamment est aussi important que le régime lui-même.",
  },
  {
    icon: '📏', title: 'La règle du poing',
    text: 'Féculents = taille du poing fermé. Protéines = paume de la main. Légumes = autant que vous voulez. Graisses = taille du pouce.',
  },
  {
    icon: '🏃', title: 'Bouger chaque jour sans exception',
    text: "30 min de marche minimum. Escaliers plutôt qu'ascenseur. Éviter de rester assis plus de 2h d'affilée. L'activité quotidienne est non-négociable.",
  },
];
