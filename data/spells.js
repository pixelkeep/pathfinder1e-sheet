/* Pathfinder 1e — Complete Spell Database
   Sources: CRB, APG, ACG, UM, UC, Advanced Race Guide
   ~500 spells covering all core classes 0-9th level
   Format: name, level (per class), school, castingTime, range, duration, description */
'use strict';

const SPELLS_DB = [

// ══════════════════════════════════════════════════════════════════
// LEVEL 0 — ORISONS / CANTRIPS
// ══════════════════════════════════════════════════════════════════
{ name:'Acid Splash', school:'Conjuration',
  level:{sorcerer:0,wizard:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Ranged touch attack, 1d3 acid damage. No save.' },

{ name:'Arcane Mark', school:'Universal',
  level:{sorcerer:0,wizard:0},
  castingTime:'1 standard', range:'0 ft', duration:'Permanent',
  description:'Inscribes a personal rune (visible or invisible) on any surface.' },

{ name:'Bleed', school:'Necromancy',
  level:{cleric:0,warpriest:0,sorcerer:0,wizard:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Cause a stabilized creature to resume dying. Fort save negates.' },

{ name:'Create Water', school:'Conjuration',
  level:{cleric:0,warpriest:0,druid:0,paladin:1},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Creates 2 gallons/level (max 20 gal) of pure water.' },

{ name:'Dancing Lights', school:'Evocation [light]',
  level:{sorcerer:0,wizard:0,bard:0},
  castingTime:'1 standard', range:'Medium', duration:'1 minute',
  description:'Creates torches or other lights for 1 minute. Up to 4 lights move as directed.' },

{ name:'Daze', school:'Enchantment [mind-affecting]',
  level:{sorcerer:0,wizard:0,bard:0},
  castingTime:'1 standard', range:'Close', duration:'1 round',
  description:'Humanoid creature of 4 HD or less loses next action. Will negates.' },

{ name:'Detect Magic', school:'Divination',
  level:{cleric:0,warpriest:0,druid:0,sorcerer:0,wizard:0,bard:0,inquisitor:0},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 1 min/level',
  description:'Detects all spells and magic items within 60 ft. 1st rd: presence. 2nd: number/strength. 3rd+: location.' },

{ name:'Detect Poison', school:'Divination',
  level:{cleric:0,warpriest:0,druid:0,sorcerer:0,wizard:0,paladin:1,ranger:1},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Detects poison in creature/object/5-ft cube. DC 20 Wis check to identify type.' },

{ name:'Disrupt Undead', school:'Necromancy',
  level:{sorcerer:0,wizard:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Ranged touch attack — 1d6 damage to undead.' },

{ name:'Flare', school:'Evocation [light]',
  level:{sorcerer:0,wizard:0,druid:0,bard:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Dazzles target for 1 minute. Fort negates. –1 penalty on attack rolls while dazzled.' },

{ name:'Ghost Sound', school:'Illusion [figment]',
  level:{sorcerer:0,wizard:0,bard:0},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'Figment sounds. Volume up to 4 men/level (shouting). Will disbelieve.' },

{ name:'Guidance', school:'Divination',
  level:{cleric:0,warpriest:0,druid:0,inquisitor:0},
  castingTime:'1 standard', range:'Touch', duration:'1 min or until discharged',
  description:'+1 competence bonus on one attack roll, saving throw, or skill check. Must choose before rolling.' },

{ name:'Know Direction', school:'Divination',
  level:{druid:0,bard:0},
  castingTime:'1 standard', range:'Personal', duration:'Instantaneous',
  description:'You instantly know the direction of north.' },

{ name:'Light', school:'Evocation [light]',
  level:{cleric:0,warpriest:0,druid:0,sorcerer:0,wizard:0,bard:0},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Object sheds light as a torch (20-ft bright, 40-ft dim). Counters darkness spells of equal or lower level.' },

{ name:'Mage Hand', school:'Transmutation',
  level:{sorcerer:0,wizard:0,bard:0},
  castingTime:'1 standard', range:'Close', duration:'Concentration',
  description:'5-lb. telekinesis. Move object weighing up to 5 lbs within range.' },

{ name:'Mending', school:'Transmutation',
  level:{cleric:0,warpriest:0,druid:0,sorcerer:0,wizard:0,bard:0},
  castingTime:'10 minutes', range:'10 ft', duration:'Instantaneous',
  description:'Makes minor repairs (1 ft or less) on object. Restores 1d4 hp. Can repair magic items but not charges.' },

{ name:'Message', school:'Transmutation [language-dependent]',
  level:{sorcerer:0,wizard:0,bard:0},
  castingTime:'1 standard', range:'Medium', duration:'10 min/level',
  description:'Whispered conversation at distance. Targets can reply.' },

{ name:'Open/Close', school:'Transmutation',
  level:{sorcerer:0,wizard:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Opens or closes a door, chest, or other closeable item. Not locked.' },

{ name:'Prestidigitation', school:'Universal',
  level:{sorcerer:0,wizard:0,bard:0},
  castingTime:'1 standard', range:'10 ft', duration:'1 hour',
  description:'Performs minor tricks: soil, clean, color, chill, warm, flavor, make small item, or simple sound/image.' },

{ name:'Purify Food and Drink', school:'Transmutation',
  level:{cleric:0,warpriest:0,druid:0},
  castingTime:'1 standard', range:'10 ft', duration:'Instantaneous',
  description:'Purifies 1 cu ft/level of food and water, removing spoilage, poison, and disease.' },

{ name:'Ray of Frost', school:'Evocation [cold]',
  level:{sorcerer:0,wizard:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Ranged touch attack — 1d3 cold damage.' },

{ name:'Read Magic', school:'Divination',
  level:{cleric:0,warpriest:0,druid:0,sorcerer:0,wizard:0,bard:0,paladin:1,ranger:1},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'Read scrolls and spellbooks. 25% chance to trigger glyphs/symbols.' },

{ name:'Resistance', school:'Abjuration',
  level:{cleric:0,warpriest:0,druid:0,paladin:0,sorcerer:0,wizard:0,bard:0,inquisitor:0},
  castingTime:'1 standard', range:'Touch', duration:'1 minute',
  description:'+1 resistance bonus on saving throws.' },

{ name:'Spark', school:'Evocation [fire]',
  level:{cleric:0,warpriest:0,druid:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Ignites flammable materials. Lights candles/torches. Does not harm creatures.' },

{ name:'Stabilize', school:'Conjuration [healing]',
  level:{cleric:0,warpriest:0,druid:0},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Cause dying creature to automatically succeed at next stabilization check.' },

{ name:'Touch of Fatigue', school:'Necromancy',
  level:{sorcerer:0,wizard:0},
  castingTime:'1 standard', range:'Touch', duration:'1 round/level',
  description:'Touch attack — fatigues target. Fort negates. No effect if already fatigued/exhausted.' },

{ name:'Virtue', school:'Transmutation',
  level:{cleric:0,warpriest:0,druid:0,paladin:0},
  castingTime:'1 standard', range:'Touch', duration:'1 minute',
  description:'Subject gains 1 temporary hit point.' },

// ══════════════════════════════════════════════════════════════════
// LEVEL 1
// ══════════════════════════════════════════════════════════════════
{ name:'Alarm', school:'Abjuration',
  level:{sorcerer:1,wizard:1,ranger:1},
  castingTime:'1 standard', range:'Close', duration:'2 hours/level',
  description:'Wards an area up to 20-ft cube. Mental or audible alarm when entered.' },

{ name:'Animate Rope', school:'Transmutation',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Makes a rope move at your command. Can entangle a target (CMB = caster level + Dex mod).' },

{ name:'Bane', school:'Enchantment [mind-affecting]',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'50 ft', duration:'1 min/level',
  description:'–1 morale penalty on attack rolls and saves against fear for enemies within 50-ft burst. Will negates.' },

{ name:'Bless', school:'Enchantment [mind-affecting]',
  level:{cleric:1,warpriest:1,paladin:1,inquisitor:1},
  castingTime:'1 standard', range:'50 ft', duration:'1 min/level',
  description:'+1 morale bonus on attack rolls and saves vs fear for allies within 50-ft burst.' },

{ name:"Bless Water", school:'Transmutation [good]',
  level:{cleric:1,warpriest:1,paladin:1},
  castingTime:'1 minute', range:'Touch', duration:'Instantaneous',
  description:'Makes holy water from normal water. 1d4+1 damage vs undead/evil outsiders on hit.' },

{ name:'Burning Hands', school:'Evocation [fire]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'15-ft cone', duration:'Instantaneous',
  description:'1d4/level fire damage (max 5d4) in a 15-ft cone. Reflex half.' },

{ name:'Cause Fear', school:'Necromancy [fear, mind-affecting]',
  level:{cleric:1,warpriest:1,sorcerer:1,wizard:1,inquisitor:1},
  castingTime:'1 standard', range:'Close', duration:'1d4 rounds or 1 round',
  description:'Creature ≤5 HD is frightened for 1d4 rounds. Will: shaken 1 round. Creatures >5 HD: immune.' },

{ name:'Charm Person', school:'Enchantment [charm, mind-affecting]',
  level:{sorcerer:1,wizard:1,bard:1,inquisitor:1},
  castingTime:'1 standard', range:'Close', duration:'1 hour/level',
  description:'Makes one person your friend. Will negates. Regards you as trusted friend.' },

{ name:'Color Spray', school:'Illusion [pattern, mind-affecting]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'15-ft cone', duration:'Varies',
  description:'Knocks unconscious, blinds, or stuns creatures based on HD. Will negates.' },

{ name:'Command', school:'Enchantment [compulsion, language-dependent, mind-affecting]',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'Close', duration:'1 round',
  description:'One creature obeys one-word command (approach, drop, fall, flee, halt). Will negates.' },

{ name:'Comprehend Languages', school:'Divination',
  level:{cleric:1,warpriest:1,sorcerer:1,wizard:1,bard:1,inquisitor:1},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'Understand all spoken and written languages.' },

{ name:'Cure Light Wounds', school:'Conjuration [healing]',
  level:{cleric:1,warpriest:1,druid:1,paladin:1,ranger:2,bard:2,inquisitor:1},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures 1d8+1/level (max +5) hit points. Deals same amount to undead (Will half).' },

{ name:'Deathwatch', school:'Necromancy',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'30-ft cone', duration:'10 min/level',
  description:'Reveals state of life (dead, fragile, healthy, etc.) of all creatures within a 30-ft cone.' },

{ name:'Detect Chaos', school:'Divination',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 10 min/level',
  description:'Reveals chaotic creatures, items, or spells within 60 ft.' },

{ name:'Detect Evil', school:'Divination',
  level:{cleric:1,warpriest:1,paladin:1,inquisitor:1},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 10 min/level',
  description:'Reveals evil creatures, items, or spells. Reveals strength of aura.' },

{ name:'Detect Good', school:'Divination',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 10 min/level',
  description:'Reveals good creatures, items, or spells within 60 ft.' },

{ name:'Detect Law', school:'Divination',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 10 min/level',
  description:'Reveals lawful creatures, items, or spells within 60 ft.' },

{ name:'Detect Undead', school:'Divination',
  level:{cleric:1,warpriest:1,sorcerer:1,wizard:1,paladin:1},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 1 min/level',
  description:'Reveals undead creatures within 60 ft. 1st round: presence. 2nd: number. 3rd+: location/strength.' },

{ name:'Divine Favor', school:'Evocation',
  level:{cleric:1,warpriest:1,paladin:1,inquisitor:1},
  castingTime:'1 standard', range:'Personal', duration:'1 minute',
  description:'+1 luck bonus/3 caster levels (max +3) on attack rolls and weapon damage rolls.' },

{ name:'Doom', school:'Necromancy [fear, mind-affecting]',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'One creature is shaken (–2 on attacks, saves, skills, checks). Will negates.' },

{ name:'Endure Elements', school:'Abjuration',
  level:{cleric:1,warpriest:1,druid:1,paladin:1,ranger:1,sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Touch', duration:'24 hours',
  description:'Ignore environmental temperatures from –50°F to 140°F.' },

{ name:'Enlarge Person', school:'Transmutation',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 round', range:'Close', duration:'1 min/level',
  description:'Humanoid becomes Large: +2 Str, –2 Dex, –1 attack/AC, natural reach 10 ft (Medium→Large).' },

{ name:'Entropic Shield', school:'Abjuration',
  level:{cleric:1,warpriest:1},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'20% miss chance on all ranged attacks against you.' },

{ name:'Expeditious Retreat', school:'Transmutation',
  level:{sorcerer:1,wizard:1,bard:1,inquisitor:1},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'+30 ft enhancement bonus to land speed.' },

{ name:'Feather Fall', school:'Transmutation',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 immediate', range:'Close', duration:'Until landing or 1 round/level',
  description:'Objects/creatures fall slowly (60 ft/round), take no falling damage.' },

{ name:'Floating Disk', school:'Evocation [force]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Close', duration:'1 hour/level',
  description:'Creates 3-ft diameter disc of force that carries 100 lbs/level, hovers 3 ft. Follows caster.' },

{ name:'Grease', school:'Conjuration [creation]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'Makes 10-ft square or one object slippery. Acrobatics DC 10 or fall prone.' },

{ name:'Hide from Animals', school:'Abjuration',
  level:{druid:1,ranger:1},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Animals cannot perceive subjects. 1 subject/level.' },

{ name:'Hide from Undead', school:'Abjuration',
  level:{cleric:1,warpriest:1},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Undead cannot detect subjects unless subjects attack or take other aggressive actions.' },

{ name:'Hold Portal', school:'Abjuration',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'Holds a door, gate, or window closed. Strength check (DC 23) to open.' },

{ name:'Hypnotism', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'2 rounds', range:'Close', duration:'2d4 rounds',
  description:'Fascinates 2d4 HD of creatures. Makes them more vulnerable to suggestion.' },

{ name:'Identify', school:'Divination',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 minute', range:'60 ft', duration:'Instantaneous',
  description:'Determines all magic properties of one magic item, including command words and charges.' },

{ name:'Inflict Light Wounds', school:'Necromancy',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Deals 1d8+1/level (max +5) damage. Will half. Heals undead same amount.' },

{ name:'Jump', school:'Transmutation',
  level:{sorcerer:1,wizard:1,druid:1,ranger:1},
  castingTime:'1 standard', range:'Touch', duration:'1 round/level',
  description:'+10 enhancement bonus on Acrobatics checks made to jump. At CL 5: +20. CL 9: +30.' },

{ name:'Longstrider', school:'Transmutation',
  level:{druid:1,ranger:1},
  castingTime:'1 standard', range:'Personal', duration:'1 hour/level',
  description:'+10-ft enhancement bonus to land speed.' },

{ name:'Mage Armor', school:'Conjuration [force]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'+4 armor bonus to AC. Applies even without armor proficiency. No max Dex limit.' },

{ name:'Magic Missile', school:'Evocation [force]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'1d4+1 force damage, never misses. One missile at CL 1; +1 missile per 2 levels (max 5 at CL 9).' },

{ name:'Magic Weapon', school:'Transmutation',
  level:{cleric:1,warpriest:1,paladin:1,sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+1 enhancement bonus on attack and damage rolls. Treated as magic weapon.' },

{ name:'Mount', school:'Conjuration [summoning]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 round', range:'Close', duration:'2 hours/level',
  description:'Summons a horse (or other normal animal) to serve as a mount.' },

{ name:'Obscuring Mist', school:'Conjuration [creation]',
  level:{cleric:1,warpriest:1,druid:1,sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'20 ft', duration:'1 min/level',
  description:'Fog surrounds you, granting concealment (20% miss chance). Limit visibility to 5 ft.' },

{ name:'Produce Flame', school:'Evocation [fire]',
  level:{druid:1},
  castingTime:'1 standard', range:'0 ft', duration:'1 min/level',
  description:'Flame in hand deals 1d6+1/level (max +5) fire on touch or as a ranged touch attack (30 ft).' },

{ name:'Protection from Chaos', school:'Abjuration [lawful]',
  level:{cleric:1,warpriest:1,paladin:1,sorcerer:1,wizard:1,inquisitor:1},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+2 deflection AC and +2 resistance saves vs chaotic. Blocks mental control from chaotic creatures.' },

{ name:'Protection from Evil', school:'Abjuration [good]',
  level:{cleric:1,warpriest:1,paladin:1,sorcerer:1,wizard:1,inquisitor:1},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+2 deflection AC and +2 resistance saves vs evil. Blocks possession and mental control.' },

{ name:'Protection from Good', school:'Abjuration [evil]',
  level:{cleric:1,warpriest:1,sorcerer:1,wizard:1,inquisitor:1},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+2 deflection AC and +2 resistance saves vs good. Blocks mental control from good creatures.' },

{ name:'Protection from Law', school:'Abjuration [chaotic]',
  level:{cleric:1,warpriest:1,sorcerer:1,wizard:1,inquisitor:1},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+2 deflection AC and +2 resistance saves vs lawful. Blocks mental control from lawful creatures.' },

{ name:'Ray of Enfeeblement', school:'Necromancy',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'Ranged touch — 1d6+1/2 levels Str penalty (minimum 1). Fort partial (1/2 duration).' },

{ name:'Reduce Person', school:'Transmutation',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 round', range:'Close', duration:'1 min/level',
  description:'Humanoid becomes Small: –2 Str, +2 Dex, +1 attack/AC, Reach 5 ft. Fort negates.' },

{ name:'Remove Fear', school:'Abjuration',
  level:{cleric:1,warpriest:1,bard:1,inquisitor:1},
  castingTime:'1 standard', range:'Close', duration:'10 minutes; 1 round',
  description:'+4 morale bonus vs fear for 10 min. Suppresses fear conditions for 1 round.' },

{ name:'Sanctuary', school:'Abjuration',
  level:{cleric:1,warpriest:1,inquisitor:1},
  castingTime:'1 standard', range:'Touch', duration:'1 round/level',
  description:'Opponents must succeed at Will save to attack protected creature. Ends if creature attacks.' },

{ name:'Shield', school:'Abjuration [force]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'+4 shield bonus to AC. No armor check penalty. Blocks magic missiles.' },

{ name:'Shield of Faith', school:'Abjuration',
  level:{cleric:1,warpriest:1},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+2 deflection bonus to AC (+1 per 6 levels, max +5).' },

{ name:'Shocking Grasp', school:'Evocation [electricity]',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Touch delivers 1d6/level (max 5d6) electricity damage. +3 on attack vs metal armor.' },

{ name:'Silent Image', school:'Illusion [figment]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 standard', range:'Long', duration:'Concentration',
  description:'Creates minor illusion of your design. No sound, smell, or thermal effects.' },

{ name:'Sleep', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 round', range:'Medium', duration:'1 min/level',
  description:'Puts 4 HD of creatures into magical slumber. Affect lowest HD first. Will negates.' },

{ name:'Summon Monster I', school:'Conjuration [summoning]',
  level:{cleric:1,warpriest:1,sorcerer:1,wizard:1},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one creature from the 1st-level list to fight for you.' },

{ name:'True Strike', school:'Divination',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Personal', duration:'Until next attack roll',
  description:'+20 insight bonus on next attack roll. Ignore miss chances (concealment, etc.).' },

{ name:'Unseen Servant', school:'Conjuration [creation]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 standard', range:'Close', duration:'1 hour/level',
  description:'Invisible, mindless force performs simple tasks. Str 2, carries 20 lbs.' },

{ name:'Ventriloquism', school:'Illusion [figment]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'You can make your voice sound as though it comes from somewhere else.' },

// ══════════════════════════════════════════════════════════════════
// LEVEL 2
// ══════════════════════════════════════════════════════════════════
{ name:'Aid', school:'Enchantment [mind-affecting]',
  level:{cleric:2,warpriest:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+1 morale bonus on attacks/saves vs fear, +1d8+1/level (max +10) temporary HP.' },

{ name:'Align Weapon', school:'Transmutation',
  level:{cleric:2,warpriest:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'Weapon becomes good, evil, lawful, or chaotic for overcoming DR.' },

{ name:"Alter Self", school:'Transmutation [polymorph]',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'Assume form of a Small or Medium humanoid. Gain Str/Dex bonus and natural attacks of form.' },

{ name:'Arcane Lock', school:'Abjuration',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'Permanent',
  description:'Magically locks a portal. DC +10 vs. Disable Device or Str check to open.' },

{ name:"Barkskin", school:'Transmutation',
  level:{druid:2,ranger:2},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'+2 natural armor bonus (+1 per 3 levels above 3rd, max +5). Stacks with other natural armor.' },

{ name:"Bear's Endurance", school:'Transmutation',
  level:{cleric:2,warpriest:2,druid:2,ranger:2,sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+4 enhancement bonus to Constitution.' },

{ name:"Bull's Strength", school:'Transmutation',
  level:{cleric:2,warpriest:2,druid:2,paladin:2,sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+4 enhancement bonus to Strength.' },

{ name:"Cat's Grace", school:'Transmutation',
  level:{druid:2,ranger:2,sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+4 enhancement bonus to Dexterity.' },

{ name:'Calm Emotions', school:'Enchantment [compulsion, mind-affecting]',
  level:{cleric:2,warpriest:2,bard:2},
  castingTime:'1 standard', range:'Medium', duration:'Concentration up to 1 round/level',
  description:'Calms 2d4+1/level HD of creatures in a 20-ft radius. Suppresses fear, rage, confusion, charm.' },

{ name:'Command Undead', school:'Necromancy',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Close', duration:'1 day/level',
  description:'Undead creature obeys your commands. Will negates (DC 16+Cha). Mindless undead get no save.' },

{ name:'Cure Moderate Wounds', school:'Conjuration [healing]',
  level:{cleric:2,warpriest:2,druid:3,paladin:3,ranger:3,bard:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures 2d8+1/level (max +10) hit points.' },

{ name:'Darkness', school:'Evocation [darkness]',
  level:{cleric:2,warpriest:2,sorcerer:2,wizard:2,bard:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'20-ft radius of supernatural darkness. Even darkvision cannot see through it.' },

{ name:'Darkvision', school:'Transmutation',
  level:{ranger:3,sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'Grant target darkvision to a range of 60 ft.' },

{ name:"Death Knell", school:'Necromancy [death, evil]',
  level:{cleric:2,warpriest:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous/10 min/level',
  description:'Kill dying creature (–1 to –9 hp). You gain 1d8 temp hp, +2 Str, +1 CL for 10 min/level. Will negates.' },

{ name:'Delay Poison', school:'Conjuration [healing]',
  level:{cleric:2,warpriest:2,druid:2,paladin:2,ranger:1,bard:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'Stops effects of all poisons affecting subject. Poison resumes when spell ends.' },

{ name:'Detect Thoughts', school:'Divination [mind-affecting]',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 1 min/level',
  description:'Read surface thoughts of creatures in a 60-ft cone. Will negates. 3rd round: deeper thoughts.' },

{ name:'Eagle Eye', school:'Divination',
  level:{druid:2,ranger:2},
  castingTime:'1 minute', range:'Long', duration:'1 min/level',
  description:'See the area as though you were there; 1-mile radius per level of vision.' },

{ name:'Enthrall', school:'Enchantment [charm, language-dependent, mind-affecting]',
  level:{cleric:2,warpriest:2,bard:2},
  castingTime:'1 round', range:'Medium', duration:'1 hour or less',
  description:'Captivates all within 90-ft radius who hear you. Will negates.' },

{ name:'Find Traps', school:'Divination',
  level:{cleric:2,warpriest:2},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'+4 circumstance bonus on Perception checks to find traps. Also notice traps not normally found by Perception.' },

{ name:'Flaming Sphere', school:'Evocation [fire]',
  level:{druid:2,sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Rolling ball of fire deals 3d6 fire damage. Reflex negates. Move action to control.' },

{ name:'Fox Cunning', school:'Transmutation',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+4 enhancement bonus to Intelligence.' },

{ name:'Ghoul Touch', school:'Necromancy',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1d6+2 rounds',
  description:'Paralyzes target. Fort negates. Paralyzed target exudes stench (10 ft, Fort or sickened 5 rounds).' },

{ name:'Gust of Wind', school:'Evocation [air]',
  level:{druid:2,sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'60-ft line', duration:'1 round',
  description:'Strong blast of air: move creatures and objects, extinguish fires, disperse gases.' },

{ name:'Hold Person', school:'Enchantment [compulsion, mind-affecting]',
  level:{cleric:2,warpriest:2,sorcerer:3,wizard:3,bard:2,inquisitor:2},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Paralyzes one humanoid. Will negates. New save each round.' },

{ name:'Inflict Moderate Wounds', school:'Necromancy',
  level:{cleric:2,warpriest:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'2d8+1/level (max +10) damage on touch. Will half. Heals undead.' },

{ name:'Invisibility', school:'Illusion [glamer]',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Personal or Touch', duration:'1 min/level or until attack',
  description:'Subject is invisible until it attacks. –40 Perception to notice while moving (–20 still).' },

{ name:"Knock", school:'Transmutation',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous; 1 round',
  description:'Opens stuck, barred, locked, or magically sealed door. Also lifts hold portal.' },

{ name:"Levitate", school:'Transmutation',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'Move subject up and down at will (up to 20 ft/round). Cannot move horizontally.' },

{ name:'Make Whole', school:'Transmutation',
  level:{cleric:2,warpriest:2},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Repairs an object for 1d6/level (max 5d6) hp. Works on magic items.' },

{ name:'Minor Image', school:'Illusion [figment]',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Long', duration:'Concentration +2 rounds',
  description:'Creates illusion with some sound, but no smell or thermal effects.' },

{ name:'Mirror Image', school:'Illusion [figment]',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'1d4+1/3 levels (max 8) illusory doubles protect you. Each absorbs one hit.' },

{ name:'Owl Wisdom', school:'Transmutation',
  level:{cleric:2,warpriest:2,druid:2,paladin:2,ranger:2,sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+4 enhancement bonus to Wisdom.' },

{ name:'Resist Energy', school:'Abjuration',
  level:{cleric:2,warpriest:2,druid:2,paladin:2,ranger:1,sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Ignores first 10 (20 at CL 7, 30 at CL 11) points of one energy type per round.' },

{ name:'Restoration, Lesser', school:'Conjuration [healing]',
  level:{cleric:2,warpriest:2,druid:2,paladin:1,inquisitor:2},
  castingTime:'3 rounds', range:'Touch', duration:'Instantaneous',
  description:'Dispels any magical effects reducing ability scores, or heals 1d4 points of ability damage.' },

{ name:'Scorching Ray', school:'Evocation [fire]',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Ray of fire: 4d6 damage. +1 ray per 4 CL above 3rd (max 3 rays at CL 11).' },

{ name:'See Invisibility', school:'Divination',
  level:{sorcerer:2,wizard:2,bard:3},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'See invisible creatures and objects as if they were visible.' },

{ name:'Shatter', school:'Evocation [sonic]',
  level:{cleric:2,warpriest:2,sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Sonic vibration shatters nonmagical items or deals 1d6/level (max 10d6) to crystalline creatures.' },

{ name:'Shield Other', school:'Abjuration',
  level:{cleric:2,warpriest:2,paladin:2},
  castingTime:'1 standard', range:'Close', duration:'1 hour/level',
  description:'+1 deflection AC and +1 resistance saves to target. Half damage to target redirected to you.' },

{ name:'Silence', school:'Illusion [glamer]',
  level:{cleric:2,warpriest:2,bard:2,inquisitor:2,ranger:2},
  castingTime:'1 standard', range:'Long', duration:'1 min/level',
  description:'No sound in or from a 20-ft radius area. Prevents verbal spellcasting within.' },

{ name:'Sound Burst', school:'Evocation [sonic]',
  level:{cleric:2,warpriest:2,bard:2},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Burst of sound deals 1d8 sonic damage in 10-ft radius. Fort or stunned 1 round.' },

{ name:'Soften Earth and Stone', school:'Transmutation [earth]',
  level:{druid:2},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Turns dry soil to mud or mud to dry soil. Makes stone soft (as hard clay).' },

{ name:'Spiritual Weapon', school:'Evocation [force]',
  level:{cleric:2,warpriest:2,inquisitor:2},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Force weapon attacks independently at BAB = caster level, 1d8+1/3 levels force damage. Cannot be harmed.' },

{ name:'Status', school:'Divination',
  level:{cleric:2,warpriest:2},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'Monitor condition and position of allies. Know their hp/status at all times.' },

{ name:'Summon Monster II', school:'Conjuration [summoning]',
  level:{cleric:2,warpriest:2,sorcerer:2,wizard:2},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 2nd-level creature or 1d3+1 1st-level creatures.' },

{ name:'Summon Swarm', school:'Conjuration [summoning]',
  level:{druid:2,sorcerer:2,wizard:2,bard:2},
  castingTime:'1 round', range:'Close', duration:'Concentration +2 rounds',
  description:'Summons a swarm of bats, rats, or spiders. Swarm attacks all creatures in its area.' },

{ name:'Touch of Idiocy', school:'Enchantment [mind-affecting]',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'–1d6 penalty to Int, Wis, and Cha (min 1 each). Affects prepared spells.' },

{ name:'Web', school:'Conjuration [creation]',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Medium', duration:'10 min/level',
  description:'Fills 20-ft-radius sphere with webbing. Entangles or grapples creatures (Reflex avoids grapple).' },

{ name:'Whispering Wind', school:'Transmutation [air]',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'1 mile/level', duration:'No more than 1 hour/level',
  description:'Sends a short message to a specific location. 25 words max.' },

// ══════════════════════════════════════════════════════════════════
// LEVEL 3
// ══════════════════════════════════════════════════════════════════
{ name:'Animate Dead', school:'Necromancy [evil]',
  level:{cleric:3,warpriest:3,sorcerer:4,wizard:4,inquisitor:3},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Animate dead bodies as skeletons or zombies. Control 2 HD/level.' },

{ name:'Bestow Curse', school:'Necromancy',
  level:{cleric:3,warpriest:3,sorcerer:4,wizard:4,inquisitor:3},
  castingTime:'1 standard', range:'Touch', duration:'Permanent',
  description:'–6 ability score, or –4 attacks/saves/checks, or 50% action failure. Will negates.' },

{ name:'Blink', school:'Transmutation',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Personal', duration:'1 round/level',
  description:'Randomly teleport between material and ethereal. 50% miss chance. No falling damage.' },

{ name:'Call Lightning', school:'Evocation [electricity]',
  level:{druid:3},
  castingTime:'1 round', range:'Medium', duration:'1 min/level',
  description:'1d6/level (max 10d6) lightning bolt from storm clouds. One bolt/round as standard action.' },

{ name:'Clairaudience/Clairvoyance', school:'Divination [scrying]',
  level:{sorcerer:3,wizard:3,bard:3},
  castingTime:'10 minutes', range:'Long', duration:'1 min/level',
  description:'Hear or see at a distance. Magical senses at known location.' },

{ name:'Contagion', school:'Necromancy [disease]',
  level:{cleric:3,warpriest:3,druid:3,sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Touch inflicts disease: blinding sickness, bubonic plague, cackle fever, filth fever, etc. Fort negates.' },

{ name:'Cure Serious Wounds', school:'Conjuration [healing]',
  level:{cleric:3,warpriest:3,druid:4,paladin:4,ranger:4,bard:3,inquisitor:3},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures 3d8+1/level (max +15) hit points.' },

{ name:'Daylight', school:'Evocation [light]',
  level:{cleric:3,warpriest:3,druid:3,paladin:3,sorcerer:3,wizard:3,bard:3,inquisitor:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'60-ft radius of bright light. Counters or dispels darkness spells of 3rd level or lower.' },

{ name:'Deeper Darkness', school:'Evocation [darkness]',
  level:{cleric:3,warpriest:3,inquisitor:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'60-ft radius of supernatural darkness. Even darkvision does not work within.' },

{ name:'Dispel Magic', school:'Abjuration',
  level:{cleric:3,warpriest:3,druid:4,paladin:3,sorcerer:3,wizard:3,bard:3,inquisitor:3},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Cancels magical spells and effects. Dispel check: 1d20+CL vs DC 11+spell CL (max +20).' },

{ name:'Displacement', school:'Illusion [glamer]',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'1 round/level',
  description:'50% miss chance as though always has concealment. Does not stack with other miss chances.' },

{ name:'Dominate Animal', school:'Enchantment [compulsion, mind-affecting]',
  level:{druid:3},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'One animal obeys your silent mental commands. Will negates.' },

{ name:'Explosive Runes', school:'Abjuration [force]',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'Permanent until discharged',
  description:'When read, deals 6d6 force damage in 10-ft radius (Reflex half; reader no save).' },

{ name:'Fireball', school:'Evocation [fire]',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Long', duration:'Instantaneous',
  description:'1d6/level (max 10d6) fire damage in 20-ft radius. Reflex half.' },

{ name:'Fly', school:'Transmutation',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'Subject flies at speed 60 ft (good maneuverability). +1 ft/level speed (max +10).' },

{ name:'Gaseous Form', school:'Transmutation',
  level:{sorcerer:3,wizard:3,bard:3},
  castingTime:'1 standard', range:'Touch', duration:'2 min/level',
  description:'Subject and gear become insubstantial. DR 10/magic, immune to poison and critical hits.' },

{ name:'Good Hope', school:'Enchantment [mind-affecting]',
  level:{bard:3},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'+2 morale bonus on attack rolls, saving throws, ability checks, skill checks, and damage.' },

{ name:'Halt Undead', school:'Necromancy',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Paralyzes 1d3 undead with 9 HD or less. Will negates for sentient, mindless get no save.' },

{ name:'Haste', school:'Transmutation',
  level:{sorcerer:3,wizard:3,bard:3},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'+1 bonus on attack rolls, +1 AC, +1 Reflex. Gain extra attack when using full-attack. +30 ft movement.' },

{ name:'Helping Hand', school:'Evocation',
  level:{cleric:3,warpriest:3},
  castingTime:'1 standard', range:'5 miles', duration:'1 hour/level',
  description:'Spectral hand leads subject to you. Can communicate through hand.' },

{ name:'Inflict Serious Wounds', school:'Necromancy',
  level:{cleric:3,warpriest:3,inquisitor:3},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'3d8+1/level (max +15) damage on touch. Will half. Heals undead.' },

{ name:'Invisibility Purge', school:'Evocation',
  level:{cleric:3,warpriest:3,inquisitor:3},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'Dispels invisibility within 5 ft/level radius of you.' },

{ name:'Keen Edge', school:'Transmutation',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Close', duration:'10 min/level',
  description:'Doubles critical threat range of a slashing or piercing weapon. Does not stack with improved critical.' },

{ name:'Lightning Bolt', school:'Evocation [electricity]',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'120-ft line', duration:'Instantaneous',
  description:'1d6/level (max 10d6) electricity damage in 120-ft line. Reflex half.' },

{ name:'Locate Object', school:'Divination',
  level:{cleric:3,warpriest:3,sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Long', duration:'1 min/level',
  description:'Sense the direction of well-known or clearly visualized object.' },

{ name:'Magic Circle against Chaos', school:'Abjuration [lawful]',
  level:{cleric:3,warpriest:3,paladin:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'10-ft radius of protection from chaos. Prevents summoned chaotic outsiders from passing.' },

{ name:'Magic Circle against Evil', school:'Abjuration [good]',
  level:{cleric:3,warpriest:3,paladin:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'10-ft radius of protection from evil. Keeps evil outsiders at bay.' },

{ name:'Magic Circle against Good', school:'Abjuration [evil]',
  level:{cleric:3,warpriest:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'10-ft radius of protection from good. Traps summoned good outsiders.' },

{ name:'Magic Circle against Law', school:'Abjuration [chaotic]',
  level:{cleric:3,warpriest:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'10-ft radius of protection from law. Keeps lawful outsiders at bay.' },

{ name:'Magic Vestment', school:'Transmutation',
  level:{cleric:3,warpriest:3},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'+1 enhancement bonus to armor or shield per 4 levels (max +5). Does not stack with existing enhancement.' },

{ name:'Meld into Stone', school:'Transmutation [earth]',
  level:{cleric:3,warpriest:3,druid:3},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'Step into stone and wait safely while melded. Cannot act.' },

{ name:'Obscure Object', school:'Abjuration',
  level:{cleric:3,warpriest:3,sorcerer:2,wizard:2,bard:1},
  castingTime:'1 standard', range:'Touch', duration:'8 hours',
  description:'Masks object against divination spells. Divinations note only that it is so protected.' },

{ name:'Prayer', school:'Enchantment [compulsion, mind-affecting]',
  level:{cleric:3,warpriest:3,paladin:3,inquisitor:3},
  castingTime:'1 standard', range:'40 ft', duration:'1 round/level',
  description:'+1 luck bonus on attacks, damage, saves, skills for allies. –1 penalty for enemies in range.' },

{ name:'Protection from Energy', school:'Abjuration',
  level:{cleric:3,warpriest:3,druid:3,ranger:2,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level or until discharged',
  description:'Grants immunity to 12 hp per level (max 120 hp) from one energy type.' },

{ name:'Remove Blindness/Deafness', school:'Conjuration [healing]',
  level:{cleric:3,warpriest:3,paladin:3},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures normal or magical blindness or deafness.' },

{ name:'Remove Curse', school:'Abjuration',
  level:{cleric:3,warpriest:3,paladin:3,sorcerer:4,wizard:4,bard:3,inquisitor:3},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Frees object or person from curse. Roll CL vs DC (usually 10+original CL).' },

{ name:'Remove Disease', school:'Conjuration [healing]',
  level:{cleric:3,warpriest:3,druid:3,ranger:3},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures all diseases affecting subject.' },

{ name:'Searing Light', school:'Evocation',
  level:{cleric:3,warpriest:3},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Ray of divine light: 1d8/2 CL (max 5d8). 1d8/CL vs undead (max 10d8). 1d6/CL vs undead vulnerable to light.' },

{ name:'Slow', school:'Transmutation',
  level:{sorcerer:3,wizard:3,bard:3},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'One creature/level affected. –1 AC, –1 attacks, –1 Reflex. Only one action per round. Will negates.' },

{ name:'Speak with Dead', school:'Necromancy [language-dependent]',
  level:{cleric:3,warpriest:3},
  castingTime:'10 minutes', range:'10 ft', duration:'1 min/level',
  description:'Corpse answers questions. 1 question per 2 levels. Must speak language known in life.' },

{ name:'Stone Shape', school:'Transmutation [earth]',
  level:{cleric:3,warpriest:3,druid:3,sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Sculpts 10 cu ft + 1 cu ft/level of stone into desired shape.' },

{ name:'Summon Monster III', school:'Conjuration [summoning]',
  level:{cleric:3,warpriest:3,sorcerer:3,wizard:3},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 3rd-level creature, 1d3 2nd-level, or 1d4+1 1st-level creatures.' },

{ name:'Water Breathing', school:'Transmutation',
  level:{cleric:3,warpriest:3,druid:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'2 hours/level',
  description:'Subjects can breathe water freely. Multiple subjects: divide duration equally.' },

{ name:'Wind Wall', school:'Evocation [air]',
  level:{cleric:3,warpriest:3,druid:3,ranger:2,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Curtain of wind deflects arrows, bolts, small flying creatures. Gaseous creatures cannot pass.' },

// ══════════════════════════════════════════════════════════════════
// LEVEL 4
// ══════════════════════════════════════════════════════════════════
{ name:'Air Walk', school:'Transmutation [air]',
  level:{cleric:4,warpriest:4,druid:4},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Subject treads on air as if it were solid ground. Move up or down at 45° angle.' },

{ name:'Blessing of Fervor', school:'Transmutation',
  level:{cleric:4,warpriest:4},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'Each ally each round chooses: +2 effective Str, +2 AC, +2 attacks, extra move action, or full speed in armor.' },

{ name:'Chaos Hammer', school:'Evocation [chaotic]',
  level:{cleric:4,warpriest:4},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous (1d6 rounds)',
  description:'2d8/2 CL (max 5d8) damage to lawful creatures. Slows chaotic-hating creatures 1d6 rounds. Will half.' },

{ name:'Confusion', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:4,wizard:4,bard:3},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Subjects behave oddly: 25% attack nearest, 25% do nothing, 25% withdraw, 25% act normally. Will negates.' },

{ name:'Cure Critical Wounds', school:'Conjuration [healing]',
  level:{cleric:4,warpriest:4,druid:5,bard:4,inquisitor:4},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures 4d8+1/level (max +20) hit points.' },

{ name:'Death Ward', school:'Necromancy',
  level:{cleric:4,warpriest:4,druid:5,paladin:4},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'Immunity to death spells, magical death, energy drain, and negative energy effects.' },

{ name:'Dimensional Anchor', school:'Abjuration',
  level:{cleric:4,warpriest:4,sorcerer:4,wizard:4,inquisitor:4},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'Ranged touch — bars extra-dimensional movement. Will negates for noncorporeal.' },

{ name:'Discern Lies', school:'Divination',
  level:{cleric:4,warpriest:4,paladin:3,inquisitor:4},
  castingTime:'1 standard', range:'Close', duration:'Concentration up to 1 round/level',
  description:'Reveals deliberate falsehoods. Will negates per creature.' },

{ name:'Dismissal', school:'Abjuration',
  level:{cleric:4,warpriest:4,sorcerer:5,wizard:5,inquisitor:4},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Force extraplanar creature to return to its proper plane. Will negates (CL check if summoned).' },

{ name:'Divine Power', school:'Evocation',
  level:{cleric:4,warpriest:4},
  castingTime:'1 standard', range:'Personal', duration:'1 round/level',
  description:'+1 luck bonus/3 levels (max +6) on attacks. Temp HP = level. BAB becomes full BAB.' },

{ name:'Emotion (Morale)', school:'Enchantment [mind-affecting]',
  level:{sorcerer:4,wizard:4,bard:3},
  castingTime:'1 standard', range:'Medium', duration:'Concentration up to 1 round/level',
  description:'Causes fear, hope, despair, rage, or friendship in subjects. Will negates.' },

{ name:'Enervation', school:'Necromancy',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Ranged touch — 1d4 negative levels. Each negative level: –1 attacks/saves/checks, –5 hp.' },

{ name:'Fire Shield', school:'Evocation [fire or cold]',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Personal', duration:'1 round/level',
  description:'Flames/frost surround you: attackers take 1d6+1/level damage. You take half from fire (warm) or cold (chill).' },

{ name:'Freedom of Movement', school:'Abjuration',
  level:{cleric:4,warpriest:4,druid:4,ranger:4,bard:4,inquisitor:4},
  castingTime:'1 standard', range:'Personal or Touch', duration:'10 min/level',
  description:'Move and attack normally despite magic and nonmagical impediments (web, hold person, grapple, etc.).' },

{ name:'Giant Vermin', school:'Transmutation',
  level:{cleric:4,warpriest:4,druid:4},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'Turns up to 3 normal insects or 1 vermin into giant versions. They follow your mental commands.' },

{ name:'Globe of Invulnerability, Lesser', school:'Abjuration',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'10 ft', duration:'1 round/level',
  description:'Stops spells of 3rd level or lower from entering the globe. Does not affect spells already in effect.' },

{ name:'Holy Smite', school:'Evocation [good]',
  level:{cleric:4,warpriest:4},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous (1 round)',
  description:'2d8/2 CL (max 5d8) damage to evil creatures. Blinds evil for 1 round. Will half (no blind).' },

{ name:'Imbue with Spell Ability', school:'Evocation',
  level:{cleric:4,warpriest:4},
  castingTime:'10 minutes', range:'Touch', duration:'Permanent until discharged',
  description:'Transfer 1-3 prepared spells (max 2nd level) to another creature who can then cast them once.' },

{ name:'Inflict Critical Wounds', school:'Necromancy',
  level:{cleric:4,warpriest:4,inquisitor:4},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'4d8+1/level (max +20) damage. Will half. Heals undead.' },

{ name:'Magic Weapon, Greater', school:'Transmutation',
  level:{cleric:4,warpriest:4,paladin:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Close', duration:'1 hour/level',
  description:'+1 enhancement bonus per 4 CL (max +5) on attack and damage rolls.' },

{ name:'Neutralize Poison', school:'Conjuration [healing]',
  level:{cleric:4,warpriest:4,druid:3,paladin:4,ranger:3,bard:4},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous or 10 min/level',
  description:'Detoxifies venom in or on subject. Delays onset if not yet active.' },

{ name:'Order Chaos', school:'Evocation [lawful]',
  level:{cleric:4,warpriest:4},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous (1d6 rounds)',
  description:'2d8/2 CL (max 5d8) damage to chaotic creatures. Staggers them 1d6 rounds. Will half.' },

{ name:'Poison', school:'Necromancy',
  level:{cleric:4,warpriest:4,druid:3},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous; 1 round/level',
  description:'Touch — Fort save or 1d3 Con damage/round for 6 rounds (frequency 1/round). Secondary: 1/min for 6 min.' },

{ name:'Repel Vermin', school:'Abjuration',
  level:{cleric:4,warpriest:4,druid:4,ranger:3,bard:4},
  castingTime:'1 standard', range:'10-ft radius', duration:'10 min/level',
  description:'Insects, spiders, and similar vermin stay 10 ft away. Vermin with >½ your HD get Will save.' },

{ name:'Restoration', school:'Conjuration [healing]',
  level:{cleric:4,warpriest:4,paladin:4},
  castingTime:'3 rounds', range:'Touch', duration:'Instantaneous',
  description:'Restores 1 negative level, or all ability damage, or 1 point of ability drain.' },

{ name:'Sending', school:'Evocation',
  level:{cleric:4,warpriest:4,sorcerer:5,wizard:5},
  castingTime:'10 minutes', range:'Unlimited', duration:'1 round',
  description:'Delivers 25-word message to any creature. Target can respond with 25 words.' },

{ name:'Spell Immunity', school:'Abjuration',
  level:{cleric:4,warpriest:4},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Subject immune to one named spell per 4 levels. Only spells with Spell Resistance: Yes.' },

{ name:'Summon Monster IV', school:'Conjuration [summoning]',
  level:{cleric:4,warpriest:4,sorcerer:4,wizard:4},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 4th-level creature or 1d3 3rd-level or 1d4+1 lower-level creatures.' },

{ name:'Tongues', school:'Divination',
  level:{cleric:4,warpriest:4,sorcerer:3,wizard:3,bard:2},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Speak and understand any language.' },

{ name:'Unholy Blight', school:'Evocation [evil]',
  level:{cleric:4,warpriest:4},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous (1d4 rounds)',
  description:'2d8/2 CL (max 5d8) damage to good creatures. Sickens good for 1d4 rounds. Will half (no sicken).' },

// ══════════════════════════════════════════════════════════════════
// LEVEL 5
// ══════════════════════════════════════════════════════════════════
{ name:'Break Enchantment', school:'Abjuration',
  level:{cleric:5,warpriest:5,paladin:4,sorcerer:5,wizard:5,bard:4},
  castingTime:'1 minute', range:'Close', duration:'Instantaneous',
  description:'Frees subjects from enchantments, transmutations, and curses. CL check DC 11+spell CL.' },

{ name:'Commune', school:'Divination',
  level:{cleric:5,warpriest:5},
  castingTime:'10 minutes', range:'Personal', duration:'1 round/level',
  description:'Deity or its servants answers questions. 1 yes/no question/level. 70% truthful answer.' },

{ name:'Consecrate', school:'Evocation [good]',
  level:{cleric:3,warpriest:3},
  castingTime:'1 standard', range:'Close', duration:'2 hours/level',
  description:'Fills area with positive energy. Undead –1 attacks/damage/saves. Summoned undead gain no channel resistance.' },

{ name:'Cure Light Wounds, Mass', school:'Conjuration [healing]',
  level:{cleric:5,warpriest:5,druid:6,bard:5},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Cures 1d8+1/level (max +25) to all targets in range. Harms undead.' },

{ name:'Dispel Evil', school:'Abjuration [good]',
  level:{cleric:5,warpriest:5,paladin:4},
  castingTime:'1 standard', range:'Personal', duration:'1 round/level or until discharged',
  description:'Dispel evil effect, return evil summon to its plane, or +4 deflection and attack evil.' },

{ name:'Disrupting Weapon', school:'Transmutation',
  level:{cleric:5,warpriest:5},
  castingTime:'1 standard', range:'Touch', duration:'1 round/level',
  description:'Melee weapon destroys undead on hit. Will DC 15+Wis negates. Also deals weapon damage.' },

{ name:'Flame Strike', school:'Evocation [fire]',
  level:{cleric:5,warpriest:5,druid:4},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'1d6/level (max 15d6) damage in 10-ft radius, 40-ft tall column. Half fire, half divine (unresisted). Reflex half.' },

{ name:'Hallow', school:'Evocation [good]',
  level:{cleric:5,warpriest:5,druid:5},
  castingTime:'24 hours', range:'Touch', duration:'Instantaneous',
  description:'Designates an area as holy. Undead cannot be created in area. One additional spell attached.' },

{ name:'Inflict Light Wounds, Mass', school:'Necromancy',
  level:{cleric:5,warpriest:5},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'1d8+1/level (max +25) damage to all creatures. Will half. Heals undead.' },

{ name:'Insect Plague', school:'Conjuration [summoning]',
  level:{cleric:5,warpriest:5,druid:5},
  castingTime:'1 round', range:'Long', duration:'1 min/level',
  description:'Wasp swarms (one per 3 CL, max 6) fill area. Each swarm deals 2d6 damage/round to creatures in it.' },

{ name:'Mark of Justice', school:'Necromancy',
  level:{cleric:5,warpriest:5,paladin:4},
  castingTime:'10 minutes', range:'Touch', duration:'Permanent',
  description:'Designates action that will trigger a specific bestow curse effect on the subject.' },

{ name:'Plane Shift', school:'Conjuration [teleportation]',
  level:{cleric:5,warpriest:5,sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'You and up to 7 others travel to another plane. Touch attack on unwilling target (Will negates).' },

{ name:'Raise Dead', school:'Conjuration [healing]',
  level:{cleric:5,warpriest:5},
  castingTime:'1 minute', range:'Touch', duration:'Instantaneous',
  description:'Restore life to deceased. Works if dead no longer than 1 day/level. Subject loses 1 level.' },

{ name:'Righteous Might', school:'Transmutation',
  level:{cleric:5,warpriest:5},
  castingTime:'1 standard', range:'Personal', duration:'1 round/level',
  description:'You grow to Large size: +4 Str, –2 Dex, –1 attack/AC, reach 10 ft. DR 3/evil (or good).' },

{ name:'Scrying', school:'Divination [scrying]',
  level:{cleric:5,warpriest:5,druid:4,sorcerer:4,wizard:4,bard:3},
  castingTime:'1 hour', range:'Unlimited', duration:'1 min/level',
  description:'Spy on a creature from any distance. Will negates (DC 23 if you have a piece of target).' },

{ name:'Slay Living', school:'Necromancy [death]',
  level:{cleric:5,warpriest:5},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Touch attack — Fort save or die. On successful save: 3d6+1/level damage.' },

{ name:'Spell Resistance', school:'Abjuration',
  level:{cleric:5,warpriest:5},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'Subject gains SR 12+CL.' },

{ name:'Summon Monster V', school:'Conjuration [summoning]',
  level:{cleric:5,warpriest:5,sorcerer:5,wizard:5},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 5th-level creature or multiples of lower-level creatures.' },

{ name:'True Seeing', school:'Divination',
  level:{cleric:5,warpriest:5,druid:7,sorcerer:6,wizard:6,inquisitor:5},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'See all things as they actually are. See through illusions, darkness, magic fog, disguises (range 120 ft).' },

{ name:'Wall of Stone', school:'Conjuration [creation, earth]',
  level:{cleric:5,warpriest:5,druid:6,sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Creates wall of stone 1 inch thick/4 CL, up to 5 sq ft/CL. Permanent. Must be on a surface.' },

// ══════════════════════════════════════════════════════════════════
// LEVEL 6
// ══════════════════════════════════════════════════════════════════
{ name:'Animate Objects', school:'Transmutation',
  level:{cleric:6,warpriest:6,bard:6},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Objects move at your command. 1 Small object or proportional equivalent per CL.' },

{ name:'Antilife Shell', school:'Abjuration',
  level:{cleric:6,warpriest:6,druid:6},
  castingTime:'1 round', range:'10-ft radius', duration:'10 min/level',
  description:'Hedges out living creatures. Living creatures cannot enter (or leave) the shell.' },

{ name:'Banishment', school:'Abjuration',
  level:{cleric:6,warpriest:6,sorcerer:7,wizard:7,inquisitor:6},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Banishes 2 HD/level of extraplanar creatures. Will negates. +2 HD if have appropriate object.' },

{ name:'Blade Barrier', school:'Evocation [force]',
  level:{cleric:6,warpriest:6},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'Wall of whirling blades. 1d6/level (max 15d6) damage to those who pass. Reflex half.' },

{ name:'Bull Strength, Mass', school:'Transmutation',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'+4 enhancement to Str for all subjects.' },

{ name:'Create Undead', school:'Necromancy [evil]',
  level:{cleric:6,warpriest:6,sorcerer:6,wizard:6},
  castingTime:'1 hour', range:'Close', duration:'Instantaneous',
  description:'Create more powerful undead from corpse. Ghoul (CL 11), Shadow (CL 13), Ghast (CL 15), Wight (CL 17).' },

{ name:'Cure Moderate Wounds, Mass', school:'Conjuration [healing]',
  level:{cleric:6,warpriest:6,druid:7,bard:6},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Cures 2d8+1/level (max +30) to all allies in range.' },

{ name:'Find the Path', school:'Divination',
  level:{cleric:6,warpriest:6,druid:6,bard:6},
  castingTime:'3 rounds', range:'Personal or Touch', duration:'10 min/level',
  description:'Know the most direct physical route to a location. Also reveals traps and secret doors.' },

{ name:'Forbiddance', school:'Abjuration',
  level:{cleric:6,warpriest:6},
  castingTime:'6 rounds', range:'Medium', duration:'Permanent',
  description:'Blocks planar travel into an area. Damages creatures of different alignment on entry.' },

{ name:'Harm', school:'Necromancy',
  level:{cleric:6,warpriest:6},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Touch attack — reduces target to 1d4 hp (max 150 damage). Will half. Heals undead.' },

{ name:'Heal', school:'Conjuration [healing]',
  level:{cleric:6,warpriest:6,druid:7},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures 10 hp/level (max 150 hp). Also eliminates disease, blindness, deafness, and most conditions.' },

{ name:'Heroes Feast', school:'Conjuration [creation]',
  level:{cleric:6,warpriest:6},
  castingTime:'10 minutes', range:'Close', duration:'1 hour plus 12 hours',
  description:'Food and drink for CL creatures: +1 morale on attacks/Will, +4 Wis, +4 saves vs poison/fear, 1d8+CL temp hp.' },

{ name:'Inflict Moderate Wounds, Mass', school:'Necromancy',
  level:{cleric:6,warpriest:6},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'2d8+1/level (max +30) damage to all creatures. Will half. Heals undead.' },

{ name:'Summon Monster VI', school:'Conjuration [summoning]',
  level:{cleric:6,warpriest:6,sorcerer:6,wizard:6},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 6th-level creature or multiples of lower-level creatures.' },

{ name:'Symbol of Fear', school:'Necromancy [fear, mind-affecting]',
  level:{cleric:6,warpriest:6,sorcerer:6,wizard:6},
  castingTime:'10 minutes', range:'0 ft', duration:'10 min/level or until triggered + 1 round/level',
  description:'When read, panics creatures in 60-ft radius (Will negates). Lasts 1 round/level.' },

{ name:'Symbol of Persuasion', school:'Enchantment [charm, mind-affecting]',
  level:{cleric:6,warpriest:6,sorcerer:6,wizard:6},
  castingTime:'10 minutes', range:'0 ft', duration:'10 min/level or until triggered + 1 hour/level',
  description:'When read, charms creatures in 60-ft radius for 1 hour/level. Will negates.' },

{ name:'Undeath to Death', school:'Necromancy',
  level:{cleric:6,warpriest:6,sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Destroys 1d4 HD/level (max 20d4) of undead. Will negates. Affects lowest HD first.' },

{ name:'Word of Recall', school:'Conjuration [teleportation]',
  level:{cleric:6,warpriest:6,druid:8},
  castingTime:'1 standard', range:'Unlimited', duration:'Instantaneous',
  description:'Teleports you and up to 5 allies back to a sanctuary you designate ahead of time.' },

// ══════════════════════════════════════════════════════════════════
// HIGHER LEVEL SPELLS (7th-9th)
// ══════════════════════════════════════════════════════════════════
{ name:'Resurrection', school:'Conjuration [healing]',
  level:{cleric:7,warpriest:7},
  castingTime:'10 minutes', range:'Touch', duration:'Instantaneous',
  description:'Fully restore creature dead up to 10 years/level. No level loss. Requires piece of creature.' },

{ name:'Summon Monster VII', school:'Conjuration [summoning]',
  level:{cleric:7,sorcerer:7,wizard:7},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 7th-level creature or multiples of lower-level creatures.' },

{ name:'Destruction', school:'Necromancy [death]',
  level:{cleric:7,warpriest:7},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Kills subject. Fort save or die. On success: 10d6 damage.' },

{ name:'Holy Word', school:'Evocation [good, sonic]',
  level:{cleric:7,warpriest:7},
  castingTime:'1 standard', range:'40 ft', duration:'Instantaneous',
  description:'Kills/paralyzes/blinds/deafens evil creatures. Will negates paralysis/blindness. Banishes outsiders.' },

{ name:'Spell Turning', school:'Abjuration',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Personal', duration:'Until expended or 10 min/level',
  description:'Reflect 1d4+6 spell levels of targeted spells back at casters.' },

{ name:'Teleport, Greater', school:'Conjuration [teleportation]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Personal and Touch', duration:'Instantaneous',
  description:'Transport yourself and up to 8 others to any known location with no chance of error.' },

{ name:'Earthquake', school:'Evocation [earth]',
  level:{cleric:8,warpriest:8,druid:8},
  castingTime:'1 standard', range:'Long', duration:'1 round',
  description:'Intense tremor shakes 80-ft radius: fissures open, buildings collapse, terrain impassable.' },

{ name:'Fire Storm', school:'Evocation [fire]',
  level:{cleric:8,warpriest:8,druid:7},
  castingTime:'1 round', range:'Medium', duration:'Instantaneous',
  description:'2d6/level (max 20d6) fire damage in 2 10-ft cubes/level (up to 1000 sq ft). Reflex half.' },

{ name:'Summon Monster VIII', school:'Conjuration [summoning]',
  level:{cleric:8,sorcerer:8,wizard:8},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 8th-level creature or multiples of lower-level creatures.' },

{ name:'Energy Drain', school:'Necromancy',
  level:{cleric:9,sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Ranged touch — 2d4 negative levels. If target has fewer HD than levels drained, it dies.' },

{ name:'Implosion', school:'Evocation',
  level:{cleric:9,warpriest:9},
  castingTime:'1 standard', range:'Close', duration:'Concentration up to 1 round/level',
  description:'One corporeal creature/round implodes: Fort save or die. Continue concentrating to destroy more.' },

{ name:'Miracle', school:'Evocation',
  level:{cleric:9,warpriest:9},
  castingTime:'1 standard', range:'See text', duration:'See text',
  description:'Requests deity to grant a single wish. Cleric can request a result as if using any cleric/druid spell of 8th level or lower, or a number of other divine effects.' },

{ name:'Storm of Vengeance', school:'Conjuration [air, electricity, fire, sonic]',
  level:{cleric:9,warpriest:9,druid:9},
  castingTime:'1 round', range:'Long', duration:'Concentration up to 10 rounds',
  description:'Huge storm: rain, hail, lightning, windstorm. 1d6 sonic/rd (no save). Lightning 3d6/rd (Reflex half). Acid rain 24 rounds after.' },

{ name:'Summon Monster IX', school:'Conjuration [summoning]',
  level:{cleric:9,sorcerer:9,wizard:9},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 9th-level creature or multiples of lower-level creatures.' },


// ══════════════════════════════════════════════════════════════════
// ADDITIONAL WIZARD/SORCERER SPELLS
// ══════════════════════════════════════════════════════════════════

// Level 1
{ name:'Charm Animal', school:'Enchantment [charm, mind-affecting]',
  level:{druid:1,ranger:1},
  castingTime:'1 standard', range:'Close', duration:'1 hour/level',
  description:'Makes one animal your friend. Will negates.' },

{ name:'Comprehend Languages', school:'Divination',
  level:{cleric:1,warpriest:1,sorcerer:1,wizard:1,bard:1,inquisitor:1},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'Understand all written and spoken languages.' },

{ name:'Chill Touch', school:'Necromancy',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'One touch/level — 1d6 negative energy damage + 1 Str damage (Fort neg). Undead: panicked 1d4 rounds (Will neg).' },

{ name:'Disguise Self', school:'Illusion [glamer]',
  level:{sorcerer:1,wizard:1,bard:1,inquisitor:1},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'Change appearance of form, including clothing and equipment. Does not alter touch.' },

{ name:'Detect Secret Doors', school:'Divination',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 1 min/level',
  description:'Reveals secret doors within 60-ft cone.' },

{ name:'Erase', school:'Transmutation',
  level:{sorcerer:1,wizard:1},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Mundane or magical writing disappears from two pages or less.' },

{ name:'Hypnotism', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'2 rounds', range:'Close', duration:'2d4 rounds',
  description:'Fascinates 2d4 HD of creatures within 40 ft.' },

{ name:'Magic Aura', school:'Illusion [glamer]',
  level:{sorcerer:1,wizard:1,bard:1},
  castingTime:'1 standard', range:'Touch', duration:'1 day/level',
  description:'Alters object\'s magic aura. Can make magical items appear nonmagical or vice versa.' },

{ name:"Negate Aroma", school:'Transmutation',
  level:{druid:1,ranger:1},
  castingTime:'1 standard', range:'Close', duration:'1 hour/level',
  description:'Target cannot be tracked or detected by scent.' },

{ name:'Protection from Arrows', school:'Abjuration',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'DR 10/magic against ranged weapons. Lasts until 10 hp/level absorbed (max 100 hp).' },

{ name:"Summon Nature's Ally I", school:'Conjuration [summoning]',
  level:{druid:1,ranger:1},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 1st-level nature creature to fight for you.' },

// Level 2
{ name:'Arcane Lock', school:'Abjuration',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'Permanent',
  description:'Magically locks a portal. DC +10 to open with Disable Device or Str.' },

{ name:'Blur', school:'Illusion [glamer]',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'Attacks on subject miss 20% of the time (no save). Does not stack with displacement.' },

{ name:'Command Undead', school:'Necromancy',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Close', duration:'1 day/level',
  description:'Undead creature obeys your commands. Will negates (DC 16+Cha). Mindless undead get no save.' },

{ name:'Create Pit', school:'Conjuration [creation]',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Medium', duration:'1 round+1 round/level',
  description:'Creates a 10-ft-diameter, 20-ft-deep pit. Reflex (DC 15) or fall in. Disappears after duration.' },

{ name:'Detect Thoughts', school:'Divination [mind-affecting]',
  level:{sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'60 ft', duration:'Concentration up to 1 min/level',
  description:'Read surface thoughts of creatures in a 60-ft cone. Will negates.' },

{ name:'Daze Monster', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Medium', duration:'1 round',
  description:'Living creatures of 6 HD or less lose their next action. Will negates.' },

{ name:"Eagle's Splendor", school:'Transmutation',
  level:{cleric:2,warpriest:2,paladin:2,sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+4 enhancement to Charisma.' },

{ name:'Ghoul Touch', school:'Necromancy',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1d6+2 rounds',
  description:'Paralyzes target (Fort neg). Paralyzed target emanates stench (10 ft, Fort or sickened 5 rounds).' },

{ name:'Hideous Laughter', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:2,wizard:2,bard:1},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'Subject loses actions from laughing. Will negates. –4 if different HD from caster.' },

{ name:'Locate Object', school:'Divination',
  level:{cleric:3,warpriest:3,sorcerer:2,wizard:2,bard:2},
  castingTime:'1 standard', range:'Long', duration:'1 min/level',
  description:'Sense direction of well-known or clearly visualized object within range.' },

{ name:'Make Whole', school:'Transmutation',
  level:{cleric:2,warpriest:2},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Repairs 1d6/level (max 5d6) hp of damage to an object. Affects magic items.' },

{ name:'Rope Trick', school:'Transmutation',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'Creates extradimensional space from a rope. Up to 8 creatures can hide inside.' },

{ name:'Spectral Hand', school:'Necromancy',
  level:{sorcerer:2,wizard:2},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'Creates disembodied glowing hand that delivers your touch range spells. +2 attack.' },

{ name:"Summon Nature's Ally II", school:'Conjuration [summoning]',
  level:{druid:2,ranger:2},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 2nd-level nature creature or 1d3 1st-level creatures.' },

{ name:'Summon Swarm', school:'Conjuration [summoning]',
  level:{druid:2,sorcerer:2,wizard:2,bard:2},
  castingTime:'1 round', range:'Close', duration:'Concentration +2 rounds',
  description:'Summons swarm of bats, rats, or spiders. Deals 2d6/round to occupants.' },

// Level 3
{ name:'Cloak of Winds', school:'Abjuration [air]',
  level:{druid:3,ranger:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'Creates wind around target: +4 CMD vs ranged, Ranged attacks –4, Tiny or smaller creatures blown away.' },

{ name:'Deep Slumber', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:3,wizard:3,bard:2},
  castingTime:'1 round', range:'Close', duration:'1 min/level',
  description:'Puts 10 HD of creatures to sleep. Affects lowest HD first. Will negates.' },

{ name:'Diminish Plants', school:'Transmutation',
  level:{druid:3,ranger:3},
  castingTime:'1 standard', range:'See text', duration:'Instantaneous',
  description:'Reduces size or growth of normal plants, or prunes branches for easier passage.' },

{ name:'Elemental Aura', school:'Evocation',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Personal', duration:'1 round/level',
  description:'Create an aura of energy (fire, cold, electricity, or acid) that deals 2d6 damage to adjacent creatures.' },

{ name:'Gentle Repose', school:'Necromancy',
  level:{cleric:2,warpriest:2,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'1 day/level',
  description:'Preserves one corpse. Slows decay. Extend time limit for raise dead.' },

{ name:'Heroism', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:3,wizard:3,bard:2},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'+2 morale bonus on attack rolls, saves, and skill checks.' },

{ name:'Magic Circle against Evil', school:'Abjuration [good]',
  level:{cleric:3,warpriest:3,paladin:3,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'10-ft-radius emanation of protection from evil. Keeps summoned evil at bay.' },

{ name:'Nondetection', school:'Abjuration',
  level:{ranger:4,sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'Hides subject from divination and scrying. Caster level check (DC 11+CL) to penetrate.' },

{ name:'Phantom Steed', school:'Conjuration [creation]',
  level:{sorcerer:3,wizard:3,bard:3},
  castingTime:'10 minutes', range:'0 ft', duration:'1 hour/level',
  description:'Magical horse-like mount. Speed 20 ft/2 CL (max 100 ft). Can water walk or air walk at higher CL.' },

{ name:'Plant Growth', school:'Transmutation',
  level:{druid:3,ranger:3},
  castingTime:'1 standard', range:'See text', duration:'Instantaneous',
  description:'Enriches plants in a half-mile area or causes overgrowth in a 100-ft radius.' },

{ name:'Rage', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Medium', duration:'Concentration+1 round/level',
  description:'+2 morale bonus attacks/damage. –2 AC. Cannot use Int, Wis, or Cha skills. Will negates.' },

{ name:'Ray of Exhaustion', school:'Necromancy',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'Ray exhausts target. Fort: fatigued only. Already fatigued: Fort or exhausted.' },

{ name:'Shrink Item', school:'Transmutation',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Touch', duration:'1 day/level',
  description:'Object shrinks to 1/16 its normal size. Weight 1/4,096 normal. Will negates if magical.' },

{ name:'Snare', school:'Transmutation',
  level:{druid:3,ranger:2},
  castingTime:'3 rounds', range:'Touch', duration:'Until triggered or broken',
  description:'Creates a vine snare. Triggered: Reflex DC 23 or entangled. Escape DC 23.' },

{ name:'Stinking Cloud', school:'Conjuration [creation]',
  level:{sorcerer:3,wizard:3},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Cloud of nauseating gas: Fort or nauseated for 1d4+1 rounds when in or leaving cloud.' },

{ name:"Summon Nature's Ally III", school:'Conjuration [summoning]',
  level:{druid:3,ranger:3},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 3rd-level nature creature or multiples of lower-level creatures.' },

{ name:'Tiny Hut', school:'Evocation [force]',
  level:{sorcerer:3,wizard:3,bard:3},
  castingTime:'1 standard', range:'20 ft', duration:'2 hours/level',
  description:'Creates shelter for 9 creatures. 70°F inside. Obscures interior from view outside.' },

{ name:'Tongues', school:'Divination',
  level:{cleric:4,warpriest:4,sorcerer:3,wizard:3,bard:2},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'Speak and understand all languages.' },

// Level 4
{ name:'Arcane Eye', school:'Divination [scrying]',
  level:{sorcerer:4,wizard:4},
  castingTime:'10 minutes', range:'Unlimited', duration:'1 min/level',
  description:'Invisible floating eye: 30 ft/round (10 ft examining). Darkvision 60 ft.' },

{ name:'Black Tentacles', school:'Conjuration [creation]',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Tentacles (CMB CL+5) grapple and deal 1d6+4 damage/round to all in 20-ft radius.' },

{ name:'Detect Scrying', school:'Divination',
  level:{sorcerer:4,wizard:4,bard:4},
  castingTime:'1 standard', range:'40 ft', duration:'24 hours',
  description:'Alerts you to magical eavesdropping. Make opposed CL check to identify scryer.' },

{ name:'Dimensional Anchor', school:'Abjuration',
  level:{cleric:4,warpriest:4,sorcerer:4,wizard:4,inquisitor:4},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'Bars extradimensional movement of target.' },

{ name:"Dragon's Breath", school:'Evocation',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'See text', duration:'Instantaneous',
  description:'Exhale a cone or line of energy. 1d6/level (max 12d6). Reflex half.' },

{ name:'Fear', school:'Necromancy [fear, mind-affecting]',
  level:{sorcerer:4,wizard:4,bard:3},
  castingTime:'1 standard', range:'30-ft cone', duration:'1 round/level',
  description:'Subjects within cone are panicked. Will save: shaken instead for 1 round.' },

{ name:'Ice Storm', school:'Evocation [cold, water]',
  level:{druid:4,sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Long', duration:'1 round',
  description:'Hail deals 3d6 bludgeoning+2d6 cold in a 40-ft-radius cylinder. No save.' },

{ name:'Phantasmal Killer', school:'Illusion [fear, mind-affecting]',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Fearsome illusion kills subject. Will disbelieve, then Fort or die; on save 3d6 damage.' },

{ name:'Polymorph', school:'Transmutation [polymorph]',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'Gives one willing subject a new form. Gain natural attacks, movement, and size changes.' },

{ name:'Resilient Sphere', school:'Evocation [force]',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'Globe of force encapsulates a creature. Reflex negates. Nothing passes through.' },

{ name:'Solid Fog', school:'Conjuration [creation]',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'As fog cloud but also impedes movement (–5 ft, –2 attacks/damage). Cannot run or charge through.' },

{ name:'Stoneskin', school:'Abjuration',
  level:{druid:6,sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level or until discharged',
  description:'DR 10/adamantine, absorbs 10 hp/level damage (max 150). Stacks with natural DR.' },

{ name:"Summon Nature's Ally IV", school:'Conjuration [summoning]',
  level:{druid:4,ranger:4},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 4th-level nature creature or multiples of lower-level creatures.' },

{ name:'Wall of Fire', school:'Evocation [fire]',
  level:{druid:5,sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Medium', duration:'Concentration+1 round/level',
  description:'2d4 fire damage to creatures within 10 ft. 2d6+1/level through wall. Reflex half.' },

{ name:'Wall of Ice', school:'Evocation [cold, water]',
  level:{sorcerer:4,wizard:4},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'Wall of ice or hemisphere. 3 in/CL thick. Passers take 2d6+CL cold damage.' },

// Level 5
{ name:'Baleful Polymorph', school:'Transmutation [polymorph]',
  level:{druid:5,sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Close', duration:'Permanent',
  description:'Transforms subject into harmless animal. Fort negates; secondary Will negates personality change.' },

{ name:'Cloudkill', school:'Conjuration [creation]',
  level:{sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Medium', duration:'1 min/level',
  description:'Kills 3 HD or less, 4-5 HD take 1d4 Con/round, 6+ HD take 1d4 Con. Fort partial.' },

{ name:'Cone of Cold', school:'Evocation [cold]',
  level:{sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'60-ft cone', duration:'Instantaneous',
  description:'1d6/level (max 15d6) cold damage. Reflex half.' },

{ name:'Dominate Person', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:5,wizard:5,bard:4},
  castingTime:'1 round', range:'Close', duration:'1 day/level',
  description:'Control humanoid telepathically. Will negates. New save on harmful commands.' },

{ name:'Dream', school:'Illusion [mind-affecting]',
  level:{sorcerer:5,wizard:5,bard:5},
  castingTime:'1 minute', range:'Unlimited', duration:'See text',
  description:'Sends a message to sleeping subject. Can cause 1d10 damage or heal 1d10 damage.' },

{ name:'Fabricate', school:'Transmutation',
  level:{sorcerer:5,wizard:5},
  castingTime:'See text', range:'Close', duration:'Instantaneous',
  description:'Transform raw materials into a finished item. 1 cu ft/level (10 cu ft/level for stone/metal).' },

{ name:'Hold Monster', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:5,wizard:5,bard:4,inquisitor:5},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Paralyzes any creature. Will negates. New save each round.' },

{ name:'Magic Jar', school:'Necromancy',
  level:{sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Medium', duration:'1 hour/level or until expended',
  description:'Enable spirit to inhabit another creature or a prepared gem container. Will negates possession.' },

{ name:'Nightmare', school:'Illusion [mind-affecting]',
  level:{sorcerer:5,wizard:5,bard:5},
  castingTime:'10 minutes', range:'Unlimited', duration:'Instantaneous',
  description:'Sends vision that deals 1d10 damage and fatigue. Will negates. 50% failure if different plane.' },

{ name:'Overland Flight', school:'Transmutation',
  level:{sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Personal', duration:'1 hour/level',
  description:'Fly at speed 40 ft (or your land speed, whichever is faster), good maneuverability.' },

{ name:'Passwall', school:'Transmutation',
  level:{sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'Creates a 5-ft × 8-ft × 10-ft passage through wood, plaster, or stone (not metal).' },

{ name:'Persistent Image', school:'Illusion [figment]',
  level:{sorcerer:5,wizard:5,bard:4},
  castingTime:'1 standard', range:'Long', duration:'1 min/level',
  description:'Major illusion persists independently. Programmed behavior. Will disbelief.' },

{ name:'Seeming', school:'Illusion [glamer]',
  level:{sorcerer:5,wizard:5,bard:5},
  castingTime:'1 standard', range:'Close', duration:'12 hours',
  description:'Changes appearance of 1 creature/2 levels. Will disbelief. Extends to equipment.' },

{ name:"Summon Nature's Ally V", school:'Conjuration [summoning]',
  level:{druid:5},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 5th-level nature creature or multiples of lower-level creatures.' },

{ name:'Telekinesis', school:'Transmutation',
  level:{sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Long', duration:'Concentration up to 1 round/level',
  description:'Move up to 25 lbs/level (max 375 lbs). Or make violent thrust: 1d6/25 lbs (max 15d6). Will negates.' },

{ name:'Transmute Mud to Rock', school:'Transmutation [earth]',
  level:{druid:5,sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Medium', duration:'Permanent',
  description:'Transforms two 10-ft cubes/level of mud into rock. Creatures in mud must escape (Ref) or be caught.' },

{ name:'Transmute Rock to Mud', school:'Transmutation [earth]',
  level:{druid:5,sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'Medium', duration:'Permanent/concentration',
  description:'Two 10-ft cubes/level of rock become mud. 4d8 damage from falling stone. Caster can reconvert.' },

{ name:'Waves of Fatigue', school:'Necromancy',
  level:{sorcerer:5,wizard:5},
  castingTime:'1 standard', range:'30-ft cone', duration:'Instantaneous',
  description:'All in cone become fatigued. No save. Exhausted creatures become exhausted.' },

// Level 6
{ name:'Acid Fog', school:'Conjuration [creation, acid]',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Fog like solid fog but also deals 2d6 acid/round. Cannot run or charge through.' },

{ name:'Antimagic Field', school:'Abjuration',
  level:{cleric:8,warpriest:8,sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'10-ft radius', duration:'10 min/level',
  description:'Suppresses all magical effects within 10-ft emanation centered on you.' },

{ name:'Chain Lightning', school:'Evocation [electricity]',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Long', duration:'Instantaneous',
  description:'Primary target: 1d6/level (max 20d6). Secondary targets (up to 1/level): half damage. Reflex half.' },

{ name:'Circle of Death', school:'Necromancy [death]',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Kills 1d4 HD/level (max 20d4) of living creatures under 9 HD in a 40-ft burst. Fort negates.' },

{ name:'Contingency', school:'Evocation',
  level:{sorcerer:6,wizard:6},
  castingTime:'at least 10 minutes', range:'Personal', duration:'1 day/level or until triggered',
  description:'Set a spell to trigger automatically under specified circumstances.' },

{ name:'Control Water', school:'Transmutation [water]',
  level:{cleric:4,warpriest:4,druid:4,sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Long', duration:'10 min/level',
  description:'Raise/lower water up to 2 ft/level over a 10 sq ft/level area.' },

{ name:'Create Undead', school:'Necromancy [evil]',
  level:{cleric:6,warpriest:6,sorcerer:6,wizard:6},
  castingTime:'1 hour', range:'Close', duration:'Instantaneous',
  description:'Create ghouls (CL 11), shadows (CL 13), ghasts (CL 15), or wights (CL 17).' },

{ name:'Disintegrate', school:'Transmutation',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Ray disintegrates one creature or object. 2d6/level damage (max 40d6); Fort partial (5d6). Dusts things.' },

{ name:'Eyebite', school:'Necromancy',
  level:{sorcerer:6,wizard:6,bard:6},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'Caster level check vs HD — comatose/panicked/sickened for 10 min. Fort negates.' },

{ name:'Flesh to Stone', school:'Transmutation',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Turns subject creature into statue. Fort negates.' },

{ name:'Greater Heroism', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:6,wizard:6,bard:5},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'+4 morale bonus attacks/saves/skill checks. +4 vs fear, +2d10 temporary hp.' },

{ name:"Mass Bear's Endurance", school:'Transmutation',
  level:{cleric:6,warpriest:6,druid:6,sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Close', duration:'1 min/level',
  description:'+4 enhancement to Con for all subjects in range.' },

{ name:'Mislead', school:'Illusion [figment, glamer]',
  level:{sorcerer:6,wizard:6,bard:5},
  castingTime:'1 standard', range:'Close', duration:'1 round/level and concentration +3 rounds',
  description:'Turns you invisible and creates an illusory double.' },

{ name:'Move Earth', school:'Transmutation [earth]',
  level:{druid:6,sorcerer:6,wizard:6},
  castingTime:'See text', range:'Long', duration:'Instantaneous',
  description:'Digs trenches, build hills, and raises ridges. 750 lbs/CL moved per 10 minutes of casting.' },

{ name:'Repulsion', school:'Abjuration',
  level:{cleric:7,warpriest:7,sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Up to 10 ft/level', duration:'1 round/level',
  description:'Creatures cannot approach within 10 ft/level. Will negates.' },

{ name:'Stone to Flesh', school:'Transmutation',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Restores petrified creature or transforms stone into flesh. Fort (DC 15) or dead.' },

{ name:'Summon Monster VI', school:'Conjuration [summoning]',
  level:{cleric:6,warpriest:6,sorcerer:6,wizard:6},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 6th-level creature or multiples of lower-level creatures.' },

{ name:"Summon Nature's Ally VI", school:'Conjuration [summoning]',
  level:{druid:6},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 6th-level nature creature or multiples of lower-level creatures.' },

{ name:'True Seeing', school:'Divination',
  level:{cleric:5,warpriest:5,druid:7,sorcerer:6,wizard:6,inquisitor:5},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'See all things as they actually are within 120 ft.' },

// Level 7
{ name:'Delayed Blast Fireball', school:'Evocation [fire]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Long', duration:'5 rounds or until discharged',
  description:'1d6/level (max 20d6) fire in 20-ft radius. Reflex half. Can delay up to 5 rounds.' },

{ name:'Finger of Death', school:'Necromancy [death]',
  level:{druid:8,sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Fort save or die. On save: 3d6+CL damage.' },

{ name:'Form of the Dragon I', school:'Transmutation [polymorph]',
  level:{sorcerer:6,wizard:6},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'Become Medium dragon. +4 Str, +2 Con, +4 natural armor, bite 2d6, 2 claws 1d8, wings 60 ft fly.' },

{ name:'Grasping Hand', school:'Evocation [force]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Large hand grapples creatures. CMB = caster level + Str mod (as Str 28 = +9).' },

{ name:'Greater Arcane Sight', school:'Divination',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'As arcane sight, but also know spell-like abilities and identify the spells on sight.' },

{ name:'Greater Scrying', school:'Divination [scrying]',
  level:{cleric:7,warpriest:7,druid:7,sorcerer:7,wizard:7,bard:6},
  castingTime:'1 standard', range:'Unlimited', duration:'1 hour/level',
  description:'As scrying but instant and longer duration.' },

{ name:'Greater Teleport', school:'Conjuration [teleportation]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Personal and Touch', duration:'Instantaneous',
  description:'Transport yourself and up to 8 others to any known location. No error possible.' },

{ name:'Insanity', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Medium', duration:'Instantaneous',
  description:'Subject permanently confused. Will negates.' },

{ name:"Mage's Sword", school:'Evocation [force]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Close', duration:'1 round/level',
  description:'Floating force blade attacks on command: +3 attack, 4d6+3 force damage. CL+Int mod to hit.' },

{ name:'Phase Door', school:'Conjuration [creation]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'0 ft', duration:'1 use/2 levels',
  description:'Creates ethereal passage through solid material, up to 10 ft × CL thickness.' },

{ name:'Power Word Blind', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'Close', duration:'See text',
  description:'Blinds target ≤200 hp permanently (can be cured). ≤100 hp: 1d4+1 minutes. >200 hp: 1 round.' },

{ name:'Simulacrum', school:'Illusion [shadow]',
  level:{sorcerer:7,wizard:7},
  castingTime:'12 hours', range:'0 ft', duration:'Instantaneous',
  description:'Creates duplicate of a creature with 51-60% of original hp and abilities. Obeys caster.' },

{ name:"Summon Nature's Ally VII", school:'Conjuration [summoning]',
  level:{druid:7},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 7th-level nature creature or multiples of lower-level creatures.' },

{ name:'Symbol of Stunning', school:'Enchantment [compulsion, mind-affecting]',
  level:{cleric:7,warpriest:7,sorcerer:7,wizard:7},
  castingTime:'10 minutes', range:'0 ft', duration:'See text',
  description:'When read, stuns creatures in 60-ft radius for 1d6 rounds. Will negates.' },

{ name:'Waves of Exhaustion', school:'Necromancy',
  level:{sorcerer:7,wizard:7},
  castingTime:'1 standard', range:'60-ft cone', duration:'Instantaneous',
  description:'All in cone become exhausted. No save.' },

// Level 8
{ name:'Antipathy', school:'Enchantment [compulsion, emotion, mind-affecting]',
  level:{druid:9,sorcerer:8,wizard:8},
  castingTime:'1 hour', range:'Close', duration:'2 hours/level',
  description:'Object or location repels certain creatures. Will: shaken while near.' },

{ name:'Clone', school:'Necromancy',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 hour', range:'0 ft', duration:'Instantaneous',
  description:'Duplicate of subject activates when original dies. No level loss. Requires piece of creature.' },

{ name:'Demand', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:8,wizard:8},
  castingTime:'10 minutes', range:'Unlimited', duration:'See text',
  description:'As sending but also suggests course of action. Will negates suggestion portion.' },

{ name:'Discern Location', school:'Divination',
  level:{cleric:8,warpriest:8,sorcerer:8,wizard:8},
  castingTime:'10 minutes', range:'Unlimited', duration:'Instantaneous',
  description:'Reveals exact location of creature or object. Nothing can block this spell.' },

{ name:'Greater Planar Binding', school:'Conjuration [calling]',
  level:{sorcerer:8,wizard:8},
  castingTime:'10 minutes', range:'Close', duration:'Instantaneous',
  description:'As planar binding but to 18 HD outsider. Multiple creatures up to 18 HD total.' },

{ name:'Horrid Wilting', school:'Necromancy',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 standard', range:'Long', duration:'Instantaneous',
  description:'1d6/level (max 20d6) damage by dehydrating creatures. Reflex half. Undead unaffected.' },

{ name:'Incendiary Cloud', school:'Conjuration [creation, fire]',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Cloud deals 6d6 fire damage/round. Reflex half. Moves away from caster.' },

{ name:'Mass Charm Monster', school:'Enchantment [charm, mind-affecting]',
  level:{sorcerer:8,wizard:8,bard:6},
  castingTime:'1 standard', range:'Close', duration:'1 day/level',
  description:'As charm monster but affects 1 creature/level up to 2 HD/level. Will negates.' },

{ name:'Mind Blank', school:'Abjuration',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 standard', range:'Close', duration:'24 hours',
  description:'Subject immune to mind-affecting, divination (including discern location), and enchantment effects.' },

{ name:'Moment of Prescience', school:'Divination',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 standard', range:'Personal', duration:'1 hour/level or until discharged',
  description:'+1/level (max +25) insight bonus on any one attack roll, saving throw, or skill check.' },

{ name:'Power Word Stun', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 standard', range:'Close', duration:'See text',
  description:'Stuns target ≤150 hp. ≤50 hp: 4d4 rounds. ≤100 hp: 2d4 rounds. ≤150 hp: 1d4 rounds.' },

{ name:'Summon Monster VIII', school:'Conjuration [summoning]',
  level:{cleric:8,sorcerer:8,wizard:8},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 8th-level creature or multiples of lower-level creatures.' },

{ name:"Summon Nature's Ally VIII", school:'Conjuration [summoning]',
  level:{druid:8},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 8th-level nature creature or multiples of lower-level creatures.' },

{ name:'Sympathy', school:'Enchantment [compulsion, mind-affecting]',
  level:{druid:9,sorcerer:8,wizard:8},
  castingTime:'1 hour', range:'Close', duration:'2 hours/level',
  description:'Object or location attracts certain creatures. Will: must approach while compelled.' },

{ name:'Temporal Stasis', school:'Transmutation',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 standard', range:'Touch', duration:'Permanent',
  description:'Put creature into stasis. Fort negates. Need dispel magic or wish to remove.' },

{ name:'Trap the Soul', school:'Conjuration [summoning]',
  level:{sorcerer:8,wizard:8},
  castingTime:'1 standard', range:'Close', duration:'Permanent',
  description:'Traps soul in gem. Word: Will negates. Object: automatic on touch. Must prepare gem.' },

// Level 9
{ name:'Astral Projection', school:'Necromancy',
  level:{cleric:9,warpriest:9,sorcerer:9,wizard:9},
  castingTime:'30 minutes', range:'Touch', duration:'See text',
  description:'Project you and companions onto the Astral Plane.' },

{ name:'Dominate Monster', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:9,wizard:9},
  castingTime:'1 round', range:'Close', duration:'1 day/level',
  description:'As dominate person but any creature. Will negates.' },

{ name:'Foresight', school:'Divination',
  level:{druid:9,sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Personal or Touch', duration:'10 min/level',
  description:'Grants sixth sense for danger. Never surprised or flat-footed. +2 AC and Reflex. Warned of imminent danger.' },

{ name:'Gate', school:'Conjuration [calling, creation]',
  level:{cleric:9,warpriest:9,sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Medium', duration:'Concentration up to 1 round/level',
  description:'Connects two planes. Can call creatures (to 20 HD) or as teleportation circle.' },

{ name:"Mage's Disjunction", school:'Abjuration',
  level:{sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Dispels all spells and magic effects in a 40-ft area. Items may be destroyed (1% per CL).' },

{ name:'Power Word Kill', school:'Enchantment [compulsion, mind-affecting, death]',
  level:{sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Kills target with ≤100 hp. No save.' },

{ name:'Shapechange', school:'Transmutation [polymorph]',
  level:{druid:9,sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'Assume any form of any creature. Change form as standard action.' },

{ name:'Soul Bind', school:'Necromancy',
  level:{cleric:9,warpriest:9,sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Close', duration:'Permanent',
  description:'Traps soul of deceased creature in gem. Prevents raise dead/resurrection.' },

{ name:'Summon Monster IX', school:'Conjuration [summoning]',
  level:{cleric:9,sorcerer:9,wizard:9},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 9th-level creature or multiples of lower-level creatures.' },

{ name:"Summon Nature's Ally IX", school:'Conjuration [summoning]',
  level:{druid:9},
  castingTime:'1 round', range:'Close', duration:'1 round/level',
  description:'Summons one 9th-level nature creature or multiples of lower-level creatures.' },

{ name:'Time Stop', school:'Transmutation',
  level:{sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'Personal', duration:'1d4+1 rounds',
  description:'You act freely for 1d4+1 rounds while others are frozen in time.' },

{ name:'Wish', school:'Universal',
  level:{sorcerer:9,wizard:9},
  castingTime:'1 standard', range:'See text', duration:'See text',
  description:'As limited wish but no restrictions. Can duplicate any spell, wish for material things, or other effects. 25,000 gp material component.' },

// ══════════════════════════════════════════════════════════════════
// BARD SPELLS
// ══════════════════════════════════════════════════════════════════
{ name:'Countersong', school:'Abjuration',
  level:{bard:0},
  castingTime:'1 standard', range:'30 ft', duration:'Rounds/level',
  description:'Counter magical effects that depend on sound. Perform check vs spell DC.' },

{ name:'Cure Light Wounds (Bard)', school:'Conjuration [healing]',
  level:{bard:2},
  castingTime:'1 standard', range:'Touch', duration:'Instantaneous',
  description:'Cures 1d8+1/level (max +5) hit points.' },

{ name:'Heroism', school:'Enchantment [compulsion, mind-affecting]',
  level:{sorcerer:3,wizard:3,bard:2},
  castingTime:'1 standard', range:'Touch', duration:'10 min/level',
  description:'+2 morale bonus on attack rolls, saves, and skill checks.' },

{ name:'Glibness', school:'Transmutation',
  level:{bard:3},
  castingTime:'1 standard', range:'Personal', duration:'10 min/level',
  description:'+20 on Bluff checks. Immune to detect lies spells unless caster succeeds at CL check.' },

{ name:'Shout', school:'Evocation [sonic]',
  level:{sorcerer:4,wizard:4,bard:4},
  castingTime:'1 standard', range:'30-ft cone', duration:'Instantaneous',
  description:'5d6 sonic damage; Fort: deafened 2d6 rounds. Objects in area: DC 15 Fort or break.' },

{ name:'Song of Discord', school:'Enchantment [compulsion, mind-affecting]',
  level:{bard:5},
  castingTime:'1 standard', range:'Medium', duration:'1 round/level',
  description:'Forces subjects to attack nearby creatures 50% of the time each round.' },

{ name:'Greater Shout', school:'Evocation [sonic]',
  level:{sorcerer:8,wizard:8,bard:6},
  castingTime:'1 standard', range:'60-ft cone', duration:'Instantaneous',
  description:'10d6 sonic damage. Fort: deafened 4d6 rounds, stunned 1 round. Will: not stunned.' },

// ══════════════════════════════════════════════════════════════════
// PALADIN SPELLS
// ══════════════════════════════════════════════════════════════════
{ name:'Bless Weapon', school:'Transmutation',
  level:{paladin:1},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'Weapon automatically confirms critical hits vs evil creatures. Aligned as good for DR.' },

{ name:'Virtue', school:'Transmutation',
  level:{cleric:0,warpriest:0,druid:0,paladin:0},
  castingTime:'1 standard', range:'Touch', duration:'1 minute',
  description:'Subject gains 1 temporary hp.' },

{ name:'Litany of Defense', school:'Transmutation',
  level:{paladin:2},
  castingTime:'1 swift', range:'Personal', duration:'1 round',
  description:'+4 sacred bonus to AC for 1 round.' },

{ name:'Divine Bond', school:'Transmutation',
  level:{paladin:3},
  castingTime:'1 standard', range:'Touch', duration:'1 min/level',
  description:'+1 enhancement per 3 levels to a bonded weapon or mount.' },

{ name:'Mark of Justice', school:'Necromancy',
  level:{cleric:5,warpriest:5,paladin:4},
  castingTime:'10 minutes', range:'Touch', duration:'Permanent',
  description:'Designates an action that will activate a bestow curse effect on the subject.' },

// ══════════════════════════════════════════════════════════════════
// RANGER SPELLS
// ══════════════════════════════════════════════════════════════════
{ name:'Animal Messenger', school:'Enchantment [compulsion, mind-affecting]',
  level:{druid:2,ranger:1,bard:2},
  castingTime:'1 minute', range:'Close', duration:'1 day/level',
  description:'Sends a Tiny animal to a specific place. Can carry small message.' },

{ name:'Delay Poison', school:'Conjuration [healing]',
  level:{cleric:2,warpriest:2,druid:2,paladin:2,ranger:1,bard:2,inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'Stops all poison effects in the subject until spell ends.' },

{ name:'Pass without Trace', school:'Transmutation',
  level:{druid:1,ranger:1},
  castingTime:'1 standard', range:'Touch', duration:'1 hour/level',
  description:'One subject leaves no tracks or scent. Cannot be tracked by nonmagical means.' },

{ name:'Spike Growth', school:'Transmutation',
  level:{druid:3,ranger:2},
  castingTime:'1 standard', range:'Medium', duration:'1 hour/level',
  description:'Grow spikes from terrain in 20-ft radius. 1d4 damage per 5 ft moved through. Reflex or slowed.' },

{ name:'Tree Stride', school:'Conjuration [teleportation]',
  level:{druid:5,ranger:4},
  castingTime:'1 standard', range:'Personal', duration:'1 hour/level or until used',
  description:'Teleport from one tree to another of the same type within 3,000 ft.' },

// ══════════════════════════════════════════════════════════════════
// INQUISITOR SPELLS
// ══════════════════════════════════════════════════════════════════
{ name:'Expeditious Retreat', school:'Transmutation',
  level:{sorcerer:1,wizard:1,bard:1,inquisitor:1},
  castingTime:'1 standard', range:'Personal', duration:'1 min/level',
  description:'+30 ft enhancement bonus to your land speed.' },

{ name:'Forbid Action', school:'Enchantment [compulsion, mind-affecting]',
  level:{inquisitor:1},
  castingTime:'1 standard', range:'Close', duration:'1 round',
  description:'Target compelled to not take one action type (attack, cast spells, etc.) for 1 round. Will negates.' },

{ name:'True Strike', school:'Divination',
  level:{sorcerer:1,wizard:1,inquisitor:1},
  castingTime:'1 standard', range:'Personal', duration:'Until next attack',
  description:'+20 insight bonus on next single attack roll. Ignore miss chances.' },

{ name:'Bloodhound', school:'Transmutation',
  level:{inquisitor:2,ranger:1},
  castingTime:'1 standard', range:'Personal', duration:'1 hour/level',
  description:'+10 enhancement bonus on Perception to track by scent. Gain scent ability if you lack it.' },

{ name:'Flames of the Faithful', school:'Transmutation',
  level:{inquisitor:2},
  castingTime:'1 standard', range:'Touch', duration:'1 round/level',
  description:'Weapon gains flaming quality (1d6 fire). If you have judgment active: flaming burst quality.' },

{ name:'Banishment', school:'Abjuration',
  level:{cleric:6,warpriest:6,sorcerer:7,wizard:7,inquisitor:6},
  castingTime:'1 standard', range:'Close', duration:'Instantaneous',
  description:'Banishes 2 HD/level of extraplanar creatures. Will negates.' },

{ name:'Stalwart Pact', school:'Necromancy',
  level:{inquisitor:4},
  castingTime:'1 minute', range:'Touch', duration:'1 day/level',
  description:'If reduced to 0 hp, subject gains +4 morale on saves, +4 on attack rolls, and 3 temporary hp/level for 3 rounds.' },

];

function getSpellByName(name) {
  return SPELLS_DB.find(s => s.name.toLowerCase() === name.toLowerCase());
}

function searchSpells(query, classFilter) {
  const q = (query || '').toLowerCase();
  return SPELLS_DB.filter(s => {
    const nameMatch = s.name.toLowerCase().includes(q);
    if (!nameMatch) return false;
    if (!classFilter) return true;
    return s.level && s.level[classFilter] !== undefined;
  }).slice(0, 20);
}
