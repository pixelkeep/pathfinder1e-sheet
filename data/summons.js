/* Pathfinder 1e — Complete Summons Database
   Sources: CRB p.313-315, APG, Bestiary 1-6
   Summon Monster I-IX and Summon Nature's Ally I-IX
   Each entry: name, alignment tags, key stats, special abilities */
'use strict';

const SUMMON_LISTS = {

  // ══════════════════════════════════════════════════════════════
  // SUMMON MONSTER
  // ══════════════════════════════════════════════════════════════
  monster: {

    1: [
      { name:'Dire Rat',           align:'N',  size:'S', speed:'40 ft, climb 20',  ac:13, hp:'3 (1d8–1)', atk:'+1 bite (1d4–1 plus disease)', saves:'F+1 R+4 W+2', str:10, dex:17, con:9,  special:'Disease (filth fever, DC 11)' },
      { name:'Dolphin',            align:'N',  size:'M', speed:'Swim 80',           ac:13, hp:'11 (2d8+2)', atk:'+3 slam (1d4+1)', saves:'F+4 R+5 W+5', str:12, dex:17, con:13, special:'Blindsense 120 ft, Sonar' },
      { name:'Eagle',              align:'N',  size:'S', speed:'10/80 fly (avg)',   ac:14, hp:'4 (1d8)',    atk:'+3 talons (1d4), +3 bite (1d4)', saves:'F+2 R+4 W+2', str:10, dex:15, con:10, special:'—' },
      { name:'Fire Beetle',        align:'N',  size:'S', speed:'30',                ac:13, hp:'4 (1d8)',    atk:'+1 bite (1d4)', saves:'F+2 R+2 W+0', str:10, dex:11, con:11, special:'Luminescence: glows like torch' },
      { name:'Monkey',             align:'N',  size:'T', speed:'30, climb 30',      ac:14, hp:'3 (1d8–1)', atk:'+1 bite (1d3–3)', saves:'F+1 R+4 W+2', str:5,  dex:19, con:9,  special:'—' },
      { name:'Octopus',            align:'N',  size:'S', speed:'Swim 30',           ac:13, hp:'8 (2d8)',    atk:'+4 tentacles (1d2–1 plus grab)', saves:'F+3 R+4 W+1', str:8,  dex:17, con:11, special:'Ink cloud, jet 60 ft, grab' },
      { name:'Otter',              align:'N',  size:'T', speed:'20, swim 30',       ac:14, hp:'3 (1d8–1)', atk:'+3 bite (1d3–3)', saves:'F+1 R+4 W+1', str:5,  dex:19, con:9,  special:'—' },
      { name:'Poison Frog',        align:'N',  size:'T', speed:'30, swim 30',       ac:16, hp:'2 (1d8–2)', atk:'+5 tongue (1 plus poison)', saves:'F+0 R+6 W+2', str:4,  dex:18, con:6,  special:'Poison (DC 8, 1d2 Str dmg)' },
      { name:'Celestial Dog',      align:'LG', size:'S', speed:'40',                ac:13, hp:'6 (1d8+2)', atk:'+2 bite (1d4+1)', saves:'F+4 R+3 W+1', str:13, dex:17, con:15, special:'Darkvision 60, resist acid/cold/elec 5, DR 5/evil' },
      { name:'Fiendish Monkey',    align:'NE', size:'T', speed:'30, climb 30',      ac:14, hp:'3 (1d8–1)', atk:'+1 bite (1d3–3)', saves:'F+1 R+4 W+2', str:5,  dex:19, con:9,  special:'Darkvision 60, resist cold/fire 5, DR 5/good' },
      { name:'Fiendish Rat',       align:'NE', size:'T', speed:'15, climb 15',      ac:14, hp:'3 (1d8–1)', atk:'+1 bite (1d3–1)', saves:'F+2 R+4 W+1', str:8,  dex:18, con:9,  special:'Darkvision 60, resist cold/fire 5, DR 5/good' },
      { name:'Fiendish Viper',     align:'NE', size:'T', speed:'20, climb 20, swim 20', ac:17, hp:'4 (1d8)', atk:'+5 bite (1d2–2 plus poison)', saves:'F+2 R+5 W+1', str:6, dex:17, con:11, special:'Darkvision 60, poison (DC 11), DR 5/good' },
    ],

    2: [
      { name:'Ant, Giant (Worker)',align:'N',  size:'M', speed:'50, climb 20',      ac:17, hp:'19 (3d8+6)', atk:'+4 bite (1d6+4)', saves:'F+5 R+3 W+1', str:17, dex:10, con:15, special:'Acid sting, grab' },
      { name:'Elemental, Small (Air)',align:'N',size:'S', speed:'Fly 100 (perfect)', ac:17, hp:'13 (2d10+2)', atk:'+3 slam (1d4)', saves:'F+1 R+5 W+1', str:10, dex:17, con:12, special:'Air mastery, whirlwind (DC 13)' },
      { name:'Elemental, Small (Earth)',align:'N',size:'S', speed:'20, burrow 20', ac:17, hp:'13 (2d10+6)', atk:'+5 slam (1d6+4)', saves:'F+5 R+0 W+0', str:16, dex:8,  con:17, special:'Earth mastery, push' },
      { name:'Elemental, Small (Fire)',align:'N',size:'S', speed:'50',              ac:15, hp:'11 (2d10)', atk:'+3 slam (1d4 plus burn)', saves:'F+0 R+4 W+1', str:10, dex:13, con:10, special:'Burn (1d4, DC 11), fire immune' },
      { name:'Elemental, Small (Water)',align:'N',size:'S', speed:'20, swim 90',   ac:17, hp:'13 (2d10+4)', atk:'+4 slam (1d6+3)', saves:'F+4 R+3 W+1', str:16, dex:16, con:15, special:'Water mastery, drench, vortex' },
      { name:'Giant Centipede',    align:'N',  size:'M', speed:'40, climb 40',      ac:14, hp:'13 (3d8)',   atk:'+2 bite (1d6–1 plus poison)', saves:'F+2 R+4 W+0', str:9,  dex:17, con:11, special:'Poison (DC 13, 1d3 Dex)' },
      { name:'Giant Frog',         align:'N',  size:'M', speed:'30, swim 30',       ac:11, hp:'15 (2d8+6)', atk:'+3 tongue (1d4+2 plus grab)', saves:'F+6 R+3 W+1', str:15, dex:13, con:16, special:'Pull, swallow whole' },
      { name:'Giant Spider',       align:'N',  size:'M', speed:'30, climb 30',      ac:14, hp:'16 (3d8+3)', atk:'+3 bite (1d6 plus poison)', saves:'F+4 R+4 W+1', str:11, dex:17, con:12, special:'Poison (DC 14, 1d2 Str), web' },
      { name:'Horse',              align:'N',  size:'L', speed:'50',                ac:11, hp:'15 (2d8+6)', atk:'+3 2 hooves (1d6+3)', saves:'F+6 R+4 W+1', str:16, dex:13, con:17, special:'Scent' },
      { name:'Hyena',              align:'N',  size:'M', speed:'50',                ac:13, hp:'13 (2d8+4)', atk:'+3 bite (1d6+3 plus trip)', saves:'F+5 R+3 W+2', str:14, dex:15, con:15, special:'Docile, trip' },
      { name:'Shark',              align:'N',  size:'M', speed:'Swim 60',           ac:13, hp:'19 (3d8+6)', atk:'+4 bite (1d8+3)', saves:'F+5 R+4 W+2', str:15, dex:15, con:15, special:'Blindsense 30, keen scent' },
      { name:'Wolf',               align:'N',  size:'M', speed:'50',                ac:14, hp:'13 (2d8+4)', atk:'+3 bite (1d6+3 plus trip)', saves:'F+5 R+3 W+1', str:13, dex:15, con:15, special:'Scent, trip' },
      { name:'Celestial Giant Centipede', align:'LG', size:'M', speed:'40, climb 40', ac:14, hp:'13', atk:'+2 bite (1d6–1 plus poison)', saves:'F+2 R+4 W+0', str:9, dex:17, con:11, special:'Darkvision 60, resist acid/cold/elec 5, DR 5/evil, poison' },
      { name:'Fiendish Giant Frog', align:'NE', size:'M', speed:'30, swim 30',      ac:11, hp:'15', atk:'+3 tongue (1d4+2 plus grab)', saves:'F+6 R+3 W+1', str:15, dex:13, con:16, special:'Darkvision 60, resist cold/fire 5, DR 5/good, pull' },
    ],

    3: [
      { name:'Ant, Giant (Soldier)',align:'N', size:'M', speed:'50, climb 20',      ac:18, hp:'16 (3d8+3)', atk:'+4 bite (2d4+3 plus grab)', saves:'F+4 R+3 W+1', str:14, dex:10, con:13, special:'Acid sting, poison (DC 13)' },
      { name:'Ape',                 align:'N', size:'L', speed:'30, climb 30',       ac:14, hp:'19 (3d8+6)', atk:'+7 2 claws (1d6+5)', saves:'F+6 R+4 W+2', str:21, dex:15, con:14, special:'Rend (2d6+7 if both claws hit)' },
      { name:'Aurochs',             align:'N', size:'L', speed:'40',                 ac:13, hp:'19 (3d8+6)', atk:'+6 gore (1d8+6)', saves:'F+6 R+3 W+1', str:23, dex:10, con:17, special:'Stampede, trample (2d6+9)' },
      { name:'Cheetah',             align:'N', size:'M', speed:'50',                 ac:15, hp:'19 (3d8+6)', atk:'+6 bite (1d6+4 plus trip)', saves:'F+6 R+5 W+2', str:17, dex:19, con:15, special:'Sprint, trip' },
      { name:'Dire Bat',            align:'N', size:'L', speed:'20/40 fly (good)',   ac:14, hp:'26 (4d8+8)', atk:'+5 bite (1d8+4)', saves:'F+6 R+6 W+4', str:17, dex:17, con:15, special:'Blindsense 40 ft' },
      { name:'Dire Rat',            align:'N', size:'S', speed:'40, climb 20',       ac:13, hp:'3 (1d8–1)',  atk:'+1 bite (1d4–1 plus disease)', saves:'F+1 R+4 W+2', str:10, dex:17, con:9, special:'Disease (filth fever DC 11), darkvision 60' },
      { name:'Elemental, Medium (Air)',align:'N',size:'M',speed:'Fly 100 (perfect)', ac:18, hp:'26 (4d10+4)', atk:'+5 2 slams (1d6+1)', saves:'F+2 R+7 W+1', str:12, dex:21, con:12, special:'Air mastery, whirlwind (DC 15)' },
      { name:'Elemental, Medium (Earth)',align:'N',size:'M',speed:'20, burrow 20',  ac:18, hp:'30 (4d10+12)', atk:'+8 2 slams (1d8+5)', saves:'F+7 R+1 W+1', str:21, dex:8, con:17, special:'Earth mastery, push' },
      { name:'Elemental, Medium (Fire)',align:'N',size:'M',speed:'50',              ac:16, hp:'26 (4d10+4)', atk:'+5 2 slams (1d6+1 plus burn)', saves:'F+2 R+6 W+1', str:12, dex:19, con:12, special:'Burn (1d6, DC 14), fire immune' },
      { name:'Elemental, Medium (Water)',align:'N',size:'M',speed:'20, swim 90',    ac:18, hp:'30 (4d10+12)', atk:'+7 2 slams (1d8+4)', saves:'F+6 R+4 W+1', str:18, dex:16, con:17, special:'Water mastery, drench, vortex' },
      { name:'Giant Eagle',         align:'NG', size:'L', speed:'10/80 fly (avg)',   ac:15, hp:'26 (4d10+4)', atk:'+7 2 talons (1d6+4)', saves:'F+6 R+6 W+4', str:18, dex:15, con:12, special:'Evasion, lowlight, Dex to fly' },
      { name:'Giant Owl',           align:'N',  size:'L', speed:'10/70 fly (avg)',   ac:15, hp:'26 (4d10+4)', atk:'+7 2 talons (1d4+4), +2 bite (1d6+2)', saves:'F+6 R+6 W+4', str:18, dex:15, con:12, special:'Night vision, silent flight' },
      { name:'Lantern Archon',      align:'LG', size:'S', speed:'Fly 60 (perfect)',  ac:13, hp:'13 (2d10+2)', atk:'+3 2 light rays (1d6 force)', saves:'F+3 R+3 W+5', str:12, dex:11, con:12, special:'Aura of menace (DC 13), immunity to elec/petrify, resist cold/fire 10, SR 12' },
      { name:'Lemure',              align:'LE', size:'M', speed:'20',                ac:14, hp:'13 (2d8+4)', atk:'+2 2 claws (1d4+1)', saves:'F+5 R+0 W+2', str:13, dex:10, con:15, special:'DR 5/good or silver, immune fire/mind, resist acid/cold 10, see in dark' },
      { name:'Celestial Ape',       align:'LG', size:'L', speed:'30, climb 30',      ac:14, hp:'19', atk:'+7 2 claws (1d6+5)', saves:'F+6 R+4 W+2', str:21, dex:15, con:14, special:'Darkvision 60, resist acid/cold/elec 5, DR 5/evil, rend' },
      { name:'Fiendish Giant Spider',align:'NE',size:'M', speed:'30, climb 30',      ac:14, hp:'16', atk:'+3 bite (1d6 plus poison)', saves:'F+4 R+4 W+1', str:11, dex:17, con:12, special:'Darkvision 60, resist cold/fire 5, DR 5/good, web' },
    ],

    4: [
      { name:'Deinonychus',         align:'N',  size:'M', speed:'60',                ac:14, hp:'26 (4d8+8)', atk:'+6 bite (1d6+2), +6 2 talons (1d8+2)', saves:'F+6 R+6 W+2', str:15, dex:19, con:14, special:'Pounce, grab' },
      { name:'Dire Ape',            align:'N',  size:'L', speed:'30, climb 30',       ac:15, hp:'26 (4d8+8)', atk:'+7 2 claws (1d6+5)', saves:'F+7 R+4 W+3', str:21, dex:15, con:16, special:'Rend (2d6+7)' },
      { name:'Dire Boar',           align:'N',  size:'L', speed:'40',                 ac:15, hp:'42 (4d8+24)', atk:'+8 gore (1d8+9)', saves:'F+10 R+3 W+2', str:27, dex:10, con:23, special:'Ferocity' },
      { name:'Dire Wolf',           align:'N',  size:'L', speed:'50',                 ac:14, hp:'45 (6d8+18)', atk:'+11 bite (1d8+10 plus trip)', saves:'F+9 R+5 W+2', str:25, dex:15, con:17, special:'Trip, scent' },
      { name:'Elemental, Large (Air)',align:'N',size:'L',speed:'Fly 100 (perfect)',   ac:20, hp:'52 (8d10+8)', atk:'+9 2 slams (1d8+3)', saves:'F+3 R+11 W+2', str:16, dex:25, con:12, special:'Air mastery, whirlwind (DC 19)' },
      { name:'Elemental, Large (Earth)',align:'N',size:'L',speed:'20, burrow 20',    ac:20, hp:'60 (8d10+24)', atk:'+13 2 slams (2d6+7)', saves:'F+10 R+2 W+2', str:25, dex:8, con:17, special:'Earth mastery, push' },
      { name:'Elemental, Large (Fire)',align:'N',size:'L',speed:'50',               ac:18, hp:'52 (8d10+8)', atk:'+9 2 slams (2d6+3 plus burn)', saves:'F+3 R+10 W+2', str:16, dex:23, con:12, special:'Burn (2d6, DC 18), fire immune' },
      { name:'Elemental, Large (Water)',align:'N',size:'L',speed:'20, swim 90',     ac:20, hp:'60 (8d10+24)', atk:'+13 2 slams (2d6+6)', saves:'F+9 R+7 W+2', str:22, dex:18, con:17, special:'Water mastery, drench, vortex' },
      { name:'Giant Scorpion',      align:'N',  size:'L', speed:'50',                ac:16, hp:'40 (5d10+15)', atk:'+6 2 claws (1d8+4 plus grab), +1 sting (1d10+2 plus poison)', saves:'F+7 R+5 W+1', str:19, dex:13, con:16, special:'Constrict (1d8+4), poison (DC 18, 1d2 Con/1d2 Con)' },
      { name:'Lion',                align:'N',  size:'L', speed:'40',                ac:15, hp:'32 (5d8+10)', atk:'+7 2 claws (1d4+4), +5 bite (1d6+2 plus grab)', saves:'F+7 R+7 W+2', str:17, dex:17, con:15, special:'Pounce, rake (1d4+4), sprint' },
      { name:'Mephit (any)',         align:'N',  size:'S', speed:'See type',          ac:17, hp:'19 (3d10+3)', atk:'+4 2 claws (1d3+1)', saves:'F+4 R+5 W+3', str:13, dex:15, con:12, special:'Breath weapon (varies), fast healing 2' },
      { name:'Mohrg',               align:'CE', size:'M', speed:'30',                ac:16, hp:'51 (6d8+24)', atk:'+9 slam (1d6+7), +4 tongue (paralyze DC 19)', saves:'F+6 R+5 W+5', str:21, dex:19, con:'—', special:'Paralyzing tongue, create spawn' },
      { name:'Shadow',              align:'CE', size:'M', speed:'40',                ac:13, hp:'19 (3d10+3)', atk:'+4 touch (1d6 Str)', saves:'F+2 R+3 W+4', str:'—', dex:13, con:'—', special:'Incorporeal, strength damage, spawn shadows' },
      { name:'Hound Archon',        align:'LG', size:'M', speed:'40',                ac:21, hp:'39 (6d10+6)', atk:'+8 bite (1d8+4), +8 slam (1d4+4)', saves:'F+6 R+5 W+6', str:18, dex:13, con:12, special:'Change shape (dog), aura of menace (DC 16), DR 10/evil, SR 16, immune elec/petrify' },
      { name:'Howler',              align:'CE', size:'L', speed:'60',                ac:17, hp:'45 (6d10+12)', atk:'+9 bite (2d6+6), +4 quills (1d4+2 plus poison)', saves:'F+7 R+5 W+2', str:23, dex:15, con:15, special:'Quills, unnerving howl, poison (DC 15)' },
    ],

    5: [
      { name:'Ankylosaurus',        align:'N',  size:'H', speed:'30',               ac:21, hp:'90 (12d8+36)', atk:'+14 tail (3d6+12 plus trip)', saves:'F+11 R+4 W+4', str:27, dex:10, con:17, special:'Powerful tail, trip' },
      { name:'Brachiosaurus',       align:'N',  size:'H', speed:'30',               ac:18, hp:'90', atk:'+17 stomp (2d6+12)', saves:'F+11 R+6 W+6', str:35, dex:13, con:17, special:'Trample (2d6+18, DC 27)' },
      { name:'Dire Lion',           align:'N',  size:'L', speed:'40',               ac:15, hp:'60 (8d8+24)', atk:'+12 2 claws (1d6+7), +7 bite (1d8+3 plus grab)', saves:'F+9 R+9 W+4', str:25, dex:19, con:17, special:'Pounce, rake (1d6+7)' },
      { name:'Elemental, Huge (Air)',align:'N',size:'H', speed:'Fly 100 (perfect)', ac:22, hp:'95 (10d10+40)', atk:'+13 2 slams (2d6+5)', saves:'F+7 R+14 W+3', str:20, dex:31, con:18, special:'Whirlwind (DC 23), air mastery' },
      { name:'Elemental, Huge (Earth)',align:'N',size:'H',speed:'20, burrow 20',   ac:22, hp:'103 (10d10+50)', atk:'+17 2 slams (2d8+9)', saves:'F+13 R+3 W+3', str:29, dex:8, con:21, special:'Earth mastery, push' },
      { name:'Elemental, Huge (Fire)',align:'N',size:'H',speed:'50',               ac:20, hp:'95 (10d10+40)', atk:'+13 2 slams (2d8+5 plus burn)', saves:'F+7 R+13 W+3', str:20, dex:29, con:18, special:'Burn (2d8, DC 22), fire immune' },
      { name:'Elemental, Huge (Water)',align:'N',size:'H',speed:'20, swim 90',     ac:22, hp:'103 (10d10+50)', atk:'+17 2 slams (2d8+8)', saves:'F+12 R+9 W+3', str:26, dex:22, con:21, special:'Water mastery, drench, vortex' },
      { name:'Ettin',               align:'CE', size:'L', speed:'40',               ac:18, hp:'65 (10d8+20)', atk:'+12/+12 morningstar (2d6+6)', saves:'F+9 R+3 W+5', str:23, dex:8, con:15, special:'Superior two-weapon fighting, two heads' },
      { name:'Giant Moray Eel',     align:'N',  size:'H', speed:'Swim 30',          ac:17, hp:'69 (9d10+18)', atk:'+13 bite (2d6+9 plus grab)', saves:'F+8 R+6 W+3', str:28, dex:12, con:14, special:'Grab, ravenous bite' },
      { name:'Kyton',               align:'LE', size:'M', speed:'30',               ac:18, hp:'54 (12d8)', atk:'+10 4 chains (2d4+3)', saves:'F+4 R+8 W+8', str:17, dex:15, con:10, special:'Dancing chains, DR 5/good or silver, immune cold, regen 2/good or silver' },
      { name:'Salamander, Flamebrother', align:'NE', size:'S', speed:'20',          ac:15, hp:'22 (4d10)', atk:'+5 spear (1d6+3 plus burn), +0 tail (1d4+1 plus burn)', saves:'F+4 R+1 W+5', str:14, dex:11, con:10, special:'Burn (1d6, DC 12), fire immune, cold vulnerable' },
      { name:'Succubus',            align:'CE', size:'M', speed:'30/50 fly (avg)', ac:20, hp:'33 (6d10)', atk:'+7 2 claws (1d6)', saves:'F+2 R+9 W+9', str:10, dex:17, con:10, special:'Change shape, energy drain, profane gift, SR 18, DR 10/cold iron or good' },
      { name:'Trumpet Archon',      align:'LG', size:'M', speed:'40/90 fly (good)', ac:27, hp:'88 (16d10)', atk:'+16/+11/+6 sword (1d10+3 plus holy)', saves:'F+5 R+10 W+14', str:16, dex:17, con:10, special:'Aura of menace (DC 19), DR 10/evil, SR 20, immune elec/petrify, trump (confusion or fear)' },
    ],

    6: [
      { name:'Babau',               align:'CE', size:'M', speed:'30',               ac:19, hp:'66 (7d10+28)', atk:'+11 2 claws (1d6+4), +6 bite (1d6+2)', saves:'F+6 R+8 W+6', str:19, dex:17, con:18, special:'Sneak attack +2d6, telepathy, SR 14, DR 10/good, energy drain gaze' },
      { name:'Bearded Devil (Barbazu)', align:'LE', size:'M', speed:'40',           ac:19, hp:'45 (6d10+12)', atk:'+10 glaive (1d10+6 plus bleed), +4 beard (1d8+3 plus infernal wound)', saves:'F+7 R+5 W+5', str:23, dex:13, con:15, special:'Battle frenzy, DR 10/good or silver, infernal wound (1d6 bleed)' },
      { name:'Bralani Azata',       align:'CG', size:'M', speed:'40/100 fly (perfect)', ac:20, hp:'60 (8d10+16)', atk:'+11 2 slams (1d6+4), +8/+8 shortbow (1d6+4)', saves:'F+8 R+8 W+6', str:18, dex:17, con:14, special:'Whirlwind blast, wind blast, alter self, DR 10/cold iron or evil' },
      { name:'Dire Bear',           align:'N',  size:'L', speed:'40',               ac:17, hp:'105 (10d8+60)', atk:'+16 2 claws (1d8+10 plus grab), +11 bite (2d6+5)', saves:'F+13 R+7 W+4', str:31, dex:13, con:23, special:'Grab, improved grab, maul' },
      { name:'Dire Tiger',          align:'N',  size:'L', speed:'40',               ac:17, hp:'150 (12d8+96)', atk:'+20 2 claws (1d8+10 plus grab), +15 bite (2d6+5)', saves:'F+16 R+10 W+5', str:31, dex:15, con:27, special:'Grab, pounce, rake (1d8+10)' },
      { name:'Erinyes',             align:'LE', size:'M', speed:'30/50 fly (good)', ac:23, hp:'85 (10d10+30)', atk:'+15/+10 longsword (1d8+7 plus), +10 rope (grab)', saves:'F+8 R+9 W+9', str:21, dex:21, con:17, special:'Entangle, DR 10/good, SR 19, immune fire/poison' },
      { name:'Elemental, Elder (Air)',align:'N',size:'H', speed:'Fly 100 (perfect)', ac:25, hp:'171 (18d10+72)', atk:'+23 2 slams (2d8+8)', saves:'F+10 R+19 W+6', str:26, dex:35, con:18, special:'Whirlwind (DC 27), vortex, air mastery' },
      { name:'Elemental, Elder (Earth)',align:'N',size:'H',speed:'20, burrow 20',  ac:25, hp:'207 (18d10+108)', atk:'+27 2 slams (4d6+13)', saves:'F+19 R+6 W+6', str:37, dex:8, con:23, special:'Earth mastery, push, split' },
      { name:'Lillend Azata',       align:'CG', size:'L', speed:'30/70 fly (avg)', ac:19, hp:'71 (11d10+11)', atk:'+14/+9 +2 longsword (1d8+8), +7 tail (1d6+3 plus grab)', saves:'F+4 R+8 W+11', str:20, dex:13, con:12, special:'Constrict (1d6+6), inspire courage +2, DR 10/cold iron or evil, immune elec/petrify' },
      { name:'Planetar',            align:'LG', size:'L', speed:'30/90 fly (good)', ac:32, hp:'229 (27d10+81)', atk:'+28 greatsword (3d6+15 plus holy)', saves:'F+16 R+13 W+20', str:30, dex:19, con:17, special:'Aura of menace (DC 21), DR 10/evil, SR 30, immune acid/cold/petrify, regen 10' },
    ],

    7: [
      { name:'Bebilith',            align:'CE', size:'H', speed:'40, climb 20',     ac:22, hp:'150 (12d10+84)', atk:'+18 bite (2d6+11 plus poison), +13 2 claws (2d4+5 plus rend)', saves:'F+14 R+8 W+6', str:33, dex:11, con:25, special:'Rend armor, web (DC 22), poison (DC 25, 1d6 Str), DR 10/good' },
      { name:'Hamatula (Barbed Devil)', align:'LE', size:'M', speed:'30',           ac:28, hp:'126 (12d10+60)', atk:'+17 2 claws (2d8+7 plus grab)', saves:'F+13 R+12 W+9', str:25, dex:25, con:21, special:'Barbed defense (1d8+7), fear aura (DC 20), grab, hold, DR 10/good, SR 22' },
      { name:'Roc',                 align:'N',  size:'G', speed:'20/80 fly (avg)', ac:17, hp:'102 (12d10+36)', atk:'+18 2 talons (2d6+9 plus grab), +13 bite (2d8+4)', saves:'F+11 R+10 W+5', str:28, dex:13, con:17, special:'Grab' },
      { name:'Vrock',               align:'CE', size:'L', speed:'30/50 fly (average)', ac:22, hp:'110 (13d10+39)', atk:'+18 bite (1d8+7), +17 2 claws (2d6+7)', saves:'F+11 R+8 W+9', str:25, dex:15, con:17, special:'Dance of ruin, spores, stunning screech (DC 20), SR 17, DR 10/good' },
    ],

    8: [
      { name:'Astral Deva',         align:'LG', size:'M', speed:'50/100 fly (good)', ac:35, hp:'270 (20d10+160)', atk:'+27 +4 heavy mace (1d8+17 plus stun), +22/+22 (multiattack)', saves:'F+20 R+16 W+18', str:30, dex:17, con:26, special:'Stun (DC 23), DR 10/evil, SR 30, immune acid/cold/petrify, regen 10, uncanny dodge' },
      { name:'Retriever',           align:'CE', size:'H', speed:'50',                ac:21, hp:'115 (10d10+60)', atk:'+16 4 claws (2d6+9)', saves:'F+9 R+11 W+5', str:28, dex:19, con:21, special:'Eye rays (fire/cold/elec/petrify, DC 19), find target' },
      { name:'Glabrezu',            align:'CE', size:'H', speed:'40',                ac:26, hp:'186 (12d10+120)', atk:'+20 2 pincers (2d10+10 plus grab), +15 2 claws (1d6+5), +15 bite (1d8+5)', saves:'F+18 R+8 W+14', str:31, dex:11, con:31, special:'True seeing, wish (1/month for mortal), SR 21, DR 10/good, immune elec/poison' },
    ],

    9: [
      { name:'Treant',              align:'NG', size:'H', speed:'30',                ac:20, hp:'143 (11d8+96)', atk:'+19 2 slams (2d6+12 plus push)', saves:'F+13 R+4 W+11', str:35, dex:8, con:29, special:'Animate trees (2), double damage vs objects, fire vulnerable, push (1d6+12)' },
      { name:'Tyrannosaurus',       align:'N',  size:'G', speed:'40',                ac:16, hp:'175 (14d8+112)', atk:'+21 bite (4d6+16 plus grab)', saves:'F+17 R+9 W+6', str:32, dex:13, con:26, special:'Grab, swallow whole (2d6+16 plus 2d8 acid, AC 16, 17 hp)' },
      { name:'Marut',               align:'LN', size:'L', speed:'40',                ac:34, hp:'216 (16d10+128)', atk:'+24 2 slams (2d6+13 plus 4d8+13 or spell)', saves:'F+18 R+10 W+14', str:37, dex:11, con:27, special:'Inevitable, DR 15/chaotic, SR 25, immune cold/electricity/sonic, regen 10' },
      { name:'Solar',               align:'LG', size:'L', speed:'50/150 fly (good)', ac:44, hp:'363 (22d10+242)', atk:'+35 +5 dancing vorpal greatsword (3d6+22/17-20)', saves:'F+25 R+18 W+25', str:40, dex:20, con:29, special:'Aura of menace (DC 25), DR 15/epic&evil, SR 34, immune cold/petrify, regen 15, wish 3/day' },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // SUMMON NATURE'S ALLY
  // ══════════════════════════════════════════════════════════════
  nature: {

    1: [
      { name:'Dire Rat',            align:'N',  size:'S', speed:'40, climb 20',     ac:13, hp:'3 (1d8–1)', atk:'+1 bite (1d4–1 plus disease)', saves:'F+1 R+4 W+2', str:10, dex:17, con:9,  special:'Disease (filth fever DC 11)' },
      { name:'Eagle',               align:'N',  size:'S', speed:'10/80 fly (avg)', ac:14, hp:'4 (1d8)',   atk:'+3 talons (1d4), +3 bite (1d4)', saves:'F+2 R+4 W+2', str:10, dex:15, con:10, special:'—' },
      { name:'Hyena',               align:'N',  size:'M', speed:'50',              ac:13, hp:'13 (2d8+4)', atk:'+3 bite (1d6+3 plus trip)', saves:'F+5 R+3 W+2', str:14, dex:15, con:15, special:'Docile, trip' },
      { name:'Monkey',              align:'N',  size:'T', speed:'30, climb 30',    ac:14, hp:'3 (1d8–1)', atk:'+1 bite (1d3–3)', saves:'F+1 R+4 W+2', str:5,  dex:19, con:9,  special:'—' },
      { name:'Octopus',             align:'N',  size:'S', speed:'Swim 30',         ac:13, hp:'8 (2d8)',   atk:'+4 tentacles (1d2–1 plus grab)', saves:'F+3 R+4 W+1', str:8,  dex:17, con:11, special:'Ink cloud, jet 60 ft, grab' },
      { name:'Porpoise',            align:'N',  size:'M', speed:'Swim 80',         ac:13, hp:'11 (2d8+2)', atk:'+3 slam (1d4+1)', saves:'F+4 R+5 W+5', str:12, dex:17, con:13, special:'Blindsense 120 ft' },
      { name:'Viper',               align:'N',  size:'T', speed:'20, climb 20, swim 20', ac:17, hp:'4 (1d8)', atk:'+5 bite (1d2–2 plus poison)', saves:'F+2 R+5 W+1', str:6,  dex:17, con:11, special:'Poison (DC 11, 1d2 Con)' },
      { name:'Wolf',                align:'N',  size:'M', speed:'50',              ac:14, hp:'13 (2d8+4)', atk:'+3 bite (1d6+3 plus trip)', saves:'F+5 R+3 W+1', str:13, dex:15, con:15, special:'Scent, trip' },
    ],

    2: [
      { name:'Ant, Giant (Worker)', align:'N',  size:'M', speed:'50, climb 20',    ac:17, hp:'19 (3d8+6)', atk:'+4 bite (1d6+4)', saves:'F+5 R+3 W+1', str:17, dex:10, con:15, special:'Acid sting, grab' },
      { name:'Bison',               align:'N',  size:'L', speed:'40',              ac:13, hp:'37 (5d8+15)', atk:'+7 gore (1d8+7)', saves:'F+8 R+3 W+2', str:22, dex:10, con:16, special:'Stampede, trample (1d8+7)' },
      { name:'Crocodile',           align:'N',  size:'M', speed:'20, swim 30',     ac:15, hp:'22 (4d8+4)', atk:'+5 bite (1d8+6 plus grab)', saves:'F+6 R+2 W+2', str:19, dex:12, con:13, special:'Grab, death roll (1d8+6)' },
      { name:'Goblin Snake',        align:'N',  size:'M', speed:'20, climb 20, swim 20', ac:15, hp:'13 (2d8+4)', atk:'+4 bite (1d6+3 plus paralysis)', saves:'F+5 R+4 W+2', str:14, dex:17, con:14, special:'Paralysis (1d4 rounds, DC 14)' },
      { name:'Leopard',             align:'N',  size:'M', speed:'30, climb 20',    ac:15, hp:'19 (3d8+6)', atk:'+6 bite (1d6+3 plus grab), +1 2 claws (1d3+1)', saves:'F+6 R+5 W+2', str:16, dex:19, con:15, special:'Pounce, grab, rake (1d3+3)' },
      { name:'Shark',               align:'N',  size:'M', speed:'Swim 60',         ac:13, hp:'19 (3d8+6)', atk:'+4 bite (1d8+3)', saves:'F+5 R+4 W+2', str:15, dex:15, con:15, special:'Blindsense 30, keen scent' },
      { name:'Squid',               align:'N',  size:'M', speed:'Swim 60',         ac:13, hp:'19 (2d8+10)', atk:'+4 tentacles (1d4+1 plus grab)', saves:'F+8 R+3 W+3', str:13, dex:17, con:21, special:'Ink cloud, jet 60 ft, grab' },
      { name:'Wolverine',           align:'N',  size:'M', speed:'30, climb 10, swim 10', ac:14, hp:'22 (4d8+4)', atk:'+5 2 claws (1d6+3), +0 bite (1d4+1)', saves:'F+6 R+4 W+2', str:16, dex:13, con:13, special:'Rage' },
    ],

    3: [
      { name:'Ape',                 align:'N',  size:'L', speed:'30, climb 30',    ac:14, hp:'19 (3d8+6)', atk:'+7 2 claws (1d6+5)', saves:'F+6 R+4 W+2', str:21, dex:15, con:14, special:'Rend (2d6+7)' },
      { name:'Boar',                align:'N',  size:'M', speed:'40',              ac:16, hp:'18 (2d8+9)', atk:'+4 gore (1d8+4)', saves:'F+6 R+0 W+0', str:17, dex:10, con:17, special:'Ferocity, scent' },
      { name:'Brown Bear',          align:'N',  size:'L', speed:'40',              ac:13, hp:'42 (5d8+20)', atk:'+8 2 claws (1d6+6 plus grab), +3 bite (1d6+3)', saves:'F+9 R+4 W+2', str:23, dex:13, con:19, special:'Grab' },
      { name:'Cheetah',             align:'N',  size:'M', speed:'50',              ac:15, hp:'19 (3d8+6)', atk:'+6 bite (1d6+4 plus trip)', saves:'F+6 R+5 W+2', str:17, dex:19, con:15, special:'Sprint, trip' },
      { name:'Constrictor Snake',   align:'N',  size:'L', speed:'20, climb 20, swim 20', ac:15, hp:'34 (4d8+16)', atk:'+7 bite (1d4+6 plus grab)', saves:'F+8 R+5 W+2', str:19, dex:17, con:18, special:'Constrict (1d4+6), grab, scent' },
      { name:'Crocodile, Giant',    align:'N',  size:'H', speed:'20, swim 30',     ac:16, hp:'59 (7d8+28)', atk:'+12 bite (2d8+10 plus grab), +7 tail (1d12+5)', saves:'F+10 R+5 W+4', str:27, dex:12, con:19, special:'Grab, death roll (2d8+15)' },
      { name:'Dire Ape',            align:'N',  size:'L', speed:'30, climb 30',    ac:15, hp:'26 (4d8+8)', atk:'+7 2 claws (1d6+5)', saves:'F+7 R+4 W+3', str:21, dex:15, con:16, special:'Rend (2d6+7)' },
      { name:'Dire Bat',            align:'N',  size:'L', speed:'20/40 fly (good)', ac:14, hp:'26 (4d8+8)', atk:'+5 bite (1d8+4)', saves:'F+6 R+6 W+4', str:17, dex:17, con:15, special:'Blindsense 40 ft' },
      { name:'Electric Eel',        align:'N',  size:'M', speed:'Swim 30',         ac:13, hp:'22 (4d8+4)', atk:'+4 bite (1d8+3 plus electricity)', saves:'F+5 R+5 W+3', str:15, dex:15, con:13, special:'Electric shock (DC 13, 1d8 elec)' },
      { name:'Leopard',             align:'N',  size:'M', speed:'30, climb 20',    ac:15, hp:'19 (3d8+6)', atk:'+6 bite (1d6+3 plus grab)', saves:'F+6 R+5 W+2', str:16, dex:19, con:15, special:'Pounce, grab, rake (1d3+3)' },
    ],

    4: [
      { name:'Brachiosaurus',       align:'N',  size:'G', speed:'30',              ac:18, hp:'90 (12d8+36)', atk:'+17 stomp (2d6+12)', saves:'F+11 R+6 W+6', str:35, dex:13, con:17, special:'Trample (2d6+18, DC 27)' },
      { name:'Deinonychus',         align:'N',  size:'M', speed:'60',              ac:14, hp:'26 (4d8+8)', atk:'+6 bite (1d6+2), +6 2 talons (1d8+2)', saves:'F+6 R+6 W+2', str:15, dex:19, con:14, special:'Pounce, grab' },
      { name:'Dire Boar',           align:'N',  size:'L', speed:'40',              ac:15, hp:'42 (4d8+24)', atk:'+8 gore (1d8+9)', saves:'F+10 R+3 W+2', str:27, dex:10, con:23, special:'Ferocity' },
      { name:'Dire Wolf',           align:'N',  size:'L', speed:'50',              ac:14, hp:'45 (6d8+18)', atk:'+11 bite (1d8+10 plus trip)', saves:'F+9 R+5 W+2', str:25, dex:15, con:17, special:'Trip, scent' },
      { name:'Lion',                align:'N',  size:'L', speed:'40',              ac:15, hp:'32 (5d8+10)', atk:'+7 2 claws (1d4+4), +5 bite (1d6+2 plus grab)', saves:'F+7 R+7 W+2', str:17, dex:17, con:15, special:'Pounce, rake (1d4+4), sprint' },
      { name:'Rhinoceros',          align:'N',  size:'L', speed:'40',              ac:16, hp:'45 (6d8+18)', atk:'+12 gore (2d6+9)', saves:'F+10 R+4 W+2', str:26, dex:10, con:21, special:'Powerful charge (4d6+18), gore' },
      { name:'Stegosaurus',         align:'N',  size:'H', speed:'30',              ac:20, hp:'63 (7d8+28)', atk:'+10 tail (4d6+9)', saves:'F+9 R+4 W+3', str:23, dex:12, con:18, special:'Tail sweep' },
      { name:'Tiger',               align:'N',  size:'L', speed:'40',              ac:14, hp:'45 (6d8+18)', atk:'+9 2 claws (1d8+5 plus grab), +4 bite (1d6+2)', saves:'F+9 R+7 W+3', str:21, dex:15, con:17, special:'Grab, pounce, rake (1d8+5)' },
    ],

    5: [
      { name:'Ankylosaurus',        align:'N',  size:'H', speed:'30',              ac:21, hp:'90 (12d8+36)', atk:'+14 tail (3d6+12 plus trip)', saves:'F+11 R+4 W+4', str:27, dex:10, con:17, special:'Powerful tail, trip' },
      { name:'Dire Lion',           align:'N',  size:'L', speed:'40',              ac:15, hp:'60 (8d8+24)', atk:'+12 2 claws (1d6+7), +7 bite (1d8+3 plus grab)', saves:'F+9 R+9 W+4', str:25, dex:19, con:17, special:'Pounce, rake (1d6+7)' },
      { name:'Giant Moray Eel',     align:'N',  size:'H', speed:'Swim 30',         ac:17, hp:'69 (9d10+18)', atk:'+13 bite (2d6+9 plus grab)', saves:'F+8 R+6 W+3', str:28, dex:12, con:14, special:'Grab, ravenous bite (2 bites/round)' },
      { name:'Orca',                align:'N',  size:'H', speed:'Swim 80',         ac:16, hp:'90 (12d8+36)', atk:'+16 bite (3d6+12 plus grab)', saves:'F+14 R+10 W+5', str:27, dex:17, con:18, special:'Blindsense 60 ft, keen scent, grab' },
      { name:'Pachycephalosaurus',  align:'N',  size:'H', speed:'40',              ac:17, hp:'60 (8d8+32)', atk:'+13 headbutt (1d8+9)', saves:'F+10 R+6 W+2', str:23, dex:12, con:19, special:'Powerful charge (2d6+12)' },
    ],

    6: [
      { name:'Baluchitherium',      align:'N',  size:'G', speed:'40',              ac:17, hp:'105 (10d8+60)', atk:'+15 slam (1d8+12), +10 bite (1d8+6)', saves:'F+13 R+7 W+5', str:35, dex:10, con:23, special:'Trample (1d8+18, DC 27)' },
      { name:'Dire Bear',           align:'N',  size:'L', speed:'40',              ac:17, hp:'105 (10d8+60)', atk:'+16 2 claws (1d8+10 plus grab), +11 bite (2d6+5)', saves:'F+13 R+7 W+4', str:31, dex:13, con:23, special:'Grab, maul' },
      { name:'Dire Tiger',          align:'N',  size:'L', speed:'40',              ac:17, hp:'150 (12d8+96)', atk:'+20 2 claws (1d8+10 plus grab), +15 bite (2d6+5)', saves:'F+16 R+10 W+5', str:31, dex:15, con:27, special:'Grab, pounce, rake (1d8+10)' },
      { name:'Elasmosaurus',        align:'N',  size:'H', speed:'20, swim 50',     ac:20, hp:'112 (15d8+45)', atk:'+17 bite (3d6+12)', saves:'F+12 R+9 W+6', str:26, dex:15, con:16, special:'Lunge, scent' },
      { name:'Giant Squid',         align:'N',  size:'H', speed:'Swim 80',         ac:13, hp:'90 (12d10+24)', atk:'+12 10 tentacles (1d4+8 plus grab), +12 bite (2d6+5)', saves:'F+10 R+8 W+5', str:26, dex:15, con:17, special:'Constrict, grab, ink cloud, jet 280 ft' },
      { name:'Rhinoceros, Woolly',  align:'N',  size:'L', speed:'30',              ac:17, hp:'60 (8d8+24)', atk:'+12 gore (2d8+9)', saves:'F+10 R+6 W+2', str:24, dex:10, con:19, special:'Powerful charge (4d8+18)' },
      { name:'Tyrannosaurus',       align:'N',  size:'G', speed:'40',              ac:16, hp:'175 (14d8+112)', atk:'+21 bite (4d6+16 plus grab)', saves:'F+17 R+9 W+6', str:32, dex:13, con:26, special:'Grab, swallow whole' },
    ],

    7: [
      { name:'Brachiosaurus',       align:'N',  size:'G', speed:'30',              ac:18, hp:'90 (12d8+36)', atk:'+17 stomp (2d6+12)', saves:'F+11 R+6 W+6', str:35, dex:13, con:17, special:'Trample (2d6+18, DC 27)' },
      { name:'Giant Squid',         align:'N',  size:'H', speed:'Swim 80',         ac:13, hp:'90 (12d10+24)', atk:'+12 tentacles (1d4+8 plus grab)', saves:'F+10 R+8 W+5', str:26, dex:15, con:17, special:'Constrict, grab, ink cloud, jet' },
    ],

    8: [
      { name:'Tyrannosaurus',       align:'N',  size:'G', speed:'40',              ac:16, hp:'175 (14d8+112)', atk:'+21 bite (4d6+16 plus grab)', saves:'F+17 R+9 W+6', str:32, dex:13, con:26, special:'Grab, swallow whole (2d6+16+2d8 acid, AC 16)' },
    ],

    9: [
      { name:'Tyrannosaurus',       align:'N',  size:'G', speed:'40',              ac:16, hp:'175 (14d8+112)', atk:'+21 bite (4d6+16 plus grab)', saves:'F+17 R+9 W+6', str:32, dex:13, con:26, special:'Grab, swallow whole' },
      { name:'Roc',                 align:'N',  size:'G', speed:'20/80 fly (avg)', ac:17, hp:'102 (12d10+36)', atk:'+18 2 talons (2d6+9 plus grab), +13 bite (2d8+4)', saves:'F+11 R+10 W+5', str:28, dex:13, con:17, special:'Grab' },
    ],
  },
};

// Alignment subtypes for celestial/fiendish/entropic/resolute templates
const SUMMON_SUBTYPES = {
  'good':    'celestial',
  'evil':    'fiendish',
  'lawful':  'resolute',
  'chaotic': 'entropic',
};

// Helper: get summons for a spell level and type
function getSummonList(type, level) {
  return (SUMMON_LISTS[type] || {})[level] || [];
}

// Helper: search summons by name
function searchSummons(query) {
  const q = (query || '').toLowerCase();
  const results = [];
  for (const type of ['monster', 'nature']) {
    for (let lvl = 1; lvl <= 9; lvl++) {
      const list = getSummonList(type, lvl);
      list.forEach(s => {
        if (!q || s.name.toLowerCase().includes(q)) {
          results.push({ ...s, summonType: type, summonLevel: lvl });
        }
      });
    }
  }
  return results;
}
