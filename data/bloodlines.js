/* Pathfinder 1e — Sorcerer & Bloodrager Bloodlines
   Source: CRB p.70-89, APG, UM, ACG
   Each bloodline: arcana, class skills, bonus spells, bonus feats, powers per level */
'use strict';

const SORCERER_BLOODLINES = {

  'Aberrant': {
    desc: 'There is a taint in your blood, one that is both alien and bizarre. You tend to think in odd ways, approaching problems from an angle that most would not expect.',
    arcana: 'Whenever you cast a spell of the polymorph subschool, increase the duration by 50% (minimum 1 round). This bonus does not stack with the increase granted by the Extend Spell feat.',
    classSkills: ['k_dungeoneering','perception'],
    bonusSpells: { 3:'Enlarge Person', 5:'See Invisibility', 7:'Tongues', 9:'Black Tentacles', 11:'Feeblemind', 13:'Veil', 15:'Plane Shift', 17:'Mind Blank', 19:'Shapechange' },
    bonusFeats: ['Combat Casting','Improved Disarm','Improved Grapple','Improved Initiative','Improved Unarmed Strike','Iron Will','Silent Spell','Skill Focus (Knowledge: dungeoneering)'],
    powers: {
      1:  { name:'Acidic Ray', desc:'Starting at 1st level, you can fire an acidic ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of acid damage + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Long Limbs', desc:'At 3rd level, your reach increases by 5 feet whenever you are making a melee touch attack. This ability does not increase your threatened area. At 11th level, this bonus to your reach increases to 10 feet. At 17th level, this bonus to your reach increases to 15 feet.' },
      9:  { name:'Unusual Anatomy', desc:'At 9th level, your anatomy becomes even more unnatural. Each time you are critically hit, there is a 25% chance that the critical hit is negated and damage is instead rolled normally. At 13th level, this chance increases to 50%.' },
      15: { name:'Alien Resistance', desc:'At 15th level, you gain spell resistance equal to your sorcerer level + 10.' },
      20: { name:'Aberrant Form', desc:'At 20th level, your body becomes truly unnatural. You are immune to critical hits and sneak attack damage. You gain blindsight with a range of 60 feet. Your bloodline arcana causes all polymorph spells you cast to have their duration doubled (as per Extend Spell).' },
    },
  },

  'Abyssal': {
    desc: 'Somewhere in your family\'s history, a demon fell in love with your ancestor, or perhaps ravaged them against their will. One way or another, demonic power flows through your family.',
    arcana: 'Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/good equal to ½ your sorcerer level (minimum 1). This does not stack with any DR the creature might have.',
    classSkills: ['k_planes','survival'],
    bonusSpells: { 3:'Cause Fear', 5:'Bull\'s Strength', 7:'Rage', 9:'Stoneskin', 11:'Dismissal', 13:'Transformation', 15:'Greater Teleport', 17:'Unholy Aura', 19:'Summon Monster IX' },
    bonusFeats: ['Augment Summoning','Cleave','Empower Spell','Great Fortitude','Improved Bull Rush','Improved Sunder','Power Attack','Skill Focus (Knowledge: planes)'],
    powers: {
      1:  { name:'Claws', desc:'Starting at 1st level, you can grow claws as a free action. These claws are treated as natural weapons, allowing you to make two claw attacks as a full attack action using your full base attack bonus. Each of these attacks deals 1d4 points of damage plus your Strength modifier (1d3 if Small). At 5th level, these claws are considered magic weapons for overcoming DR. At 7th level, the damage increases by one step. At 11th level, the claws deal an additional 1d6 points of acid, cold, electricity, or fire damage (your choice when you attack). You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier. These rounds do not need to be consecutive.' },
      3:  { name:'Demon Resistances', desc:'At 3rd level, you gain resist electricity 5 and resist poison 5. At 9th level, your resistances increase to 10.' },
      9:  { name:'Strength of the Abyss', desc:'At 9th level, you gain a +2 inherent bonus to Strength. This bonus increases to +4 at 13th level and +6 at 17th level.' },
      15: { name:'Added Summonings', desc:'At 15th level, whenever you summon a demon or creature with the chaotic subtype using a summon monster spell, you summon one additional creature of the same kind.' },
      20: { name:'Demonic Might', desc:'At 20th level, the power of the Abyss flows through you. You gain immunity to electricity and poison, resist acid 10, resist cold 10, and resist fire 10. You also gain telepathy with a range of 60 feet and the ability to speak Abyssal.' },
    },
  },

  'Arcane': {
    desc: 'One of your parents was a powerful wizard, or you were born into a family with a long tradition of wizardry. Magic has always come easily to you.',
    arcana: 'Whenever you apply a metamagic feat to a spell that increases the slot used by at least one level, increase the spell\'s DC by +1. This bonus does not stack with the bonus granted by the Spell Focus feat.',
    classSkills: ['k_arcana','spellcraft'],
    bonusSpells: { 3:'Magic Aura', 5:'Invisibility', 7:'Dispel Magic', 9:'Dimension Door', 11:'Overland Flight', 13:'True Seeing', 15:'Greater Teleport', 17:'Power Word Stun', 19:'Wish' },
    bonusFeats: ['Combat Casting','Improved Counterspell','Improved Initiative','Iron Will','Scribe Scroll','Skill Focus (Knowledge: arcana)','Spell Focus','Still Spell'],
    powers: {
      1:  { name:'Arcane Bond', desc:'At 1st level, you gain an arcane bond, as a wizard equal to your sorcerer level. Your sorcerer levels stack with any wizard levels you possess when determining the powers of your familiar or bonded object. This ability does not allow you to have both a familiar and a bonded item.' },
      3:  { name:'New Arcana', desc:'At 3rd level, you can add any one spell from the sorcerer/wizard spell list to your list of spells known. This spell must be of a level that you are capable of casting. You can also add additional spells at 9th level and 15th level.' },
      9:  { name:'School Power', desc:'At 9th level, pick one school of magic. The DC for any spells you cast from that school increases by +2. This bonus stacks with the bonus granted by Spell Focus.' },
      15: { name:'Metamagic Mastery', desc:'At 15th level, you can apply any one metamagic feat you know to a spell you are about to cast without increasing the casting time or spell slot required. You must still expend a higher-level spell slot. You can use this ability once per day at 15th level and one additional time per day for every three sorcerer levels you possess beyond 15th.' },
      20: { name:'Arcane Apotheosis', desc:'At 20th level, your magical heritage becomes manifest. You can add any metamagic feats that you know to your spells without increasing their level, once per day each.' },
    },
  },

  'Celestial': {
    desc: 'Your bloodline traces back to the heavens, and holy power flows through your veins.',
    arcana: 'Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/evil equal to ½ your sorcerer level (minimum 1). This does not stack with any DR the creature might have.',
    classSkills: ['heal','k_planes'],
    bonusSpells: { 3:'Bless', 5:'Resist Energy', 7:'Magic Circle against Evil', 9:'Remove Curse', 11:'Flame Strike', 13:'Greater Dispel Magic', 15:'Banishment', 17:'Sunburst', 19:'Gate' },
    bonusFeats: ['Dodge','Extend Spell','Iron Will','Mobility','Mounted Combat','Ride-By Attack','Skill Focus (Knowledge: religion)','Weapon Focus'],
    powers: {
      1:  { name:'Heavenly Fire', desc:'Starting at 1st level, you can unleash a ray of heavenly fire as a standard action, targeting any foe within 30 feet as a ranged touch attack. Against evil creatures, this ray deals 1d4 points of damage + 1 for every two sorcerer levels you possess. This damage is divine and not subject to energy resistance or immunity. This ray heals good creatures of 1d4 hit points + 1 for every two sorcerer levels you possess. A neutral creature is neither harmed nor healed. You can use this ability a number of times per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Celestial Resistances', desc:'At 3rd level, you gain resist acid 5 and resist cold 5. At 9th level, your resistances increase to 10.' },
      9:  { name:'Wings of Heaven', desc:'At 9th level, you can grow wings of pure white light from your back as a swift action. These wings give you a fly speed of 60 feet with good maneuverability. You can use these wings for 1 minute per sorcerer level per day. This duration does not need to be consecutive.' },
      15: { name:'Ascension', desc:'At 15th level, you can use plane shift to travel to the good-aligned outer planes (Elysium, Heaven, Nirvana) as a spell-like ability once per day. You gain immunity to fire and petrification, resistance to acid 10 and cold 10, and you see in magical darkness.' },
      20: { name:'Conviction', desc:'At 20th level, you are infused with divine power. You gain immunity to acid, cold, and petrification. You gain resist electricity 10 and resist fire 10. You gain a +4 inherent bonus to your Charisma score. Once per day, you can cast holy word as a spell-like ability.' },
    },
  },

  'Destined': {
    desc: 'Your future is foretold—a great destiny awaits you, and that destiny has imbued you with power.',
    arcana: 'Whenever you cast a spell with a duration of 1 round or longer, you gain a luck bonus on saving throws equal to the spell\'s level. This lasts a number of rounds equal to the level of the spell cast.',
    classSkills: ['k_history','k_nobility'],
    bonusSpells: { 3:'Alarm', 5:'Blur', 7:'Protection from Energy', 9:'Freedom of Movement', 11:'Break Enchantment', 13:'Mislead', 15:'Spell Turning', 17:'Moment of Prescience', 19:'Foresight' },
    bonusFeats: ['Arcane Strike','Diehard','Endurance','Leadership','Lightning Reflexes','Maximize Spell','Skill Focus (Knowledge: history)','Weapon Focus'],
    powers: {
      1:  { name:'Touch of Destiny', desc:'At 1st level, you can touch a creature as a standard action, giving it an insight bonus on attack rolls, skill checks, ability checks, and saving throws equal to ½ your sorcerer level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Fated', desc:'Starting at 3rd level, you gain a +1 luck bonus on all of your saving throws and to your AC during surprise rounds and when you are otherwise unaware of an attack. At 7th level and every four levels thereafter, this bonus increases by +1.' },
      9:  { name:'It Was Meant to Be', desc:'At 9th level, once per day you may reroll any one attack roll, critical hit confirmation roll, or level check made to overcome spell resistance. You must decide to use this ability after the first roll is made but before the results are revealed. You must take the second roll, even if it is lower.' },
      15: { name:'Within Reach', desc:'At 15th level, your ultimate destiny is nearly at hand. Once per day, when your death is imminent, you automatically stabilize and are immune to death effects for 1 round per level.' },
      20: { name:'Destiny Realized', desc:'At 20th level, your moment of destiny is at hand. Any critical hit made against you has a 50% chance of being negated and treated as a normal hit. Once per day, when you make a critical hit, it is automatically maximized as if using the Maximize Spell feat.' },
    },
  },

  'Draconic': {
    desc: 'At some point in your family\'s history, a dragon interbred with your bloodline, and now its ancient power flows through your veins.',
    arcana: 'Whenever you cast a spell with an energy descriptor that matches your draconic energy type, that spell deals +1 point of damage per die rolled.',
    classSkills: ['k_arcana','perception'],
    dragonTypes: {
      'Black':  { energy:'acid',        breath:'60-ft line' },
      'Blue':   { energy:'electricity', breath:'60-ft line' },
      'Green':  { energy:'acid',        breath:'30-ft cone' },
      'Red':    { energy:'fire',        breath:'30-ft cone' },
      'White':  { energy:'cold',        breath:'30-ft cone' },
      'Brass':  { energy:'fire',        breath:'60-ft line' },
      'Bronze': { energy:'electricity', breath:'60-ft line' },
      'Copper': { energy:'acid',        breath:'60-ft line' },
      'Gold':   { energy:'fire',        breath:'30-ft cone' },
      'Silver': { energy:'cold',        breath:'30-ft cone' },
    },
    bonusSpells: { 3:'Mage Armor', 5:'Resist Energy', 7:'Fly', 9:'Fear', 11:'Spell Resistance', 13:'Form of the Dragon I', 15:'Form of the Dragon II', 17:'Form of the Dragon III', 19:'Wish' },
    bonusFeats: ['Blind-Fight','Great Fortitude','Improved Initiative','Power Attack','Quicken Spell','Skill Focus (Fly)','Skill Focus (Knowledge: arcana)','Toughness'],
    powers: {
      1:  { name:'Claws', desc:'At 1st level, you can grow claws as a free action. These claws are treated as natural weapons, allowing you to make two claw attacks as a full attack action using your full base attack bonus. Each of these attacks deals 1d4 points of damage plus your Strength modifier (1d3 if Small). At 5th level, these claws are considered magic weapons for the purpose of overcoming DR. At 7th level, the damage increases by one step. At 11th level, the claws deal an additional 1d6 points of energy damage of your draconic energy type. You can use your claws for a number of rounds per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Dragon Resistances', desc:'At 3rd level, you gain resist 5 against your energy type and a +1 natural armor bonus. At 9th level, your energy resistance increases to 10 and natural armor bonus increases to +2. At 15th level, your energy resistance increases to 20 and natural armor bonus increases to +4.' },
      9:  { name:'Breath Weapon', desc:'At 9th level, you gain a breath weapon. This breath weapon deals 1d6 points of damage of your energy type per sorcerer level. Those caught in the area of the breath can attempt a Reflex save (DC 10 + ½ your sorcerer level + your Charisma modifier) to take half damage. You can use this ability once per day at 9th level. At 17th level, you can use this ability twice per day.' },
      15: { name:'Wings', desc:'At 15th level, leathery dragon wings grow from your back as a standard action, giving you a fly speed of 60 feet with average maneuverability. You can dismiss the wings as a free action.' },
      20: { name:'Power of Wyrms', desc:'At 20th level, your draconic heritage becomes manifest. You gain blindsense with a range of 60 feet. You become immune to paralysis, sleep, and damage of your energy type.' },
    },
  },

  'Elemental': {
    desc: 'The power of the elements resides in you, and at times you can hardly control its fury.',
    arcana: 'Whenever you cast a spell that deals energy damage, you can change the type of damage to match your elemental type (air=electricity, earth=acid, fire=fire, water=cold). This also changes the spell\'s type to match.',
    classSkills: ['k_planes','survival'],
    subtypes: {
      'Air':   { energy:'electricity', bonus:'Alertness, Blind-Fight, Combat Expertise' },
      'Earth': { energy:'acid',        bonus:'Defensive Combat Training, Great Fortitude, Power Attack' },
      'Fire':  { energy:'fire',        bonus:'Dodge, Empower Spell, Great Fortitude' },
      'Water': { energy:'cold',        bonus:'Great Fortitude, Iron Will, Skill Focus (Swim)' },
    },
    bonusSpells: { 3:'Burning Hands', 5:'Scorching Ray', 7:'Protection from Energy', 9:'Elemental Body I', 11:'Elemental Body II', 13:'Elemental Body III', 15:'Elemental Body IV', 17:'Summon Monster VIII', 19:'Elemental Swarm' },
    bonusFeats: ['Dodge','Empower Spell','Great Fortitude','Improved Initiative','Lightning Reflexes','Power Attack','Skill Focus (Knowledge: planes)','Toughness'],
    powers: {
      1:  { name:'Elemental Ray', desc:'Starting at 1st level, you can unleash an elemental ray as a standard action, targeting any foe within 30 feet as a ranged touch attack. This ray deals 1d6 points of damage of your energy type + 1 for every two sorcerer levels you possess. You can use this ability a number of times per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Elemental Resistance', desc:'At 3rd level, you gain energy resistance 10 against your energy type. At 9th level, this increases to 20. At 20th level, you gain immunity to your energy type.' },
      9:  { name:'Elemental Blast', desc:'At 9th level, you can unleash a blast of elemental energy. This is a 20-foot-radius burst that deals 1d6 points of energy damage per sorcerer level. Those caught in the area can attempt a Reflex save (DC 10 + ½ sorcerer level + CHA mod) to halve the damage. You can use this ability once per day.' },
      15: { name:'Elemental Movement', desc:'At 15th level, you gain a special movement type based on your element: air (fly 60 ft/perfect), earth (burrow 30 ft), fire (+30 ft speed), water (swim 60 ft).' },
      20: { name:'Elemental Body', desc:'At 20th level, your body becomes infused with elemental energy. You are immune to your energy type, gain the outsider type, and gain the elemental subtype.' },
    },
  },

  'Fey': {
    desc: 'The fey have touched your bloodline, perhaps through a deal made by an ancestor, or perhaps a fey creature is one of your progenitors.',
    arcana: 'Whenever you cast a spell with the compulsion descriptor, increase the spell\'s DC by +2.',
    classSkills: ['bluff','perception'],
    bonusSpells: { 3:'Entangle', 5:'Hideous Laughter', 7:'Deep Slumber', 9:'Poison', 11:'Tree Stride', 13:'Mislead', 15:'Phase Door', 17:'Irresistible Dance', 19:'Shapechange' },
    bonusFeats: ['Dodge','Improved Initiative','Lightning Reflexes','Mobility','Point-Blank Shot','Precise Shot','Quicken Spell','Skill Focus (Knowledge: nature)'],
    powers: {
      1:  { name:'Laughing Touch', desc:'At 1st level, you can cause a creature to burst out laughing for 1 round as a melee touch attack. A laughing creature can only take a move action and cannot cast spells or make attacks. Once a creature has been affected by laughing touch, it is immune to its effects for 24 hours. You can use this ability a number of times per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Woodland Stride', desc:'At 3rd level, you can move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at your normal speed and without taking damage or suffering any other impairment. Thorns, briars, and overgrown areas that have been magically manipulated to impede motion, however, still affect you.' },
      9:  { name:'Fleeting Glance', desc:'At 9th level, you can turn invisible for a number of rounds per day equal to your sorcerer level. This ability functions like invisibility. These rounds need not be consecutive.' },
      15: { name:'Fey Magic', desc:'At 15th level, you may reroll any caster level check made to overcome the spell resistance of an opponent. This ability may be used once per day.' },
      20: { name:'Soul of the Fey', desc:'At 20th level, your soul becomes one with the fey world. You gain immunity to poison and DR 10/cold iron. All animals within 100 feet of you must succeed at a Will save (DC 10 + ½ sorcerer level + CHA mod) or become your servants, as if you had cast dominate animal.' },
    },
  },

  'Infernal': {
    desc: 'Somewhere in your family\'s history, a devil and a mortal joined in an unholy union, and that devil\'s power flows through your bloodline.',
    arcana: 'Whenever you cast a spell of the charm or compulsion subschool, increase the spell\'s DC by +2.',
    classSkills: ['diplomacy','k_planes'],
    bonusSpells: { 3:'Protection from Good', 5:'Scorching Ray', 7:'Suggestion', 9:'Charm Monster', 11:'Dominate Person', 13:'Mass Suggestion', 15:'Greater Teleport', 17:'Power Word Stun', 19:'Meteor Swarm' },
    bonusFeats: ['Blind-Fight','Combat Expertise','Deceitful','Extend Spell','Improved Disarm','Iron Will','Skill Focus (Knowledge: planes)','Spell Penetration'],
    powers: {
      1:  { name:'Corrupting Touch', desc:'At 1st level, you can cause a living creature to become shaken as a melee touch attack. This effect lasts for a number of rounds equal to ½ your sorcerer level (minimum 1). Creatures with more Hit Dice than your sorcerer level are unaffected. You can use this ability a number of times per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Infernal Resistances', desc:'At 3rd level, you gain resist fire 5 and a +2 bonus on saving throws made against poison. At 9th level, your fire resistance increases to 10 and your bonus on poison saves increases to +4.' },
      9:  { name:'Hellfire', desc:'At 9th level, you can call down a column of hellfire. This functions as a fire storm, except that half the damage is fire damage and half is unholy damage. You can use this ability once per day.' },
      15: { name:'On Dark Wings', desc:'At 15th level, you grow large black wings from your back, granting a fly speed of 60 feet with average maneuverability. The sight of these wings is unnerving to good creatures; any good-aligned creature that sees your wings must make a Will save (DC 10 + ½ sorcerer level + CHA mod) or become shaken for 1 round.' },
      20: { name:'Power of the Pit', desc:'At 20th level, your diabolic power reaches its zenith. You gain immunity to fire and poison, and resist acid 10 and cold 10. You can see perfectly in darkness of any kind, even that created by a deeper darkness spell.' },
    },
  },

  'Undead': {
    desc: 'The taint of the grave runs through your family. One of your ancestors was undead, or perhaps they forged a pact with some undying creature.',
    arcana: 'Some undead are susceptible to your powers. Whenever you cast a spell that could affect undead, the DC of the spell increases by +1, even if the spell normally cannot affect undead.',
    classSkills: ['k_arcana','k_religion'],
    bonusSpells: { 3:'Cause Fear', 5:'False Life', 7:'Animate Dead', 9:'Enervation', 11:'Waves of Fatigue', 13:'Undeath to Death', 15:'Finger of Death', 17:'Horrid Wilting', 19:'Energy Drain' },
    bonusFeats: ['Combat Casting','Diehard','Endurance','Iron Will','Skill Focus (Knowledge: religion)','Spell Focus','Still Spell','Toughness'],
    powers: {
      1:  { name:'Grave Touch', desc:'Starting at 1st level, you can make a melee touch attack as a standard action that causes a living creature to become shaken for a number of rounds equal to ½ your sorcerer level (minimum 1). If you touch a shaken creature with this ability, it becomes frightened for 1 round if it has fewer Hit Dice than your sorcerer level. You can use this ability a number of times per day equal to 3 + your Charisma modifier.' },
      3:  { name:'Death\'s Gift', desc:'At 3rd level, you gain resist cold 5 and DR 5/—. At 9th level, your cold resistance increases to 10 and your DR increases to DR 5/—. At 9th level your DR becomes 10/—.' },
      9:  { name:'Grasp of the Dead', desc:'At 9th level, you can cause a swarm of skeletal arms to burst from the ground to rip and tear at your foes as a standard action. These arms function as a spike stones spell, except they affect a 20-foot-square area. You can use this ability once per day.' },
      15: { name:'Incorporeal Form', desc:'At 15th level, you can become incorporeal for 1 round per sorcerer level per day. While incorporeal, you gain the incorporeal subtype. You only take half damage from corporeal sources (except for positive energy, negative energy, force effects, or attacks made with ghost touch weapons). These rounds do not need to be consecutive.' },
      20: { name:'One of Us', desc:'At 20th level, your form is sheathed in a deathly pallor that grants you many of the abilities of the undead. You are immune to cold, nonlethal damage, paralysis, and sleep. You also gain DR 5/—. You do not need to eat, breathe, or sleep.' },
    },
  },

};

// ══════════════════════════════════════════════════════════════════
// BLOODRAGER BLOODLINES
// Source: ACG — simplified powers, same as sorcerer but martially oriented
// ══════════════════════════════════════════════════════════════════
const BLOODRAGER_BLOODLINES = {

  'Aberrant': {
    desc: 'The taint of aberrations runs through your bloodline.',
    powers: {
      4:  { name:'Aberrant Reach', desc:'When raging, your reach increases by 5 feet for melee attacks and reach weapons.' },
      8:  { name:'Unusual Anatomy', desc:'While raging, critical hits against you have a 25% chance to be negated. At 16th level: 50%.' },
      12: { name:'Aberrant Blood', desc:'While raging, you gain a +4 bonus to CMD against grapple and trip maneuvers.' },
      16: { name:'Alien Mind', desc:'While raging, you are immune to mind-affecting effects.' },
      20: { name:'Aberrant Form', desc:'You become immune to critical hits and sneak attack damage. Gain blindsight 60 ft.' },
    },
    bonusSpells: { 7:'Enlarge Person', 10:'See Invisibility', 13:'Displacement', 16:'Black Tentacles' },
  },

  'Abyssal': {
    desc: 'The power of the demon lords infuses your raging blood.',
    powers: {
      4:  { name:'Claws', desc:'While raging, grow claws dealing 1d6 (M) or 1d4 (S). At 8th level, they count as magic. At 12th, add +1d6 elemental damage.' },
      8:  { name:'Demon Resistances', desc:'While raging, resist electricity 10 and resist poison 5.' },
      12: { name:'Strength of the Abyss', desc:'While raging, +2 inherent Strength bonus (increases with level).' },
      16: { name:'Demonic Bulk', desc:'While raging, grow to Large size as enlarge person.' },
      20: { name:'Demonic Might', desc:'Immune to electricity and poison. Resist acid/cold/fire 10.' },
    },
    bonusSpells: { 7:'Cause Fear', 10:'Bull\'s Strength', 13:'Rage', 16:'Stoneskin' },
  },

  'Celestial': {
    desc: 'The blood of angels flows through your veins.',
    powers: {
      4:  { name:'Angelic Attacks', desc:'While raging, melee attacks are treated as good-aligned for DR purposes.' },
      8:  { name:'Celestial Resistances', desc:'While raging, resist acid 10 and resist cold 10.' },
      12: { name:'Wings of Heaven', desc:'While raging, grow wings, gaining fly speed 60 ft (good).' },
      16: { name:'Celestial Healing', desc:'While raging, fast healing 1 per round.' },
      20: { name:'Conviction', desc:'Immune to acid, cold, and petrification. Resist electricity 10 and fire 10.' },
    },
    bonusSpells: { 7:'Bless', 10:'Resist Energy', 13:'Magic Circle against Evil', 16:'Holy Smite' },
  },

  'Draconic': {
    desc: 'Draconic power flows through your blood, granting draconic powers while you rage.',
    powers: {
      4:  { name:'Draconic Claws', desc:'While raging, grow claws dealing 1d6. At 8th: treated as magic. At 12th: +1d6 energy.' },
      8:  { name:'Dragon Resistances', desc:'While raging, resist 5 vs your energy type and +1 natural armor.' },
      12: { name:'Breath Weapon', desc:'Once per rage, breathe energy dealing 6d8. Reflex DC 10+½ level+CHA for half.' },
      16: { name:'Wings', desc:'While raging, grow wings giving fly 60 ft (average).' },
      20: { name:'Power of Wyrms', desc:'Blindsense 60 ft. Immune to paralysis, sleep, and your energy type.' },
    },
    bonusSpells: { 7:'Mage Armor', 10:'Resist Energy', 13:'Fly', 16:'Fear' },
  },

  'Infernal': {
    desc: 'Hellfire flows through your veins.',
    powers: {
      4:  { name:'Corrupting Touch', desc:'While raging, your touch can cause a creature to become shaken (melee touch attack).' },
      8:  { name:'Infernal Resistances', desc:'While raging, resist fire 10 and +2 saves vs poison.' },
      12: { name:'Hellfire Strike', desc:'Once per rage, melee attack deals extra 2d6 fire damage plus 2d6 unholy damage.' },
      16: { name:'Dark Wings', desc:'While raging, grow black wings giving fly 60 ft (average).' },
      20: { name:'Power of the Pit', desc:'Immune to fire and poison. Resist acid 10 and cold 10. See in all darkness.' },
    },
    bonusSpells: { 7:'Protection from Good', 10:'Scorching Ray', 13:'Suggestion', 16:'Charm Monster' },
  },

  'Undead': {
    desc: 'The essence of undeath powers your bloodrage.',
    powers: {
      4:  { name:'Undead Bloodrage', desc:'While raging, gain DR 1/—. Increases by 1 per 4 levels.' },
      8:  { name:'Death\'s Gift', desc:'While raging, resist cold 10 and DR 2/—.' },
      12: { name:'Grave Strike', desc:'While raging, melee attacks are treated as negative energy for overcoming undead immunities.' },
      16: { name:'Incorporeal Form', desc:'Once per rage, become incorporeal for 1 round. 50% miss chance vs corporeal.' },
      20: { name:'One of Us', desc:'Immune to cold, nonlethal, paralysis, sleep. DR 5/—.' },
    },
    bonusSpells: { 7:'Cause Fear', 10:'False Life', 13:'Animate Dead', 16:'Enervation' },
  },

};

// Helper functions
function getBloodline(name) {
  return SORCERER_BLOODLINES[name] || null;
}

function getBloodragerBloodline(name) {
  return BLOODRAGER_BLOODLINES[name] || null;
}

function searchBloodlines(query, type) {
  const db = type === 'bloodrager' ? BLOODRAGER_BLOODLINES : SORCERER_BLOODLINES;
  const q = (query || '').toLowerCase();
  return Object.entries(db)
    .filter(([name]) => !q || name.toLowerCase().includes(q))
    .map(([name, b]) => ({ name, ...b }));
}
