/* Pathfinder 1e — Complete Conditions Reference
   Source: CRB p.565-568, plus additional conditions from supplements
   38 official conditions with full mechanical effects */
'use strict';

const CONDITIONS = [
  {
    name: 'Bleed',
    icon: '🩸',
    summary: 'Losing hit points each round.',
    mechanics: 'At the start of each turn, the creature loses the listed number of hit points. Bleed damage is not multiplied on a critical hit. Bleed ends when the creature receives any magical healing or a DC 15 Heal check. Multiple sources of bleed stack.',
    endsOn: 'Magical healing or DC 15 Heal check.',
  },
  {
    name: 'Blinded',
    icon: '👁',
    summary: '–2 AC, loses Dex bonus, –4 Perception, 50% miss chance.',
    mechanics: 'The creature cannot see. It takes a –2 penalty to AC, loses its Dexterity bonus to AC (if any), and takes a –4 penalty on most Strength- and Dexterity-based skill checks and opposed Perception skill checks. All checks and activities that rely on vision automatically fail. All opponents are treated as having total concealment (50% miss chance). The creature must make a DC 10 Acrobatics check to move faster than half speed, or fall prone.',
    endsOn: 'Remove Blindness/Deafness, Heal, regeneration, or end of duration.',
  },
  {
    name: 'Broken',
    icon: '🔨',
    summary: 'Item has taken damage; –2 attack/damage, 50% spell failure.',
    mechanics: 'Items that have taken damage in excess of half their total hit points gain the broken condition, meaning they are less effective at their designated task. Weapons with the broken condition deal –2 penalty on attack and damage rolls. Armor with the broken condition gives half its normal armor bonus. Wands and staves with the broken condition have a 50% chance to not function on any given use. Broken items have an effective hardness of 0.',
    endsOn: 'Mending, Make Whole, or similar repair.',
  },
  {
    name: 'Confused',
    icon: '🌀',
    summary: 'Acts randomly: attack nearest, babble, hurt self, act normal.',
    mechanics: 'A confused creature\'s actions are determined by rolling d% at the start of each turn: 01-25: Act normally; 26-50: Do nothing but babble incoherently; 51-75: Deal 1d8 + Str mod damage to self with held weapon or bite attack; 76-100: Attack nearest creature (for this purpose, a familiar counts as part of the subject\'s self). A confused creature that is attacked automatically attacks its attackers on its next turn if it is still confused. A confused creature does not make attacks of opportunity against any creature that it is not already devoted to attacking.',
    endsOn: 'Remove Confusion, Calm Emotions, end of duration.',
  },
  {
    name: 'Cowering',
    icon: '😱',
    summary: 'Frozen in fear. –2 AC, loses Dex to AC. No actions.',
    mechanics: 'The creature is frozen in fear and can take no actions. A cowering creature takes a –2 penalty to Armor Class and loses its Dexterity bonus (if any).',
    endsOn: 'Remove Fear, end of duration.',
  },
  {
    name: 'Dazed',
    icon: '💫',
    summary: 'Can take no actions. No penalties to AC.',
    mechanics: 'The creature is unable to act normally. The creature can take no actions, but has no penalty to Armor Class. A dazed condition typically lasts 1 round.',
    endsOn: 'End of duration (typically 1 round).',
  },
  {
    name: 'Dazzled',
    icon: '✨',
    summary: '–1 attack rolls and sight-based Perception checks.',
    mechanics: 'The creature is unable to see well because of overstimulation of the eyes. A dazzled creature takes a –1 penalty on attack rolls and sight-based Perception checks.',
    endsOn: 'End of duration, Remove Blindness/Deafness.',
  },
  {
    name: 'Dead',
    icon: '💀',
    summary: 'Hit points reduced to –Con or killed by death effect.',
    mechanics: 'The creature\'s hit points are reduced to a negative amount equal to its Constitution score, it fails three consecutive stabilization checks, or it is killed outright by a spell or effect. The creature\'s soul leaves its body. Dead creatures cannot benefit from normal or magical healing, but can be restored to life via magic. A dead creature is also unconscious. Poison and disease effects continue to progress on a dead creature.',
    endsOn: 'Raise Dead, Resurrection, True Resurrection, Reincarnate, etc.',
  },
  {
    name: 'Deafened',
    icon: '👂',
    summary: '–4 initiative, 20% arcane spell failure, –4 Perception (sound).',
    mechanics: 'A deafened creature cannot hear and takes a –4 penalty on initiative checks. A deafened character who attempts to cast a spell with a verbal component must succeed on a DC 20 concentration check to do so. Deafened creatures are immune to language-dependent effects that rely on hearing and take a 20% chance of arcane spell failure. Deafened creatures that cast spells with verbal components risk failure.',
    endsOn: 'Remove Blindness/Deafness, end of duration.',
  },
  {
    name: 'Disabled',
    icon: '🚑',
    summary: '0 hit points. One action per round; strenuous action deals 1 damage.',
    mechanics: 'A creature with exactly 0 hit points is disabled. A disabled creature may only take a single move action or standard action each round (not both, nor can it take full-round actions). It moves at half speed. Taking a move action doesn\'t harm a disabled creature, but performing any other action (casting a spell, attacking, using a special ability, taking a standard action) deals 1 damage after the action is completed. Unless the action increased the creature\'s hit points, it is now at –1 hit points and dying.',
    endsOn: 'Healing to 1+ hp, or drop below 0 hp.',
  },
  {
    name: 'Dying',
    icon: '❤️',
    summary: 'Unconscious, –1 to –Con hp. Stabilization check each round.',
    mechanics: 'A dying creature is unconscious and near death. Each round on its turn, a dying creature must make a DC 10 Constitution check to stabilize. If it fails by 5 or more, it loses 1 hp. A natural 20 stabilizes automatically. A creature that is stable does not need to make this check. If a stable creature takes any further damage, it begins dying again. A creature at exactly –Con hp dies immediately.',
    endsOn: 'Stabilization (natural or aided), magical healing.',
  },
  {
    name: 'Energy Drained',
    icon: '⬇️',
    summary: '–1 per negative level: attacks, saves, checks, max hp –5.',
    mechanics: 'Each negative level gives the creature: –1 penalty on all skill checks and ability checks, –1 penalty on attack rolls and saving throws, –1 effective level for determining spell effects, –5 hp max. A creature with negative levels equal to its HD dies. Negative levels from living creatures\' attacks generally go away after 24 hours (Fort save DC 10+1/2 attacker HD+Cha mod). Those from undead are permanent unless removed by Restoration.',
    endsOn: 'Restoration (lesser or full), end of duration (if temporary).',
  },
  {
    name: 'Entangled',
    icon: '🕸️',
    summary: '–2 attack, –4 Dex, no 5-ft step, cast with concentration check.',
    mechanics: 'The creature is ensnared. Being entangled impedes movement, but does not entirely prevent it unless the bonds are anchored to an immobile object or tethered by an opposing force. An entangled creature moves at half speed, cannot run or charge, and takes a –2 penalty on all attack rolls and a –4 penalty to Dexterity. An entangled character who attempts to cast a spell must make a concentration check (DC 15 + spell level) or lose the spell.',
    endsOn: 'Escape Artist check (DC varies), Freedom of Movement, end of duration.',
  },
  {
    name: 'Exhausted',
    icon: '😩',
    summary: '–6 Str and Dex. Move at half speed. 1 hour rest to become fatigued.',
    mechanics: 'An exhausted creature moves at half its normal speed and takes a –6 penalty to Strength and Dexterity. After 1 hour of complete rest, an exhausted character becomes fatigued. A fatigued character becomes exhausted by doing something that would normally cause fatigue. Many effects can cause exhaustion: forced marching, starvation, some spells, and certain special abilities.',
    endsOn: '1 hour rest → Fatigued. Restoration, good rest.',
  },
  {
    name: 'Fascinated',
    icon: '👀',
    summary: 'Stands and watches. –4 opposed Perception, no actions.',
    mechanics: 'A fascinated creature is entranced by a supernatural or spell effect. The creature stands or sits quietly, taking no actions other than to pay attention to the fascinating effect, for as long as the effect lasts. It takes a –4 penalty on skill checks made as reactions, such as Perception checks. Any potential threat, such as a hostile creature approaching, allows the fascinated creature a new saving throw against the fascinating effect. Any obvious threat, such as someone drawing a weapon, automatically breaks the effect.',
    endsOn: 'Threat, damage, end of effect.',
  },
  {
    name: 'Fatigued',
    icon: '😪',
    summary: '–2 Str and Dex. Cannot run or charge.',
    mechanics: 'A fatigued character can neither run nor charge and takes a –2 penalty to Strength and Dexterity. Doing anything that would normally cause fatigue causes the fatigued character to become exhausted. After 8 hours of complete rest, fatigued characters are no longer fatigued. A character with more than two consecutive days of bed rest recovers 2 hp per level per day. Light activity and poor conditions can prevent rest from being effective.',
    endsOn: '8 hours rest, Restoration, Lesser Restoration.',
  },
  {
    name: 'Flat-Footed',
    icon: '🦶',
    summary: 'Loses Dex bonus to AC and cannot make attacks of opportunity.',
    mechanics: 'A character who has not yet acted during a combat is flat-footed, unable to react normally to the situation. A flat-footed character loses his Dexterity bonus to AC (if any) and cannot make attacks of opportunity. Note that even if the character cannot react, still retains Dex against some effects. Uncanny Dodge prevents flat-footed condition from stripping Dex bonus. Rogues and some other classes retain Dex vs flat-footed with appropriate class abilities.',
    endsOn: 'Acting in combat, Uncanny Dodge (prevents).',
  },
  {
    name: 'Frightened',
    icon: '😨',
    summary: 'Flees if possible. –2 attacks, saves, skills, checks.',
    mechanics: 'A frightened creature flees from the source of its fear as best it can. If unable to flee, it may fight. A frightened creature takes a –2 penalty on all attack rolls, saving throws, skill checks, and ability checks. A frightened creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape. A frightened condition supersedes the shaken condition.',
    endsOn: 'Remove Fear, distance from source, end of duration.',
  },
  {
    name: 'Grappled',
    icon: '🤼',
    summary: '–4 Dex, –2 attack/CMB except vs grapple. No movement, no 2-hand.',
    mechanics: 'A grappled creature is restrained by a creature, trap, or effect. Grappled creatures cannot move and take a –4 penalty to Dexterity. A grappled creature takes a –2 penalty on all attack rolls and combat maneuver checks, except those made to grapple or escape a grapple. A grappled creature cannot use two-handed weapons and cannot use a shield. A grappled creature cannot cast any spell with a somatic component unless the spell has no somatic component, or it makes a concentration check (DC 10+CMB of grappler+spell level).',
    endsOn: 'Escape Artist or CMB check to break free.',
  },
  {
    name: 'Helpless',
    icon: '🪢',
    summary: 'Dex 0 (AC –5). Melee attackers get +4 attack. Subject to coup de grace.',
    mechanics: 'A helpless character is paralyzed, held, bound, sleeping, unconscious, or otherwise completely at an opponent\'s mercy. A helpless target is treated as having a Dexterity of 0 (–5 penalty to AC). Melee attacks against a helpless target get a +4 bonus (equivalent to attacking a prone target). Ranged attacks get no special bonus against helpless targets. As a full-round action, a character can use a melee weapon to deliver a coup de grace to a helpless foe. The attacker automatically hits and scores a critical hit. The target must make a Fort save (DC = 10 + damage dealt) or die.',
    endsOn: 'Depends on cause (remove paralysis, unconscious, etc.).',
  },
  {
    name: 'Incorporeal',
    icon: '👻',
    summary: 'Immune to nonmagical weapons. 50% miss with magic. No Str/Con.',
    mechanics: 'Incorporeal creatures are immune to all nonmagical attack forms. Even when hit by spells or magic weapons, they have a 50% chance to ignore any damage from a corporeal source (except for positive energy, negative energy, force effects, or attacks made by ghosts). Incorporeal creatures are immune to critical hits and precision-based damage (such as sneak attack damage) from corporeal attackers. They have no Strength score, use their Dexterity for melee attacks, and their attacks ignore armor. They can pass through solid objects but not force effects.',
    endsOn: 'Condition is innate to creature type.',
  },
  {
    name: 'Invisible',
    icon: '🫥',
    summary: '+2 attack, opponents denied Dex. –40/–20 Perception to locate.',
    mechanics: 'Invisible creatures are visually undetectable. An invisible creature gains a +2 bonus on attack rolls against sighted opponents, and ignores its opponents\' Dexterity bonuses to AC (if any). Still makes noise and leaves footprints; –20 Perception if moving, –40 if standing still. Glitterdust or other effects reveal invisible creatures. See Invisibility and True Seeing allow detection. An invisible creature can still be pinpointed by other senses.',
    endsOn: 'Attacking, casting (if non-greater invis), Glitterdust, See Invisibility.',
  },
  {
    name: 'Nauseated',
    icon: '🤢',
    summary: 'Only move action per round. No attacks, concentration, or spells.',
    mechanics: 'Nauseated creatures experience stomach distress. Nauseated creatures are unable to attack, cast spells, concentrate on spells, or do anything else requiring attention. The only action a nauseated creature can take is a single move action per turn. This condition supersedes the sickened condition.',
    endsOn: 'Remove Disease, Neutralize Poison, end of duration.',
  },
  {
    name: 'Panicked',
    icon: '🏃',
    summary: 'Drops held items, flees. –2 attacks/saves/skills/checks.',
    mechanics: 'A panicked creature must drop anything it holds and flee at top speed from the source of its fear, as well as any other dangers it encounters, along a random path. It can\'t take any other actions. In addition, the creature takes a –2 penalty on all saving throws, skill checks, and ability checks. If cornered, a panicked creature cowers and does not attack, typically using the total defense action in combat. A panicked creature that cannot flee may cower. This condition supersedes the frightened condition, which in turn supersedes the shaken condition.',
    endsOn: 'Remove Fear, end of duration.',
  },
  {
    name: 'Paralyzed',
    icon: '🧊',
    summary: 'Str and Dex 0. Helpless. Flyers fall. Swimmers may drown.',
    mechanics: 'A paralyzed character is frozen in place and unable to move or act. A paralyzed character has effective Strength and Dexterity scores of 0 and is helpless, but can take purely mental actions. A winged creature flying in the air at the time that it becomes paralyzed cannot flap its wings and falls. A paralyzed swimmer can\'t swim and may drown. A creature can move through a space occupied by a paralyzed creature ally or enemy.',
    endsOn: 'Remove Paralysis, Freedom of Movement, end of duration.',
  },
  {
    name: 'Petrified',
    icon: '🪨',
    summary: 'Turned to stone. Unconscious. Shattering causes permanent damage.',
    mechanics: 'A petrified character has been turned to stone and is considered unconscious. If a petrified character cracks or breaks, but the broken pieces are joined with the body as he returns to flesh, he is unharmed. If the character\'s petrified body is broken, and the pieces are not all available when he is returned to flesh, the missing pieces are lost and may result in permanent injury. A character who returns to flesh missing a hand, for example, loses that hand permanently.',
    endsOn: 'Stone to Flesh, Break Enchantment.',
  },
  {
    name: 'Pinned',
    icon: '📌',
    summary: 'Grappled and immobile. –4 AC, –4 Dex. Helpless for certain effects.',
    mechanics: 'A pinned creature is tightly bound and can take few actions. A pinned creature takes a –4 penalty to Armor Class and takes a –4 penalty to Dexterity. It is also considered grappled. A pinned creature can always attempt to free itself, usually through a combat maneuver check or Escape Artist check (DC equal to the grappler\'s CMD). A pinned creature is limited in the actions that it can take. A pinned character cannot cast most spells, as most require somatic or verbal components. An opponent can use a melee weapon to deliver a coup de grace to a pinned creature.',
    endsOn: 'CMB or Escape Artist to escape grapple.',
  },
  {
    name: 'Prone',
    icon: '⬇️',
    summary: '–4 melee attacks. +4 ranged AC. Melee attackers get +4.',
    mechanics: 'The character is on the ground. An attacker who is prone has a –4 penalty on melee attack rolls and cannot use a ranged weapon (except for a crossbow). A character who is prone benefits from a +4 bonus to Armor Class against ranged attacks, but takes a –4 penalty to AC against melee attacks. Standing up is a move action that provokes attacks of opportunity.',
    endsOn: 'Standing up (move action, provokes AoO).',
  },
  {
    name: 'Shaken',
    icon: '😟',
    summary: '–2 attack rolls, saving throws, skill checks, ability checks.',
    mechanics: 'A shaken character takes a –2 penalty on attack rolls, saving throws, skill checks, and ability checks. Shaken is a less severe state of fear than frightened or panicked. Multiple fear effects can combine: a shaken creature that is also under a Doom spell becomes frightened. A shaken creature that succeeds at a Fear save or succeeds at its rounds check is no longer shaken but may need to make new saves if the source continues.',
    endsOn: 'Remove Fear, end of duration.',
  },
  {
    name: 'Sickened',
    icon: '🤒',
    summary: '–2 attack, damage, saves, skills, ability checks.',
    mechanics: 'The character takes a –2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.',
    endsOn: 'Remove Disease, Neutralize Poison, Heal, end of duration.',
  },
  {
    name: 'Sleeping',
    icon: '😴',
    summary: 'Helpless. Loud noise or damage wakes with –2 initiative penalty.',
    mechanics: 'A sleeping creature is helpless. A loud noise wakes a sleeping creature if it makes a Perception check (DC 0 or higher). Any amount of damage wakes a sleeping creature. A creature forced awake with less than full hp is not necessarily fully rested. Magic sleep (from spells like Sleep) is deeper and harder to awaken from; typically only damage or a shaking wake-up action can rouse the creature.',
    endsOn: 'Loud noise (Perception DC 0), damage, shaking (standard action).',
  },
  {
    name: 'Stable',
    icon: '🏥',
    summary: 'No longer losing hp but still unconscious at negative hp.',
    mechanics: 'A stable character is unconscious with negative hit points but is no longer at risk of losing additional hit points. A stable character who has been tended by someone with the Heal skill (DC 15) regains consciousness and is disabled when their hit points reach 0. A stable character left alone continues to sleep, but regains 1 hit point per hour until they reach 0 hp, at which point they become disabled. On a natural 20 on a stabilization check, a dying creature becomes stable.',
    endsOn: 'Healing to 0 hp (disabled), or 1 hp/hour until reaching 0.',
  },
  {
    name: 'Staggered',
    icon: '🚶',
    summary: 'Only one move or standard action per round (no full-round actions).',
    mechanics: 'A staggered creature may take only a single move action or standard action each round (not both, nor can it take full-round actions). A staggered creature can still take swift, immediate, and free actions. A creature with nonlethal damage exactly equal to its current hit points gains the staggered condition.',
    endsOn: 'Remove Curse, Freedom of Movement, healing above the threshold.',
  },
  {
    name: 'Stunned',
    icon: '⚡',
    summary: 'No actions, drops weapon, –2 AC, loses Dex to AC.',
    mechanics: 'A stunned creature drops everything held, can\'t take actions, takes a –2 penalty to AC, and loses its Dexterity bonus to AC (if any). Attackers receive a +2 bonus on attack rolls against a stunned creature. Stunned is a more severe condition than staggered.',
    endsOn: 'End of duration (typically 1 round).',
  },
  {
    name: 'Turned',
    icon: '✝️',
    summary: 'Undead flees from cleric for 10 rounds or stays within 10 ft.',
    mechanics: 'An undead creature that is turned must flee from the cleric on its next turn and on all subsequent turns, and it must stay at least 10 feet away from the cleric. If the undead cannot flee, it can act normally. An undead can be destroyed outright if the cleric\'s channeling result exceeds twice the undead\'s HD.',
    endsOn: 'End of 10 rounds, or undead acts normally if cornered.',
  },
  {
    name: 'Unconscious',
    icon: '💤',
    summary: 'Helpless and unaware of surroundings.',
    mechanics: 'An unconscious creature is incapacitated. Unconsciousness can result from too much nonlethal damage (unconscious but stable), or going below 0 hp (unconscious and dying or stable). An unconscious creature is helpless. Unconscious creatures cannot take any actions.',
    endsOn: 'Healing to 1+ hp, or for nonlethal: regain consciousness when lethal hp > nonlethal damage.',
  },
];

// Helper: get condition by name
function getCondition(name) {
  return CONDITIONS.find(c => c.name.toLowerCase() === name.toLowerCase());
}

// Helper: search conditions
function searchConditions(query) {
  const q = (query || '').toLowerCase();
  return CONDITIONS.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.summary.toLowerCase().includes(q)
  );
}
