/* Pathfinder 1e Sheet — Deities — favored weapons, domains, obedience perks
   Source: aonprd.com
   Part of split data files — loaded in order by index.html
*/
'use strict';

const DEITIES = [
  // [name, alignment, domains, favored weapon, source]
  ['Abadar',     'LN',  'Earth, Law, Nobility, Protection, Travel',     'Light crossbow',  'CRB'],
  ['Alseta',     'LN',  'Artifice, Law, Nobility, Protection',          'Dagger',          'ISG'],
  ['Apsu',       'LG',  'Artifice, Law, Scalykind, Travel, Water',      'Quarterstaff',    'ISG'],
  ['Arshea',     'NG',  'Charm, Liberation, Strength',                  'Flail',           'ISG'],
  ['Asmodeus',   'LE',  'Evil, Fire, Law, Magic, Trickery',             'Mace, heavy',     'CRB'],
  ['Calistria',  'CN',  'Chaos, Charm, Knowledge, Luck, Trickery',      'Whip',            'CRB'],
  ['Cayden Cailean','CG','Chaos, Charm, Good, Strength, Travel',        'Rapier',          'CRB'],
  ['Daikitsu',   'N',   'Animal, Artifice, Community, Good, Plant',     'Naginata',        'ISG'],
  ['Desna',      'CG',  'Chaos, Good, Liberation, Luck, Travel',        'Starknife',       'CRB'],
  ['Erastil',    'LG',  'Animal, Community, Good, Law, Plant',          'Longbow',         'CRB'],
  ['Gorum',      'CN',  'Chaos, Destruction, Glory, Strength, War',     'Greatsword',      'CRB'],
  ['Gozreh',     'N',   'Air, Animal, Plant, Water, Weather',           'Trident',         'CRB'],
  ['Groetus',    'CN',  'Chaos, Darkness, Destruction, Madness, Void',  'Skull, heavy',    'ISG'],
  ['Grundinnar', 'LG',  'Community, Good, Law',                         'Light hammer',    'ISG'],
  ['Iomedae',    'LG',  'Glory, Good, Law, Sun, War',                   'Longsword',       'CRB'],
  ['Irori',      'LN',  'Healing, Knowledge, Law, Rune, Strength',      'Unarmed strike',  'CRB'],
  ['Ketephys',   'CG',  'Animal, Chaos, Good, Moon, Plant',             'Bow',             'ISG'],
  ['Lamashtu',   'CE',  'Chaos, Evil, Madness, Strength, Trickery',     'Falchion',        'CRB'],
  ['Milani',     'CG',  'Chaos, Good, Healing, Liberation, Protection', 'Morningstar',     'ISG'],
  ['Nethys',     'N',   'Destruction, Knowledge, Magic, Protection, Rune', 'Quarterstaff', 'CRB'],
  ['Norgorber',  'NE',  'Charm, Death, Evil, Knowledge, Trickery',      'Short sword',     'CRB'],
  ['Pharasma',   'N',   'Death, Healing, Knowledge, Repose, Water',     'Dagger',          'CRB'],
  ['Pulura',     'CG',  'Chaos, Good, Teleportation, Water, Weather',   'Starknife',       'ISG'],
  ['Rovagug',    'CE',  'Chaos, Destruction, Evil, War, Weather',       'Greataxe',        'CRB'],
  ['Sarenrae',   'NG',  'Fire, Glory, Good, Healing, Sun',              'Scimitar',        'CRB'],
  ['Shelyn',     'NG',  'Air, Charm, Good, Luck, Protection',           'Glaive',          'CRB'],
  ['Sivanah',    'N',   'Illusion, Knowledge, Magic, Rune, Trickery',   'Blowgun',         'ISG'],
  ['Torag',      'LG',  'Artifice, Earth, Good, Law, Protection',       'Warhammer',       'CRB'],
  ['Urgathoa',   'NE',  'Death, Evil, Magic, Strength, War',            'Scythe',          'CRB'],
  ['Zon-Kuthon', 'LE',  'Darkness, Death, Destruction, Evil, Law',      'Spiked chain',    'CRB'],
  // Dwarven deities
  ['Angradd',    'LG',  'Fire, Good, Law, War',                         'Greataxe',        'ISG'],
  ['Bolka',      'NG',  'Charm, Community, Good, Healing',              'Morningstar',     'ISG'],
  ['Dranngvit',  'LN',  'Knowledge, Law, Rune',                         'Whip',            'ISG'],
  ['Droskar',    'NE',  'Artifice, Darkness, Evil, Trickery',           'Light hammer',    'ISG'],
  ['Folgrit',    'LG',  'Community, Good, Law, Protection',             'Quarterstaff',    'ISG'],
  ['Grundinnar', 'LG',  'Community, Good, Law',                         'Light hammer',    'ISG'],
  ['Kols',       'LN',  'Law, Nobility, Rune, Strength, War',           'Warhammer',       'ISG'],
  ['Magrim',     'LN',  'Death, Earth, Law, Repose',                    'Warhammer',       'ISG'],
  ['Trudd',      'NG',  'Good, Protection, Strength, War',              'Warhammer',       'ISG'],
  // Additional common deities
  // Arqueros — Empyreal Lord (archon). Source: Inner Sea Gods / PathfinderWiki
  // Favored weapon: longspear (the Golden Bulwark wields a longspear with diamond blades)
  ['Arqueros',   'LG',  'Good, Law, Protection, War',                   'Longspear',       'ISG', 'Pray 1 hour holding a heavy shield overhead.', '+4 sacred bonus on Strength checks and Strength-based skill checks.'],

  // Additional empyreal lords & monitor demigods
  ['Andoletta',  'LG',  'Good, Law, Protection',                        'Quarterstaff',    'ISG'],
  ['Ashava',     'CG',  'Chaos, Good, Moon',                            'Falchion',        'ISG'],
  ['Bharnarol',  'NG',  'Artifice, Good, Knowledge',                    'Heavy pick',      'ISG'],
  ['Black Butterfly','CN','Chaos, Darkness, Travel, Void',              'Starknife',       'ISG'],
  ['Eritrice',   'NG',  'Charm, Good, Knowledge',                       'Quarterstaff',    'ISG'],
  ['Falayna',    'LG',  'Community, Good, Law, Strength',               'Falchion',        'ISG'],
  ['Ghenshau',   'NG',  'Good, Healing, Repose',                        'Unarmed strike',  'ISG'],
  ['Halcamora',  'CG',  'Chaos, Good, Plant',                           'Longbow',         'ISG'],
  ['Irez',       'NG',  'Charm, Good, Magic',                           'Dagger',          'ISG'],
  ['Jalaijatali','CG',  'Air, Chaos, Good, Weather',                    'Shortspear',      'ISG'],
  ['Lymnieris',  'LG',  'Good, Law, Liberation',                        'Longspear',       'ISG'],
  ['Olheon',     'LN',  'Law, Nobility, Travel',                        'Javelin',         'ISG'],
  ['Ragathiel',  'LG',  'Destruction, Good, Law, War',                  'Bastard sword',   'ISG'],
  ['Sinashakti', 'CN',  'Chaos, Luck, Travel',                          'Quarterstaff',    'ISG'],
  ['Tanagaar',   'LG',  'Air, Animal, Good, Law',                       'Longbow',         'ISG'],
  ['Tolc',       'LN',  'Knowledge, Law, Rune',                         'Morningstar',     'ISG'],
  ['Winlas',     'NG',  'Good, Healing, Plant',                         'Scythe',          'ISG'],
  ['Ylimancha',  'CG',  'Air, Animal, Chaos, Good',                     'Shortbow',        'ISG'],

  // Demon lords (for evil-aligned characters / GMs)
  ['Abraxas',    'CE',  'Chaos, Evil, Knowledge, Magic',                'Whip',            'ISG'],
  ['Andirifkhu', 'CE',  'Chaos, Evil, Trickery',                        'Scimitar',        'ISG'],
  ['Cyth-V\'sug','CE',  'Chaos, Evil, Plant, Strength',                 'Falchion',        'ISG'],
  ['Deskari',    'CE',  'Chaos, Evil, War',                             'Scythe',          'ISG'],
  ['Gogunta',    'CE',  'Chaos, Death, Evil, Water',                    'Whip',            'ISG'],
  ['Nocticula',  'CE',  'Chaos, Charm, Darkness, Evil',                 'Kukri',           'ISG'],
  ['Pazuzu',     'CE',  'Air, Chaos, Evil, Trickery',                   'Shortspear',      'ISG'],
  ['Xoveron',    'CE',  'Chaos, Earth, Evil, Madness',                  'Greatclub',       'ISG'],

  // Archdevils
  ['Mephistopheles','LE','Evil, Law, Magic, Trickery',                  'Ranseur',         'ISG'],
  ['Barbatos',   'LE',  'Animal, Evil, Law, Trickery',                  'Quarterstaff',    'ISG'],
  ['Dispater',   'LE',  'Evil, Law, Nobility, Trickery',                'Mace, heavy',     'ISG'],
  ['Mammon',     'LE',  'Earth, Evil, Law, Trickery',                   'Spear',           'ISG'],

  // Outer Gods / Great Old Ones
  ['Azathoth',   'CN',  'Chaos, Darkness, Destruction, Madness',        'Quarterstaff',    'Bestiary4'],
  ['Nyarlathotep','CE', 'Chaos, Evil, Knowledge, Trickery',             'Flail',           'Bestiary4'],
  ['Yhidothrus', 'CE',  'Chaos, Evil, Void',                            'Scythe',          'Bestiary4'],

  // Neutral powers
  ['Achaekek',   'LE',  'Death, Evil, Law, Trickery, War',              'Sawtooth sabre',  'ISG'],
  ['Alseta',     'LN',  'Artifice, Law, Nobility, Protection',          'Dagger',          'ISG'],
  ['Besmara',    'CN',  'Chaos, Trickery, War, Water, Weather',         'Rapier',          'ISG'],
  ['Brigh',      'N',   'Artifice, Fire, Knowledge, Magic',             'Light hammer',    'ISG'],
  ['Hanspur',    'CN',  'Chaos, Travel, Water',                         'Trident',         'ISG'],
  ['Naderi',     'N',   'Chaos, Death, Water',                          'Drowning dart',   'ISG'],
  ['Nivi Rhombodazzle','N','Charm, Earth, Luck, Trickery',              'Light hammer',    'ISG'],
  ['Venkelvore', 'NE',  'Death, Earth, Evil',                           'Greatclub',       'ISG'],
].sort((a,b) => a[0].localeCompare(b[0]));

// ══════════════════════════════════════════════════
// LANGUAGES (all Pathfinder 1e languages)
// ══════════════════════════════════════════════════
const ALL_LANGUAGES = [
  'Abyssal','Aklo','Aquan','Auran','Celestial','Common','Cyclops',
  'Dark Folk','Draconic','Druidic','Dwarven','Elven','Giant','Gnoll',
  'Gnome','Goblin','Grippli','Halfling','Ignan','Infernal','Kelish',
  'Orc','Osiriani','Polyglot','Protean','Shoanti','Skald','Sphinx',
  'Sylvan','Tengu','Terran','Thassilonian','Tien','Undercommon',
  'Varisian','Vegepygmy',
];

// ══════════════════════════════════════════════════
// SIZE MODIFIERS
// Source: aonprd.com CRB p.211
// ══════════════════════════════════════════════════
const SIZE_DATA = {
  'Fine':        { acMod:  8, cmbMod: -8, strMod: -8, dexMod:  8, stealthMod: 16, flyMod:  8 },
  'Diminutive':  { acMod:  4, cmbMod: -4, strMod: -4, dexMod:  4, stealthMod: 12, flyMod:  6 },
  'Tiny':        { acMod:  2, cmbMod: -2, strMod: -2, dexMod:  2, stealthMod:  8, flyMod:  4 },
  'Small':       { acMod:  1, cmbMod: -1, strMod:  0, dexMod:  0, stealthMod:  4, flyMod:  2 },
  'Medium':      { acMod:  0, cmbMod:  0, strMod:  0, dexMod:  0, stealthMod:  0, flyMod:  0 },
  'Large':       { acMod: -1, cmbMod:  1, strMod:  0, dexMod:  0, stealthMod: -4, flyMod: -2 },
  'Huge':        { acMod: -2, cmbMod:  2, strMod:  0, dexMod:  0, stealthMod: -8, flyMod: -4 },
  'Gargantuan':  { acMod: -4, cmbMod:  4, strMod:  0, dexMod:  0, stealthMod:-12, flyMod: -6 },
  'Colossal':    { acMod: -8, cmbMod:  8, strMod:  0, dexMod:  0, stealthMod:-16, flyMod: -8 },
};

// ══════════════════════════════════════════════════
// WEAPONS (common — CRB + ACG)
// Source: aonprd.com Equipment
// ══════════════════════════════════════════════════
const WEAPONS = {
  // Simple — Light
  'Dagger':           { dmg:'1d4', crit:'19-20/×2', type:'P or S', range:10,  weight:1,  cost:2,   category:'simple', group:'light' },
  'Mace, light':      { dmg:'1d6', crit:'×2',       type:'B',      range:0,   weight:4,  cost:5,   category:'simple', group:'light' },
  'Sickle':           { dmg:'1d6', crit:'×2',       type:'S',      range:0,   weight:2,  cost:6,   category:'simple', group:'light' },
  'Unarmed strike':   { dmg:'1d3', crit:'×2',       type:'B',      range:0,   weight:0,  cost:0,   category:'simple', group:'unarmed' },

  // Simple — One-handed
  'Club':             { dmg:'1d6', crit:'×2',       type:'B',      range:10,  weight:3,  cost:0,   category:'simple', group:'onehanded' },
  'Mace, heavy':      { dmg:'1d8', crit:'×2',       type:'B',      range:0,   weight:8,  cost:12,  category:'simple', group:'onehanded' },
  'Morningstar':      { dmg:'1d8', crit:'×2',       type:'B&P',    range:0,   weight:6,  cost:8,   category:'simple', group:'onehanded' },
  'Quarterstaff':     { dmg:'1d6/1d6', crit:'×2',   type:'B',      range:0,   weight:4,  cost:0,   category:'simple', group:'twohanded', twoHanded:true },
  'Shortspear':       { dmg:'1d6', crit:'×2',       type:'P',      range:20,  weight:3,  cost:1,   category:'simple', group:'onehanded' },

  // Simple — Ranged
  'Crossbow, light':  { dmg:'1d8', crit:'19-20/×2', type:'P',      range:80,  weight:4,  cost:35,  category:'simple', group:'ranged' },
  'Crossbow, heavy':  { dmg:'1d10',crit:'19-20/×2', type:'P',      range:120, weight:8,  cost:50,  category:'simple', group:'ranged' },
  'Dart':             { dmg:'1d4', crit:'×2',       type:'P',      range:20,  weight:0.5,cost:0.5, category:'simple', group:'ranged' },
  'Javelin':          { dmg:'1d6', crit:'×2',       type:'P',      range:30,  weight:2,  cost:1,   category:'simple', group:'ranged' },
  'Sling':            { dmg:'1d4', crit:'×2',       type:'B',      range:50,  weight:0,  cost:0,   category:'simple', group:'ranged' },

  // Martial — Light
  'Axe, throwing':    { dmg:'1d6', crit:'×2',       type:'S',      range:10,  weight:2,  cost:8,   category:'martial', group:'light' },
  'Handaxe':          { dmg:'1d6', crit:'×3',       type:'S',      range:0,   weight:3,  cost:6,   category:'martial', group:'light' },
  'Kukri':            { dmg:'1d4', crit:'18-20/×2', type:'S',      range:0,   weight:2,  cost:8,   category:'martial', group:'light' },
  'Pick, light':      { dmg:'1d4', crit:'×4',       type:'P',      range:0,   weight:3,  cost:4,   category:'martial', group:'light' },
  'Rapier':           { dmg:'1d6', crit:'18-20/×2', type:'P',      range:0,   weight:2,  cost:20,  category:'martial', group:'light' },
  'Sap':              { dmg:'1d6', crit:'×2',       type:'B',      range:0,   weight:2,  cost:1,   category:'martial', group:'light' },
  'Sword, short':     { dmg:'1d6', crit:'19-20/×2', type:'P',      range:0,   weight:2,  cost:10,  category:'martial', group:'light' },

  // Martial — One-handed
  'Battleaxe':        { dmg:'1d8', crit:'×3',       type:'S',      range:0,   weight:6,  cost:10,  category:'martial', group:'onehanded' },
  'Flail':            { dmg:'1d8', crit:'×2',       type:'B',      range:0,   weight:5,  cost:8,   category:'martial', group:'onehanded' },
  'Longsword':        { dmg:'1d8', crit:'19-20/×2', type:'S',      range:0,   weight:4,  cost:15,  category:'martial', group:'onehanded' },
  'Pick, heavy':      { dmg:'1d6', crit:'×4',       type:'P',      range:0,   weight:6,  cost:8,   category:'martial', group:'onehanded' },
  'Scimitar':         { dmg:'1d6', crit:'18-20/×2', type:'S',      range:0,   weight:4,  cost:15,  category:'martial', group:'onehanded' },
  'Trident':          { dmg:'1d8', crit:'×2',       type:'P',      range:10,  weight:4,  cost:15,  category:'martial', group:'onehanded' },
  'Warhammer':        { dmg:'1d8', crit:'×3',       type:'B',      range:0,   weight:5,  cost:12,  category:'martial', group:'onehanded' },

  // Martial — Two-handed
  'Lucerne hammer':   { dmg:'1d12',crit:'×2',       type:'B or P', range:0,   weight:12, cost:15,  category:'martial', group:'polearm',   twoHanded:true, reach:true, special:'brace; +2 CMB to sunder medium/heavy armor' },
  'Bardiche':         { dmg:'1d10',crit:'19-20/×2', type:'S',      range:0,   weight:14, cost:13,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Bec de corbin':    { dmg:'1d10',crit:'×3',       type:'B or P', range:0,   weight:12, cost:15,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Bill':             { dmg:'1d8', crit:'×3',       type:'S',      range:0,   weight:11, cost:11,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Fauchard':         { dmg:'1d10',crit:'18-20/×2', type:'S',      range:0,   weight:10, cost:14,  category:'exotic',  group:'twohanded', twoHanded:true, reach:true },
  'Glaive-guisarme':  { dmg:'2d4', crit:'×3',       type:'S',      range:0,   weight:15, cost:12,  category:'exotic',  group:'twohanded', twoHanded:true, reach:true },
  'Longspear':        { dmg:'1d8', crit:'×3',       type:'P',      range:0,   weight:9,  cost:5,   category:'simple',  group:'twohanded', twoHanded:true, reach:true },
  'Spear':            { dmg:'1d8', crit:'×3',       type:'P',      range:20,  weight:6,  cost:2,   category:'simple',  group:'onehanded' },
  'Falchion':         { dmg:'2d4', crit:'18-20/×2', type:'S',      range:0,   weight:8,  cost:75,  category:'martial', group:'twohanded', twoHanded:true },
  'Glaive':           { dmg:'1d10',crit:'×3',       type:'S',      range:0,   weight:10, cost:8,   category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Greataxe':         { dmg:'1d12',crit:'×3',       type:'S',      range:0,   weight:12, cost:20,  category:'martial', group:'twohanded', twoHanded:true },
  'Greatsword':       { dmg:'2d6', crit:'19-20/×2', type:'S',      range:0,   weight:8,  cost:50,  category:'martial', group:'twohanded', twoHanded:true },
  'Guisarme':         { dmg:'2d4', crit:'×3',       type:'S',      range:0,   weight:12, cost:9,   category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Halberd':          { dmg:'1d10',crit:'×3',       type:'P or S', range:0,   weight:12, cost:10,  category:'martial', group:'twohanded', twoHanded:true },
  'Ranseur':          { dmg:'2d4', crit:'×3',       type:'P',      range:0,   weight:12, cost:10,  category:'martial', group:'twohanded', twoHanded:true, reach:true },
  'Scythe':           { dmg:'2d4', crit:'×4',       type:'P or S', range:0,   weight:10, cost:18,  category:'martial', group:'twohanded', twoHanded:true },

  // Martial — Ranged
  'Longbow':          { dmg:'1d8', crit:'×3',       type:'P',      range:100, weight:3,  cost:75,  category:'martial', group:'ranged' },
  'Shortbow':         { dmg:'1d6', crit:'×3',       type:'P',      range:60,  weight:2,  cost:30,  category:'martial', group:'ranged' },

  // Dwarven favorites
  'Urgrosh, dwarven': { dmg:'1d8/1d6',crit:'×3',   type:'P or S', range:0,   weight:12, cost:50,  category:'exotic',  group:'twohanded', twoHanded:true },
  'Waraxe, dwarven':  { dmg:'1d10',crit:'×3',       type:'S',      range:0,   weight:8,  cost:30,  category:'exotic',  group:'onehanded' },

  // Common clerical / warpriest weapons
  'Starknife':        { dmg:'1d4', crit:'×3',       type:'P',      range:20,  weight:3,  cost:24,  category:'martial', group:'light' },
  'Spiked chain':     { dmg:'2d4', crit:'×2',       type:'P',      range:0,   weight:10, cost:25,  category:'exotic',  group:'twohanded', twoHanded:true },
};

// ══════════════════════════════════════════════════
// ARMOR & SHIELDS (CRB)
// Source: aonprd.com Equipment
// ══════════════════════════════════════════════════
const ARMOR = {
  // Light armor
  'Padded':           { bonus:1, maxDex:8,  checkPen:0,  sf:5,  weight:10, cost:5,   type:'Light armor',   special:'' },
  'Leather':          { bonus:2, maxDex:6,  checkPen:0,  sf:10, weight:15, cost:10,  type:'Light armor',   special:'' },
  'Studded leather':  { bonus:3, maxDex:5,  checkPen:-1, sf:15, weight:20, cost:25,  type:'Light armor',   special:'' },
  'Chain shirt':      { bonus:4, maxDex:4,  checkPen:-2, sf:20, weight:25, cost:100, type:'Light armor',   special:'' },

  // Medium armor
  'Hide':             { bonus:4, maxDex:4,  checkPen:-3, sf:20, weight:25, cost:15,  type:'Medium armor',  special:'' },
  'Scale mail':       { bonus:5, maxDex:3,  checkPen:-4, sf:25, weight:30, cost:50,  type:'Medium armor',  special:'' },
  'Chainmail':        { bonus:6, maxDex:2,  checkPen:-5, sf:30, weight:40, cost:150, type:'Medium armor',  special:'' },
  'Breastplate':      { bonus:6, maxDex:3,  checkPen:-4, sf:25, weight:30, cost:200, type:'Medium armor',  special:'' },

  // Heavy armor
  'Splint mail':      { bonus:7, maxDex:0,  checkPen:-7, sf:35, weight:45, cost:200, type:'Heavy armor',   special:'' },
  'Banded mail':      { bonus:7, maxDex:1,  checkPen:-6, sf:35, weight:35, cost:250, type:'Heavy armor',   special:'' },
  'Half-plate':       { bonus:8, maxDex:0,  checkPen:-7, sf:40, weight:50, cost:600, type:'Heavy armor',   special:'' },
  'Full plate':       { bonus:9, maxDex:1,  checkPen:-6, sf:35, weight:50, cost:1500,type:'Heavy armor',   special:'' },

  // Shields
  'Buckler':          { bonus:1, maxDex:99, checkPen:-1, sf:5,  weight:5,  cost:5,   type:'Shield',        special:'-1 atk with buckler arm' },
  'Shield, light wooden':{ bonus:1,maxDex:99,checkPen:-1,sf:5, weight:5,  cost:3,   type:'Shield',        special:'' },
  'Shield, light steel': { bonus:1,maxDex:99,checkPen:-1,sf:5, weight:6,  cost:9,   type:'Shield',        special:'' },
  'Shield, heavy wooden':{ bonus:2,maxDex:99,checkPen:-2,sf:15,weight:10, cost:7,   type:'Shield',        special:'' },
  'Shield, heavy steel': { bonus:2,maxDex:99,checkPen:-2,sf:15,weight:15, cost:20,  type:'Shield',        special:'' },
  'Shield, tower':    { bonus:4, maxDex:2,  checkPen:-10,sf:50,weight:45, cost:30,  type:'Shield',        special:'Full cover vs ranged; –2 atk in melee' },
};

// ══════════════════════════════════════════════════
// COMMON GEAR (CRB)
// Source: aonprd.com Equipment
// ══════════════════════════════════════════════════
const COMMON_GEAR = {
  // Adventuring gear
  'Backpack':             { weight:2,  cost:2   },
  'Bedroll':              { weight:5,  cost:0.1 },
  'Blanket, winter':      { weight:3,  cost:0.5 },
  'Canteen/waterskin':    { weight:4,  cost:1   },
  'Flint and steel':      { weight:0,  cost:1   },
  'Grappling hook':       { weight:4,  cost:1   },
  'Lantern, bullseye':    { weight:3,  cost:12  },
  'Lantern, hooded':      { weight:2,  cost:7   },
  'Oil (flask)':          { weight:1,  cost:0.1 },
  'Rations (per day)':    { weight:1,  cost:0.5 },
  'Rope, hemp (50 ft)':   { weight:10, cost:1   },
  'Rope, silk (50 ft)':   { weight:5,  cost:10  },
  'Sack':                 { weight:0.5,cost:0.1 },
  'Sunrod':               { weight:1,  cost:2   },
  'Tent, small':          { weight:20, cost:10  },
  'Thieves\' tools':      { weight:1,  cost:30  },
  'Torch':                { weight:1,  cost:0.01},
  'Trail rations (5)':    { weight:5,  cost:2.5 },

  // Potions
  'Potion: CLW (1d8+1)':  { weight:0,  cost:50  },
  'Potion: CMW (2d8+3)':  { weight:0,  cost:300 },
  'Potion: CSW (3d8+5)':  { weight:0,  cost:750 },
  'Potion: Cure Blind.':  { weight:0,  cost:50  },
  'Potion: Delay Poison': { weight:0,  cost:300 },
  'Potion: Invisibility': { weight:0,  cost:300 },
  'Potion: Mage Armor':   { weight:0,  cost:50  },
  'Potion: Magic Fang':   { weight:0,  cost:50  },
  'Potion: Shield of Faith+2': { weight:0, cost:50 },

  // Scrolls (1st level)
  'Scroll: Bless':        { weight:0,  cost:25  },
  'Scroll: Cure LW':      { weight:0,  cost:25  },
  'Scroll: Detect Magic': { weight:0,  cost:12.5},
  'Scroll: Endure Elems': { weight:0,  cost:25  },
  'Scroll: Magic Weapon': { weight:0,  cost:25  },
  'Scroll: Protection/Evil': { weight:0, cost:25},

  // Tools / kits
  'Healer\'s kit (10)':   { weight:1,  cost:50  },
  'Holy symbol, silver':  { weight:1,  cost:25  },
  'Holy symbol, wooden':  { weight:0,  cost:1   },
  'Spell component pouch':{ weight:2,  cost:5   },
};


// ══════════════════════════════════════════════════
// DEITY OBEDIENCE PERKS — typed, universal structure
// Source: Inner Sea Gods, Chronicle of the Righteous
//
// bonus: array of typed bonus objects that the sheet
//        can apply automatically. Types:
//   { type, amount, bonusType, targets }
//   type:      'skill_ability' | 'skill' | 'save' |
//              'attack' | 'concentration' | 'ac' |
//              'note' (display only, no auto-calc)
//   amount:    numeric bonus
//   bonusType: 'sacred' | 'profane' | 'insight' etc.
//   targets:   array of specific targets (ability keys,
//              skill ids, save names, etc.)
//   condition: optional string — shown as tooltip/note
// ══════════════════════════════════════════════════
const DEITY_PERKS = {

  // ── CORE DEITIES ──────────────────────────────
  'Abadar': {
    obedience: "Spend 1 hour balancing accounts and meditating on fair trade principles.",
    perk: "+4 sacred bonus on Appraise checks and Sense Motive checks to detect lies.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['appraise'] },
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['sense_motive'], condition: 'to detect lies only' },
    ],
  },

  'Calistria': {
    obedience: "Spend 1 hour recounting wrongs done to you and planning your revenge.",
    perk: "+4 sacred bonus on saves against charm and compulsion effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['fort','ref','will'], condition: 'vs charm and compulsion effects only' },
    ],
  },

  'Cayden Cailean': {
    obedience: "Drink a tankard of ale and sing a song of freedom; share a drink with a stranger.",
    perk: "+4 sacred bonus on saving throws against poison.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['fort'], condition: 'vs poison effects only' },
    ],
  },

  'Desna': {
    obedience: "Spend 1 hour stargazing and singing, tracing constellations on the ground.",
    perk: "+4 sacred bonus on saving throws against curses and compulsions.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs curses and compulsions only' },
    ],
  },

  'Erastil': {
    obedience: "Spend 1 hour in prayer while tending crops, livestock, or practicing your craft.",
    perk: "+4 sacred bonus on Survival checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['survival'] },
    ],
  },

  'Gorum': {
    obedience: "Spend 1 hour in vigorous combat practice while reciting prayers of battle.",
    perk: "+4 sacred bonus on saves against fear and mind-affecting effects while raging.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear and mind-affecting, while raging only' },
    ],
  },

  'Iomedae': {
    obedience: "Spend 1 hour in prayer and weapon drill, reciting the Acts of Iomedae.",
    perk: "+4 sacred bonus on saving throws against fear effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear effects only' },
    ],
  },

  'Irori': {
    obedience: "Spend 1 hour in meditation and physical training following a prescribed regimen.",
    perk: "+4 sacred bonus on Knowledge (history) checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['k_history'] },
    ],
  },

  'Lamashtu': {
    obedience: "Draw your own blood and offer it to Lamashtu while chanting her praises.",
    perk: "+4 profane bonus on saves against confusion and insanity effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'profane', targets: ['will'], condition: 'vs confusion and insanity only' },
    ],
  },

  'Nethys': {
    obedience: "Inscribe blessings and arcane notations on parchment; cast a spell at the culmination.",
    perk: "+4 sacred bonus on concentration checks.",
    bonus: [
      { type: 'concentration', amount: 4, bonusType: 'sacred', targets: ['concentration'] },
    ],
  },

  'Pharasma': {
    obedience: "Lay bones in a spiral; place names of the newborn and recently deceased at each end; chant hymns.",
    perk: "+2 sacred bonus on attack rolls made with daggers.",
    bonus: [
      { type: 'attack', amount: 2, bonusType: 'sacred', targets: ['dagger'], condition: 'with daggers only' },
    ],
  },

  'Rovagug': {
    obedience: "Destroy something beautiful or meaningful; offer the wreckage to the Rough Beast.",
    perk: "+4 profane bonus on saves against paralysis and petrification.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'profane', targets: ['fort'], condition: 'vs paralysis and petrification only' },
    ],
  },

  'Sarenrae': {
    obedience: "Spend 1 hour in prayer facing the sunrise or a flame, reciting the Dawnflower's tenets.",
    perk: "+4 sacred bonus on Diplomacy checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['diplomacy'] },
    ],
  },

  'Shelyn': {
    obedience: "Spend 1 hour creating art — painting, music, poetry, or sculpture — dedicated to Shelyn.",
    perk: "+4 sacred bonus on Perform checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['perform1','perform2'] },
    ],
  },

  'Torag': {
    obedience: "Spend 1 hour working at a forge, crafting or repairing items while praying to Torag.",
    perk: "+4 sacred bonus on Craft (armor) and Craft (weapons) checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['craft1','craft2'], condition: 'for armor and weapons only' },
    ],
  },

  'Urgathoa': {
    obedience: "Consume raw meat while reciting prayers to Urgathoa; allow some to putrefy first if possible.",
    perk: "+4 profane bonus on saves against disease.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'profane', targets: ['fort'], condition: 'vs disease only' },
    ],
  },

  'Zon-Kuthon': {
    obedience: "Inflict or receive pain through ritual; whip your own back while chanting praises.",
    perk: "+2 sacred bonus on saving throws against spells that deal hit point damage.",
    bonus: [
      { type: 'save', amount: 2, bonusType: 'sacred', targets: ['fort','ref','will'], condition: 'vs spells dealing HP damage only' },
    ],
  },

  // ── EMPYREAL LORDS ────────────────────────────
  'Arqueros': {
    obedience: "Pray for 1 hour while holding a heavy shield overhead. Source: Chronicle of the Righteous.",
    perk: "+4 sacred bonus on Strength checks and Strength-based skill checks.",
    bonus: [
      { type: 'skill_ability', amount: 4, bonusType: 'sacred', targets: ['str'] },
    ],
  },

  'Andoletta': {
    obedience: "Recite the Obeisance of Glorious Preservation from memory while weaving a basket for the poor.",
    perk: "+4 sacred bonus on saving throws against fear and charm effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear and charm effects only' },
    ],
  },

  'Black Butterfly': {
    obedience: "Perform an anonymous act of charity without speaking or gazing at the recipient.",
    perk: "+4 sacred bonus on saving throws against gaze and sonic attacks.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['fort','ref','will'], condition: 'vs gaze and sonic attacks only' },
    ],
  },

  'Desna': {
    obedience: "Spend 1 hour stargazing and singing, tracing constellations on the ground.",
    perk: "+4 sacred bonus on saving throws against curses and compulsions.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs curses and compulsions only' },
    ],
  },

  'Iomedae': {
    obedience: "Spend 1 hour in prayer and weapon drill, reciting the Acts of Iomedae.",
    perk: "+4 sacred bonus on saving throws against fear effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs fear effects only' },
    ],
  },

  'Ragathiel': {
    obedience: "Spend 1 hour in weapons drill and prayer; vow to fight evil with every strike.",
    perk: "+4 sacred bonus on saves against charm and compulsion effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['will'], condition: 'vs charm and compulsion only' },
    ],
  },

  // ── DWARVEN DEITIES ───────────────────────────
  'Angradd': {
    obedience: "Spend 1 hour at a forge or campfire, reciting battle-prayers while tending the flame.",
    perk: "+4 sacred bonus on saves against fire effects.",
    bonus: [
      { type: 'save', amount: 4, bonusType: 'sacred', targets: ['ref'], condition: 'vs fire effects only' },
    ],
  },

  'Torag': {
    obedience: "Spend 1 hour working at a forge, crafting or repairing items while praying to Torag.",
    perk: "+4 sacred bonus on Craft (armor) and Craft (weapons) checks.",
    bonus: [
      { type: 'skill', amount: 4, bonusType: 'sacred', targets: ['craft1','craft2'], condition: 'for armor and weapons crafting' },
    ],
  },

};
