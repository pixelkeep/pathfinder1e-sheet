/* Pathfinder 1e — Witch Hexes & Shaman Spirits
   Source: APG p.65-75, ACG p.35-51, UM
   Witch hexes (minor/major/grand) and Shaman spirits with spirit magic and hexes */
'use strict';

// ══════════════════════════════════════════════════════════════════
// WITCH HEXES
// ══════════════════════════════════════════════════════════════════

const WITCH_HEXES = {

  // ── MINOR HEXES (available from level 1) ─────────────────────
  minor: [
    { name:'Blight', desc:'The witch can curse a single plant or animal to slowly die. The creature takes 1 point of Con damage per day until it reaches 0 Con, at which point it dies. A successful Fort save (DC 10 + ½ witch level + INT mod) negates each day\'s damage. Once per day; cannot be used on the same target twice.' },
    { name:'Cackle', desc:'A witch can cackle madly as a move action. Any creature that is currently under the effects of the witch\'s evil eye, fortune, or misfortune hex has the duration of that hex extended by 1 round.' },
    { name:'Cauldron', desc:'The witch receives Brew Potion as a bonus feat and gains a +4 insight bonus on Craft (alchemy) checks.' },
    { name:'Charm', desc:'A witch can charm an animal or humanoid creature within 30 feet by beckoning and speaking soothing words. This functions as charm monster, except the witch must spend 1 round of concentration before the charm takes effect, and the target must succeed at a Will save (DC 10 + ½ witch level + INT mod) or be charmed for 1 day per witch level. Once per day per creature, creatures that succeed are immune for 24 hours.' },
    { name:'Coven', desc:'The witch counts as a hag for the purpose of joining a hag\'s coven. The coven must contain at least one hag. In addition, whenever the witch with this hex is within 30 feet of another witch with this hex, both witches can use the aid another action to assist each other\'s hexes and spells.' },
    { name:'Disguise', desc:'A witch can change her appearance for a number of hours equal to her level, as disguise self. This does not affect her equipment.' },
    { name:'Evil Eye', desc:'The witch can cause doubt to creep into the mind of a foe within 30 feet that she can see. The target takes a –2 penalty on one of the following (witch\'s choice): AC, attack rolls, saving throws, ability checks, or skill checks. The penalty lasts for a number of rounds equal to 3 + the witch\'s INT modifier. A Will save (DC 10 + ½ witch level + INT mod) reduces this to just 1 round. This hex can affect a creature that is already under the effects of this hex (adding a new penalty each time).' },
    { name:'Flight', desc:'The witch can use feather fall at will, and gains a fly speed of 30 feet (average maneuverability) at 5th level. At 10th level, she gains a fly speed of 60 feet (good maneuverability).' },
    { name:'Fortune', desc:'The witch can grant a creature within 30 feet a bit of luck. The target can reroll any one d20 roll in the next round. The target must take the result of the reroll, even if it\'s worse. Once per day per creature. Lasts 1 round.' },
    { name:'Healing', desc:'A witch can soothe the wounds of those she touches. This heals 1d8 + INT modifier hp. Using this ability is a standard action. It can be used only once per day on any individual creature, but may be used multiple times on different creatures.' },
    { name:'Misfortune', desc:'The witch can cause a creature within 30 feet to suffer grave misfortune for 1 round. Anytime the creature makes an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result. A Will save (DC 10 + ½ witch level + INT mod) negates this effect. This hex can affect a creature only once per 24 hours.' },
    { name:'Nightmare', desc:'Causing a creature within 30 feet to fall into a deep and troubled sleep, the witch can give the target terrible nightmares. The target must succeed at a Will save (DC 10 + ½ witch level + INT mod) or fall asleep for 1 minute. The creature can be awakened by violence. When it wakes, it is fatigued. Creatures that succeed are immune for 24 hours.' },
    { name:'Prehensile Hair', desc:'The witch can instantly cause her hair (or a similar growth) to grow up to 10 feet long and to become manipulative and dexterous. She can use her hair to retrieve small, stashed objects concealed on her person as a swift action, make one additional attack with it per round as a free action (1d3 damage, reach 10 ft), and gain +2 on all CMB checks made to grapple.' },
    { name:'Slumber', desc:'A witch can cause a creature within 30 feet to fall into a deep, magical sleep, as per the sleep spell, for a number of minutes equal to the witch\'s level. The creature receives a Will save (DC 10 + ½ witch level + INT mod) to negate the effect. Creatures that fail take nonlethal damage equal to 1d6 + witch level. This is a mind-affecting sleep effect. Once per day per creature.' },
    { name:'Tongues', desc:'The witch can understand any spoken language for 1 minute per level, as comprehend languages. She can speak any language she understands. This is a constant effect at 5th level.' },
    { name:'Ward', desc:'A witch can protect a creature from harm, placing a ward on it that protects it from a single attack. The ward grants the target a +2 deflection bonus to AC and a +2 resistance bonus on saving throws. This ward ends the next time the target is hit or fails a saving throw. One creature at a time, for 1 day per level.' },
  ],

  // ── MAJOR HEXES (available from level 10) ────────────────────
  major: [
    { name:'Agony', desc:'With a successful melee touch attack, the witch inflicts wracking pains on the target. The target is nauseated for 1 hour per witch level. A Fort save (DC 10 + ½ witch level + INT mod) negates this effect. Once per creature per day.' },
    { name:'Beast of Ill-Omen', desc:'The witch summons a short-lived, shadowy crow to dog the target\'s steps, imposing the effects of the ill omen spell on the target. The crow can be destroyed (AC 12, hp = witch level, immune to most conditions). Will save negates. Once per day.' },
    { name:'Cook People', desc:'Once per day as a full-round action, the witch can cook humanoid remains into a meal that functions as a heroes\' feast spell. This requires a suitable cooking vessel and 1 hour of preparation.' },
    { name:'Hag\'s Eye', desc:'The witch can create a magic sensor, as per the arcane eye spell, at will. The sensor appears as a golden eye floating in the air.' },
    { name:'Harrowing', desc:'Once per day, the witch can perform a harrowing. This takes 10 minutes and functions as a divination spell, except that the witch also generates a full Harrow reading.' },
    { name:'Ice Tomb', desc:'A wave of ice and freezing water targets a creature the witch can see within 30 feet. The target is encased in ice and is helpless. Each round, the creature takes 3d8 cold damage. Fort save negates; on success, staggered 1 round instead. Once per day.' },
    { name:'Infected Wounds', desc:'The wounds of a creature the witch curses do not heal naturally, and any magical healing applied to the creature heals only half the normal amount. This is a disease effect. A Fort save (DC 10 + ½ witch level + INT mod) negates. Once per creature per day.' },
    { name:'Lay to Rest', desc:'The witch can destroy the spirit of a deceased creature, preventing it from being raised as an undead or returning to life through reincarnation. Once a creature is targeted by this hex, it cannot be brought back from the dead except by miracle or wish. Will save negates (DC 10 + ½ witch level + INT mod).' },
    { name:'Major Healing', desc:'Once per day, this hex cures 3d8 + INT mod hp on a touched creature. Alternatively, it can remove one of the following conditions: blinded, confused, crippled, deafened, diseased, exhausted, fatigued, panicked, paralyzed, poisoned, or shaken.' },
    { name:'Restless Slumber', desc:'This hex functions as the slumber minor hex, except the affected creature\'s sleep is troubled. Each hour the creature is affected, it loses 1 hp, which cannot be healed naturally until the creature has rested. Will save negates (DC 10 + ½ witch level + INT mod).' },
    { name:'Retribution', desc:'A witch with this hex can cause terrible wounds to open across the flesh of a creature as a standard action. The creature takes 1d6 points of damage for each time it has attacked another creature in the past round (regardless of whether the attack hit). Will save (DC 10 + ½ witch level + INT mod) halves the damage.' },
    { name:'Vision', desc:'The witch undergoes a catatonic trance for 1 round while she seeks information about a creature or object currently in her possession (as per the legend lore spell, but providing information more rapidly). She can use this once per week.' },
  ],

  // ── GRAND HEXES (available from level 18) ────────────────────
  grand: [
    { name:'Animal Servant', desc:'The witch can permanently dominate an animal, as per dominate monster. Will save negates (DC 10 + ½ witch level + INT mod). Once per day.' },
    { name:'Death Curse', desc:'This powerful hex curses the target with a painful, wasting death. Any creature that comes within 30 feet of the witch while this curse is in effect takes 4d6 points of damage and becomes cursed. Will save (DC 10 + ½ witch level + INT mod) negates damage and curse. Lasts until removed by break enchantment or better.' },
    { name:'Eternal Slumber', desc:'The witch can touch a creature to cause it to fall into an eternal slumber, as per the spell sleep, except that it affects any creature regardless of HD and the effect is permanent. Will save negates (DC 10 + ½ witch level + INT mod). Once per day.' },
    { name:'Forced Reincarnation', desc:'The witch can kill a living target and then cause it to reincarnate (as per the reincarnate spell). Fort save (DC 10 + ½ witch level + INT mod) negates. Once per day.' },
    { name:'Life Giver', desc:'Once per day, as a full-round action, the witch can touch a dead creature and bring it back to life, as if she were casting true resurrection. The witch does not need a material component for this.' },
    { name:'Natural Disaster', desc:'Once per day, the witch can use control weather as a spell-like ability, but the effect is permanent. Alternatively, she can call down a disaster (as earthquake) that also calls down a rain of fire (as fire storm) simultaneously.' },
  ],
};

// ══════════════════════════════════════════════════════════════════
// SHAMAN SPIRITS
// Source: ACG p.35-51
// ══════════════════════════════════════════════════════════════════

const SHAMAN_SPIRITS = {

  'Battle': {
    desc: 'The shaman calls upon the spirits of fallen warriors to aid her in combat.',
    spiritAnimal: 'Your spirit animal becomes battle-hardened. It gains a +2 bonus to AC and CMD, and is treated as having DR 5/— while adjacent to you.',
    spiritMagic: { 1:'Magic Weapon', 2:'Spiritual Weapon', 3:'Magic Vestment', 4:'Divine Power', 5:'Flame Strike', 6:'Blade Barrier', 7:'Power Word Blind', 8:'Power Word Stun', 9:'Power Word Kill' },
    hexes: [
      { name:'Battle Ward (Sp)', desc:'As a standard action, the shaman can touch a creature to grant it a battle ward. Each time a warded creature is hit by a melee or ranged attack, the creature may make one immediate counterattack against the attacker. This lasts 1 round per shaman level. Once per day per creature.' },
      { name:'Chant of the Warrior (Ex)', desc:'As a swift action, the shaman can begin chanting, granting all allies within 30 feet a +1 competence bonus on attack and damage rolls. At 8th level, this bonus increases to +2. This lasts as long as she maintains the chant as a swift action each round.' },
      { name:'Weapon Skill (Ex)', desc:'The shaman gains Weapon Focus as a bonus feat.' },
    ],
    spiritAbility: { level:1, name:'Spirit Strike', desc:'As a swift action, the shaman can grant her weapon the ghost touch weapon quality for 1 round. She can use this ability 3 + CHA modifier times per day.' },
    greaterSpiritAbility: { level:8, name:'Battle Master', desc:'The shaman gains the Greater Weapon Focus feat as a bonus feat for free. In addition, she can cast haste on herself once per day as a spell-like ability.' },
    trueSpiritAbility: { level:16, name:'Spirit Warrior', desc:'The shaman can take the form of a Medium battle spirit, gaining a +4 STR bonus, +2 natural armor, and treating all her weapons as ghost touch. This lasts 1 minute per shaman level per day.' },
    manifestation: { level:20, name:'One with Battle', desc:'The shaman becomes immune to fear effects. She gains DR 10/—. All allies within 30 feet gain the benefits of haste while the shaman rages or stands in combat.' },
  },

  'Bones': {
    desc: 'The shaman channels the power of death and undeath to control the living and the dead.',
    spiritAnimal: 'Your spirit animal appears partially skeletal. It gains resist cold 5 and can channel negative energy once per day to heal undead for 1d6 per shaman level.',
    spiritMagic: { 1:'Cause Fear', 2:'False Life', 3:'Animate Dead', 4:'Death Ward', 5:'Waves of Fatigue', 6:'Undeath to Death', 7:'Destruction', 8:'Horrid Wilting', 9:'Wail of the Banshee' },
    hexes: [
      { name:'Chilled Touch (Sp)', desc:'As a touch attack, the shaman deals 1d6 cold damage per two shaman levels (minimum 1d6). Undead damaged by this are staggered for 1 round. Living creatures are sickened for 1 round (Fort negates sickened).' },
      { name:'Soulbind (Sp)', desc:'Once per day, the shaman can prevent a dying creature from being raised as undead. The creature\'s soul is briefly bound in a gem the shaman holds. The creature cannot be raised as undead but can still be resurrected with the appropriate spells.' },
      { name:'Spirit Shield (Su)', desc:'As a standard action, the shaman creates a shield of negative energy, granting DR 5/positive energy. This lasts 1 round per shaman level. Once per day.' },
    ],
    spiritAbility: { level:1, name:'Grave Touch', desc:'As a melee touch attack, the shaman can cause a living creature to become shaken for a number of rounds equal to ½ her shaman level (minimum 1). She can use this ability 3 + CHA modifier times per day.' },
    greaterSpiritAbility: { level:8, name:'Bone Wall', desc:'Once per day, the shaman can summon a wall of bones as a standard action. This functions as a wall of stone, except the wall is made of bones and can be affected by positive energy (4 hp per inch of thickness, hardness 8).' },
    trueSpiritAbility: { level:16, name:'Undead Mastery', desc:'The shaman can control undead as a cleric of her shaman level. Additionally, when she animates undead, the undead gain maximum hit points.' },
    manifestation: { level:20, name:'Death\'s Servant', desc:'The shaman becomes immune to death effects, energy drain, and negative energy. She gains the ability to cast true death once per day as a spell-like ability.' },
  },

  'Flame': {
    desc: 'The shaman draws on the spirits of fire to invoke destruction and protection.',
    spiritAnimal: 'Your spirit animal\'s coat or feathers glow with a warm, inner light. It gains resist fire 10 and its attacks count as dealing fire damage.',
    spiritMagic: { 1:'Burning Hands', 2:'Flaming Sphere', 3:'Fireball', 4:'Wall of Fire', 5:'Fire Shield', 6:'Fire Seeds', 7:'Fire Storm', 8:'Incendiary Cloud', 9:'Fiery Body' },
    hexes: [
      { name:'Fire Nimbus (Sp)', desc:'As a swift action, the shaman sheathes herself in flames. Creatures that strike her with natural attacks or unarmed strikes take 1d6 + ½ shaman level fire damage. This lasts 1 round per shaman level. Once per day.' },
      { name:'Flame Curse (Sp)', desc:'As a standard action, the shaman can curse a creature within 30 feet to take 2d6 fire damage whenever it uses a spell or spell-like ability for the next shaman level rounds. Will save negates (DC 10 + ½ shaman level + CHA).' },
      { name:'Touch of Flame (Sp)', desc:'As a melee touch attack, deal 1d6 fire damage per two shaman levels. The shaman can use this 3 + CHA mod times per day.' },
    ],
    spiritAbility: { level:1, name:'Flame Bolt', desc:'As a standard action, fire a bolt of flame at a target within 30 feet as a ranged touch attack. Deals 1d6 fire damage per two shaman levels. 3 + CHA mod times per day.' },
    greaterSpiritAbility: { level:8, name:'Cauterizing Flame', desc:'Once per day as a swift action, the shaman can channel positive and fire energy. Her next spell that deals fire damage also heals 1 hp per die of fire damage to allies in the area.' },
    trueSpiritAbility: { level:16, name:'Flame Form', desc:'Once per day, the shaman can become a Huge fire elemental for 1 minute per shaman level, as elemental body IV.' },
    manifestation: { level:20, name:'Spirit of Flame', desc:'The shaman gains immunity to fire and becomes vulnerable to cold. All fire spells she casts deal +1 damage per die. She can fly at will at her land speed.' },
  },

  'Life': {
    desc: 'The shaman channels positive energy to heal the living and protect her allies.',
    spiritAnimal: 'Your spirit animal radiates positive energy. Once per day, it can use lay on hands as a paladin of your shaman level.',
    spiritMagic: { 1:'Cure Light Wounds', 2:'Cure Moderate Wounds', 3:'Cure Serious Wounds', 4:'Cure Critical Wounds', 5:'Breath of Life', 6:'Heal', 7:'Regenerate', 8:'Mass Cure Critical Wounds', 9:'Mass Heal' },
    hexes: [
      { name:'Channel (Su)', desc:'The shaman can channel positive energy as a cleric of her shaman level 1 + CHA mod times per day. She can use Selective Channeling as a bonus feat.' },
      { name:'Life Link (Su)', desc:'As a standard action, create a bond between yourself and a creature. If that creature drops below 0 hp, it heals 1d8 hp and you take the same amount of damage. Lasts 1 day per shaman level.' },
      { name:'Misfortune (Su)', desc:'As per the witch hex: the target must roll twice on d20s and take the worse result for 1 round. Will save negates.' },
    ],
    spiritAbility: { level:1, name:'Spirit Healing', desc:'As a standard action, the shaman can touch a creature to heal 1d6 per two shaman levels hp. She can use this ability 3 + CHA mod times per day.' },
    greaterSpiritAbility: { level:8, name:'Life Sight', desc:'The shaman gains blindsight for living creatures within 30 feet. She can also detect disease, poison, and curses within that range.' },
    trueSpiritAbility: { level:16, name:'Spirit of Life', desc:'The shaman becomes immune to death effects and energy drain. She can use breath of life once per day as a spell-like ability.' },
    manifestation: { level:20, name:'Life Incarnate', desc:'The shaman cannot die from hit point damage — she falls unconscious at 0 hp and stabilizes automatically. Once per day, she can cast true resurrection as a spell-like ability.' },
  },

  'Nature': {
    desc: 'The shaman speaks to the spirits of the natural world.',
    spiritAnimal: 'Your spirit animal can communicate with animals. It gains the ability to cast speak with animals at will.',
    spiritMagic: { 1:'Charm Animal', 2:'Barkskin', 3:'Call Lightning', 4:'Reincarnate', 5:'Commune with Nature', 6:'Fire Seeds', 7:'Animal Shapes', 8:'Summon Nature\'s Ally VIII', 9:'Shapechange' },
    hexes: [
      { name:'Friend to Animals (Ex)', desc:'Animals do not attack the shaman unless trained to do so or provoked. She can speak with animals at will.' },
      { name:'Herb Lore (Ex)', desc:'The shaman gains a +4 bonus on Heal checks and Knowledge (nature) checks. Once per day, she can identify the magical properties of a plant.' },
      { name:'Wild Shape (Su)', desc:'The shaman can wild shape as a druid of her shaman level once per day. She can do this one additional time per day at 6th, 10th, 14th, and 18th level.' },
    ],
    spiritAbility: { level:1, name:'Speak with Animals', desc:'The shaman can speak with animals at will. This is a constant ability.' },
    greaterSpiritAbility: { level:8, name:'Woodland Stride', desc:'The shaman can move through natural terrain without penalty or leaving a trail, as a druid. She is also immune to being tripped by natural terrain.' },
    trueSpiritAbility: { level:16, name:'A Thousand Faces', desc:'The shaman can change her appearance at will, as alter self.' },
    manifestation: { level:20, name:'Spirit of Nature', desc:'The shaman gains DR 10/— and immunity to poison and disease. She can wild shape at will. All animals and plants within 60 feet of her are calmed.' },
  },

  'Stone': {
    desc: 'The shaman communes with the spirits of earth and stone.',
    spiritAnimal: 'Your spirit animal gains a burrowing speed equal to ½ its land speed and gains tremorsense 30 feet.',
    spiritMagic: { 1:'Magic Stone', 2:'Stone Call', 3:'Stone Shape', 4:'Spike Stones', 5:'Wall of Stone', 6:'Stoneskin', 7:'Statue', 8:'Repel Metal or Stone', 9:'Clashing Rocks' },
    hexes: [
      { name:'Earth Glide (Su)', desc:'The shaman can move through earth and stone at ½ speed for shaman level rounds per day. She can use this in 1-round increments.' },
      { name:'Rock Throwing (Ex)', desc:'The shaman gains +1 on attack rolls with thrown rocks. She can throw rocks that deal 2d6 + 1.5×STR bludgeoning damage to a range of 60 feet.' },
      { name:'Tremorsense (Ex)', desc:'The shaman gains tremorsense 30 feet while touching the ground.' },
    ],
    spiritAbility: { level:1, name:'Stone Curse', desc:'As a standard action, the shaman can cause a creature within 30 feet to become slow and sluggish for 1 round per shaman level. The creature\'s speed is halved and it takes a –2 on attack rolls and Reflex saves. Fort negates. 3 + CHA mod times per day.' },
    greaterSpiritAbility: { level:8, name:'Stoneskin', desc:'The shaman gains DR 10/adamantine for 1 minute per shaman level per day.' },
    trueSpiritAbility: { level:16, name:'Earth Mastery', desc:'The shaman can pass through stone and earth at full speed. She gains tremorsense 60 feet.' },
    manifestation: { level:20, name:'One with Stone', desc:'The shaman becomes immune to petrification and earth-based spells. She can merge with any stone object larger than herself at will as meld into stone.' },
  },

  'Waves': {
    desc: 'The shaman calls upon the spirits of the sea and flowing water.',
    spiritAnimal: 'Your spirit animal gains a swim speed equal to its land speed and can breathe water.',
    spiritMagic: { 1:'Hydraulic Push', 2:'Slipstream', 3:'Water Breathing', 4:'Wall of Ice', 5:'Geyser', 6:'Fluid Form', 7:'Vortex', 8:'Seamantle', 9:'Tsunami' },
    hexes: [
      { name:'Cold Strike (Sp)', desc:'As a melee touch attack, deal 1d6 cold damage per two shaman levels. Creatures struck must make a Fort save or be slowed for 1 round.' },
      { name:'Fluid Form (Su)', desc:'Once per day, the shaman can become fluid as water for 1 round per shaman level. She gains the ooze subtype, DR 10/slashing, and immunity to precision damage.' },
      { name:'Icy Tomb (Sp)', desc:'Once per day, encase a target in ice for 1 round per shaman level (Fort negates). The target takes 3d8 cold damage per round.' },
    ],
    spiritAbility: { level:1, name:'Water Sight', desc:'The shaman can see through water and aqueous environments without penalty. She can also use water surfaces as mirrors for scrying once per day.' },
    greaterSpiritAbility: { level:8, name:'Ice Armor', desc:'Once per day, encase yourself in armor of ice for 1 hour per shaman level. Gain +8 armor bonus to AC and cold resistance 20.' },
    trueSpiritAbility: { level:16, name:'Tidal Wave', desc:'Once per day as a standard action, create a 30-foot wave that deals 8d6 bludgeoning damage and bull rushes all creatures in a 30-foot line (CMB = shaman level + CHA).' },
    manifestation: { level:20, name:'One with Water', desc:'The shaman gains immunity to cold and can breathe water. She can walk on water at will and cast tsunami once per day as a spell-like ability.' },
  },

  'Wind': {
    desc: 'The shaman harnesses the power of air and storm.',
    spiritAnimal: 'Your spirit animal gains a fly speed of 30 feet (average). It can create a gust of wind once per day as a spell-like ability.',
    spiritMagic: { 1:'Shocking Grasp', 2:'Gust of Wind', 3:'Call Lightning', 4:'Air Walk', 5:'Control Winds', 6:'Chain Lightning', 7:'Control Weather', 8:'Whirlwind', 9:'Winds of Vengeance' },
    hexes: [
      { name:'Cyclone (Sp)', desc:'Once per day as a standard action, create a vortex in a 10-foot radius that acts as a windstorm for 1 round per shaman level. Creatures in the area must make Fort saves (DC 10 + ½ shaman level + CHA) or be knocked prone and deafened.' },
      { name:'Lightning Touch (Sp)', desc:'As a melee touch attack, deal 1d6 electricity damage per two shaman levels. The shaman can use this 3 + CHA mod times per day.' },
      { name:'Wind Ward (Su)', desc:'As a standard action, surround a creature with a ward of air. The creature gains a +4 deflection bonus to AC against ranged attacks and immunity to inhaled poisons for 1 round per shaman level. Once per day per creature.' },
    ],
    spiritAbility: { level:1, name:'Thunderbolt', desc:'As a ranged attack against a target within 30 feet, deal 1d6 electricity damage per two shaman levels (min 1d6) and deafen for 1 round (Fort negates deafness). 3 + CHA mod times per day.' },
    greaterSpiritAbility: { level:8, name:'Wind Walker', desc:'The shaman can fly at her land speed with good maneuverability for shaman level minutes per day. She can activate this in 1-minute increments.' },
    trueSpiritAbility: { level:16, name:'Storm Form', desc:'Once per day, become a Huge air elemental for 1 minute per shaman level, as elemental body IV.' },
    manifestation: { level:20, name:'One with the Wind', desc:'The shaman gains immunity to electricity and sonic damage. She can fly at will at 60 ft with perfect maneuverability. She can cast control weather at will.' },
  },

};

// ── SHAMAN WANDERING SPIRIT ────────────────────────────────────────
// Shamans can choose one wandering spirit per day from the spirit list
const SHAMAN_WANDERING_SPIRITS = Object.keys(SHAMAN_SPIRITS);

// Helper functions
function getWitchHexes(type) {
  return WITCH_HEXES[type] || [];
}

function getShamanSpirit(name) {
  return SHAMAN_SPIRITS[name] || null;
}

function searchHexes(query, type) {
  const q = (query || '').toLowerCase();
  if (type === 'shaman') {
    return Object.entries(SHAMAN_SPIRITS)
      .filter(([name]) => !q || name.toLowerCase().includes(q))
      .map(([name, s]) => ({ name, ...s }));
  }
  const hexType = type || 'minor';
  return (WITCH_HEXES[hexType] || []).filter(h =>
    !q || h.name.toLowerCase().includes(q) || h.desc.toLowerCase().includes(q)
  );
}
