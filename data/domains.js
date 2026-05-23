/* Pathfinder 1e — Complete Domains & Subdomains
   Source: CRB p.340-371, APG, UM
   35 core domains with granted powers (1st & 6th level) and bonus spells per level
   Plus key subdomains */
'use strict';

const DOMAINS = {

  'Air': {
    desc: 'You can manipulate lightning, mist, and wind, traffic with air creatures, and are resistant to electricity damage.',
    ability: 'WIS',
    powers: {
      1:  { name: 'Lightning Arc', desc: 'As a standard action, you can unleash an arc of electricity targeting any foe within 30 feet as a ranged touch attack. This arc of electricity deals 1d6 points of electricity damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      6:  { name: 'Electricity Resistance', desc: 'At 6th level, you gain resist electricity 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to electricity.' },
    },
    spells: { 1:'Obscuring Mist', 2:'Wind Wall', 3:'Gaseous Form', 4:'Air Walk', 5:'Control Winds', 6:'Chain Lightning', 7:'Control Weather', 8:'Whirlwind', 9:'Elemental Swarm (air)' },
  },

  'Animal': {
    desc: 'You can speak with and befriend animals with ease. In addition, you treat Knowledge (nature) as a class skill.',
    ability: 'WIS',
    powers: {
      1:  { name: 'Speak with Animals', desc: 'You can speak with animals, as per the speak with animals spell, for a number of rounds per day equal to 3 + your Wisdom modifier. These rounds do not need to be consecutive.' },
      6:  { name: 'Animal Companion', desc: 'At 4th level, you gain the service of an animal companion. Your effective druid level for this animal companion is equal to your cleric level – 3.' },
    },
    spells: { 1:'Calm Animals', 2:'Hold Animal', 3:'Dominate Animal', 4:"Summon Nature's Ally IV", 5:'Beast Shape III', 6:'Antilife Shell', 7:'Animal Shapes', 8:"Summon Nature's Ally VIII", 9:'Shapechange' },
  },

  'Artifice': {
    desc: 'You can repair and create items, and are skilled at crafting. Treat Craft as a class skill.',
    ability: 'WIS',
    powers: {
      1:  { name: "Artificer's Touch", desc: 'You can cast mending at will, using your cleric level as the caster level to repair damaged objects. In addition, you can deal 1d6 points of damage + 1 point for every two cleric levels you possess to objects or constructs by touching them.' },
      6:  { name: 'Dancing Weapons', desc: "At 8th level, you can give a weapon touched the dancing special weapon quality for 4 rounds. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th." },
    },
    spells: { 1:'Animate Rope', 2:'Wood Shape', 3:'Stone Shape', 4:'Minor Creation', 5:'Fabricate', 6:'Major Creation', 7:'Wall of Iron', 8:'Instant Summons', 9:"Prismatic Sphere" },
  },

  'Chaos': {
    desc: 'Your touch infuses life and weapons with chaos, and you revel in that which is wild and random.',
    ability: 'WIS',
    powers: {
      1:  { name: "Touch of Chaos", desc: 'You can imbue a target with chaos as a melee touch attack. For the next round, anytime the target rolls a d20, he must roll twice and take the lower result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Chaos Blade", desc: 'At 8th level, you can give a weapon touched the anarchic special weapon quality for a number of rounds equal to ½ your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.' },
    },
    spells: { 1:'Protection from Law', 2:'Align Weapon (chaos only)', 3:'Magic Circle against Law', 4:'Chaos Hammer', 5:'Dispel Law', 6:'Animate Objects', 7:'Word of Chaos', 8:'Cloak of Chaos', 9:'Summon Monster IX (chaotic)' },
  },

  'Charm': {
    desc: 'You can baffle and befuddle foes with a touch or a smile, and your beauty and grace are divine.',
    ability: 'WIS',
    powers: {
      1:  { name: "Addling Touch", desc: 'You can cause a living creature to become dazed for 1 round as a melee touch attack. Creatures with more Hit Dice than your cleric level are unaffected. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Charming Smile", desc: 'At 8th level, you can cast charm person as a swift action, with a DC of 10 + ½ your cleric level + your Wisdom modifier. You can use this ability once per day at 8th level, and one additional time per day for every four levels beyond 8th.' },
    },
    spells: { 1:'Charm Person', 2:'Calm Emotions', 3:'Suggestion', 4:'Heroism', 5:'Charm Monster', 6:'Geas/Quest', 7:'Insanity', 8:'Demand', 9:'Dominate Monster' },
  },

  'Community': {
    desc: 'Your touch can heal wounds, and your presence instills unity and strengthens the convictions of your allies.',
    ability: 'WIS',
    powers: {
      1:  { name: "Calming Touch", desc: 'You can touch a living creature as a standard action, causing it to become calmed and soothed for 1 round. Calmed creatures are immune to the shaken, frightened, and panicked conditions. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Unity", desc: "At 8th level, whenever a spell or effect targets you and one or more allies within 30 feet, you can use this ability to allow your allies to use your saving throw against the effect in place of their own. Each ally must decide individually before the rolls are made. You can use this ability once per day at 8th level, and one additional time per day for every four levels beyond 8th." },
    },
    spells: { 1:'Bless', 2:'Shield Other', 3:'Prayer', 4:'Imbue with Spell Ability', 5:'Telepathic Bond', 6:'Heroes Feast', 7:"Refuge", 8:'Mass Cure Critical Wounds', 9:'Miracle' },
  },

  'Darkness': {
    desc: 'You manipulate shadows and darkness. In addition, you receive Blind-Fight as a bonus feat.',
    ability: 'WIS',
    powers: {
      1:  { name: "Touch of Darkness", desc: 'As a melee touch attack, you can cause a creature\'s vision to be fraught with shadows and darkness. The creature touched treats all other creatures as if they had concealment, suffering a 20% miss chance on all attack rolls. This effect lasts for a number of rounds equal to ½ your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Eyes of Darkness", desc: 'At 8th level, your vision is not impaired by lighting conditions, even in absolute darkness and magic darkness. You can use this ability for a number of rounds per day equal to ½ your cleric level. These rounds do not need to be consecutive.' },
    },
    spells: { 1:'Obscuring Mist', 2:'Blindness/Deafness', 3:'Deeper Darkness', 4:'Shadow Conjuration', 5:'Summon Monster V (shadows)', 6:'Shadow Walk', 7:'Power Word Blind', 8:'Greater Shadow Evocation', 9:'Shades' },
  },

  'Death': {
    desc: 'You can cause the living to bleed at a touch, and find comfort in the presence of the dead.',
    ability: 'WIS',
    powers: {
      1:  { name: "Bleeding Touch", desc: 'As a melee touch attack, you can cause a living creature to take 1d6 points of damage per round. This effect persists for a number of rounds equal to ½ your cleric level (minimum 1) or until stopped with a DC 15 Heal check or any spell that heals damage. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Death\'s Embrace", desc: 'At 8th level, you heal damage instead of taking damage from channel energy when used by undead. When you are healed by a channeled negative energy, you heal an additional number of hit points equal to your cleric level.' },
    },
    spells: { 1:'Cause Fear', 2:'Death Knell', 3:'Animate Dead', 4:'Death Ward', 5:'Slay Living', 6:'Create Undead', 7:'Destruction', 8:'Create Greater Undead', 9:'Wail of the Banshee' },
  },

  'Destruction': {
    desc: 'You revel in ruin and devastation, and can deliver particularly destructive attacks.',
    ability: 'WIS',
    powers: {
      1:  { name: "Destructive Smite", desc: 'You can make a single melee attack as a swift action. If the attack hits, it deals additional damage equal to ½ your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Destructive Aura", desc: 'At 8th level, you can emit a 30-foot aura of destruction for a number of rounds per day equal to your cleric level. All attacks made against targets in this aura (including you) gain a morale bonus on damage equal to ½ your cleric level and all critical threats are automatically confirmed.' },
    },
    spells: { 1:'True Strike', 2:'Shatter', 3:'Rage', 4:'Inflict Critical Wounds', 5:'Shout', 6:'Harm', 7:'Disintegrate', 8:'Earthquake', 9:'Implosion' },
  },

  'Earth': {
    desc: 'You have mastery over earth, stone, and metal, can fire darts of acid, and command earth creatures.',
    ability: 'WIS',
    powers: {
      1:  { name: "Acid Dart", desc: 'As a standard action, you can unleash an acid dart targeting any foe within 30 feet as a ranged touch attack. This acid dart deals 1d6 points of acid damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      6:  { name: "Acid Resistance", desc: 'At 6th level, you gain resist acid 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to acid.' },
    },
    spells: { 1:'Magic Stone', 2:'Soften Earth and Stone', 3:'Stone Shape', 4:'Spike Stones', 5:'Wall of Stone', 6:'Stoneskin', 7:'Elemental Body IV (earth)', 8:'Earthquake', 9:'Elemental Swarm (earth)' },
  },

  'Evil': {
    desc: 'You are sinister and cruel, and have wholly given yourself to the dark side.',
    ability: 'WIS',
    powers: {
      1:  { name: "Touch of Evil", desc: 'You can cause a living creature to become sickened as a melee touch attack. Creatures sickened by your touch count as good-aligned for the purposes of spells with the evil descriptor. This ability lasts for a number of rounds equal to ½ your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Scythe of Evil", desc: 'At 8th level, you can give a weapon touched the unholy special weapon quality for a number of rounds equal to ½ your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.' },
    },
    spells: { 1:'Protection from Good', 2:'Align Weapon (evil)', 3:'Magic Circle against Good', 4:'Unholy Blight', 5:'Dispel Good', 6:'Create Undead', 7:'Blasphemy', 8:'Unholy Aura', 9:'Summon Monster IX (evil)' },
  },

  'Fire': {
    desc: 'You can call forth fire, command creatures of the inferno, and your flesh does not burn.',
    ability: 'WIS',
    powers: {
      1:  { name: "Fire Bolt", desc: 'As a standard action, you can unleash a scorching bolt of divine fire from your outstretched hand. You can target any single foe within 30 feet as a ranged touch attack with this bolt of fire. If you hit the foe, the fire bolt deals 1d6 points of fire damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      6:  { name: "Fire Resistance", desc: 'At 6th level, you gain resist fire 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to fire.' },
    },
    spells: { 1:'Burning Hands', 2:'Produce Flame', 3:'Resist Energy', 4:'Wall of Fire', 5:'Fire Shield', 6:'Fire Seeds', 7:'Elemental Body IV (fire)', 8:'Incendiary Cloud', 9:'Elemental Swarm (fire)' },
  },

  'Glory': {
    desc: 'You are infused with the glory of the divine, and project a powerful aura that increases the die type of your channel energy.',
    ability: 'WIS',
    powers: {
      1:  { name: "Touch of Glory", desc: 'You can cause your hand to shimmer with divine radiance, allowing you to touch a creature as a standard action and give it a bonus equal to your cleric level on a single Charisma-based skill check or Charisma ability check. This ability lasts for 1 hour or until the creature touched elects to apply the bonus to a roll. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Divine Presence", desc: "At 8th level, you can emit a 30-foot aura of divine presence for a number of rounds per day equal to your cleric level. Whenever an enemy attempts to attack you while this aura is in effect, the enemy must succeed at a Will save (DC 10 + ½ your cleric level + your Charisma modifier) or be unable to attack you that round, wasting the action." },
    },
    spells: { 1:'Shield of Faith', 2:'Bless Weapon', 3:'Searing Light', 4:'Holy Smite', 5:'Righteous Might', 6:'Undeath to Death', 7:'Holy Sword', 8:'Holy Aura', 9:'Gate' },
  },

  'Good': {
    desc: 'You have pledged your life and soul to goodness and purity.',
    ability: 'WIS',
    powers: {
      1:  { name: "Touch of Good", desc: 'You can touch a creature as a standard action, granting a sacred bonus on attack rolls, skill checks, ability checks, and saving throws equal to half your cleric level (minimum 1) for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Holy Lance", desc: 'At 8th level, you can give a weapon touched the holy special weapon quality for a number of rounds equal to ½ your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.' },
    },
    spells: { 1:'Protection from Evil', 2:'Align Weapon (good)', 3:'Magic Circle against Evil', 4:'Holy Smite', 5:'Dispel Evil', 6:'Blade Barrier', 7:'Holy Word', 8:'Holy Aura', 9:'Summon Monster IX (good)' },
  },

  'Healing': {
    desc: 'Your touch staves off pain and death, and your healing magic is particularly vital and potent.',
    ability: 'WIS',
    powers: {
      1:  { name: "Rebuke Death", desc: 'You can touch a living creature as a standard action, causing it to heal 1d4 points of damage plus 1 for every two cleric levels you possess. You can only use this ability on a creature that is below 0 hit points. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      6:  { name: "Healer\'s Blessing", desc: 'At 6th level, all of your cure spells are treated as if they were empowered, increasing the amount of damage healed by half (+50%). This does not apply to damage dealt to undead with a cure spell. This does not stack with the Empower Spell metamagic feat.' },
    },
    spells: { 1:'Cure Light Wounds', 2:'Cure Moderate Wounds', 3:'Cure Serious Wounds', 4:'Cure Critical Wounds', 5:'Breath of Life', 6:'Heal', 7:'Regenerate', 8:'Mass Cure Critical Wounds', 9:'Mass Heal' },
  },

  'Knowledge': {
    desc: 'You are a scholar and a sage of the highest order. Your gains in Perception and all Knowledge skills.',
    ability: 'WIS',
    powers: {
      1:  { name: "Lore Keeper", desc: 'You can touch a creature to learn about its abilities and weaknesses. With a successful touch attack, you gain information as if you made the appropriate Knowledge skill check with a result equal to 15 + your cleric level + your Wisdom modifier.' },
      6:  { name: "Remote Viewing", desc: 'Starting at 6th level, you can use clairvoyance/clairaudience at will as a spell-like ability using your cleric level as the caster level. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.' },
    },
    spells: { 1:'Identify', 2:'Zone of Truth', 3:'Speak with Dead', 4:'Divination', 5:'True Seeing', 6:'Find the Path', 7:'Legend Lore', 8:'Discern Location', 9:'Foresight' },
  },

  'Law': {
    desc: 'You follow a strict and ordered code of laws, and in so doing, have learned to harness the power of order.',
    ability: 'WIS',
    powers: {
      1:  { name: "Touch of Law", desc: 'You can touch a willing creature as a standard action, infusing it with the power of divine order and allowing it to treat all attack rolls, skill checks, ability checks, and saving throws for 1 round as if the natural d20 roll resulted in an 11. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Staff of Order", desc: 'At 8th level, you can give a weapon touched the axiomatic special weapon quality for a number of rounds equal to ½ your cleric level. You can use this ability once per day at 8th level, and an additional time per day for every four levels beyond 8th.' },
    },
    spells: { 1:'Protection from Chaos', 2:'Align Weapon (law)', 3:'Magic Circle against Chaos', 4:'Order\'s Wrath', 5:'Dispel Chaos', 6:'Hold Monster', 7:'Dictum', 8:'Shield of Law', 9:'Summon Monster IX (lawful)' },
  },

  'Liberation': {
    desc: 'Your spirit is free and open. You resist effects that would constrain or bind either your body or your soul.',
    ability: 'WIS',
    powers: {
      1:  { name: "Liberation", desc: 'You have the ability to ignore impediments to your mobility. For a number of rounds per day equal to your cleric level, you can move normally regardless of magical effects that impede movement, as if you were affected by freedom of movement. This effect occurs automatically as soon as it applies. These rounds do not need to be consecutive.' },
      8:  { name: "Freedom\'s Call", desc: 'At 8th level, you can emit a 30-foot aura of freedom for a number of rounds per day equal to your cleric level. Allies within this aura are not affected by the entangled, grappled, or pinned conditions. This does not remove those conditions, but does allow movement as if they did not exist.' },
    },
    spells: { 1:'Remove Fear', 2:'Remove Paralysis', 3:'Remove Curse', 4:'Freedom of Movement', 5:'Break Enchantment', 6:'Greater Dispel Magic', 7:'Refuge', 8:'Mind Blank', 9:'Freedom' },
  },

  'Luck': {
    desc: 'You are infused with luck, and your mere presence can spread good fortune.',
    ability: 'WIS',
    powers: {
      1:  { name: "Bit of Luck", desc: 'You can touch a willing creature as a standard action, giving it a bit of luck. For the next round, any time the target rolls a d20, he may roll twice and take the more favorable result. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      6:  { name: "Good Fortune", desc: 'At 6th level, as an immediate action, you can reroll any one d20 roll you have just made before the results of the roll are revealed. You must take the result of the second roll, even if it is lower. You can use this ability once per day at 6th level, and one additional time per day for every six cleric levels beyond 6th.' },
    },
    spells: { 1:'True Strike', 2:'Aid', 3:'Protection from Energy', 4:'Freedom of Movement', 5:'Break Enchantment', 6:'Mislead', 7:'Spell Turning', 8:'Moment of Prescience', 9:'Miracle' },
  },

  'Madness': {
    desc: 'You embrace the madness that lurks deep in your heart, and can unleash it to drive your foes insane or to sacrifice certain abilities to enhance others.',
    ability: 'WIS',
    powers: {
      1:  { name: "Vision of Madness", desc: 'You can give a creature a vision of madness as a melee touch attack. Choose one of the following: attack rolls, saving throws, or skill checks. The target receives a bonus to the chosen rolls equal to ½ your cleric level (minimum 1) and a penalty to the other two rolls equal to the same amount. This effect lasts for 3 rounds.' },
      8:  { name: "Aura of Madness", desc: 'At 8th level, you can emit a 30-foot aura of madness for a number of rounds per day equal to your cleric level. Enemies within this aura are confused unless they make a Will save (DC 10 + ½ cleric level + Wis modifier).' },
    },
    spells: { 1:'Lesser Confusion', 2:'Touch of Idiocy', 3:'Rage', 4:'Confusion', 5:'Nightmare', 6:'Phantasmal Killer', 7:'Insanity', 8:'Scintillating Pattern', 9:'Weird' },
  },

  'Magic': {
    desc: 'You are a true student of all things magical, and see divinity in the purity and power of magic.',
    ability: 'WIS',
    powers: {
      1:  { name: "Hand of the Acolyte", desc: 'You can cause your melee weapon to fly from your grasp and strike a foe before instantly returning to you. As a standard action, you can make a single attack using a melee weapon at a range of 30 feet. This attack uses your base attack bonus plus your Wisdom modifier as the attack roll, and deals normal damage.' },
      8:  { name: "Dispelling Touch", desc: 'At 8th level, you can use a targeted dispel magic as a melee touch attack. You can use this ability once per day at 8th level, and one additional time per day for every four levels beyond 8th.' },
    },
    spells: { 1:'Identify', 2:'Magic Mouth', 3:'Dispel Magic', 4:'Imbue with Spell Ability', 5:'Spell Resistance', 6:'Antimagic Field', 7:'Spell Turning', 8:'Protection from Spells', 9:"Mage\'s Disjunction" },
  },

  'Nobility': {
    desc: 'You are a great leader, an inspiration to all who follow the teachings of your faith.',
    ability: 'WIS',
    powers: {
      1:  { name: "Inspiring Word", desc: 'As a standard action, you can speak an inspiring word to a creature within 30 feet. That creature receives a +2 morale bonus on attack rolls, skill checks, ability checks, and saving throws for a number of rounds equal to ½ your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Leadership", desc: 'At 8th level, you receive Leadership as a bonus feat. In addition, your leadership score increases by a number equal to your domain level.' },
    },
    spells: { 1:'Divine Favor', 2:'Enthrall', 3:'Magic Vestment', 4:'Discern Lies', 5:'Greater Command', 6:"Geas/Quest", 7:'Repulsion', 8:'Demand', 9:'Storm of Vengeance' },
  },

  'Plant': {
    desc: 'You find solace in the green, can grow defensive thorns, and can communicate with plants.',
    ability: 'WIS',
    powers: {
      1:  { name: "Wooden Fist", desc: 'As a free action, your hands can become as hard as wood, covered in tiny thorns. While you have wooden fists, your unarmed strikes do not provoke attacks of opportunity, deal lethal damage, and gain a bonus on damage rolls equal to ½ your cleric level (minimum 1). You can use this ability for a number of rounds per day equal to 3 + your Wisdom modifier. These rounds do not need to be consecutive.' },
      6:  { name: "Bramble Armor", desc: 'At 6th level, you can cause a host of wooden thorns to burst from your skin as a free action. While bramble armor is in effect, any foe that strikes you with an unarmed strike or a light weapon takes 1d6 points of piercing damage + 1 point per two cleric levels you possess. You can use this ability for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive.' },
    },
    spells: { 1:'Entangle', 2:'Barkskin', 3:'Plant Growth', 4:'Command Plants', 5:'Wall of Thorns', 6:'Repel Wood', 7:'Animate Plants', 8:'Control Plants', 9:'Shambler' },
  },

  'Protection': {
    desc: 'Your faith is your greatest source of protection, and you can use that faith to defend others. In addition, you receive a +1 resistance bonus on saving throws.',
    ability: 'WIS',
    powers: {
      1:  { name: "Resistant Touch", desc: 'As a standard action, you can touch an ally to grant them your divine protection for 1 minute. This grants the ally a +1 resistance bonus on saving throws. At 11th level, this bonus increases to +2.' },
      8:  { name: "Aura of Protection", desc: 'At 8th level, you can emit a 30-foot aura of protection for a number of rounds per day equal to your cleric level. You and your allies within this aura gain a +1 deflection bonus to AC and a +1 resistance bonus on saving throws. At 14th level and 20th level, these bonuses increase by 1.' },
    },
    spells: { 1:'Sanctuary', 2:'Shield Other', 3:'Protection from Energy', 4:'Spell Immunity', 5:'Spell Resistance', 6:'Antimagic Field', 7:'Repulsion', 8:'Mind Blank', 9:"Prismatic Sphere" },
  },

  'Repose': {
    desc: 'You see death not as something to be feared, but as a final rest and reward for a life well spent. The taint of undeath is a mockery of what you hold dear.',
    ability: 'WIS',
    powers: {
      1:  { name: "Gentle Rest", desc: 'Your touch can fill a creature with lethargy, causing a living creature to become staggered for 1 round as a melee touch attack. If you touch an undead creature, it is staggered for a number of rounds equal to your Wisdom modifier. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Ward Against Death", desc: 'At 8th level, you can emit a 30-foot aura that wards against death for a number of rounds per day equal to your cleric level. Living creatures in this area are immune to death effects, energy drain, and effects that cause negative levels. This power has no effect on undead. These rounds do not need to be consecutive.' },
    },
    spells: { 1:'Deathwatch', 2:'Gentle Repose', 3:'Speak with Dead', 4:'Death Ward', 5:'Slay Living', 6:'Undeath to Death', 7:'Destruction', 8:'Waves of Exhaustion', 9:'Wail of the Banshee' },
  },

  'Rune': {
    desc: 'You can write a rune of power that explodes when touched, and become skilled at interpreting writing of all kinds.',
    ability: 'WIS',
    powers: {
      1:  { name: "Blast Rune", desc: 'As a standard action, you can create a blast rune in any adjacent square. Any creature entering this square takes 1d6 points of damage + 1 point for every two cleric levels you possess. This rune deals either acid, cold, electricity, or fire damage (your choice when you create the rune). The rune is invisible and lasts a number of rounds equal to your cleric level or until discharged. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Spell Rune", desc: 'At 8th level, you can attach another of your prepared spells of 4th level or lower to a blast rune. This spell is cast on any creature that triggers the rune. This spell must have a casting time of 1 standard action or less. Spells cast as part of this effect have a caster level equal to your cleric level.' },
    },
    spells: { 1:'Erase', 2:'Secret Page', 3:'Glyph of Warding', 4:'Explosive Runes', 5:'Lesser Planar Binding', 6:'Greater Glyph of Warding', 7:'Instant Summons', 8:'Symbol of Death', 9:'Teleportation Circle' },
  },

  'Strength': {
    desc: 'In strength and brawn there is truth—your faith gives you incredible might and power.',
    ability: 'WIS',
    powers: {
      1:  { name: "Strength Surge", desc: 'As a standard action, you can touch a creature to give it great strength. For 1 round, the target gains an enhancement bonus on melee attack rolls, combat maneuver checks that rely on Strength, Strength-based skill checks, and Strength checks equal to ½ your cleric level (minimum 1). You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Might of the Gods", desc: 'At 8th level, you can add your cleric level as an enhancement bonus to your Strength score for a number of rounds per day equal to your cleric level. This bonus stacks with any other enhancement bonuses to your Strength. These rounds do not need to be consecutive.' },
    },
    spells: { 1:'Enlarge Person', 2:"Bull\'s Strength", 3:'Magic Vestment', 4:'Spell Immunity', 5:'Righteous Might', 6:'Stoneskin', 7:'Grasping Hand', 8:'Clenched Fist', 9:'Crushing Hand' },
  },

  'Sun': {
    desc: 'You see divinity in the light of the sun, and can call upon its power to destroy undead and lead your allies.',
    ability: 'WIS',
    powers: {
      1:  { name: "Sun\'s Blessing", desc: 'Whenever you channel positive energy to harm undead creatures, add your cleric level to the damage dealt. Undead do not add their channel resistance to their saves when you channel positive energy.' },
      8:  { name: "Nimbus of Light", desc: 'At 8th level, you can emit a 30-foot nimbus of light for a number of rounds per day equal to your cleric level. This acts as a daylight spell. In addition, undead within this radius take an amount of damage equal to your cleric level each round that they remain inside the nimbus. Spells and spell-like abilities with the darkness descriptor are automatically dispelled if they come into contact with this nimbus. These rounds do not need to be consecutive.' },
    },
    spells: { 1:'Endure Elements', 2:'Heat Metal', 3:'Searing Light', 4:'Fire Shield', 5:'Flame Strike', 6:'Fire Seeds', 7:'Sunbeam', 8:'Sunburst', 9:'Prismatic Sphere' },
  },

  'Travel': {
    desc: 'You are an explorer and a pilgrim of the highest order, and your feet carry you swiftly and safely on any journey.',
    ability: 'WIS',
    powers: {
      1:  { name: "Agile Feet", desc: 'As a free action, you can gain increased mobility for 1 round. For the duration of this effect, you ignore all difficult terrain and do not take any penalties for moving through it. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Dimensional Hop", desc: 'At 8th level, you can teleport up to 10 feet per cleric level per day as a move action. This teleportation must be used in 5-foot increments and such movement does not provoke attacks of opportunity. You must have line of sight to your destination to use this ability. The range of this teleportation increases by 5 feet for every two cleric levels you possess beyond 8th.' },
    },
    spells: { 1:'Longstrider', 2:'Locate Object', 3:'Fly', 4:'Dimension Door', 5:'Teleport', 6:'Find the Path', 7:'Greater Teleport', 8:'Phase Door', 9:'Astral Projection' },
  },

  'Trickery': {
    desc: 'You are a master of illusions and deceptions. Bluff, Disguise, and Stealth are class skills.',
    ability: 'WIS',
    powers: {
      1:  { name: "Copycat", desc: 'You can create an illusory double of yourself as a move action. This double functions as a single mirror image, and lasts for a number of rounds equal to your cleric level, or until the illusory duplicate is dispelled or destroyed. You can have no more than one copycat at a time. This ability does not stack with the mirror image spell. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Master\'s Illusion", desc: 'At 8th level, you can create an illusion that hides the appearance of yourself and any number of allies within 30 feet for a number of rounds per day equal to your cleric level. This ability otherwise functions like the spell veil (save DC 10 + ½ your cleric level + your Wisdom modifier). These rounds do not need to be consecutive.' },
    },
    spells: { 1:'Disguise Self', 2:'Invisibility', 3:'Nondetection', 4:'Confusion', 5:'False Vision', 6:'Mislead', 7:"Screen", 8:'Mass Invisibility', 9:'Time Stop' },
  },

  'Void': {
    desc: 'You accept the void within yourself and see the dark star that awaits us all—eventually.',
    ability: 'WIS',
    powers: {
      1:  { name: "Void Touch", desc: 'As a melee touch attack, you can make a foe experience the void. The foe takes 1d6 points of damage + 1 point per two cleric levels, and is staggered for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Spatial Rift", desc: 'At 8th level, as a standard action, you can create a rift in space that teleports all creatures within 5 feet of you to a spot within 30 feet of you that you designate. Will save (DC 10 + ½ cleric level + Wis mod) negates.' },
    },
    spells: { 1:'Corrosive Touch', 2:'Darkness', 3:'Dispel Magic', 4:'Dimensional Anchor', 5:'Interposing Hand', 6:'Planar Binding', 7:'Plane Shift', 8:'Greater Planar Binding', 9:'Gate' },
  },

  'War': {
    desc: 'You are a crusader for your god, always ready and willing to fight to defend your faith. You also gain proficiency with the deity\'s favored weapon.',
    ability: 'WIS',
    powers: {
      1:  { name: "Battle Rage", desc: 'You can touch a creature as a standard action to give it a bonus on melee damage rolls equal to ½ your cleric level for 1 round (minimum +1). You can do so a number of times per day equal to 3 + your Wisdom modifier.' },
      8:  { name: "Weapon Master", desc: 'At 8th level, as a swift action, you gain the use of one combat feat for a number of rounds per day equal to your cleric level. These rounds do not need to be consecutive, and you can change the feat chosen each time you use this ability. You must meet the prerequisites to use this feat.' },
    },
    spells: { 1:'Magic Weapon', 2:'Spiritual Weapon', 3:'Magic Vestment', 4:'Divine Power', 5:'Flame Strike', 6:'Blade Barrier', 7:'Power Word Blind', 8:'Power Word Stun', 9:'Power Word Kill' },
  },

  'Water': {
    desc: 'You can manipulate water and mist and ice, conjure creatures of water, and resist cold.',
    ability: 'WIS',
    powers: {
      1:  { name: "Icicle", desc: 'As a standard action, you can fire an icicle from your finger, targeting any foe within 30 feet as a ranged touch attack. The icicle deals 1d6 points of cold damage + 1 point for every two cleric levels you possess. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      6:  { name: "Cold Resistance", desc: 'At 6th level, you gain resist cold 10. This resistance increases to 20 at 12th level. At 20th level, you gain immunity to cold.' },
    },
    spells: { 1:'Obscuring Mist', 2:'Fog Cloud', 3:'Water Breathing', 4:'Control Water', 5:'Ice Storm', 6:'Cone of Cold', 7:'Elemental Body IV (water)', 8:'Horrid Wilting', 9:'Elemental Swarm (water)' },
  },

  'Weather': {
    desc: 'With power over storm and sky, you can call down the wrath of the gods upon the world below.',
    ability: 'WIS',
    powers: {
      1:  { name: "Storm Burst", desc: 'As a standard action, you can create a storm burst targeting any foe within 30 feet as a ranged touch attack. The storm burst deals 1d6 points of nonlethal damage + 1 point for every two cleric levels you possess. In addition, the target is buffeted by winds and rain, causing it to take a –2 penalty on attack rolls for 1 round. You can use this ability a number of times per day equal to 3 + your Wisdom modifier.' },
      6:  { name: "Lightning Lord", desc: 'At 6th level, you can call down a number of bolts of lightning per day equal to your cleric level. You can call down as many bolts as you want with a single standard action. Each bolt deals 1d6 points of electricity damage per two cleric levels you possess. One bolt may strike each target, and you must have line of sight to each target.' },
    },
    spells: { 1:'Obscuring Mist', 2:'Fog Cloud', 3:'Call Lightning', 4:'Sleet Storm', 5:'Ice Storm', 6:'Control Winds', 7:'Control Weather', 8:'Whirlwind', 9:'Storm of Vengeance' },
  },

};

// Helper: get domain by name
function getDomain(name) {
  return DOMAINS[name] || null;
}

// Helper: get deity's domains
function getDeityDomains(deityName) {
  if (typeof DEITIES === 'undefined') return [];
  const deity = DEITIES.find(d => d[0] === deityName);
  if (!deity) return [];
  return deity[2].split(',').map(d => d.trim()).filter(d => DOMAINS[d]);
}

// Helper: search domains
function searchDomains(query) {
  const q = (query || '').toLowerCase();
  return Object.entries(DOMAINS)
    .filter(([name, d]) => !q || name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q))
    .map(([name, d]) => ({ name, ...d }));
}
