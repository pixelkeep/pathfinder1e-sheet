/* Pathfinder 1e Sheet — Feats Database — 80+ feats with autocomplete data
   Source: aonprd.com
   Part of split data files — loaded in order by index.html
*/
'use strict';

const FEATS_DB = [

  // ── COMBAT — Power Attack chain ────────────────
  { name:'Power Attack',          type:'combat', prereqs:'STR 13, BAB +1',
    benefit:'–1 atk/+2 dmg (–2/+4 two-handed). Scales: –1/+2 per 4 BAB above +1.',
    attackMod:-1, damageMod:2, scalingNote:'–1 atk/+2 dmg per 4 BAB' },
  { name:'Furious Focus',         type:'combat', prereqs:'STR 13, Power Attack, BAB +1',
    benefit:'No Power Attack penalty on FIRST attack each turn with two-handed weapon.' },
  { name:'Cleave',                type:'combat', prereqs:'STR 13, Power Attack, BAB +1',
    benefit:'After hitting, make one additional attack against adjacent foe (standard action only). –2 AC until next turn.' },
  { name:'Great Cleave',          type:'combat', prereqs:'STR 13, Cleave, Power Attack, BAB +4',
    benefit:'No limit on additional Cleave attacks per round.' },
  { name:'Cleaving Finish',       type:'combat', prereqs:'Cleave, Power Attack, BAB +6',
    benefit:'If target drops to 0 HP, make another attack at full BAB against adjacent foe.' },

  // ── COMBAT — Weapon chain ──────────────────────
  { name:'Weapon Focus',          type:'combat', prereqs:'Proficiency, BAB +1',
    benefit:'+1 on attack rolls with chosen weapon.', weaponLinked:true, attackMod:1 },
  { name:'Greater Weapon Focus',  type:'combat', prereqs:'Weapon Focus, BAB +8 (or Fighter 8)',
    benefit:'+1 attack (stacks with Weapon Focus, total +2).', weaponLinked:true, attackMod:1 },
  { name:'Weapon Specialization', type:'combat', prereqs:'Weapon Focus, Fighter level 4',
    benefit:'+2 on damage rolls with chosen weapon.', weaponLinked:true, damageMod:2 },
  { name:'Greater Weapon Spec.',  type:'combat', prereqs:'Weapon Spec., Fighter 12',
    benefit:'+2 damage (stacks, total +4 with Weapon Spec.).', weaponLinked:true, damageMod:2 },
  { name:'Penetrating Strike',    type:'combat', prereqs:'Weapon Focus, BAB +1, Fighter 12',
    benefit:'Chosen weapon ignores up to 5 points of DR (except DR/—).' },

  // ── COMBAT — Defense / Stamina ─────────────────
  { name:'Toughness',             type:'general', prereqs:'None',
    benefit:'+3 HP, +1 HP per HD beyond 3.', hpNote:true },
  { name:'Endurance',             type:'general', prereqs:'None',
    benefit:'+4 on checks to avoid nonlethal damage, +4 saves vs. sleep/paralysis from environment.' },
  { name:'Diehard',               type:'general', prereqs:'Endurance',
    benefit:'Automatically stabilize at negative HP. Remain conscious and can act (staggered) until –CON.' },
  { name:'Iron Will',             type:'general', prereqs:'None',
    benefit:'+2 on Will saving throws.', saveMod:{will:2} },
  { name:'Lightning Reflexes',    type:'general', prereqs:'None',
    benefit:'+2 on Reflex saving throws.', saveMod:{ref:2} },
  { name:'Great Fortitude',       type:'general', prereqs:'None',
    benefit:'+2 on Fortitude saving throws.', saveMod:{fort:2} },
  { name:'Dodge',                 type:'combat',  prereqs:'DEX 13',
    benefit:'+1 dodge bonus to AC.', acMod:1 },
  { name:'Mobility',              type:'combat',  prereqs:'DEX 13, Dodge',
    benefit:'+4 AC against AoO provoked by movement.' },
  { name:'Spring Attack',         type:'combat',  prereqs:'DEX 13, Dodge, Mobility, BAB +4',
    benefit:'Move before and after a single melee attack without provoking AoO from target.' },

  // ── COMBAT — Two-Weapon Fighting ───────────────
  { name:'Two-Weapon Fighting',   type:'combat', prereqs:'DEX 15',
    benefit:'Reduce TWF penalties to –4/–4 (–2/–2 with light off-hand).' },
  { name:'Improved TWF',          type:'combat', prereqs:'DEX 17, TWF, BAB +6',
    benefit:'Second off-hand attack at –5.' },
  { name:'Greater TWF',           type:'combat', prereqs:'DEX 19, Improved TWF, BAB +11',
    benefit:'Third off-hand attack at –10.' },
  { name:'Double Slice',          type:'combat', prereqs:'TWF',
    benefit:'Add full STR to off-hand damage (instead of ½).' },

  // ── COMBAT — Ranged ────────────────────────────
  { name:'Point-Blank Shot',      type:'combat', prereqs:'None',
    benefit:'+1 attack and damage with ranged weapons within 30 ft.' },
  { name:'Precise Shot',          type:'combat', prereqs:'Point-Blank Shot',
    benefit:'No –4 penalty for shooting into melee.' },
  { name:'Rapid Shot',            type:'combat', prereqs:'DEX 13, Point-Blank Shot',
    benefit:'Extra ranged attack at –2 on all attacks (full-attack only).' },
  { name:'Many Shot',             type:'combat', prereqs:'DEX 17, Point-Blank Shot, Rapid Shot, BAB +6',
    benefit:'Fire two arrows with first attack. Second arrow deals no precision damage.' },
  { name:'Far Shot',              type:'combat', prereqs:'Point-Blank Shot',
    benefit:'Range increment penalty is –1 per increment (instead of –2).' },

  // ── COMBAT — Maneuvers ─────────────────────────
  { name:'Improved Bull Rush',    type:'combat', prereqs:'STR 13, Power Attack, BAB +1',
    benefit:'Bull rush without provoking AoO. +2 CMB for bull rush.' },
  { name:'Improved Trip',         type:'combat', prereqs:'INT 13, Combat Expertise, BAB +1 (or Monk 1)',
    benefit:'Trip without provoking AoO. +2 CMB for trip.' },
  { name:'Improved Disarm',       type:'combat', prereqs:'INT 13, Combat Expertise',
    benefit:'Disarm without provoking AoO. +2 CMB for disarm.' },
  { name:'Improved Grapple',      type:'combat', prereqs:'DEX 13, Improved Unarmed Strike',
    benefit:'Grapple without provoking AoO. +2 CMB for grapple.' },
  { name:'Combat Expertise',      type:'combat', prereqs:'INT 13',
    benefit:'Trade attack bonus for AC (up to BAB, max –5/+5).' },

  // ── COMBAT — Critical hits ─────────────────────
  { name:'Improved Critical',     type:'combat', prereqs:'Proficiency, BAB +8',
    benefit:'Double threat range of chosen weapon.', weaponLinked:true },
  { name:'Critical Focus',        type:'combat', prereqs:'BAB +9',
    benefit:'+4 on attack rolls to confirm critical hits.' },
  { name:'Staggering Critical',   type:'combat', prereqs:'Critical Focus, BAB +13',
    benefit:'On confirmed crit: target is staggered for 1d4+1 rounds (Fort negates).' },
  { name:'Stunning Critical',     type:'combat', prereqs:'Staggering Critical, BAB +17',
    benefit:'On confirmed crit: target stunned 1d4 rounds, then staggered 1d4 rounds.' },

  // ── COMBAT — Shield ────────────────────────────
  { name:'Shield Proficiency',    type:'combat', prereqs:'None',
    benefit:'Use shield without nonproficiency penalty.' },
  { name:'Shield Focus',          type:'combat', prereqs:'Shield Proficiency, BAB +1',
    benefit:'+1 shield bonus to AC.' },
  { name:'Shield Slam',           type:'combat', prereqs:'Improved Shield Bash, TWF, BAB +6',
    benefit:'Free bull rush attempt on shield bash hit.' },

  // ── COMBAT — Mounted ───────────────────────────
  { name:'Mounted Combat',        type:'combat', prereqs:'Ride 1 rank',
    benefit:'Once/round, negate hit on mount with Ride check (DC = attack roll).' },
  { name:'Ride-By Attack',        type:'combat', prereqs:'Mounted Combat',
    benefit:'Move before and after charge attack while mounted.' },

  // ── COMBAT — Misc ──────────────────────────────
  { name:'Combat Reflexes',       type:'combat', prereqs:'None',
    benefit:'AoOs/round = 1 + DEX mod. Can make AoO while flat-footed.' },
  { name:'Stand Still',           type:'combat', prereqs:'Combat Reflexes',
    benefit:'Use AoO to stop moving creature (CMB check vs CMD to prevent movement).' },
  { name:'Lunge',                 type:'combat', prereqs:'BAB +6',
    benefit:'+5 ft reach until end of turn (–2 AC until next turn).' },
  { name:'Vital Strike',          type:'combat', prereqs:'BAB +6',
    benefit:'Standard attack deals double weapon damage dice.' },
  { name:'Improved Vital Strike',  type:'combat', prereqs:'Vital Strike, BAB +11',
    benefit:'Standard attack deals triple weapon damage dice.' },
  { name:'Quick Draw',            type:'combat', prereqs:'BAB +1',
    benefit:'Draw weapon as free action. Hidden weapon as move action.' },
  { name:'Throw Anything',        type:'combat', prereqs:'None',
    benefit:'No penalty for improvised thrown. +1 attack with splash weapons.' },
  { name:'Improved Initiative', initMod:4,   type:'general', prereqs:'None',
    benefit:'+4 on initiative checks.' },
  { name:'Blind-Fight',           type:'combat', prereqs:'None',
    benefit:'Reroll miss chance for concealment once. No disadvantage fighting invisible foes.' },
  { name:'Dazzling Display',      type:'combat', prereqs:'Weapon Focus',
    benefit:'Standard action: Intimidate all foes within 30 ft.', weaponLinked:true },
  { name:'Shatter Defenses',      type:'combat', prereqs:'Dazzling Display, Weapon Focus, BAB +6',
    benefit:'Shaken/frightened target is flat-footed against your attacks.', weaponLinked:true },
  { name:'Deadly Stroke',         type:'combat', prereqs:'Shatter Defenses, Dazzling Display, BAB +11',
    benefit:'Double damage + 1 CON bleed vs stunned/flat-footed target (standard action).', weaponLinked:true },

  // ── COMBAT — Warpriest / Divine ────────────────
  { name:'Channel Smite',         type:'combat', prereqs:'Channel Energy',
    benefit:'Expend channel energy to add to weapon attack (save or take channel damage).' },
  { name:'Extra Channel',         type:'general', prereqs:'Channel Energy',
    benefit:'+2 channel energy uses per day.' },
  { name:'Selective Channeling',  type:'general', prereqs:'CHA 13, Channel Energy',
    benefit:'Exclude up to CHA mod targets from channel energy effect.' },
  { name:'Turn Undead',           type:'general', prereqs:'Channel positive energy',
    benefit:'Spend channel use to turn undead (Will DC 10+½lvl+CHA or flee).' },
  { name:'Alignment Channel',     type:'general', prereqs:'Channel energy',
    benefit:'Channel specifically harms or heals creatures of one alignment subtype.' },
  { name:'Guided Hand',           type:'combat', prereqs:'Channel energy, deity with favored weapon',
    benefit:'Use WIS modifier instead of STR/DEX on attacks with deity\'s favored weapon.', weaponLinked:true, attackMod:0 },

  // ── GENERAL ────────────────────────────────────
  { name:'Skill Focus',           type:'general', prereqs:'None',
    benefit:'+3 on chosen skill. +6 if 10+ ranks.' },
  { name:'Alertness',             type:'general', prereqs:'None',
    benefit:'+2 Perception and +2 Sense Motive.' },
  { name:'Athletic',              type:'general', prereqs:'None',
    benefit:'+2 Climb and +2 Swim.' },
  { name:'Acrobatic',             type:'general', prereqs:'None',
    benefit:'+2 Acrobatics and +2 Fly.' },
  { name:'Stealthy',              type:'general', prereqs:'None',
    benefit:'+2 Stealth and +2 Escape Artist.' },
  { name:'Persuasive',            type:'general', prereqs:'None',
    benefit:'+2 Diplomacy and +2 Intimidate.' },
  { name:'Deceitful',             type:'general', prereqs:'None',
    benefit:'+2 Bluff and +2 Disguise.' },
  { name:'Self-Sufficient',       type:'general', prereqs:'None',
    benefit:'+2 Heal and +2 Survival.' },
  { name:'Run',                   type:'general', prereqs:'None',
    benefit:'Run at ×5 speed (×4 in armor). +4 Acrobatics to jump after run.' },
  { name:'Leadership',            type:'general', prereqs:'Character level 7',
    benefit:'Attract cohort and followers based on Leadership score.' },
  { name:'Extra Ki',              type:'general', prereqs:'Ki pool',
    benefit:'+2 ki points.' },
  { name:'Extra Rage',            type:'general', prereqs:'Rage class feature',
    benefit:'+6 rounds of rage per day.' },
  { name:'Extra Rage Power',      type:'general', prereqs:'Rage power class feature',
    benefit:'Gain one additional rage power.' },
  { name:'Extra Hex',             type:'general', prereqs:'Hex class feature',
    benefit:'Gain one additional hex.' },
  { name:'Extra Fervor',          type:'general', prereqs:'Fervor class feature',
    benefit:'+2 uses of fervor per day.' },
  { name:'Extra Lay on Hands',    type:'general', prereqs:'Lay on Hands class feature',
    benefit:'+2 uses of lay on hands per day.' },
  { name:'Extra Mercy',           type:'general', prereqs:'Mercy class feature',
    benefit:'Gain one additional mercy.' },
  { name:'Natural Spell',         type:'general', prereqs:'WIS 13, Wild Shape',
    benefit:'Cast spells while in wild shape.' },
  { name:'Spell Focus',           type:'general', prereqs:'None',
    benefit:'+1 to spell save DCs for chosen school.' },
  { name:'Greater Spell Focus',   type:'general', prereqs:'Spell Focus',
    benefit:'+1 additional to DCs (total +2) for chosen school.' },
  { name:'Spell Penetration',     type:'general', prereqs:'None',
    benefit:'+2 caster level checks to overcome spell resistance.' },
  { name:'Greater Spell Pen.',    type:'general', prereqs:'Spell Penetration',
    benefit:'+2 additional (total +4) on spell resistance checks.' },
  { name:'Combat Casting',        type:'general', prereqs:'None',
    benefit:'+4 on Concentration checks to cast defensively or while grappled.' },
  { name:'Eschew Materials',      type:'general', prereqs:'None',
    benefit:'Cast spells without material components worth 1 gp or less.' },
  { name:'Still Spell',           type:'metamagic', prereqs:'None',
    benefit:'Cast without somatic components (+1 spell level).' },
  { name:'Silent Spell',          type:'metamagic', prereqs:'None',
    benefit:'Cast without verbal components (+1 spell level).' },
  { name:'Extend Spell',          type:'metamagic', prereqs:'None',
    benefit:'Double duration of spell (+1 spell level).' },
  { name:'Empower Spell',         type:'metamagic', prereqs:'None',
    benefit:'Increase variable numeric effects by 50% (+2 spell levels).' },
  { name:'Maximize Spell',        type:'metamagic', prereqs:'None',
    benefit:'Maximize all variable numeric effects (+3 spell levels).' },
  { name:'Quicken Spell',         type:'metamagic', prereqs:'None',
    benefit:'Cast as swift action (+4 spell levels).' },

  // ── ITEM CREATION ──────────────────────────────
  { name:'Brew Potion',           type:'item_creation', prereqs:'Caster level 3',
    benefit:'Create potions of spells up to 3rd level.' },
  { name:'Craft Wand',            type:'item_creation', prereqs:'Caster level 5',
    benefit:'Create wands of spells up to 4th level.' },
  { name:'Craft Magic Arms & Armor', type:'item_creation', prereqs:'Caster level 5',
    benefit:'Create magic weapons, armor, and shields.' },
  { name:'Scribe Scroll',         type:'item_creation', prereqs:'Caster level 1',
    benefit:'Create spell scrolls.' },
  { name:'Craft Rod',             type:'item_creation', prereqs:'Caster level 9',
    benefit:'Create rods.' },
  { name:'Craft Wondrous Item',   type:'item_creation', prereqs:'Caster level 3',
    benefit:'Create wondrous items.' },

];

// Helper: search feats
function searchFeats(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return FEATS_DB.filter(f =>
    f.name.toLowerCase().includes(q) || f.benefit.toLowerCase().includes(q)
  ).slice(0, 12);
}

// Helper: get feat by exact name
function getFeatByName(name) {
  return FEATS_DB.find(f => f.name.toLowerCase() === name.toLowerCase()) || null;
}

// Weapon material modifiers
// Source: aonprd.com Equipment > Special Materials
