/* Pathfinder 1e Sheet — Traits Database
   Source: aonprd.com (Ultimate Campaign + Player Companions)
   Format: { name, type, category, benefit, skillBonus, saveBonus,
             calcValue, source }
   type: 'combat'|'faith'|'magic'|'social'|'campaign'|'racial'|'regional'|'equipment'
   category: sub-category label for display
*/
'use strict';

const TRAITS_DB = [

  // ══════════════════════════════════════════════════
  // COMBAT TRAITS
  // ══════════════════════════════════════════════════
  { name:'Anatomist',           type:'combat', category:'Combat',
    benefit:'+1 trait bonus on attack rolls made to confirm critical hits.',
    source:'APG' },
  { name:'Armor Expert',        type:'combat', category:'Combat',
    benefit:'Reduce armor check penalty by 1 (minimum 0).',
    source:'APG' },
  { name:'Berserker of the Society', type:'combat', category:'Combat',
    benefit:'+3 rounds of rage per day.',
    source:'PFS' },
  { name:'Blade of the Society', type:'combat', category:'Combat',
    benefit:'+1 trait bonus on damage rolls when using sneak attack.',
    source:'PFS' },
  { name:'Bully',               type:'combat', category:'Combat',
    benefit:'+1 trait bonus on Intimidate checks, and Intimidate is always a class skill.',
    skillBonus:{ intimidate:1 }, source:'APG' },
  { name:'Courageous',          type:'combat', category:'Combat',
    benefit:'+2 trait bonus on saving throws against fear effects.',
    saveBonus:{ will:2 }, saveCondition:'vs fear only', source:'APG' },
  { name:'Deft Dodger',         type:'combat', category:'Combat',
    benefit:'+1 trait bonus on Reflex saving throws.',
    saveBonus:{ ref:1 }, source:'APG' },
  { name:'Dirty Fighter',       type:'combat', category:'Combat',
    benefit:'+1 trait bonus on damage when flanking.',
    source:'APG' },
  { name:'Fencer',              type:'combat', category:'Combat',
    benefit:'+1 trait bonus on attack of opportunity attack rolls with blades.',
    source:'APG' },
  { name:'Heirloom Weapon',     type:'combat', category:'Combat',
    benefit:'Proficiency with one specific weapon. +1 trait bonus on attack with that weapon.',
    source:'APG' },
  { name:'Reactionary',         type:'combat', category:'Combat',
    benefit:'+2 trait bonus on initiative checks.',
    calcValue:'+2 initiative', source:'APG' },
  { name:'Resilient',           type:'combat', category:'Combat',
    benefit:'+1 trait bonus on Fortitude saving throws.',
    saveBonus:{ fort:1 }, source:'APG' },
  { name:'Suspicious',          type:'combat', category:'Combat',
    benefit:'+1 trait bonus on Sense Motive, and Sense Motive is a class skill.',
    skillBonus:{ sense_motive:1 }, source:'APG' },
  { name:'Tunnel Fighter',      type:'combat', category:'Combat',
    benefit:'+2 initiative and +1 damage in underground terrain.',
    source:'APG' },
  { name:'Veteran of Battle',   type:'combat', category:'Combat',
    benefit:'+1 initiative. If you can act in a surprise round, draw weapon as free action.',
    source:'APG' },
  { name:'Warrior of Old',      type:'combat', category:'Combat',
    benefit:'+2 trait bonus on initiative checks (Elf only).',
    source:'APG' },
  { name:'Wolf Cub',            type:'combat', category:'Combat',
    benefit:'+1 trait bonus on attack when flanking.',
    source:'APG' },

  // ══════════════════════════════════════════════════
  // FAITH TRAITS
  // ══════════════════════════════════════════════════
  { name:'Birthmark',           type:'faith', category:'Faith',
    benefit:'+2 trait bonus on saving throws against charm and compulsion effects.',
    saveBonus:{ will:2 }, saveCondition:'vs charm/compulsion only', source:'APG' },
  { name:'Child of the Temple', type:'faith', category:'Faith',
    benefit:'+1 trait bonus on Knowledge (nobility) and Knowledge (religion). One is a class skill.',
    skillBonus:{ k_nobility:1, k_religion:1 }, source:'APG' },
  { name:'Devotee of the Green', type:'faith', category:'Faith',
    benefit:'+1 trait bonus on Knowledge (geography) and Knowledge (nature). One is a class skill.',
    skillBonus:{ k_geography:1, k_nature:1 }, source:'APG' },
  { name:'Ease of Faith',       type:'faith', category:'Faith',
    benefit:'+1 trait bonus on Diplomacy, and Diplomacy is always a class skill.',
    skillBonus:{ diplomacy:1 }, source:'APG' },
  { name:'Fate\'s Favored',     type:'faith', category:'Faith',
    benefit:'Whenever you benefit from a luck bonus, that bonus is increased by 1.',
    calcValue:'+1 to all existing luck bonuses', source:'UC' },
  { name:'Fortunate',           type:'faith', category:'Faith',
    benefit:'+1 trait bonus on all saving throws.',
    saveBonus:{ fort:1, ref:1, will:1 }, source:'ARG' },
  { name:'Indomitable Faith',   type:'faith', category:'Faith',
    benefit:'+1 trait bonus on Will saving throws.',
    saveBonus:{ will:1 }, source:'APG' },
  { name:'Insight of the Ages', type:'faith', category:'Faith',
    benefit:'+1 trait bonus on any one Knowledge skill (chosen at character creation).',
    source:'PFS' },
  { name:'Sacred Conduit',      type:'faith', category:'Faith',
    benefit:'+1 to save DCs of your channeled energy.',
    source:'APG' },
  { name:'Sacred Touch',        type:'faith', category:'Faith',
    benefit:'As a standard action, stabilize a dying creature with a touch.',
    source:'APG' },
  { name:'Scholar of the Great Beyond', type:'faith', category:'Faith',
    benefit:'+1 trait bonus on Knowledge (planes) and Knowledge (history). One is a class skill.',
    skillBonus:{ k_planes:1, k_history:1 }, source:'APG' },
  { name:'Seeker',              type:'faith', category:'Faith',
    benefit:'+1 trait bonus on Perception checks, and Perception is always a class skill.',
    skillBonus:{ perception:1 }, source:'APG' },
  { name:'Unnatural Presence',  type:'faith', category:'Faith',
    benefit:'+2 trait bonus on Handle Animal and Intimidate. Animals do not willingly approach you.',
    skillBonus:{ handle_animal:2, intimidate:2 }, source:'APG' },

  // ══════════════════════════════════════════════════
  // MAGIC TRAITS
  // ══════════════════════════════════════════════════
  { name:'Academician',         type:'magic', category:'Magic',
    benefit:'+1 trait bonus on any one Knowledge skill (chosen at creation) as class skill.',
    source:'APG' },
  { name:'Classically Schooled', type:'magic', category:'Magic',
    benefit:'+1 trait bonus on Spellcraft, and Spellcraft is always a class skill.',
    skillBonus:{ spellcraft:1 }, source:'APG' },
  { name:'Dangerously Curious', type:'magic', category:'Magic',
    benefit:'+1 trait bonus on Use Magic Device, and UMD is always a class skill.',
    skillBonus:{ use_magic_device:1 }, source:'APG' },
  { name:'Focused Mind',        type:'magic', category:'Magic',
    benefit:'+2 trait bonus on concentration checks.',
    calcValue:'+2 concentration', source:'APG' },
  { name:'Gifted Adept',        type:'magic', category:'Magic',
    benefit:'+1 caster level for one spell (chosen at creation) when computing effects.',
    source:'APG' },
  { name:'Hedge Magician',      type:'magic', category:'Magic',
    benefit:'When crafting magic items, reduce cost by 5%.',
    source:'APG' },
  { name:'Magical Knack',       type:'magic', category:'Magic',
    benefit:'+2 trait bonus to caster level (max class level) when determining spell effects.',
    calcValue:'+2 effective caster level (max class level)', source:'APG' },
  { name:'Magical Lineage',     type:'magic', category:'Magic',
    benefit:'One spell of your choice: metamagic applied to it costs 1 fewer spell level (chosen at creation).',
    source:'APG' },
  { name:'Magical Talent',      type:'magic', category:'Magic',
    benefit:'Choose one 0-level spell. Cast it 1/day as a spell-like ability.',
    source:'APG' },
  { name:'Mathematical Prodigy', type:'magic', category:'Magic',
    benefit:'+1 trait bonus on Knowledge (arcana) and Knowledge (engineering). One is a class skill.',
    skillBonus:{ k_arcana:1, k_engineering:1 }, source:'APG' },
  { name:'Pragmatic Activator', type:'magic', category:'Magic',
    benefit:'Use Intelligence modifier instead of Charisma on Use Magic Device checks.',
    source:'UC' },
  { name:'Resilient Caster',    type:'magic', category:'Magic',
    benefit:'+4 trait bonus on concentration checks from violent motion.',
    calcValue:'+4 concentration (violent motion)', source:'UC' },
  { name:'Spark of Creation',   type:'magic', category:'Magic',
    benefit:'Craft Wondrous Item as bonus feat. Reduce cost of crafting wondrous items by 5%.',
    source:'PFS' },
  { name:'Transmuter of Korada', type:'magic', category:'Magic',
    benefit:'+1 trait bonus on caster level checks to overcome spell resistance with transmutation.',
    source:'PFS' },

  // ══════════════════════════════════════════════════
  // SOCIAL TRAITS
  // ══════════════════════════════════════════════════
  { name:'Adopted',             type:'social', category:'Social',
    benefit:'Select one racial trait from your adoptive parent\'s race.',
    source:'APG' },
  { name:'Charming',            type:'social', category:'Social',
    benefit:'+1 trait bonus on Bluff and Diplomacy vs. creatures attracted to your gender.',
    skillBonus:{ bluff:1, diplomacy:1 }, source:'APG' },
  { name:'Child of the Streets', type:'social', category:'Social',
    benefit:'+1 trait bonus on Sleight of Hand, and Sleight of Hand is a class skill.',
    skillBonus:{ sleight_of_hand:1 }, source:'APG' },
  { name:'Fast-Talker',         type:'social', category:'Social',
    benefit:'+1 trait bonus on Bluff, and Bluff is always a class skill.',
    skillBonus:{ bluff:1 }, source:'APG' },
  { name:'Influence',           type:'social', category:'Social',
    benefit:'+1 trait bonus on Diplomacy. Once per game session, call in a favor from NPC of equal or lower level.',
    skillBonus:{ diplomacy:1 }, source:'APG' },
  { name:'Militia Veteran',     type:'social', category:'Social',
    benefit:'+1 trait bonus on Ride, Profession (soldier), or Survival (chosen at creation, class skill).',
    source:'APG' },
  { name:'Poverty-Stricken',    type:'social', category:'Social',
    benefit:'+1 trait bonus on Survival, and Survival is always a class skill.',
    skillBonus:{ survival:1 }, source:'APG' },
  { name:'Rich Parents',        type:'social', category:'Social',
    benefit:'Start with 900 gp instead of standard wealth.',
    source:'APG' },
  { name:'Scholar',             type:'social', category:'Social',
    benefit:'+2 trait bonus on one Knowledge skill. That skill is always a class skill.',
    source:'APG' },
  { name:'Skilled Liar',        type:'social', category:'Social',
    benefit:'+2 trait bonus on Bluff checks to oppose Sense Motive.',
    skillBonus:{ bluff:2 }, source:'APG' },
  { name:'Street Smarts',       type:'social', category:'Social',
    benefit:'+1 trait bonus on Bluff and Sense Motive. One becomes a class skill.',
    skillBonus:{ bluff:1, sense_motive:1 }, source:'APG' },
  { name:'Vagabond Child',      type:'social', category:'Social',
    benefit:'+1 on one chosen skill: Disable Device, Escape Artist, or Sleight of Hand (class skill).',
    source:'APG' },
  { name:'Worldly',             type:'social', category:'Social',
    benefit:'+2 trait bonus on one Knowledge skill. Treat all Knowledge skills as class skills.',
    source:'UC' },

  // ══════════════════════════════════════════════════
  // CAMPAIGN TRAITS — Curse of the Crimson Throne
  // Source: Curse of the Crimson Throne Player's Guide
  // ══════════════════════════════════════════════════
  { name:'Tortured',            type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Gaedren tortured and left you for dead. Your scars honed your reflexes. +1 trait bonus on Reflex saves.',
    saveBonus:{ ref:1 }, source:'CotCT' },
  { name:'Religious (CotCT)',   type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Found faith after abuse by Gaedren. +2 trait bonus on concentration checks.',
    calcValue:'+2 concentration', source:'CotCT' },
  { name:'Addicted Friend',     type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'A friend fell to Shiver. +2 trait bonus on saves vs. addiction and drugs.',
    source:'CotCT' },
  { name:'Personal Addiction',  type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Struggled with Shiver addiction. +2 saves vs. drugs. When withdrawing from drugs, penalty is –1 instead of –2.',
    source:'CotCT' },
  { name:'Family Honor (CotCT)', type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Framed for a crime. +1 trait bonus on Diplomacy checks to clear your reputation.',
    skillBonus:{ diplomacy:1 }, source:'CotCT' },
  { name:'Dropout (CotCT)',     type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Left a promising career. +1 trait bonus on Knowledge (local) and it is a class skill.',
    skillBonus:{ k_local:1 }, source:'CotCT' },
  { name:'Orphaned',            type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Lost family to Gaedren. +1 trait bonus on Survival, and Survival is a class skill.',
    skillBonus:{ survival:1 }, source:'CotCT' },
  { name:'Widowed',             type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Lost a spouse because of Gaedren. +2 trait bonus on Intimidate checks.',
    skillBonus:{ intimidate:2 }, source:'CotCT' },
  { name:'Missing Sibling',     type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Sibling went missing after working for Gaedren. +1 on Perception and Gather Information.',
    skillBonus:{ perception:1 }, source:'CotCT' },
  { name:'Missing Child',       type:'campaign', category:'Curse of the Crimson Throne',
    benefit:'Lost a child to Gaedren\'s schemes. +2 trait bonus on Sense Motive.',
    skillBonus:{ sense_motive:2 }, source:'CotCT' },

  // ══════════════════════════════════════════════════
  // CAMPAIGN TRAITS — Rise of the Runelords
  // ══════════════════════════════════════════════════
  { name:'Goblin Watcher',      type:'campaign', category:'Rise of the Runelords',
    benefit:'+2 trait bonus on Knowledge checks about goblins. Knowledge (local) is class skill.',
    skillBonus:{ k_local:2 }, source:'RotR' },
  { name:'Sandpoint Faithful',  type:'campaign', category:'Rise of the Runelords',
    benefit:'+2 on Fortitude saves vs. effects from undead.',
    saveBonus:{ fort:2 }, saveCondition:'vs undead effects only', source:'RotR' },
  { name:'Local Ties',          type:'campaign', category:'Rise of the Runelords',
    benefit:'+1 trait bonus on Knowledge (local) about Sandpoint. Always class skill.',
    skillBonus:{ k_local:1 }, source:'RotR' },
  { name:'Giant Slayer',        type:'campaign', category:'Rise of the Runelords',
    benefit:'+1 trait bonus on damage vs. giants and giant-type creatures.',
    source:'RotR' },

  // ══════════════════════════════════════════════════
  // CAMPAIGN TRAITS — Wrath of the Righteous
  // ══════════════════════════════════════════════════
  { name:'Stolen Fury',         type:'campaign', category:'Wrath of the Righteous',
    benefit:'+2 trait bonus on combat maneuver checks against demons.',
    source:'WotR' },
  { name:'Chance Encounter',    type:'campaign', category:'Wrath of the Righteous',
    benefit:'+2 trait bonus on Reflex saves. Once per day reroll a Reflex save and take the better result.',
    saveBonus:{ ref:2 }, source:'WotR' },
  { name:'Touched by Divinity', type:'campaign', category:'Wrath of the Righteous',
    benefit:'+1 caster level for spells of the domain or subschool associated with one chosen deity.',
    source:'WotR' },

  // ══════════════════════════════════════════════════
  // CAMPAIGN TRAITS — Kingmaker
  // ══════════════════════════════════════════════════
  { name:'Sword Scion',         type:'campaign', category:'Kingmaker',
    benefit:'+1 trait bonus on attack rolls when using Aldori dueling swords or longswords.',
    source:'KM' },
  { name:'Noble Born',          type:'campaign', category:'Kingmaker',
    benefit:'Start with 400 gp extra. +1 trait bonus on Diplomacy.',
    skillBonus:{ diplomacy:1 }, source:'KM' },
  { name:'Rostlander',          type:'campaign', category:'Kingmaker',
    benefit:'+1 trait bonus on Fortitude saves.',
    saveBonus:{ fort:1 }, source:'KM' },

  // ══════════════════════════════════════════════════
  // REGIONAL / RACE TRAITS
  // ══════════════════════════════════════════════════
  { name:'Dwarf Blooded',       type:'racial', category:'Racial',
    benefit:'(Half-orc or Half-elf) +2 racial bonus on saves vs. poison and spells.',
    saveBonus:{ fort:2, will:2 }, saveCondition:'vs poison and spells only', source:'ARG' },
  { name:'Inner Sea Pirate',    type:'regional', category:'Regional',
    benefit:'+1 trait bonus on Swim checks, and Swim is always a class skill.',
    skillBonus:{ swim:1 }, source:'ISG' },
  { name:'Log Roller',          type:'regional', category:'Regional',
    benefit:'+1 trait bonus on CMD and Acrobatics to avoid falling.',
    skillBonus:{ acrobatics:1 }, source:'UC' },
  { name:'River Rat',           type:'regional', category:'Regional',
    benefit:'+1 trait bonus on Swim and damage with daggers.',
    skillBonus:{ swim:1 }, source:'APG' },
  { name:'Warrior of the Wild', type:'regional', category:'Regional',
    benefit:'+1 trait bonus on Knowledge (nature), and Knowledge (nature) is a class skill.',
    skillBonus:{ k_nature:1 }, source:'APG' },
  { name:'Forlorn',             type:'racial', category:'Racial',
    benefit:'(Elf) +1 trait bonus on Fortitude saves.',
    saveBonus:{ fort:1 }, source:'APG' },
  { name:'Brewmaster',          type:'racial', category:'Racial',
    benefit:'(Dwarf) +2 trait bonus on Profession (brewer) and saves vs. ingested poisons.',
    source:'ARG' },
  { name:'Kovaran Merchant',    type:'regional', category:'Regional',
    benefit:'+1 trait bonus on Appraise and Sense Motive when determining fair value.',
    skillBonus:{ appraise:1, sense_motive:1 }, source:'ISC' },

  // ══════════════════════════════════════════════════
  // EQUIPMENT TRAITS
  // ══════════════════════════════════════════════════
  { name:'Defender of the Society', type:'equipment', category:'Equipment',
    benefit:'+1 trait bonus to AC when wearing medium or heavy armor.',
    source:'PFS' },
  { name:'Trap Finder',         type:'equipment', category:'Equipment',
    benefit:'+1 trait bonus on Disable Device. Disable Device is a class skill. Disarm magical traps.',
    skillBonus:{ disable_device:1 }, source:'PFS' },

];

// ── HELPERS ──────────────────────────────────────────
function searchTraits(query, typeFilter) {
  if (!query && !typeFilter) return TRAITS_DB.slice(0, 20);
  const q = (query || '').toLowerCase();
  return TRAITS_DB.filter(t => {
    const matchType  = !typeFilter || t.type === typeFilter;
    const matchQuery = !q || t.name.toLowerCase().includes(q) ||
                       t.benefit.toLowerCase().includes(q) ||
                       t.category.toLowerCase().includes(q);
    return matchType && matchQuery;
  }).slice(0, 20);
}

function getTraitByName(name) {
  return TRAITS_DB.find(t => t.name.toLowerCase() === name.toLowerCase()) || null;
}

const TRAIT_TYPES = ['combat','faith','magic','social','campaign','racial','regional','equipment'];
