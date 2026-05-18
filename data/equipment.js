/* Pathfinder 1e Sheet — Equipment — weapons, armor, materials, gear, size modifiers
   Source: aonprd.com
   Part of split data files — loaded in order by index.html
*/
'use strict';

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

// ══════════════════════════════════════════════════
// WEAPON MATERIALS
// Source: aonprd.com
// ══════════════════════════════════════════════════
const WEAPON_MATERIALS = {
  'Normal':            { dmgMod: 0,  note: '' },
  'Masterwork':        { dmgMod: 0,  note: '+1 attack (does not stack with enhancement bonus)' },
  'Alchemical Silver': { dmgMod: -1, note: '–1 damage. Bypasses DR/silver.' },
  'Cold Iron':         { dmgMod: 0,  note: 'Bypasses DR/cold iron. Costs double.' },
  'Adamantine':        { dmgMod: 0,  note: 'Bypasses DR/adamantine and hardness <20.' },
  'Mithral':           { dmgMod: 0,  note: 'Counts as silver. Half weight.' },
  'Darkwood':          { dmgMod: 0,  note: 'Wooden weapons only. Half weight.' },
  'Bone':              { dmgMod: 0,  note: 'Fragile. Break DC 20 on attack roll of 1.' },
};
