/* Pathfinder 1e Sheet — Magic Items Database
   Source: aonprd.com (CRB + APG + Ultimate Equipment)
   Wondrous items, ioun stones, rings, rods, staves
   Used by AC Items quick-fill and gear tracker
*/
'use strict';

// ══════════════════════════════════════════════════
// MAGIC ITEM SLOT TYPES
// For filtering in the quick-fill UI
// ══════════════════════════════════════════════════
const ITEM_SLOTS = [
  'Belt','Body','Chest','Eyes','Feet','Hands',
  'Head','Headband','Neck','Ring','Shoulders',
  'Slotless','Wrist',
];

// ══════════════════════════════════════════════════
// WONDROUS ITEMS & MAGIC ITEMS
// Format:
//   name, slot, cost (gp), weight (lbs),
//   acBonus, acType (enhancement/deflection/natural/etc),
//   statBonus: { ability: amount },  — feeds ability score
//   skillBonus: { skillId: amount }, — feeds skill misc
//   speedBonus,                       — feeds speed_land
//   note,                             — display-only
//   source
// ══════════════════════════════════════════════════
const MAGIC_ITEMS = {

  // ── BELTS ────────────────────────────────────────
  'Belt of Giant Strength +2': {
    slot:'Belt', cost:4000, weight:1,
    statBonus:{ str:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Strength.',
    source:'CRB',
  },
  'Belt of Giant Strength +4': {
    slot:'Belt', cost:16000, weight:1,
    statBonus:{ str:4 }, bonusType:'enhancement',
    note:'+4 enhancement bonus to Strength.',
    source:'CRB',
  },
  'Belt of Giant Strength +6': {
    slot:'Belt', cost:36000, weight:1,
    statBonus:{ str:6 }, bonusType:'enhancement',
    note:'+6 enhancement bonus to Strength.',
    source:'CRB',
  },
  'Belt of Incredible Dexterity +2': {
    slot:'Belt', cost:4000, weight:1,
    statBonus:{ dex:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Dexterity.',
    source:'CRB',
  },
  'Belt of Mighty Constitution +2': {
    slot:'Belt', cost:4000, weight:1,
    statBonus:{ con:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Constitution.',
    source:'CRB',
  },
  'Belt of Physical Might +2 (STR/DEX)': {
    slot:'Belt', cost:10000, weight:1,
    statBonus:{ str:2, dex:2 }, bonusType:'enhancement',
    note:'+2 enhancement to both STR and DEX.',
    source:'CRB',
  },
  'Belt of Physical Perfection +2': {
    slot:'Belt', cost:16000, weight:1,
    statBonus:{ str:2, dex:2, con:2 }, bonusType:'enhancement',
    note:'+2 enhancement to STR, DEX, and CON.',
    source:'CRB',
  },

  // ── HEADBANDS ────────────────────────────────────
  'Headband of Inspired Wisdom +2': {
    slot:'Headband', cost:4000, weight:0,
    statBonus:{ wis:2 }, bonusType:'enhancement',
    note:'+2 enhancement bonus to Wisdom. Grants +2 ranks in one Wis-based skill.',
    source:'CRB',
  },
  'Headband of Inspired Wisdom +4': {
    slot:'Headband', cost:16000, weight:0,
    statBonus:{ wis:4 }, bonusType:'enhancement',
    note:'+4 enhancement to WIS. Grants +4 ranks in one Wis-based skill.',
    source:'CRB',
  },
  'Headband of Vast Intelligence +2': {
    slot:'Headband', cost:4000, weight:0,
    statBonus:{ int:2 }, bonusType:'enhancement',
    note:'+2 enhancement to INT. Grants +2 ranks in one Int-based skill.',
    source:'CRB',
  },
  'Headband of Alluring Charisma +2': {
    slot:'Headband', cost:4000, weight:0,
    statBonus:{ cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to CHA. Grants +2 ranks in one Cha-based skill.',
    source:'CRB',
  },
  'Headband of Mental Prowess +2 (WIS/CHA)': {
    slot:'Headband', cost:10000, weight:0,
    statBonus:{ wis:2, cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to WIS and CHA.',
    source:'CRB',
  },
  'Headband of Mental Superiority +2': {
    slot:'Headband', cost:16000, weight:0,
    statBonus:{ int:2, wis:2, cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to INT, WIS, and CHA.',
    source:'CRB',
  },

  // ── BOOTS / FEET ─────────────────────────────────
  'Boots of Speed': {
    slot:'Feet', cost:12000, weight:1,
    note:'10 rounds/day: haste effect (activate as free action).',
    source:'CRB',
  },
  'Boots of Striding and Springing': {
    slot:'Feet', cost:5500, weight:1,
    speedBonus:10,
    skillBonus:{ acrobatics:5 },
    note:'+10 ft. enhancement to land speed. +5 competence on Acrobatics (jumping).',
    source:'CRB',
  },
  'Boots of Elvenkind': {
    slot:'Feet', cost:2500, weight:0.5,
    skillBonus:{ stealth:5 },
    note:'+5 competence on Stealth checks.',
    source:'CRB',
  },
  'Boots of the Winterlands': {
    slot:'Feet', cost:2500, weight:1,
    note:'Ignore difficult terrain in ice/snow. Cold resistance 10. Treat cold as 0°F.',
    source:'CRB',
  },
  'Winged Boots': {
    slot:'Feet', cost:16000, weight:1,
    note:'3/day: fly 60 ft (good maneuverability) for up to 5 minutes each use.',
    source:'CRB',
  },
  'Boots of Levitation': {
    slot:'Feet', cost:7500, weight:1,
    note:'At will: levitate (as the spell, CL 6th).',
    source:'CRB',
  },

  // ── CLOAKS / SHOULDERS ───────────────────────────
  'Cloak of Resistance +1': {
    slot:'Shoulders', cost:1000, weight:1,
    saveBonus:1, bonusType:'resistance',
    note:'+1 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +2': {
    slot:'Shoulders', cost:4000, weight:1,
    saveBonus:2, bonusType:'resistance',
    note:'+2 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +3': {
    slot:'Shoulders', cost:9000, weight:1,
    saveBonus:3, bonusType:'resistance',
    note:'+3 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +4': {
    slot:'Shoulders', cost:16000, weight:1,
    saveBonus:4, bonusType:'resistance',
    note:'+4 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Resistance +5': {
    slot:'Shoulders', cost:25000, weight:1,
    saveBonus:5, bonusType:'resistance',
    note:'+5 resistance bonus to all saving throws.',
    source:'CRB',
  },
  'Cloak of Elvenkind': {
    slot:'Shoulders', cost:2500, weight:1,
    skillBonus:{ stealth:5 },
    note:'+5 competence on Stealth checks.',
    source:'CRB',
  },
  'Cloak of the Manta Ray': {
    slot:'Shoulders', cost:7200, weight:1,
    note:'Breathe underwater. Swim speed 60 ft. AC 3 vs aquatic creatures.',
    source:'CRB',
  },

  // ── AMULETS / NECK ───────────────────────────────
  'Amulet of Natural Armor +1': {
    slot:'Neck', cost:2000, weight:0,
    acBonus:1, acType:'natural armor',
    note:'+1 enhancement to natural armor (stacks with existing natural armor).',
    source:'CRB',
  },
  'Amulet of Natural Armor +2': {
    slot:'Neck', cost:8000, weight:0,
    acBonus:2, acType:'natural armor',
    note:'+2 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Natural Armor +3': {
    slot:'Neck', cost:18000, weight:0,
    acBonus:3, acType:'natural armor',
    note:'+3 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Natural Armor +4': {
    slot:'Neck', cost:32000, weight:0,
    acBonus:4, acType:'natural armor',
    note:'+4 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Natural Armor +5': {
    slot:'Neck', cost:50000, weight:0,
    acBonus:5, acType:'natural armor',
    note:'+5 enhancement to natural armor.',
    source:'CRB',
  },
  'Amulet of Mighty Fists +1': {
    slot:'Neck', cost:4000, weight:0,
    note:'+1 enhancement on unarmed strikes and natural attacks (attack and damage).',
    source:'CRB',
  },
  'Periapt of Wisdom +2': {
    slot:'Neck', cost:4000, weight:0,
    statBonus:{ wis:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Wisdom.',
    source:'CRB',
  },
  'Periapt of Health': {
    slot:'Neck', cost:7500, weight:0,
    note:'Immune to disease (including magical diseases).',
    source:'CRB',
  },
  'Periapt of Proof against Poison': {
    slot:'Neck', cost:27000, weight:0,
    note:'Immune to all poisons.',
    source:'CRB',
  },
  'Necklace of Fireballs (Type I)': {
    slot:'Neck', cost:1650, weight:0,
    note:'2 beads: 5d6 fireball (Ref DC 14 half).',
    source:'CRB',
  },

  // ── RINGS ────────────────────────────────────────
  'Ring of Protection +1': {
    slot:'Ring', cost:2000, weight:0,
    acBonus:1, acType:'deflection',
    note:'+1 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +2': {
    slot:'Ring', cost:8000, weight:0,
    acBonus:2, acType:'deflection',
    note:'+2 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +3': {
    slot:'Ring', cost:18000, weight:0,
    acBonus:3, acType:'deflection',
    note:'+3 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +4': {
    slot:'Ring', cost:32000, weight:0,
    acBonus:4, acType:'deflection',
    note:'+4 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Protection +5': {
    slot:'Ring', cost:50000, weight:0,
    acBonus:5, acType:'deflection',
    note:'+5 deflection bonus to AC.',
    source:'CRB',
  },
  'Ring of Feather Falling': {
    slot:'Ring', cost:2200, weight:0,
    note:'Constant feather fall effect (as spell).',
    source:'CRB',
  },
  'Ring of Sustenance': {
    slot:'Ring', cost:2500, weight:0,
    note:'Need only 2 hours of sleep. Does not need to eat or drink.',
    source:'CRB',
  },
  'Ring of Invisibility': {
    slot:'Ring', cost:20000, weight:0,
    note:'At will: become invisible (as the spell). Ends on attack.',
    source:'CRB',
  },
  'Ring of Spell Storing (Minor)': {
    slot:'Ring', cost:18000, weight:0,
    note:'Store up to 3 levels of spells. Cast stored spell as if you cast it.',
    source:'CRB',
  },
  'Ring of Freedom of Movement': {
    slot:'Ring', cost:40000, weight:0,
    note:'Constant freedom of movement. Immune to paralysis, entangle, slow, solid fog.',
    source:'CRB',
  },
  'Ring of Counterspells': {
    slot:'Ring', cost:4000, weight:0,
    note:'Store one spell. Automatically counterspells the same spell cast at you.',
    source:'CRB',
  },
  'Ring of Evasion': {
    slot:'Ring', cost:25000, weight:0,
    note:'Constant evasion (Ref save for no damage instead of half).',
    source:'CRB',
  },
  'Ring of Force Shield': {
    slot:'Ring', cost:8500, weight:0,
    acBonus:4, acType:'shield',
    note:'Activate as free action: +4 shield bonus to AC (force). No check penalty or spell failure.',
    source:'CRB',
  },

  // ── IOUN STONES ──────────────────────────────────
  'Dusty Rose Prism Ioun Stone': {
    slot:'Slotless', cost:5000, weight:0,
    acBonus:1, acType:'insight',
    note:'+1 insight bonus to AC.',
    source:'CRB',
  },
  'Pale Blue Rhomboid Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ str:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Strength.',
    source:'CRB',
  },
  'Pink and Green Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ cha:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Charisma.',
    source:'CRB',
  },
  'Incandescent Blue Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ wis:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Wisdom.',
    source:'CRB',
  },
  'Dark Blue Rhomboid Ioun Stone': {
    slot:'Slotless', cost:10000, weight:0,
    note:'Alertness (as feat): +2 Perception and +2 Sense Motive.',
    source:'CRB',
  },
  'Scarlet and Blue Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ int:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Intelligence.',
    source:'CRB',
  },
  'Pink Rhomboid Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ con:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Constitution.',
    source:'CRB',
  },
  'Deep Red Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    statBonus:{ dex:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Dexterity.',
    source:'CRB',
  },
  'Pearly White Spindle Ioun Stone': {
    slot:'Slotless', cost:20000, weight:0,
    note:'Regenerate 1 HP per 10 minutes.',
    source:'CRB',
  },
  'Iridescent Spindle Ioun Stone': {
    slot:'Slotless', cost:18000, weight:0,
    note:'Sustains creature without air.',
    source:'CRB',
  },
  'Orange Prism Ioun Stone': {
    slot:'Slotless', cost:30000, weight:0,
    note:'+1 caster level.',
    source:'CRB',
  },

  // ── GLOVES / HANDS ───────────────────────────────
  'Gloves of Swimming and Climbing': {
    slot:'Hands', cost:6250, weight:0,
    skillBonus:{ swim:5, climb:5 },
    note:'+5 competence on Swim and Climb checks.',
    source:'CRB',
  },
  'Gauntlets of Ogre Power': {
    slot:'Hands', cost:4000, weight:4,
    statBonus:{ str:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Strength.',
    source:'CRB',
  },
  'Gloves of Arrow Snaring': {
    slot:'Hands', cost:4000, weight:0,
    note:'2/day: catch an arrow or bolt shot at you (no action required). Must be aware of attack.',
    source:'CRB',
  },

  // ── EYES / GOGGLES ───────────────────────────────
  'Eyes of the Eagle': {
    slot:'Eyes', cost:2500, weight:0,
    skillBonus:{ perception:5 },
    note:'+5 competence on Perception checks.',
    source:'CRB',
  },
  'Goggles of Night': {
    slot:'Eyes', cost:12000, weight:0,
    note:'Darkvision 60 ft. (or +60 ft if already have darkvision).',
    source:'CRB',
  },
  'Eyes of Keen Sight': {
    slot:'Eyes', cost:6000, weight:0,
    note:'See invisible creatures and objects (as see invisibility). Constant effect.',
    source:'APG',
  },

  // ── WRISTS / BRACERS ─────────────────────────────
  'Bracers of Armor +1': {
    slot:'Wrist', cost:1000, weight:1,
    acBonus:1, acType:'armor',
    note:'+1 armor bonus to AC (as mage armor). No max Dex, no check penalty.',
    source:'CRB',
  },
  'Bracers of Armor +2': {
    slot:'Wrist', cost:4000, weight:1,
    acBonus:2, acType:'armor',
    note:'+2 armor bonus to AC.',
    source:'CRB',
  },
  'Bracers of Armor +4': {
    slot:'Wrist', cost:16000, weight:1,
    acBonus:4, acType:'armor',
    note:'+4 armor bonus to AC.',
    source:'CRB',
  },
  'Bracers of Armor +6': {
    slot:'Wrist', cost:36000, weight:1,
    acBonus:6, acType:'armor',
    note:'+6 armor bonus to AC.',
    source:'CRB',
  },
  'Bracers of Archery (Lesser)': {
    slot:'Wrist', cost:5000, weight:1,
    note:'+1 competence on attack rolls with bows. Treat all bows as proficient.',
    source:'CRB',
  },

  // ── CHEST / VEST ─────────────────────────────────
  'Vest of Resistance +1': {
    slot:'Chest', cost:1000, weight:1,
    saveBonus:1, bonusType:'resistance',
    note:'+1 resistance to all saves (alternative to cloak).',
    source:'UE',
  },
  'Vest of Resistance +3': {
    slot:'Chest', cost:9000, weight:1,
    saveBonus:3, bonusType:'resistance',
    note:'+3 resistance to all saves.',
    source:'UE',
  },
  'Vest of Escape': {
    slot:'Chest', cost:5200, weight:0.5,
    skillBonus:{ escape_artist:4, disable_device:4 },
    note:'+4 competence on Escape Artist and Disable Device. Hidden tools.',
    source:'CRB',
  },

  // ── HEAD ─────────────────────────────────────────
  'Helm of Comprehend Languages and Read Magic': {
    slot:'Head', cost:5200, weight:3,
    note:'At will: comprehend languages. 3/day: read magic (1 min each).',
    source:'CRB',
  },
  'Helm of Telepathy': {
    slot:'Head', cost:27000, weight:3,
    note:'At will: detect thoughts (DC 13). 1/day: suggestion (DC 15).',
    source:'CRB',
  },
  'Helm of Brilliance': {
    slot:'Head', cost:125000, weight:3,
    note:'Multiple effects: fireballs, prismatic spray, daylight. Gems expended.',
    source:'CRB',
  },
  'Circlet of Persuasion': {
    slot:'Head', cost:4500, weight:0,
    skillBonus:{ diplomacy:3, bluff:3, intimidate:3, perform1:3 },
    note:'+3 competence on Charisma-based skill checks.',
    source:'CRB',
  },

  // ── BODY ─────────────────────────────────────────
  'Robe of Blending': {
    slot:'Body', cost:27000, weight:1,
    note:'At will: change appearance (as disguise self). Continuous.',
    source:'CRB',
  },
  'Robe of the Archmagi': {
    slot:'Body', cost:75000, weight:1,
    note:'+5 armor AC, +4 resistance to saves, SR 18. Color matches alignment.',
    source:'CRB',
  },
  'Monk\'s Robe': {
    slot:'Body', cost:13000, weight:1,
    note:'Treat monk level as 5 higher (or as 5th level if not a monk) for AC, unarmed damage.',
    source:'CRB',
  },

  // ── ARMOR MATERIALS (for AC Items table) ─────────
  // These modify existing armor entries

  // MITHRAL ARMOR — lighter, no spell failure, lower check penalty
  'Mithral Chain Shirt': {
    slot:'Armor', cost:1100+100*25, weight:10, // 25gp/lb mithral premium, half weight
    acBonus:4, acType:'Light armor',
    maxDex:6, checkPen:0, spellFail:10,
    note:'Counts as light armor even for proficiency. No spell failure for divine casters.',
    source:'CRB',
  },
  'Mithral Full Plate +1': {
    slot:'Armor', cost:1500+18000, weight:25,
    acBonus:10, acType:'Heavy armor',
    maxDex:3, checkPen:-3, spellFail:25,
    note:'Mithral: counts as medium armor. +1 enhancement.',
    source:'CRB',
  },
  'Mithral Breastplate': {
    slot:'Armor', cost:200+4200, weight:15,
    acBonus:6, acType:'Medium armor',
    maxDex:5, checkPen:-1, spellFail:15,
    note:'Mithral: counts as light armor for all purposes.',
    source:'CRB',
  },

  // ADAMANTINE ARMOR — DR bonus
  'Adamantine Full Plate': {
    slot:'Armor', cost:3000+1500, weight:50,
    acBonus:9, acType:'Heavy armor',
    maxDex:1, checkPen:-6, spellFail:35,
    note:'DR 3/—. Immunity to critical hits from adamantine weapons.',
    source:'CRB',
  },
  'Adamantine Breastplate': {
    slot:'Armor', cost:3000+200, weight:30,
    acBonus:6, acType:'Medium armor',
    maxDex:3, checkPen:-4, spellFail:25,
    note:'DR 2/—.',
    source:'CRB',
  },

  // ── ENHANCED ARMOR ───────────────────────────────
  'Chainmail +1': {
    slot:'Armor', cost:150+1000, weight:40,
    acBonus:7, acType:'Medium armor',
    maxDex:2, checkPen:-4, spellFail:30,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Breastplate +1': {
    slot:'Armor', cost:200+1000, weight:30,
    acBonus:7, acType:'Medium armor',
    maxDex:3, checkPen:-3, spellFail:25,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Full Plate +1': {
    slot:'Armor', cost:1500+1000, weight:50,
    acBonus:10, acType:'Heavy armor',
    maxDex:1, checkPen:-5, spellFail:35,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Buckler +1': {
    slot:'Shield', cost:5+1000, weight:5,
    acBonus:2, acType:'Shield',
    checkPen:-0, spellFail:5,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Shield, Heavy Steel +1': {
    slot:'Shield', cost:20+1000, weight:15,
    acBonus:3, acType:'Shield',
    checkPen:-1, spellFail:15,
    note:'+1 enhancement bonus.',
    source:'CRB',
  },
  'Shield, Heavy Steel +2': {
    slot:'Shield', cost:20+4000, weight:15,
    acBonus:4, acType:'Shield',
    checkPen:-1, spellFail:15,
    note:'+2 enhancement bonus.',
    source:'CRB',
  },

  // ── SPECIAL ARMOR PROPERTIES ─────────────────────
  'Armor of Fortification (Light)': {
    slot:'Armor', cost:1000, weight:0,
    note:'+1 armor property: 25% chance to negate critical hit or sneak attack.',
    source:'CRB',
  },
  'Armor of Fortification (Medium)': {
    slot:'Armor', cost:9000, weight:0,
    note:'+3 armor property: 75% chance to negate critical hit or sneak attack.',
    source:'CRB',
  },
  'Armor of Fire Resistance': {
    slot:'Armor', cost:18000, weight:0,
    note:'+3 armor property: fire resistance 10.',
    source:'CRB',
  },
  'Armor of Energy Resistance': {
    slot:'Armor', cost:18000, weight:0,
    note:'+3 armor property: choose one energy type, resistance 10.',
    source:'CRB',
  },
  'Glamered Armor': {
    slot:'Armor', cost:2700, weight:0,
    note:'+1 armor property: change armor appearance to any other armor type or clothing.',
    source:'CRB',
  },

  // ── MISCELLANEOUS USEFUL ITEMS ───────────────────
  'Handy Haversack': {
    slot:'Slotless', cost:2000, weight:5,
    note:'Backpack: stores up to 120 lbs. Any item can be retrieved as move action. Bag weighs 5 lbs regardless of contents.',
    source:'CRB',
  },
  'Bag of Holding (Type I)': {
    slot:'Slotless', cost:2500, weight:15,
    note:'Holds 250 lbs (30 cubic ft). Internal weight ignored. Bag weighs 15 lbs.',
    source:'CRB',
  },
  'Bag of Holding (Type II)': {
    slot:'Slotless', cost:5000, weight:25,
    note:'Holds 500 lbs (70 cubic ft). Bag weighs 25 lbs.',
    source:'CRB',
  },
  'Portable Hole': {
    slot:'Slotless', cost:20000, weight:0,
    note:'Creates 6-ft deep, 10-ft diameter extradimensional space. Holds unlimited weight.',
    source:'CRB',
  },
  'Decanter of Endless Water': {
    slot:'Slotless', cost:9000, weight:2,
    note:'Produces 1 gallon/round (stream), 5 gallons/round (fountain), or 30 gallons/round (geyser).',
    source:'CRB',
  },
  'Rope of Climbing': {
    slot:'Slotless', cost:3000, weight:3,
    skillBonus:{ climb:10 },
    note:'+10 competence on Climb. Can tie/untie knots on command. Move 10 ft/round.',
    source:'CRB',
  },
  'Lantern of Revealing': {
    slot:'Slotless', cost:30000, weight:2,
    note:'Illuminates as a normal lantern AND reveals invisible creatures/objects within 25 ft.',
    source:'CRB',
  },
  'Figurine of Wondrous Power (Silver Raven)': {
    slot:'Slotless', cost:3800, weight:0,
    note:'1/week: animate as raven for up to 24 hours. Can deliver messages.',
    source:'CRB',
  },
  'Phylactery of Faithfulness': {
    slot:'Head', cost:1000, weight:0,
    note:'Worn on forehead. Warns if any action would violate the wearer\'s code of conduct.',
    source:'CRB',
  },
  'Phylactery of Positive Channeling': {
    slot:'Head', cost:11000, weight:0,
    note:'+2d6 to positive channel energy (requires channel positive energy class feature).',
    source:'APG',
  },
  'Bead of Newt Prevention': {
    slot:'Slotless', cost:1000, weight:0,
    note:'If you fail a save vs polymorph, bead negates effect. 1 use only.',
    source:'CRB',
  },
  'Stone of Good Luck (Luckstone)': {
    slot:'Slotless', cost:20000, weight:0,
    note:'+1 luck bonus on all ability checks, saving throws, and skill checks.',
    source:'CRB',
  },
  'Strand of Prayer Beads': {
    slot:'Neck', cost:45800, weight:0,
    note:'Multiple beads with various powers: bless, cure serious, greater turning, smite, wind walk, etc.',
    source:'CRB',
  },
  'Broom of Flying': {
    slot:'Slotless', cost:17000, weight:3,
    note:'Fly speed 40 ft (good) with 1 passenger, or 30 ft (clumsy) with 2 passengers.',
    source:'CRB',
  },

  // ══════════════════════════════════════════════════
  // IOUN STONES — complete CRB list
  // Source: aonprd.com CRB p.463
  // ══════════════════════════════════════════════════
  'Clear Spindle Ioun Stone': {
    slot:'Slotless', cost:4000, weight:0,
    note:'Sustains creature without food or water.',
    source:'CRB' },
  'Crimson Sphere Ioun Stone': {
    slot:'Slotless', cost:5000, weight:0,
    saveBonus:{ fort:2 }, bonusType:'resistance',
    note:'+2 resistance bonus on Fortitude saves.',
    source:'UE' },
  'Dull Gray Ioun Stone': {
    slot:'Slotless', cost:25, weight:0,
    note:'Burned out stone. No magical properties. Resonance only for wayfinders.',
    source:'CRB' },
  'Ellipsoid Ioun Stone (Magenta)': {
    slot:'Slotless', cost:16000, weight:0,
    statBonus:{ str:2 }, bonusType:'enhancement',
    note:'+2 enhancement to Strength. (Alternate color to Pale Blue Rhomboid.)',
    source:'UE' },
  'Flawed Pale Lavender Ellipsoid Ioun Stone': {
    slot:'Slotless', cost:3500, weight:0,
    note:'Absorbs spells of 4th level or lower (as pale lavender) but has only 10 charges. Crumbles when spent.',
    source:'UE' },
  'Lavender and Green Ellipsoid Ioun Stone': {
    slot:'Slotless', cost:30000, weight:0,
    note:'Absorbs spells of 8th level or lower targeted at you. Up to 50 spell levels; crumbles when spent.',
    source:'CRB' },
  'Pale Lavender Ellipsoid Ioun Stone': {
    slot:'Slotless', cost:20000, weight:0,
    note:'Absorbs spells of 4th level or lower targeted at you. Up to 20 spell levels; crumbles when spent.',
    source:'CRB' },
  'Pale Orange Rhomboid Ioun Stone': {
    slot:'Slotless', cost:200000, weight:0,
    note:'Prevents death from old age (and associated ability score loss). Does not reverse existing penalties.',
    source:'CRB' },
  'Pale Turquoise Rhomboid Ioun Stone': {
    slot:'Slotless', cost:10000, weight:0,
    note:'+4 racial bonus on saves against sonic effects.',
    source:'UE' },
  'Prism Ioun Stone (Clear)': {
    slot:'Slotless', cost:4000, weight:0,
    note:'Sustains creature without food or water. (Variant name.)',
    source:'CRB' },
  'Tourmaline Sphere Ioun Stone': {
    slot:'Slotless', cost:8000, weight:0,
    note:'Reduces the effects of starvation and thirst. Reduces fatigue from lack of sleep.',
    source:'UE' },
  'Western Star Ioun Stone': {
    slot:'Slotless', cost:22000, weight:0,
    note:'Reduces miss chance from concealment by 10% (minimum 0).',
    source:'UE' },

  // ══════════════════════════════════════════════════
  // ADDITIONAL BELTS
  // ══════════════════════════════════════════════════
  'Belt of Physical Might +4 (STR/DEX)': {
    slot:'Belt', cost:40000, weight:1,
    statBonus:{ str:4, dex:4 }, bonusType:'enhancement',
    note:'+4 enhancement to STR and DEX.',
    source:'CRB' },
  'Belt of Physical Perfection +4': {
    slot:'Belt', cost:64000, weight:1,
    statBonus:{ str:4, dex:4, con:4 }, bonusType:'enhancement',
    note:'+4 enhancement to STR, DEX, and CON.',
    source:'CRB' },
  'Belt of Dwarvenkind': {
    slot:'Belt', cost:14900, weight:1,
    statBonus:{ con:2 }, bonusType:'enhancement',
    note:'+2 CON, darkvision 60 ft, stonecunning, +2 saves vs poison/spells/SLAs, +4 CHA checks with dwarves.',
    source:'CRB' },
  'Corset of Dire Witchcraft': {
    slot:'Belt', cost:12000, weight:0.5,
    note:'+2 enhancement to INT and WIS. +1 caster level for witch spells.',
    source:'UE' },

  // ══════════════════════════════════════════════════
  // ADDITIONAL HEADBANDS
  // ══════════════════════════════════════════════════
  'Headband of Inspired Wisdom +6': {
    slot:'Headband', cost:36000, weight:0,
    statBonus:{ wis:6 }, bonusType:'enhancement',
    note:'+6 enhancement to WIS.',
    source:'CRB' },
  'Headband of Vast Intelligence +4': {
    slot:'Headband', cost:16000, weight:0,
    statBonus:{ int:4 }, bonusType:'enhancement',
    note:'+4 enhancement to INT.',
    source:'CRB' },
  'Headband of Alluring Charisma +4': {
    slot:'Headband', cost:16000, weight:0,
    statBonus:{ cha:4 }, bonusType:'enhancement',
    note:'+4 enhancement to CHA.',
    source:'CRB' },
  'Headband of Mental Prowess +4 (INT/WIS)': {
    slot:'Headband', cost:40000, weight:0,
    statBonus:{ int:4, wis:4 }, bonusType:'enhancement',
    note:'+4 enhancement to INT and WIS.',
    source:'CRB' },

  // ══════════════════════════════════════════════════
  // BOOTS / FEET — additional
  // ══════════════════════════════════════════════════
  'Boots of Teleportation': {
    slot:'Feet', cost:49000, weight:1,
    note:'3/day: teleport (as the spell).',
    source:'CRB' },
  'Boots of Tracking': {
    slot:'Feet', cost:6500, weight:1,
    skillBonus:{ survival:5 },
    note:'+5 competence on Survival for tracking.',
    source:'UE' },
  'Boots of the Mastodon': {
    slot:'Feet', cost:9000, weight:1,
    note:'+4 CMD vs bull rush and trip. Once/day free bull rush attempt on charge.',
    source:'UE' },
  'Slippers of Spider Climbing': {
    slot:'Feet', cost:4800, weight:0.5,
    note:'Move on vertical surfaces and ceilings as spider climb. 10 minutes/day.',
    source:'CRB' },

  // ══════════════════════════════════════════════════
  // ADDITIONAL RINGS
  // ══════════════════════════════════════════════════
  'Ring of Blinking': {
    slot:'Ring', cost:27000, weight:0,
    note:'On command: blink (as the spell). As long as active.',
    source:'CRB' },
  'Ring of Chameleon Power': {
    slot:'Ring', cost:12700, weight:0,
    skillBonus:{ stealth:10 },
    note:'+10 competence on Stealth. Can adapt coloration to surroundings.',
    source:'CRB' },
  'Ring of Climbing': {
    slot:'Ring', cost:2500, weight:0,
    skillBonus:{ climb:5 },
    note:'+5 competence on Climb checks.',
    source:'CRB' },
  'Ring of Energy Resistance (Minor)': {
    slot:'Ring', cost:12000, weight:0,
    note:'Energy resistance 10 to chosen energy type (acid, cold, electricity, fire, or sonic).',
    source:'CRB' },
  'Ring of Energy Resistance (Major)': {
    slot:'Ring', cost:28000, weight:0,
    note:'Energy resistance 20 to chosen energy type.',
    source:'CRB' },
  'Ring of Energy Resistance (Greater)': {
    slot:'Ring', cost:44000, weight:0,
    note:'Energy resistance 30 to chosen energy type.',
    source:'CRB' },
  'Ring of Jumping': {
    slot:'Ring', cost:2500, weight:0,
    skillBonus:{ acrobatics:5 },
    note:'+5 competence on Acrobatics checks to jump.',
    source:'CRB' },
  'Ring of Mind Shielding': {
    slot:'Ring', cost:8000, weight:0,
    note:'Immune to detect thoughts, discern lies, and any attempts to magically detect alignment.',
    source:'CRB' },
  'Ring of Regeneration': {
    slot:'Ring', cost:90000, weight:0,
    note:'Regenerate 1 HP per round. Regrow severed limbs in 1d6+1 days.',
    source:'CRB' },
  'Ring of Shooting Stars': {
    slot:'Ring', cost:50000, weight:0,
    note:'Faerie fire, dancing lights at will. Shooting stars 1/day (12d6 fire, 5 targets). Lightning 1/week.',
    source:'CRB' },
  'Ring of Spell Storing (Major)': {
    slot:'Ring', cost:200000, weight:0,
    note:'Store up to 10 levels of spells.',
    source:'CRB' },
  'Ring of Spell Turning': {
    slot:'Ring', cost:98280, weight:0,
    note:'Reflects 1d4+6 spell levels back at caster (as spell turning, 3/day).',
    source:'CRB' },
  'Ring of Swimming': {
    slot:'Ring', cost:2500, weight:0,
    skillBonus:{ swim:5 },
    note:'+5 competence on Swim checks.',
    source:'CRB' },
  'Ring of Telekinesis': {
    slot:'Ring', cost:75000, weight:0,
    note:'At will: telekinesis (CL 15, 375 lbs weight).',
    source:'CRB' },
  'Ring of Three Wishes': {
    slot:'Ring', cost:120000, weight:0,
    note:'Contains 3 wish spells. Single use per wish.',
    source:'CRB' },
  'Ring of X-Ray Vision': {
    slot:'Ring', cost:25000, weight:0,
    note:'See through 20 ft stone, 10 ft common metals, 1 ft lead. Costs 1 CON/hour.',
    source:'CRB' },
  'Ring of Animal Friendship': {
    slot:'Ring', cost:10800, weight:0,
    note:'At will: charm animal (DC 11). Animals are not frightened by wearer.',
    source:'CRB' },
  'Ring of Delayed Doom': {
    slot:'Ring', cost:90000, weight:0,
    note:'9 gems; each delays one "kill" condition for 1 round per gem expended.',
    source:'APG' },
  'Ring of Forcefangs': {
    slot:'Ring', cost:8000, weight:0,
    note:'Store and use force damage dealt to you. 9 charges max. Spend to deal 1d4 force/charge.',
    source:'APG' },
  'Ring of Retribution': {
    slot:'Ring', cost:15000, weight:0,
    note:'1/day when reduced to 0 HP or less: deal 10d6 fire damage in 30-ft burst (Ref DC 14 half).',
    source:'APG' },

  // ══════════════════════════════════════════════════
  // NECK — additional
  // ══════════════════════════════════════════════════
  'Amulet of Elemental Strife': {
    slot:'Neck', cost:8000, weight:0,
    note:'Immunity to surprise rounds caused by elementals. +2 insight vs elemental spell effects.',
    source:'UE' },
  'Amulet of Proof against Detection and Location': {
    slot:'Neck', cost:35000, weight:0,
    note:'Immune to all divination spells and magical scrying.',
    source:'CRB' },
  'Brooch of Shielding': {
    slot:'Neck', cost:1500, weight:0,
    note:'Absorbs magic missiles (as shield). Up to 101 HP of missiles absorbed; then brooch melts.',
    source:'CRB' },
  'Scarab of Protection': {
    slot:'Neck', cost:38000, weight:0,
    note:'+4 on saves vs death effects. Absorbs 12 negative levels or death effects before crumbling.',
    source:'CRB' },
  'Necklace of Adaptation': {
    slot:'Neck', cost:9000, weight:0,
    note:'Breathe in any environment (including vacuum). Immune to gas-based attacks.',
    source:'CRB' },

  // ══════════════════════════════════════════════════
  // SHOULDERS — additional
  // ══════════════════════════════════════════════════
  'Cloak of Displacement (Minor)': {
    slot:'Shoulders', cost:24000, weight:1,
    note:'Continuous 20% miss chance (as displacement). Negated on hit until next turn.',
    source:'CRB' },
  'Cloak of Displacement (Major)': {
    slot:'Shoulders', cost:50000, weight:1,
    note:'Continuous 50% miss chance (as displacement).',
    source:'CRB' },
  'Cloak of Arachnida': {
    slot:'Shoulders', cost:14000, weight:1,
    note:'Spider climb at will. Immune to web. +2 saves vs poison. 1/day web (CL 6).',
    source:'CRB' },
  'Wings of Flying': {
    slot:'Shoulders', cost:54000, weight:2,
    note:'Grow wings; fly 60 ft (good). Command word activated.',
    source:'CRB' },
  'Vest of the Cockroach': {
    slot:'Chest', cost:16000, weight:0,
    note:'If you would be reduced to 0 HP or fewer, 1/day you stabilize automatically at 1 HP.',
    source:'APG' },
  'Tunic of Careful Casting': {
    slot:'Chest', cost:5000, weight:1,
    note:'+2 competence on concentration checks.',
    source:'UE' },

  // ══════════════════════════════════════════════════
  // EYES — additional
  // ══════════════════════════════════════════════════
  'Lenses of Detection': {
    slot:'Eyes', cost:3500, weight:0,
    skillBonus:{ perception:5 },
    note:'+5 competence on Perception. 1/day: find traps (as the spell, CL 5).',
    source:'CRB' },
  'Eyes of Darkvision': {
    slot:'Eyes', cost:10000, weight:0,
    note:'Darkvision 60 ft (or +60 ft to existing darkvision).',
    source:'UE' },
  'Eyes of Doom': {
    slot:'Eyes', cost:25000, weight:0,
    note:'At will: doom (Will DC 11). 1/day: fear (Will DC 17). 1/day: eyebite (Fort DC 18).',
    source:'CRB' },
  'Third Eye (Clarity)': {
    slot:'Head', cost:10000, weight:0,
    note:'1/day: remove confusion, feeblemind, or insanity as a free action.',
    source:'UE' },
  'Third Eye (Conceal)': {
    slot:'Head', cost:9000, weight:0,
    note:'1/day: misdirection (CL 7, Will DC 13 negates).',
    source:'UE' },

  // ══════════════════════════════════════════════════
  // HANDS — additional
  // ══════════════════════════════════════════════════
  'Gloves of Reconnaissance': {
    slot:'Hands', cost:2000, weight:0,
    note:'1/day: see and hear through solid wall up to 5 ft thick for 10 rounds.',
    source:'APG' },
  'Gloves of Dueling': {
    slot:'Hands', cost:15000, weight:0,
    note:'+4 CMD vs disarm. +2 attack when using Weapon Training class feature.',
    source:'UC' },
  'Gauntlet of Rust': {
    slot:'Hands', cost:11500, weight:2,
    note:'Touch attack: deals 2d6+7 damage to ferrous metals (Fort DC 17 half). Crumbles non-magical metal.',
    source:'CRB' },
  'Iron Cobra Gauntlet': {
    slot:'Hands', cost:8000, weight:2,
    note:'Gauntlet deals +1d6 acid damage on successful hit. 1/day: poison (DC 14).',
    source:'UE' },

  // ══════════════════════════════════════════════════
  // HEAD — additional
  // ══════════════════════════════════════════════════
  'Hat of Disguise': {
    slot:'Head', cost:1800, weight:0,
    skillBonus:{ disguise:10 },
    note:'At will: disguise self (as the spell). +10 competence on Disguise checks.',
    source:'CRB' },
  'Helm of Underwater Action': {
    slot:'Head', cost:24000, weight:3,
    note:'Breathe underwater. Darkvision 60 ft underwater. Swim speed 30 ft.',
    source:'CRB' },
  'Helm of Fearsome Mien': {
    slot:'Head', cost:5000, weight:3,
    note:'Intimidating appearance: once/day attempt to demoralize without Intimidate roll (DC 10+½HD+STR).',
    source:'APG' },
  'Crown of Conquest': {
    slot:'Head', cost:24600, weight:1,
    note:'+2 morale on saves vs fear for wearer and allies within 60 ft. +1 morale on attacks.',
    source:'APG' },

  // ══════════════════════════════════════════════════
  // WRISTS — additional
  // ══════════════════════════════════════════════════
  'Bracers of Armor +8': {
    slot:'Wrist', cost:64000, weight:1,
    acBonus:8, acType:'armor',
    note:'+8 armor bonus to AC.',
    source:'CRB' },
  'Bracers of Archery (Greater)': {
    slot:'Wrist', cost:25000, weight:1,
    note:'+2 competence on attack rolls with bows. Treat all bows as proficient.',
    source:'CRB' },
  'Manacles of Cooperation': {
    slot:'Wrist', cost:2000, weight:2,
    note:'Creature wearing them becomes helpful attitude toward captor (Will DC 11 negates).',
    source:'APG' },
  'Lockpicking Gloves': {
    slot:'Wrist', cost:2000, weight:0,
    skillBonus:{ disable_device:2 },
    note:'+2 competence on Disable Device.',
    source:'UE' },

  // ══════════════════════════════════════════════════
  // BODY / ROBES — additional
  // ══════════════════════════════════════════════════
  'Robe of Eyes': {
    slot:'Body', cost:120000, weight:1,
    skillBonus:{ perception:10 },
    note:'+10 Perception. 120-ft darkvision. All-around vision (cannot be flanked). Blind by light spells.',
    source:'CRB' },
  'Robe of Scintillating Colors': {
    slot:'Body', cost:27000, weight:1,
    note:'3 rounds/day: cause confusion (Will DC 17) in 30-ft cone.',
    source:'CRB' },
  'Robe of Stars': {
    slot:'Body', cost:58000, weight:1,
    note:'+1 luck on saves. 6 stars: each usable 1/day for magic missile (5 missiles). Ethereal plane.',
    source:'CRB' },
  'Robe of Useful Items': {
    slot:'Body', cost:7000, weight:1,
    note:'Patches detach and become items (dagger, bullseye lantern, steel mirror, 10-ft pole, rope, sack, etc.).',
    source:'CRB' },
  'Robe of Needles': {
    slot:'Body', cost:1000, weight:1,
    note:'1/day fire a volley of needles: 2d4 piercing in 15-ft cone (Ref DC 11 half).',
    source:'UE' },
  'Cassock of the Clergy': {
    slot:'Body', cost:4600, weight:1,
    note:'+3 competence on CHA checks with same-alignment creatures. 1/day: bless, sanctuary. +1 orison/day.',
    source:'APG' },

  // ══════════════════════════════════════════════════
  // SLOTLESS — additional
  // ══════════════════════════════════════════════════
  'Bag of Holding (Type III)': {
    slot:'Slotless', cost:7400, weight:35,
    note:'Holds 1000 lbs (150 cubic ft). Bag weighs 35 lbs.',
    source:'CRB' },
  'Bag of Holding (Type IV)': {
    slot:'Slotless', cost:10000, weight:60,
    note:'Holds 1500 lbs (250 cubic ft). Bag weighs 60 lbs.',
    source:'CRB' },
  'Carpet of Flying (5×10 ft)': {
    slot:'Slotless', cost:20000, weight:10,
    note:'Fly 40 ft (average) carrying up to 800 lbs. Up to 2 Medium riders.',
    source:'CRB' },
  'Carpet of Flying (10×10 ft)': {
    slot:'Slotless', cost:60000, weight:20,
    note:'Fly 40 ft (average) carrying up to 1200 lbs. Up to 4 Medium riders.',
    source:'CRB' },
  'Crystal Ball': {
    slot:'Slotless', cost:42000, weight:7,
    note:'At will: scrying (DC 16 Will). Can see and hear through the ball.',
    source:'CRB' },
  'Crystal Ball (with Telepathy)': {
    slot:'Slotless', cost:70000, weight:7,
    note:'As crystal ball, plus can communicate telepathically with viewed creature.',
    source:'CRB' },
  'Cube of Force': {
    slot:'Slotless', cost:62000, weight:0.5,
    note:'Force cube with 6 faces; each face deflects different things (gases, ranged, living, non-living, all).',
    source:'CRB' },
  "Daern's Instant Fortress": {
    slot:'Slotless', cost:55000, weight:3,
    note:'Expands into 20-ft square, 30-ft tall adamantine fortress. Hardness 20, 200 HP.',
    source:'CRB' },
  'Drums of Panic': {
    slot:'Slotless', cost:30000, weight:10,
    note:'1/day: all creatures within 60 ft are panicked for 2d4 rounds (Will DC 16 shaken only).',
    source:'CRB' },
  'Efficient Quiver': {
    slot:'Slotless', cost:1800, weight:0,
    note:'Three compartments: 60 arrows/bolts, 18 javelins/arrows +1 or longer, 6 longbows/spears/staffs.',
    source:'CRB' },
  'Eversmoking Bottle': {
    slot:'Slotless', cost:5400, weight:1,
    note:'Creates obscuring smoke in 60-ft radius (as solid fog visually). Fills 1 ft per round.',
    source:'CRB' },
  'Feather Token (Anchor)': {
    slot:'Slotless', cost:50, weight:0,
    note:'Creates an anchor; holds ship stationary in any conditions.',
    source:'CRB' },
  'Feather Token (Bird)': {
    slot:'Slotless', cost:300, weight:0,
    note:'Creates a roc-sized bird that can carry 4 passengers. Functions for 1 day.',
    source:'CRB' },
  'Feather Token (Swan Boat)': {
    slot:'Slotless', cost:450, weight:0,
    note:'Creates a 50-ft swan boat on water. Moves 60 ft/round.',
    source:'CRB' },
  'Feather Token (Tree)': {
    slot:'Slotless', cost:400, weight:0,
    note:'Grows into a large oak tree.',
    source:'CRB' },
  'Feather Token (Whip)': {
    slot:'Slotless', cost:500, weight:0,
    note:'Creates a +1 whip that fights as unseen servant for 1 hour.',
    source:'CRB' },
  'Figurine of Wondrous Power (Ebony Fly)': {
    slot:'Slotless', cost:10000, weight:0,
    note:'Animate as giant fly 3/week for 12 hours. Carries up to 400 lbs.',
    source:'CRB' },
  'Figurine of Wondrous Power (Golden Lions)': {
    slot:'Slotless', cost:16500, weight:0,
    note:'Animate as two lions 1/week for 1 hour.',
    source:'CRB' },
  'Figurine of Wondrous Power (Ivory Goats)': {
    slot:'Slotless', cost:21000, weight:0,
    note:'Three goats: Traveling (fast mount), Travail (combat), Terror (warhorse stats).',
    source:'CRB' },
  'Figurine of Wondrous Power (Marble Elephant)': {
    slot:'Slotless', cost:17000, weight:0,
    note:'Animate as elephant (combat capable) 4/week for 24 hours.',
    source:'CRB' },
  'Figurine of Wondrous Power (Obsidian Steed)': {
    slot:'Slotless', cost:28500, weight:0,
    note:'Animate as nightstalker 1/week for 24 hours.',
    source:'CRB' },
  'Figurine of Wondrous Power (Onyx Dog)': {
    slot:'Slotless', cost:15500, weight:0,
    note:'Animate as riding dog 3/week for 6 hours. Can track as bloodhound (+4 scent checks).',
    source:'CRB' },
  'Horseshoes of Speed': {
    slot:'Slotless', cost:3000, weight:4,
    speedBonus:30,
    note:'+30 ft speed for horses (or similar creatures). Four horseshoes needed.',
    source:'CRB' },
  'Horseshoes of a Zephyr': {
    slot:'Slotless', cost:6000, weight:4,
    note:'Horse can walk on air, clouds, water. Normal speed when running.',
    source:'CRB' },
  'Lyre of Building': {
    slot:'Slotless', cost:13000, weight:5,
    note:'1/week: play to protect structures from attacks for 30 min. OR build as 100 men in 30 min.',
    source:'CRB' },
  'Manual of Bodily Health +1': {
    slot:'Slotless', cost:27500, weight:5,
    note:'Read in 48 hrs: +1 permanent bonus to CON and +1 to Fortitude saves. One-time use per reader.',
    source:'CRB' },
  'Manual of Gainful Exercise +1': {
    slot:'Slotless', cost:27500, weight:5,
    note:'Read in 48 hrs: +1 permanent bonus to STR and +1 to STR-based skill checks.',
    source:'CRB' },
  'Manual of Quickness of Action +1': {
    slot:'Slotless', cost:27500, weight:5,
    note:'Read in 48 hrs: +1 permanent bonus to DEX and +1 to Reflex saves.',
    source:'CRB' },
  'Manual of Quickness of Action +2': {
    slot:'Slotless', cost:55000, weight:5,
    note:'Read in 48 hrs: +2 permanent bonus to DEX.',
    source:'CRB' },
  'Mirror of Opposition': {
    slot:'Slotless', cost:92000, weight:45,
    note:'Reflects duplicate of viewer (exact duplicate, all abilities). Duplicate hostile. Fades if original dies.',
    source:'CRB' },
  'Orb of Storms': {
    slot:'Slotless', cost:48000, weight:6,
    note:'1/day: control weather (as spell, CL 15). 1/day: call lightning storm.',
    source:'CRB' },
  'Pipes of Haunting': {
    slot:'Slotless', cost:6000, weight:3,
    note:'3/day: haunting melody in 30-ft radius. Non-Good creatures shaken 4 rounds (Will DC 13).',
    source:'CRB' },
  'Pipes of the Sewers': {
    slot:'Slotless', cost:1150, weight:3,
    note:'Summon 1d3 swarms of rats as standard action. Can control up to 3 swarms simultaneously.',
    source:'CRB' },
  'Stone of Alarm': {
    slot:'Slotless', cost:2700, weight:2,
    note:'Touch stone to designate guardian. Stone triggers audible alarm if designated area disturbed.',
    source:'CRB' },
  'Stone of Controlling Earth Elementals': {
    slot:'Slotless', cost:80000, weight:5,
    note:'1/day: summon and control a Huge earth elemental (as summon nature\'s ally VII, CL 13).',
    source:'CRB' },
  'Tome of Clear Thought +1': {
    slot:'Slotless', cost:27500, weight:5,
    note:'Read in 48 hrs: +1 permanent bonus to INT and +1 to INT-based skill checks.',
    source:'CRB' },
  'Tome of Leadership and Influence +1': {
    slot:'Slotless', cost:27500, weight:5,
    note:'Read in 48 hrs: +1 permanent bonus to CHA and +1 to CHA-based skill checks.',
    source:'CRB' },
  'Tome of Understanding +1': {
    slot:'Slotless', cost:27500, weight:5,
    note:'Read in 48 hrs: +1 permanent bonus to WIS and +1 to Will saves.',
    source:'CRB' },
  'Well of Many Worlds': {
    slot:'Slotless', cost:82000, weight:1,
    note:'Creates a 2-way gate to a random plane (determined by GM). Cannot control destination.',
    source:'CRB' },
  'Wind Fan': {
    slot:'Slotless', cost:5500, weight:0,
    note:'1/day: gust of wind (Fort DC 14 or knocked down + 1d4 rounds movement impaired). CL 5.',
    source:'CRB' },
  'Winged Shield': {
    slot:'Slotless', cost:17257, weight:10,
    note:'+3 light wooden shield. On command: fly 60 ft (good) for 5 min/day.',
    source:'CRB' },

  // ══════════════════════════════════════════════════
  // HEAD — additional (masks, helmets)
  // ══════════════════════════════════════════════════
  'Plague Mask': {
    slot:'Head', cost:7500, weight:2,
    saveBonus:{ fort:4 }, saveCondition:'vs disease only',
    note:'+4 resistance bonus on saves vs disease. 1/day: remove disease (CL 5). Goggles detachable (can use eye slot item separately). CotCT campaign item.',
    source:'UE' },

  // ══════════════════════════════════════════════════
  // POTIONS — common healing and buff potions
  // These go in Gear list, not AC Items
  // ══════════════════════════════════════════════════
  'Potion of Cure Light Wounds': {
    slot:'Potion', cost:50, weight:0,
    note:'Heals 1d8+1 HP. Standard action to drink.',
    source:'CRB' },
  'Potion of Cure Moderate Wounds': {
    slot:'Potion', cost:300, weight:0,
    note:'Heals 2d8+3 HP. Standard action to drink.',
    source:'CRB' },
  'Potion of Cure Serious Wounds': {
    slot:'Potion', cost:750, weight:0,
    note:'Heals 3d8+5 HP. Standard action to drink.',
    source:'CRB' },
  "Potion of Bull's Strength": {
    slot:'Potion', cost:300, weight:0,
    note:'+4 enhancement to STR for 1 minute. Does NOT stack with Belt of Giant Strength.',
    source:'CRB' },
  'Potion of Barkskin': {
    slot:'Potion', cost:300, weight:0,
    note:'+2 natural armor bonus for 1 minute.',
    source:'CRB' },
  'Potion of Enlarge Person': {
    slot:'Potion', cost:250, weight:0,
    note:'Become Large for 1 minute. +2 STR, –2 DEX, –1 attack/AC, reach 10 ft.',
    source:'CRB' },
  'Potion of Invisibility': {
    slot:'Potion', cost:300, weight:0,
    note:'Invisible for 1 minute or until attack/cast.',
    source:'CRB' },
  'Potion of Heroism': {
    slot:'Potion', cost:750, weight:0,
    note:'+2 morale on attack, saves, skill checks for 10 minutes.',
    source:'CRB' },
  'Potion of Shield of Faith (+2)': {
    slot:'Potion', cost:50, weight:0,
    note:'+2 deflection bonus to AC for 1 minute.',
    source:'CRB' },
  'Potion of Resist Energy (Fire)': {
    slot:'Potion', cost:300, weight:0,
    note:'Fire resistance 10 for 10 minutes.',
    source:'CRB' },
  'Antitoxin': {
    slot:'Potion', cost:50, weight:0,
    note:'+5 alchemical bonus on Fortitude saves vs poison for 1 hour.',
    source:'CRB' },
  'Antiplague': {
    slot:'Potion', cost:50, weight:0,
    note:'+5 alchemical bonus on Fortitude saves vs disease for 1 hour.',
    source:'APG' },

  // ══════════════════════════════════════════════════
  // SCROLLS — useful divine scrolls
  // ══════════════════════════════════════════════════
  'Scroll of Remove Disease': {
    slot:'Scroll', cost:375, weight:0,
    note:'Removes one disease from touched creature. CL 5.',
    source:'CRB' },
  'Scroll of Remove Curse': {
    slot:'Scroll', cost:375, weight:0,
    note:'Removes one curse from touched creature. CL 5.',
    source:'CRB' },
  'Scroll of Raise Dead': {
    slot:'Scroll', cost:6125, weight:0,
    note:'Restores life to dead creature. CL 9. Must be used within 1 day/level.',
    source:'CRB' },
  'Scroll of Restoration': {
    slot:'Scroll', cost:800, weight:0,
    note:'Restores ability damage, negative levels (1). CL 7.',
    source:'CRB' },

  // ══════════════════════════════════════════════════
  // ADVENTURING GEAR — common equipment
  // ══════════════════════════════════════════════════
  "Healer's Kit": {
    slot:'Gear', cost:50, weight:1,
    note:'+2 circumstance on Heal checks. 10 uses.',
    source:'CRB' },
  'Holy Water (flask)': {
    slot:'Gear', cost:25, weight:1,
    note:'2d4 damage to undead/evil outsiders on hit. Treat as splash weapon.',
    source:'CRB' },
  "Alchemist's Fire (flask)": {
    slot:'Gear', cost:20, weight:1,
    note:'1d6 fire + 1d6 next round splash. Treat as splash weapon.',
    source:'CRB' },
  'Acid (flask)': {
    slot:'Gear', cost:10, weight:1,
    note:'1d6 acid damage splash weapon.',
    source:'CRB' },
  'Tanglefoot Bag': {
    slot:'Gear', cost:50, weight:4,
    note:'Reflex DC 15 or entangled. On fail: glued to floor (2d4 rounds).',
    source:'CRB' },
  'Thunderstone': {
    slot:'Gear', cost:30, weight:1,
    note:'Fort DC 15 or deafened 1 hour in 10-ft area.',
    source:'CRB' },
  'Sunrod': {
    slot:'Gear', cost:2, weight:1,
    note:'Glows as torch for 6 hours when struck.',
    source:'CRB' },
  'Rope (silk, 50 ft)': {
    slot:'Gear', cost:10, weight:5,
    note:'Break DC 24. +2 Climb checks.',
    source:'CRB' },
  'Grappling Hook': {
    slot:'Gear', cost:1, weight:4,
    note:'Thrown (DC varies by surface) to attach rope.',
    source:'CRB' },
  'Torch': {
    slot:'Gear', cost:0.01, weight:1,
    note:'Sheds light 20-ft radius, dim 40 ft. Burns 1 hour.',
    source:'CRB' },
  'Rations (1 day)': {
    slot:'Gear', cost:0.5, weight:1,
    note:'Trail rations for one day.',
    source:'CRB' },
  'Waterskin': {
    slot:'Gear', cost:1, weight:4,
    note:'Holds 1/2 gallon of liquid.',
    source:'CRB' },
  'Crowbar': {
    slot:'Gear', cost:2, weight:5,
    note:'+2 circumstance on STR checks to open doors/chests.',
    source:'CRB' },
  'Mirror (small steel)': {
    slot:'Gear', cost:10, weight:0.5,
    note:'Useful for checking around corners, signaling.',
    source:'CRB' },
  'Flint and Steel': {
    slot:'Gear', cost:1, weight:0,
    note:'Start fires. Takes 1 full round.',
    source:'CRB' },
  'Chalk (10 pieces)': {
    slot:'Gear', cost:0.1, weight:0,
    note:'Mark walls, floors.',
    source:'CRB' },
  'Smelling Salts': {
    slot:'Gear', cost:25, weight:0,
    note:'Wake unconscious creature. +4 vs inhaled poisons for 1 hour.',
    source:'APG' },

};

// ── HELPERS ──────────────────────────────────────────
function searchMagicItems(query, slotFilter) {
  if (!query && !slotFilter) return Object.entries(MAGIC_ITEMS).slice(0, 15);
  const q = (query || '').toLowerCase();
  return Object.entries(MAGIC_ITEMS).filter(([name, item]) => {
    const matchesSlot  = !slotFilter || item.slot === slotFilter;
    const matchesQuery = !q || name.toLowerCase().includes(q) ||
                         (item.note || '').toLowerCase().includes(q);
    return matchesSlot && matchesQuery;
  }).slice(0, 20);
}

function getMagicItem(name) {
  return MAGIC_ITEMS[name] || null;
}
