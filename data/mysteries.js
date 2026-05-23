/* Pathfinder 1e — Oracle Mysteries
   Source: APG p.42-57, UM
   20 mysteries with revelations and final revelation
   Each mystery: class skills, bonus spells, revelations (with level prereqs) */
'use strict';

const ORACLE_MYSTERIES = {

  'Battle': {
    desc: 'You are a warpriest of the highest order, sworn to fight and die in your deity\'s service.',
    classSkills: ['intimidate','k_engineering','perception','ride'],
    bonusSpells: { 2:'Enlarge Person', 4:'Bull\'s Strength', 6:'Magic Vestment', 8:'Spell Immunity', 10:'Righteous Might', 12:'Stoneskin', 14:'Transformation', 16:'Frightful Aspect', 18:'Etherealness' },
    revelations: [
      { name:'Battlecry', level:1, desc:'As a standard action, you can unleash an inspiring battlecry. All allies within 100 feet gain a +1 morale bonus on attack rolls and saves against fear for 1 minute. You can use this ability 3 + CHA mod times per day.' },
      { name:'battlefield Clarity', level:1, desc:'Once per day as an immediate action, when you fail a saving throw, you can reroll the saving throw.' },
      { name:'Combat Healer', level:7, desc:'Once per day, you can cast a cure spell (any spell with "cure" in its name) as a swift action.' },
      { name:'Iron Skin', level:5, desc:'Once per day, your skin hardens like iron granting you DR 10/adamantine for 1 minute per oracle level. At 11th level, you can use this ability twice per day.' },
      { name:'Maneuver Mastery', level:1, desc:'Select one combat maneuver (bull rush, disarm, grapple, trip, etc.). Your CMB for that maneuver equals your oracle level + STR modifier + relevant feat bonus. At 7th level, select a second maneuver. At 11th, a third.' },
      { name:'Resiliency', level:1, desc:'Once per day, you can reduce damage taken from a single attack by your oracle level. At 7th, twice per day. At 11th, three times.' },
      { name:'Skill at Arms', level:1, desc:'You gain proficiency in all martial weapons and heavy armor.' },
      { name:'Surprising Charge', level:1, desc:'Once per day, you can move up to your speed as an immediate action. You cannot end this movement in an occupied space.' },
      { name:'War Sight', level:7, desc:'Whenever you roll for initiative, you can roll twice and take either result. At 11th level, you can always act in the surprise round, though if you fail to notice the ambush you act last.' },
      { name:'Weapon Mastery', level:1, desc:'Select one weapon type (e.g., longsword). You gain Weapon Focus with that weapon. At 5th level, you gain Weapon Specialization. At 10th, Greater Weapon Focus. At 15th, Greater Weapon Specialization.' },
    ],
    finalRevelation: { name:'Master of Battle', level:20, desc:'You become a master of combat. You gain DR 10/—, a +4 insight bonus to AC, and you can act normally when confused. All allies within 30 feet gain a +2 morale bonus on attacks, saves, and AC.' },
  },

  'Bones': {
    desc: 'You are one of the few gifted—or cursed—with an intimate knowledge of death and undeath.',
    classSkills: ['bluff','disguise','intimidate','stealth'],
    bonusSpells: { 2:'Cause Fear', 4:'False Life', 6:'Animate Dead', 8:'Fear', 10:'Slay Living', 12:'Create Undead', 14:'Destruction', 16:'Horrid Wilting', 18:'Wail of the Banshee' },
    revelations: [
      { name:'Armor of Bones', level:7, desc:'You can call armor made of bones to protect you. This gives you an armor bonus of +4 and an armor check penalty of –4 for 1 hour per oracle level. At 13th level, the armor bonus increases to +6. You can use this ability once per day.' },
      { name:'Bleeding Wounds', level:1, desc:'Whenever a creature takes damage from one of your spells or abilities, it takes additional bleed damage equal to ½ your CHA modifier (minimum 1).' },
      { name:'Death\'s Touch', level:1, desc:'You can cause terrible wounds to appear on a creature with a melee touch attack. This deals 1d6 points of damage per two oracle levels (minimum 1d6). At 5th level, the damage is doubled against undead.' },
      { name:'Near Death', level:1, desc:'You gain a +2 insight bonus on saves against diseases, mind-affecting effects, and poisons. At 7th level, this bonus increases to +4.' },
      { name:'Raise the Dead', level:7, desc:'As a standard action, you can summon a single skeleton or zombie with HD equal to or less than your oracle level. This undead remains for 1 minute per oracle level before crumbling. You can use this ability once per day, plus one additional time per day at 11th and 15th level.' },
      { name:'Resist Life', level:1, desc:'You can channel negative energy like an undead creature, using it to heal undead or harm living creatures. You gain the ability to channel negative energy to deal damage to living creatures or heal undead as a cleric of your oracle level.' },
      { name:'Soul Siphon', level:11, desc:'Once per day, as a ranged touch attack, you can target a living creature within 30 feet. If the attack hits, you deal 1d6 negative energy damage per two oracle levels. You regain a number of hit points equal to the damage dealt.' },
      { name:'Spirit Walk', level:11, desc:'As a standard action, you can become incorporeal for 1 minute per oracle level. While incorporeal, you gain the incorporeal subtype. You can use this ability once per day.' },
      { name:'Undead Servitude', level:7, desc:'You gain Command Undead as a bonus feat. You can use it a number of times per day equal to 3 + your CHA modifier, using your oracle level as your effective cleric level.' },
      { name:'Voice of the Grave', level:1, desc:'You can speak with dead, as per the spell, for 1 minute per oracle level. You can use this ability once per day.' },
    ],
    finalRevelation: { name:'Death\'s Servant', level:20, desc:'You gain immunity to cold, nonlethal damage, paralysis, and sleep. You are also immune to energy drain and negative energy damage. Once per day, as a standard action, you can cause a creature within 30 feet to die (Fort negates, DC 10 + ½ oracle level + CHA).' },
  },

  'Flame': {
    desc: 'Your connection to fire is deep and abiding.',
    classSkills: ['acrobatics','k_nature','perception','survival'],
    bonusSpells: { 2:'Burning Hands', 4:'Produce Flame', 6:'Resist Energy', 8:'Wall of Fire', 10:'Summon Monster V (fire elementals)', 12:'Fire Seeds', 14:'Fire Storm', 16:'Incendiary Cloud', 18:'Fiery Body' },
    revelations: [
      { name:'Burning Magic', level:1, desc:'Whenever a creature fails a saving throw and takes fire damage from one of your spells, it catches on fire (1d6 fire damage per round for 1d4 rounds, Reflex DC 15 to extinguish).' },
      { name:'Cinder Dance', level:1, desc:'Your base speed increases by 10 feet.' },
      { name:'Fire Breath', level:7, desc:'As a standard action, you can breathe a 30-foot cone of fire dealing 1d4 fire damage per oracle level. A Reflex save halves the damage. You can use this ability once per day at 7th level, and twice per day at 11th.' },
      { name:'Firestorm', level:15, desc:'As a standard action, you can surround yourself with a firestorm that deals 2d6 fire damage to all creatures within 10 feet per round. Creatures that start their turn adjacent to you also take 2d6 fire damage. This lasts for 1 round per oracle level. You can use this once per day.' },
      { name:'Form of Flame', level:9, desc:'As a standard action, you can assume the form of a Small fire elemental, as elemental body I. At 11th level, Medium (elemental body II). At 13th, Large (III). At 15th, Huge (IV). You can use this ability for 1 hour per oracle level per day.' },
      { name:'Gaze of Flames', level:1, desc:'You can see through fire, fog, and smoke without penalty as long as the light is sufficient to see normally.' },
      { name:'Heat Aura', level:7, desc:'As a swift action, you can surround yourself with a 10-foot aura of intense heat for a number of rounds per day equal to your oracle level. All creatures within this aura take 1d6 fire damage per round.' },
      { name:'Molten Skin', level:3, desc:'You gain resist fire 5. This resistance increases to 10 at 7th level and immunity at 17th level.' },
      { name:'Touch of Flame', level:1, desc:'As a standard action, you can perform a melee touch attack that deals 1d6 fire damage per two oracle levels (minimum 1d6). You can use this ability 3 + CHA mod times per day.' },
      { name:'Wings of Fire', level:7, desc:'As a swift action, you can manifest a pair of fiery wings that grant you a fly speed of 60 feet with average maneuverability. You can use these wings for 1 minute per oracle level per day.' },
    ],
    finalRevelation: { name:'Pyromaniac', level:20, desc:'You gain immunity to fire. Any fire damage you deal ignores fire resistance and immunity. You gain the fire subtype.' },
  },

  'Heavens': {
    desc: 'The stars themselves guide your steps and grant you power.',
    classSkills: ['fly','k_arcana','perception','survival'],
    bonusSpells: { 2:'Color Spray', 4:'Hypnotic Pattern', 6:'Daylight', 8:'Rainbow Pattern', 10:'Overland Flight', 12:'Chain Lightning', 14:'Prismatic Spray', 16:'Sunburst', 18:'Meteor Swarm' },
    revelations: [
      { name:'Awesome Display', level:1, desc:'Creatures affected by your illusion (pattern) spells are treated as if they had 2 fewer Hit Dice than they actually have.' },
      { name:'Coat of Many Stars', level:7, desc:'You can conjure a coat of shimmering stars that grants you an armor bonus of +4 and a +1 bonus per four oracle levels. You can use this ability for 1 hour per oracle level per day.' },
      { name:'Guiding Star', level:1, desc:'Whenever you can see the open sky at night, you can determine your precise location. Once per night when outdoors, you can meditate to regain 1 point of mental ability damage.' },
      { name:'Interstellar Void', level:11, desc:'You call upon the frigid emptiness of outer space. This acts as a targeted dispel magic against all active spells on a creature within 30 feet and deals 1d6 cold damage per oracle level.' },
      { name:'Lure of the Heavens', level:1, desc:'Your connection to the heavens is such that you no longer walk upon the earth. You gain the ability to levitate 1-2 inches above the ground, leaving no tracks and ignoring difficult terrain.' },
      { name:'Moonlight Bridge', level:7, desc:'You summon a bridge of moonlight. The bridge can support up to 10 creatures of Large size or smaller per oracle level. It can be up to 10 feet wide and 10 feet per oracle level long.' },
      { name:'Spray of Shooting Stars', level:3, desc:'As a standard action, you can fire 1 + 1 per 5 oracle levels meteors at targets within 30 feet. Each meteor deals 4d6 fire damage. Targets can attempt a Reflex save for half.' },
      { name:'Star Chart', level:1, desc:'As a full-round action, you can study the stars and gain a +10 bonus on any single Knowledge skill check. You can use this ability once per day.' },
      { name:'Starburn', level:15, desc:'Once per day, call down a rain of stars dealing 1d6 fire damage per oracle level in a 30-foot radius. Reflex half.' },
      { name:'Stardust', level:3, desc:'As a standard action, you can throw a handful of stardust. This acts as a faerie fire spell on all creatures within 30 feet.' },
    ],
    finalRevelation: { name:'Dweller in Darkness', level:20, desc:'You can see perfectly in darkness of any kind. You become immune to blindness, dazzle, and visual-based illusions. Once per day, you can summon a greater shadow.' },
  },

  'Life': {
    desc: 'You are a channel of divine power that revitalizes the world.',
    classSkills: ['diplomacy','handle_animal','heal','k_nature'],
    bonusSpells: { 2:'Detect Undead', 4:'Lesser Restoration', 6:'Neutralize Poison', 8:'Restoration', 10:'Breath of Life', 12:'Heal', 14:'Regenerate', 16:'Mass Heal', 18:'True Resurrection' },
    revelations: [
      { name:'Channel', level:1, desc:'You can channel positive energy like a cleric, using your oracle level as your effective cleric level. You can channel energy a number of times per day equal to 1 + your CHA modifier.' },
      { name:'Combat Healer', level:7, desc:'Once per day, you can cast a cure spell as a swift action, as if using the Quicken Spell metamagic feat.' },
      { name:'Delay Affliction', level:3, desc:'Once per day as an immediate action when you fail a save against disease or poison, you can delay its effects for 24 hours.' },
      { name:'Energy Body', level:7, desc:'As a standard action, your body transforms into pure positive energy. You gain the incorporeal subtype. Allies you pass through are healed 1d6 per two oracle levels. Undead creatures you pass through take 1d6 per two oracle levels. You can use this for 1 round per oracle level per day.' },
      { name:'Enhanced Cures', level:1, desc:'Whenever you cast a cure spell, the maximum number of hit points healed is based on your oracle level, not the spell\'s caster level.' },
      { name:'Healing Hands', level:1, desc:'You gain a +4 bonus on Heal checks. In addition, whenever you cast a cure spell to heal damage to a creature other than yourself, the target heals an additional 1 point per oracle level.' },
      { name:'Life Link', level:1, desc:'As a standard action, you can create a bond between yourself and another creature. Each round at the start of your turn, if the bonded creature is at 0 or fewer hp, it heals 1d8 hp. You take 1d8 damage when this occurs. This link lasts until the creature is at full hp.' },
      { name:'Lifesense', level:11, desc:'You can sense the life force of nearby creatures. You can detect the presence and health of living creatures within 30 feet as a free action.' },
      { name:'Safe Curing', level:3, desc:'Whenever you cast a cure spell, you do not provoke attacks of opportunity from the creature you are healing.' },
      { name:'Spirit Boost', level:3, desc:'Whenever your healing exceeds a creature\'s maximum hp, the excess is granted as temporary hit points that last for 1 minute.' },
    ],
    finalRevelation: { name:'Life Giver', level:20, desc:'Once per day, you can cast true resurrection as a spell-like ability. You do not need to supply the material component. Additionally, you are immune to death effects and energy drain.' },
  },

  'Lore': {
    desc: 'You gain knowledge of the world\'s secrets, tapping into the accumulated learning of generations.',
    classSkills: ['appraise','k_arcana','k_history','k_nobility','k_religion','spellcraft'],
    bonusSpells: { 2:'Identify', 4:'Tongues', 6:'Locate Object', 8:'Legend Lore', 10:'Contact Other Plane', 12:'Find the Path', 14:'Vision', 16:'Moment of Prescience', 18:'Foresight' },
    revelations: [
      { name:'Arcane Archivist', level:11, desc:'Your knowledge of arcane magic allows you to prepare wizard spells in your oracle spell slots once per day.' },
      { name:'Automatic Writing', level:1, desc:'Once per day, you can spend 10 minutes in meditation and attempt a DC 20 Wisdom check. If successful, information is revealed about a mystery the GM chooses.' },
      { name:'Brain Drain', level:1, desc:'You can take a standard action to violently extract information from a target within 100 feet. The target takes 1d4 Wisdom damage. Make a Knowledge check using the result — the higher of your result or the target\'s Knowledge bonus.' },
      { name:'Combat Precognition', level:1, desc:'Your knowledge grants you a bonus on initiative checks equal to ½ your oracle level.' },
      { name:'Focused Trance', level:1, desc:'You can enter a deep trance to gain the effect of a Commune spell. You can ask one question per oracle level. You can use this ability once per week.' },
      { name:'Lore Keeper', level:1, desc:'Instead of making a Knowledge skill check, you can touch a creature and make a melee touch attack. If it hits, you gain information as if you rolled a Knowledge check equal to 15 + oracle level + CHA modifier.' },
      { name:'Mental Acuity', level:1, desc:'You gain a +1 inherent bonus to Intelligence. This bonus increases by +1 for every five oracle levels.' },
      { name:'Sidestep Secret', level:7, desc:'Your supreme knowledge of the universe allows you to substitute your Charisma modifier for your Dexterity modifier for AC and Reflex saves.' },
      { name:'Think on It', level:1, desc:'Once per day, you can reroll any Knowledge skill check and take the better result.' },
      { name:'Whirlwind Lesson', level:1, desc:'You can quickly learn the subject matter of a book or scroll. You can make a Knowledge check in 10 minutes rather than 1 minute.' },
    ],
    finalRevelation: { name:'Master of Knowledge', level:20, desc:'You know everything. You can attempt any Knowledge check untrained with a +10 bonus. Once per day, you can use wish, as the spell, but only for effects relating to the acquisition of knowledge.' },
  },

  'Nature': {
    desc: 'You speak with the land itself, hearing its voice and acting as its conduit and instrument.',
    classSkills: ['fly','handle_animal','k_nature','ride','survival','swim'],
    bonusSpells: { 2:'Charm Animal', 4:"Barkskin", 6:'Speak with Plants', 8:'Reincarnate', 10:'Commune with Nature', 12:'Antilife Shell', 14:'Animal Shapes', 16:'Summon Nature\'s Ally VIII', 18:'Shapechange' },
    revelations: [
      { name:'Bonded Mount', level:1, desc:'You gain the service of an unusually intelligent and loyal animal mount. This mount is treated as a druid\'s animal companion (using your oracle level as your druid level).' },
      { name:'Erosion Touch', level:1, desc:'As a melee touch attack, you can deal 1d6 points of damage per two oracle levels to objects or constructs. You can use this ability 3 + CHA mod times per day.' },
      { name:'Friend to Animals', level:1, desc:'Animals never attack you unless provoked or commanded. You can speak with animals at will.' },
      { name:'Life Leech', level:3, desc:'Once per day as a swift action, when a creature within 30 feet takes damage, you can redirect up to ½ your oracle level in hp from that creature to yourself.' },
      { name:'Natural Divination', level:1, desc:'You can read the entrails of just-slain animals to gain information as augury once per day.' },
      { name:'Nature\'s Whispers', level:1, desc:'You have become so attuned to nature that you can substitute your CHA modifier for your DEX modifier when determining AC and Reflex saves.' },
      { name:'Speak with Animals', level:1, desc:'You can speak with animals, as per the speak with animals spell. You can use this ability at will.' },
      { name:'Spirit of Nature', level:3, desc:'You have mastered the forms of the natural world. You can wild shape as a druid of your oracle level once per day.' },
      { name:'Transcendental Bond', level:3, desc:'You become so attuned to nature that you can communicate with animals, plants, and nature spirits within 30 feet through a form of empathy. You gain +2 on all Diplomacy checks with natural creatures.' },
      { name:'Undo Artifice', level:11, desc:'As a full-round action, you can reduce a non-magical, non-living manufactured object to its component raw materials. This affects 1 cubic foot per oracle level of material.' },
    ],
    finalRevelation: { name:'Master of the Wild', level:20, desc:'You become one with nature. You gain DR 10/—, immunity to acid, cold, and electricity, and can wild shape at will. You can also speak with any natural creature.' },
  },

  'Stone': {
    desc: 'Your body is as hard as stone and your connection to the earth is deep and sure.',
    classSkills: ['appraise','climb','k_dungeoneering','survival'],
    bonusSpells: { 2:'Magic Stone', 4:'Stone Call', 6:'Meld into Stone', 8:'Stone Shape', 10:'Spike Stones', 12:'Stoneskin', 14:'Statue', 16:'Repel Metal or Stone', 18:'Clashing Rocks' },
    revelations: [
      { name:'Acid Skin', level:5, desc:'You gain resist acid 5. This increases to acid 10 at 11th level and immunity at 17th level.' },
      { name:'Clobbering Strike', level:7, desc:'Whenever you score a critical hit with a spell that deals bludgeoning damage, the target is also knocked prone (Fort negates, DC 10 + ½ oracle level + CHA mod).' },
      { name:'Crystal Sight', level:1, desc:'You can see through stone, earth, and sand as easily as if it were glass. You can see up to 10 feet + 5 feet per oracle level through such materials.' },
      { name:'Earth Glide', level:7, desc:'You can move through stone, earth, and other solid material at ½ your speed. You do not disturb the material you move through. You can use this ability for 1 round per oracle level per day.' },
      { name:'Mighty Pebble', level:1, desc:'As a standard action, you can charge and throw a pebble as a ranged attack targeting any one creature within 30 feet. If it hits, the pebble deals 1d6 bludgeoning damage per two oracle levels (minimum 1d6). You can use this 3 + CHA mod times per day.' },
      { name:'Rock Throwing', level:1, desc:'You are practiced at throwing boulders. You gain a +1 enhancement bonus on attack rolls with thrown rocks or boulders. You deal 1d8 extra damage with boulders.' },
      { name:'Seismic Master', level:15, desc:'Once per day, you can cast earthquake as a spell-like ability.' },
      { name:'Shard Explosion', level:3, desc:'As a swift action, you can cause jagged shards of stone to explode from your body in a 10-foot radius, dealing 1d6 piercing damage per two oracle levels. Creatures in the area can attempt a Reflex save for half. You can use this ability once per day at 3rd level, and one additional time per day every four oracle levels.' },
      { name:'Stone Stability', level:1, desc:'You receive a +4 bonus to your CMD when resisting a bull rush or trip attempt while standing on the ground.' },
      { name:'Touch of Acid', level:1, desc:'As a standard action, you can make a melee touch attack dealing 1d6 acid damage per two oracle levels. You can use this 3 + CHA mod times per day.' },
    ],
    finalRevelation: { name:'Earth Master', level:20, desc:'You can move through stone and earth as easily as if it were air. You gain tremorsense 30 feet and immunity to petrification. Once per day, you can cast clashing rocks as a spell-like ability.' },
  },

  'Waves': {
    desc: 'The ocean speaks to you, and the waters of the world are your domain.',
    classSkills: ['acrobatics','escape_artist','k_nature','perception','survival','swim'],
    bonusSpells: { 2:'Touch of the Sea', 4:'Slipstream', 6:'Water Breathing', 8:'Wall of Ice', 10:'Geyser', 12:'Fluid Form', 14:'Vortex', 16:'Seamantle', 18:'Tsunami' },
    revelations: [
      { name:'Blizzard', level:7, desc:'As a standard action, you can create a blizzard of snow and ice. Creatures within 30 feet take 1d6 cold damage per oracle level. A Reflex save halves the damage. You can use this ability once per day at 7th level and twice per day at 15th.' },
      { name:'Fluid Nature', level:1, desc:'You receive a +4 bonus to your CMD whenever an opponent attempts to grapple you. You are immune to being tripped or knocked prone.' },
      { name:'Fluid Travel', level:7, desc:'You can travel through water and other liquids as if they were air. You can swim through any liquid at your full move speed and are immune to the effects of underwater combat. You can use this ability for 1 hour per oracle level per day.' },
      { name:'Freezing Spells', level:1, desc:'Whenever a creature fails a save against one of your spells that deals cold damage, the creature is also slowed for 1 round (as per the slow spell).' },
      { name:'Ice Armor', level:3, desc:'You can conjure armor of ice that grants you an armor bonus of +4 and cold resistance 5 for 1 hour per oracle level. At 7th level, the armor bonus is +6 and cold resistance is 10. You can use this ability once per day.' },
      { name:'Icy Skin', level:5, desc:'You gain resist cold 5. This increases to 10 at 11th level and immunity at 17th level.' },
      { name:'Punitive Transformation', level:7, desc:'As a standard action, you can transform a creature within 30 feet into a Small animal. This acts as baleful polymorph. Will save negates. You can use this ability once per day at 7th level.' },
      { name:'Spark of Life', level:1, desc:'You gain the ability to breathe underwater as if under the effect of water breathing.' },
      { name:'Touch of the Sea', level:1, desc:'As a standard action, you can make a melee touch attack that grants the target a swim speed of 30 feet for 1 round per oracle level. You can use this ability 3 + CHA mod times per day.' },
      { name:'Water Form', level:9, desc:'You can take the form of a water elemental (as elemental body I-IV based on your oracle level). You can use this ability for 1 hour per oracle level per day.' },
    ],
    finalRevelation: { name:'Master of the Sea', level:20, desc:'You become one with the ocean. You can breathe water and are immune to cold. You gain a swim speed of 60 feet. You can cast tsunami once per day as a spell-like ability.' },
  },

  'Wind': {
    desc: 'The wind carries your voice, and the sky is your domain.',
    classSkills: ['acrobatics','fly','k_nature','perception','survival'],
    bonusSpells: { 2:'Alter Winds', 4:'Glide', 6:'Gaseous Form', 8:'Air Walk', 10:'Control Winds', 12:'Sirocco', 14:'Control Weather', 16:'Whirlwind', 18:'Winds of Vengeance' },
    revelations: [
      { name:'Air Barrier', level:1, desc:'As a standard action, you can create an invisible barrier of air that grants you a +4 armor bonus to AC. At 7th level, this bonus increases to +6. At 11th level, it increases to +8. You can use this ability for 1 hour per oracle level per day.' },
      { name:'Gaseous Form', level:7, desc:'As a standard action, you can become gaseous, as per the gaseous form spell, for 1 minute per oracle level. You can use this ability once per day at 7th level, twice at 11th, and at will at 15th level.' },
      { name:'Gust of Wind', level:1, desc:'You can cast gust of wind as a spell-like ability a number of times per day equal to your CHA modifier.' },
      { name:'Lightning Breath', level:7, desc:'As a standard action, you can breathe a 30-foot line of electricity dealing 1d6 electricity damage per oracle level. Reflex save halves. You can use this once per day at 7th, twice at 15th.' },
      { name:'Riddle of the Winds', level:3, desc:'Once per day, you can commune with the wind spirits. This works as the divination spell but only asks the wind for answers.' },
      { name:'Spark Skin', level:3, desc:'You gain resist electricity 5. This increases to 10 at 7th level and immunity at 17th level.' },
      { name:'Thunderburst', level:7, desc:'As a standard action, you can create a blast of thunderous sound in a 10-foot-radius burst centered anywhere within 100 feet. Creatures in the area take 1d6 sonic damage per oracle level and are deafened for 1 minute. Reflex half damage and no deafness. You can use this once per day.' },
      { name:'Touch of Electricity', level:1, desc:'As a standard action, you can make a melee touch attack dealing 1d6 electricity damage per two oracle levels (minimum 1d6). You can use this 3 + CHA mod times per day.' },
      { name:'Vortex Spells', level:1, desc:'When you cast a spell with the air descriptor or that deals electricity or sonic damage, you can use a move action to create a small vortex of air around any creature damaged by the spell. The creature must succeed at a Reflex save or be blown 5 feet in a random direction.' },
      { name:'Wings of Air', level:7, desc:'As a swift action, you grow wings of pure wind. You gain a fly speed of 60 feet with average maneuverability. At 11th level, this improves to good maneuverability. You can use this ability for 1 minute per oracle level per day.' },
    ],
    finalRevelation: { name:'Eye of the Storm', level:20, desc:'You can fly at will at a speed of 100 feet with perfect maneuverability. You are immune to electricity and sonic damage. You can cast control weather and whirlwind at will as spell-like abilities.' },
  },

};

// Helper functions
function getOracleMystery(name) {
  return ORACLE_MYSTERIES[name] || null;
}

function searchMysteries(query) {
  const q = (query || '').toLowerCase();
  return Object.entries(ORACLE_MYSTERIES)
    .filter(([name, m]) => !q || name.toLowerCase().includes(q))
    .map(([name, m]) => ({ name, ...m }));
}

function getMysteryRevelations(mysteryName, oracleLevel) {
  const mystery = ORACLE_MYSTERIES[mysteryName];
  if (!mystery) return [];
  return mystery.revelations.filter(r => r.level <= oracleLevel);
}
