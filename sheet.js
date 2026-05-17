/* ══════════════════════════════════════════════════
   Pathfinder 1e Character Sheet — sheet.js
   Auto-calculations, skill table, save/load JSON
   ══════════════════════════════════════════════════ */

'use strict';

// ── SKILLS DEFINITION ──────────────────────────────────────────────
// [id, name, ability, classSkill, trainedOnly]
const SKILLS = [
  ['acrobatics',       'Acrobatics',                 'dex', false, false],
  ['appraise',         'Appraise',                   'int', false, false],
  ['bluff',            'Bluff',                      'cha', false, false],
  ['climb',            'Climb',                      'str', false, false],
  ['craft1',           'Craft ___',                  'int', false, false],
  ['craft2',           'Craft ___',                  'int', false, false],
  ['diplomacy',        'Diplomacy',                  'cha', false, false],
  ['disable_device',   'Disable Device',             'dex', false, true ],
  ['disguise',         'Disguise',                   'cha', false, false],
  ['escape_artist',    'Escape Artist',              'dex', false, false],
  ['fly',              'Fly',                        'dex', false, false],
  ['handle_animal',    'Handle Animal',              'cha', false, true ],
  ['heal',             'Heal',                       'wis', false, false],
  ['intimidate',       'Intimidate',                 'cha', false, false],
  ['k_arcana',         'Knowledge (arcana)',         'int', false, true ],
  ['k_dungeoneering',  'Knowledge (dungeoneering)',  'int', false, true ],
  ['k_engineering',    'Knowledge (engineering)',    'int', false, true ],
  ['k_geography',      'Knowledge (geography)',      'int', false, true ],
  ['k_history',        'Knowledge (history)',        'int', false, true ],
  ['k_local',          'Knowledge (local)',          'int', false, true ],
  ['k_nature',         'Knowledge (nature)',         'int', false, true ],
  ['k_nobility',       'Knowledge (nobility)',       'int', false, true ],
  ['k_planes',         'Knowledge (planes)',         'int', false, true ],
  ['k_religion',       'Knowledge (religion)',       'int', false, true ],
  ['linguistics',      'Linguistics',                'int', false, true ],
  ['perception',       'Perception',                 'wis', false, false],
  ['perform1',         'Perform ___',                'cha', false, false],
  ['perform2',         'Perform ___',                'cha', false, false],
  ['profession1',      'Profession ___',             'wis', false, true ],
  ['profession2',      'Profession ___',             'wis', false, true ],
  ['ride',             'Ride',                       'dex', false, false],
  ['sense_motive',     'Sense Motive',               'wis', false, false],
  ['sleight_of_hand',  'Sleight of Hand',            'dex', false, true ],
  ['spellcraft',       'Spellcraft',                 'int', false, true ],
  ['stealth',          'Stealth',                    'dex', false, false],
  ['survival',         'Survival',                   'wis', false, false],
  ['swim',             'Swim',                       'str', false, false],
  ['use_magic_device', 'Use Magic Device',           'cha', false, true ],
];

const WEAPON_COUNT  = 5;
const AC_ITEM_COUNT = 7;
const GEAR_COUNT    = 20;

// ── INIT ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSkillsTable();
  buildWeapons();
  buildACItems();
  buildGear();
  calcAll();
});

// ── ABILITY MODIFIER ───────────────────────────────────────────────
function abilityMod(score) {
  if (score === '' || score === null || isNaN(score)) return 0;
  return Math.floor((parseInt(score) - 10) / 2);
}

function calcMod(ability) {
  const score    = parseInt(val(`${ability}_score`)) || 0;
  const tempVal  = val(`${ability}_temp`);
  const effective = (tempVal !== '') ? (parseInt(tempVal) || 0) : score;
  const mod      = abilityMod(score);
  const tempMod  = (tempVal !== '') ? abilityMod(effective) : '';

  set(`${ability}_mod`,      mod);
  set(`${ability}_temp_mod`, tempMod !== '' ? tempMod : '');

  // cascade
  calcInit();
  calcAC();
  calcSaves();
  calcCombat();
  calcSkills();
}

// ── INITIATIVE ─────────────────────────────────────────────────────
function calcInit() {
  const dexMod = getEffectiveMod('dex');
  const misc   = parseInt(val('init_misc')) || 0;
  set('init_dex',   dexMod);
  set('init_total', dexMod + misc);
}

// ── ARMOR CLASS ────────────────────────────────────────────────────
function calcAC() {
  const dexMod  = getEffectiveMod('dex');
  const armor   = parseInt(val('ac_armor'))   || 0;
  const shield  = parseInt(val('ac_shield'))  || 0;
  const size    = parseInt(val('ac_size'))    || 0;
  const natural = parseInt(val('ac_natural')) || 0;
  const deflect = parseInt(val('ac_deflect')) || 0;
  const misc    = parseInt(val('ac_misc'))    || 0;

  set('ac_dex', dexMod);

  const total     = 10 + armor + shield + dexMod + size + natural + deflect + misc;
  const touch     = 10 + dexMod + size + deflect + misc;
  const flatFooted= 10 + armor + shield + size + natural + deflect + misc;

  set('ac_total', total);
  set('ac_touch', touch);
  set('ac_ff',    flatFooted);
}

// ── SAVING THROWS ──────────────────────────────────────────────────
function calcSaves() {
  const conMod = getEffectiveMod('con');
  const dexMod = getEffectiveMod('dex');
  const wisMod = getEffectiveMod('wis');

  set('fort_ability', conMod);
  set('ref_ability',  dexMod);
  set('will_ability', wisMod);

  ['fort', 'ref', 'will'].forEach(s => {
    const base   = parseInt(val(`${s}_base`))  || 0;
    const abil   = parseInt(val(`${s}_ability`)) || 0;
    const magic  = parseInt(val(`${s}_magic`)) || 0;
    const misc   = parseInt(val(`${s}_misc`))  || 0;
    const temp   = parseInt(val(`${s}_temp`))  || 0;
    set(`${s}_total`, base + abil + magic + misc + temp);
  });
}

// ── COMBAT (BAB / CMB / CMD) ───────────────────────────────────────
function calcCombat() {
  const bab    = parseInt(val('bab'))      || 0;
  const strMod = getEffectiveMod('str');
  const dexMod = getEffectiveMod('dex');
  const cmbSize= parseInt(val('cmb_size')) || 0;
  const cmbMisc= parseInt(val('cmb_misc')) || 0;
  const cmdSize= parseInt(val('cmd_size')) || 0;

  set('cmb_bab', bab);
  set('cmb_str', strMod);
  set('cmb_total', bab + strMod + cmbSize + cmbMisc);

  set('cmd_bab', bab);
  set('cmd_str', strMod);
  set('cmd_dex', dexMod);
  set('cmd_total', 10 + bab + strMod + dexMod + cmdSize);
}

// ── SKILLS TABLE ───────────────────────────────────────────────────
function buildSkillsTable() {
  const tbody = document.getElementById('skills-tbody');
  tbody.innerHTML = '';

  SKILLS.forEach(([id, name, ability, , trainedOnly]) => {
    const tr = document.createElement('tr');
    tr.className = 'skill-row';
    tr.dataset.skill = id;
    tr.dataset.ability = ability;

    const trainedMark = trainedOnly ? '<span class="trained-marker" title="Trained Only">*</span>' : '';

    tr.innerHTML = `
      <td><span class="cs-dot" id="cs_${id}" onclick="toggleCS('${id}')" title="Class Skill"></span></td>
      <td class="skill-name">${name}${trainedMark}</td>
      <td><input type="number" id="sk_total_${id}" class="num small-num" readonly></td>
      <td><input type="number" id="sk_ability_${id}" class="num small-num" readonly></td>
      <td><input type="number" id="sk_ranks_${id}" class="num small-num" oninput="calcSkill('${id}')"></td>
      <td><input type="number" id="sk_misc_${id}" class="num small-num" oninput="calcSkill('${id}')"></td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleCS(id) {
  const dot = document.getElementById(`cs_${id}`);
  dot.classList.toggle('checked');
  calcSkill(id);
}

function calcSkill(id) {
  const skillDef = SKILLS.find(s => s[0] === id);
  if (!skillDef) return;
  const ability = skillDef[2];
  const abilMod = getEffectiveMod(ability);
  const ranks   = parseInt(val(`sk_ranks_${id}`)) || 0;
  const misc    = parseInt(val(`sk_misc_${id}`))  || 0;
  const isCS    = document.getElementById(`cs_${id}`).classList.contains('checked');
  const csBonus = (isCS && ranks > 0) ? 3 : 0;

  set(`sk_ability_${id}`, abilMod);
  set(`sk_total_${id}`, abilMod + ranks + misc + csBonus);
}

function calcSkills() {
  SKILLS.forEach(([id]) => calcSkill(id));
}

// ── WEAPONS ────────────────────────────────────────────────────────
function buildWeapons() {
  const container = document.getElementById('weapons-container');
  container.innerHTML = '';
  for (let i = 0; i < WEAPON_COUNT; i++) {
    container.innerHTML += `
      <div class="weapon-block">
        <div class="weapon-name-row">
          <label>Weapon <input type="text" id="wpn_name_${i}" class="wide"></label>
          <label>Attack <input type="number" id="wpn_atk_${i}" class="num small-num"></label>
          <label>Critical <input type="text" id="wpn_crit_${i}" style="width:48px"></label>
        </div>
        <div class="weapon-stats-row">
          <label>Type <input type="text" id="wpn_type_${i}" style="width:36px"></label>
          <label>Range <input type="text" id="wpn_range_${i}" style="width:36px"></label>
          <label>Ammo <input type="text" id="wpn_ammo_${i}" style="width:36px"></label>
          <label>Damage <input type="text" id="wpn_dmg_${i}" style="width:48px"></label>
        </div>
      </div>`;
  }
}

// ── AC ITEMS ───────────────────────────────────────────────────────
function buildACItems() {
  const tbody = document.getElementById('ac-items-tbody');
  tbody.innerHTML = '';
  for (let i = 0; i < AC_ITEM_COUNT; i++) {
    tbody.innerHTML += `<tr>
      <td><input type="text"   id="aci_name_${i}"    oninput="calcACItems()"></td>
      <td><input type="number" id="aci_bonus_${i}"   class="num small-num" oninput="calcACItems()"></td>
      <td><input type="text"   id="aci_type_${i}"    style="width:40px" oninput="calcACItems()"></td>
      <td><input type="number" id="aci_check_${i}"   class="num small-num" oninput="calcACItems()"></td>
      <td><input type="number" id="aci_sf_${i}"      class="num small-num" oninput="calcACItems()"></td>
      <td><input type="number" id="aci_wt_${i}"      class="num small-num" oninput="calcACItems()"></td>
    </tr>`;
  }
}

function calcACItems() {
  let bonus = 0, check = 0, sf = 0, wt = 0;
  for (let i = 0; i < AC_ITEM_COUNT; i++) {
    bonus += parseInt(val(`aci_bonus_${i}`)) || 0;
    check += parseInt(val(`aci_check_${i}`)) || 0;
    sf    += parseInt(val(`aci_sf_${i}`))    || 0;
    wt    += parseFloat(val(`aci_wt_${i}`))  || 0;
  }
  document.getElementById('ac_items_bonus_total').textContent = bonus;
  document.getElementById('ac_items_check_total').textContent = check;
  document.getElementById('ac_items_sf_total').textContent    = sf;
  document.getElementById('ac_items_wt_total').textContent    = wt;
  // Push armor bonus back to AC
  document.getElementById('ac_armor').value = bonus;
  calcAC();
}

// ── GEAR ───────────────────────────────────────────────────────────
function buildGear() {
  const tbody = document.getElementById('gear-tbody');
  tbody.innerHTML = '';
  for (let i = 0; i < GEAR_COUNT; i++) {
    tbody.innerHTML += `<tr>
      <td><input type="text"   id="gear_name_${i}" oninput="calcGear()"></td>
      <td><input type="number" id="gear_wt_${i}"   class="num small-num" oninput="calcGear()"></td>
    </tr>`;
  }
}

function calcGear() {
  let total = 0;
  for (let i = 0; i < GEAR_COUNT; i++) {
    total += parseFloat(val(`gear_wt_${i}`)) || 0;
  }
  document.getElementById('gear_total_wt').textContent = total;
}

// ── HP HELPER ──────────────────────────────────────────────────────
function updateHP() {
  // placeholder for future HP bar feature
}

// ── CALC ALL ───────────────────────────────────────────────────────
function calcAll() {
  ['str','dex','con','int','wis','cha'].forEach(a => calcMod(a));
}

// ── HELPERS ────────────────────────────────────────────────────────
function val(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function set(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

function getEffectiveMod(ability) {
  const tempMod = val(`${ability}_temp_mod`);
  if (tempMod !== '') return parseInt(tempMod) || 0;
  return parseInt(val(`${ability}_mod`)) || 0;
}

// ── COLLECT ALL DATA ───────────────────────────────────────────────
function collectData() {
  const data = {};

  // Simple field IDs
  const simpleFields = [
    'charName','alignment','player','classLevel','deity','homeland',
    'race','size','gender','age','height','weight','hair','eyes',
    'str_score','dex_score','con_score','int_score','wis_score','cha_score',
    'str_temp','dex_temp','con_temp','int_temp','wis_temp','cha_temp',
    'hp_max','hp_current','hp_nonlethal','dr',
    'init_misc',
    'ac_armor','ac_shield','ac_size','ac_natural','ac_deflect','ac_misc',
    'fort_base','fort_magic','fort_misc','fort_temp',
    'ref_base','ref_magic','ref_misc','ref_temp',
    'will_base','will_magic','will_misc','will_temp',
    'bab','spell_res',
    'cmb_size','cmb_misc','cmd_size',
    'speed_land','speed_armor','speed_fly','speed_maneuv','speed_swim','speed_climb','speed_burrow',
    'languages','skill_conditional',
    'money_pp','money_gp','money_sp','money_cp',
    'xp_current','xp_next',
    'feats','special_abilities','notes',
    'domain_school','spell_conditional','spell_list',
    'load_light','load_medium','load_heavy',
  ];

  // Spell table
  for (let i = 0; i <= 9; i++) {
    simpleFields.push(`sp${i}_known`, `sp${i}_perday`);
    if (i > 0) simpleFields.push(`sp${i}_dc`, `sp${i}_bonus`);
  }

  simpleFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });

  // Skills
  data.skills = {};
  SKILLS.forEach(([id]) => {
    data.skills[id] = {
      cs:    document.getElementById(`cs_${id}`)?.classList.contains('checked') || false,
      ranks: val(`sk_ranks_${id}`),
      misc:  val(`sk_misc_${id}`),
    };
  });

  // Weapons
  data.weapons = [];
  for (let i = 0; i < WEAPON_COUNT; i++) {
    data.weapons.push({
      name: val(`wpn_name_${i}`),
      atk:  val(`wpn_atk_${i}`),
      crit: val(`wpn_crit_${i}`),
      type: val(`wpn_type_${i}`),
      range:val(`wpn_range_${i}`),
      ammo: val(`wpn_ammo_${i}`),
      dmg:  val(`wpn_dmg_${i}`),
    });
  }

  // AC Items
  data.acItems = [];
  for (let i = 0; i < AC_ITEM_COUNT; i++) {
    data.acItems.push({
      name:  val(`aci_name_${i}`),
      bonus: val(`aci_bonus_${i}`),
      type:  val(`aci_type_${i}`),
      check: val(`aci_check_${i}`),
      sf:    val(`aci_sf_${i}`),
      wt:    val(`aci_wt_${i}`),
    });
  }

  // Gear
  data.gear = [];
  for (let i = 0; i < GEAR_COUNT; i++) {
    data.gear.push({
      name: val(`gear_name_${i}`),
      wt:   val(`gear_wt_${i}`),
    });
  }

  data._version = '1.0';
  data._timestamp = new Date().toISOString();
  return data;
}

// ── POPULATE FROM DATA ─────────────────────────────────────────────
function populateData(data) {
  Object.entries(data).forEach(([id, value]) => {
    if (typeof value !== 'string') return;
    const el = document.getElementById(id);
    if (el) el.value = value;
  });

  // Skills
  if (data.skills) {
    SKILLS.forEach(([id]) => {
      const s = data.skills[id];
      if (!s) return;
      const dot = document.getElementById(`cs_${id}`);
      if (dot) {
        dot.classList.toggle('checked', !!s.cs);
      }
      set(`sk_ranks_${id}`, s.ranks || '');
      set(`sk_misc_${id}`,  s.misc  || '');
    });
  }

  // Weapons
  if (data.weapons) {
    data.weapons.forEach((w, i) => {
      set(`wpn_name_${i}`,  w.name  || '');
      set(`wpn_atk_${i}`,   w.atk   || '');
      set(`wpn_crit_${i}`,  w.crit  || '');
      set(`wpn_type_${i}`,  w.type  || '');
      set(`wpn_range_${i}`, w.range || '');
      set(`wpn_ammo_${i}`,  w.ammo  || '');
      set(`wpn_dmg_${i}`,   w.dmg   || '');
    });
  }

  // AC Items
  if (data.acItems) {
    data.acItems.forEach((a, i) => {
      set(`aci_name_${i}`,  a.name  || '');
      set(`aci_bonus_${i}`, a.bonus || '');
      set(`aci_type_${i}`,  a.type  || '');
      set(`aci_check_${i}`, a.check || '');
      set(`aci_sf_${i}`,    a.sf    || '');
      set(`aci_wt_${i}`,    a.wt    || '');
    });
    calcACItems();
  }

  // Gear
  if (data.gear) {
    data.gear.forEach((g, i) => {
      set(`gear_name_${i}`, g.name || '');
      set(`gear_wt_${i}`,   g.wt   || '');
    });
    calcGear();
  }

  // Recalculate everything
  calcAll();
}

// ── SAVE / LOAD ────────────────────────────────────────────────────
function saveCharacter() {
  const data     = collectData();
  const name     = (data.charName || 'character').replace(/[^a-z0-9_-]/gi, '_').toLowerCase();
  const filename = `${name}.json`;
  const json     = JSON.stringify(data, null, 2);
  const blob     = new Blob([json], { type: 'application/json' });
  const url      = URL.createObjectURL(blob);
  const a        = document.createElement('a');
  a.href         = url;
  a.download     = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function loadCharacter() {
  document.getElementById('fileInput').click();
}

function handleFileLoad(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      populateData(data);
    } catch (err) {
      alert('Could not load character file. Make sure it is a valid JSON file saved from this sheet.');
    }
  };
  reader.readAsText(file);
  // Reset so same file can be loaded again
  event.target.value = '';
}

function newCharacter() {
  if (!confirm('Start a new character? All unsaved changes will be lost.')) return;
  // Clear all inputs
  document.querySelectorAll('input:not([readonly]), textarea').forEach(el => {
    el.value = '';
  });
  // Clear CS dots
  document.querySelectorAll('.cs-dot').forEach(d => d.classList.remove('checked'));
  calcAll();
  calcACItems();
  calcGear();
}

/* ══════════════════════════════════════════════════
   PAGES 3–5 — Class Resources, Spells, Cheatsheet
   ══════════════════════════════════════════════════ */

const RESOURCE_POOL_COUNT = 6;
const DAILY_ABILITY_COUNT = 8;
const MY_ACTIONS_COUNT    = 10;
const BUFF_TRACKER_COUNT  = 8;
const SPELL_NAMES_PER_LEVEL = 6; // per level per column = 12 total
const EXTRACT_LEVELS      = 6;   // Alchemist extracts level 1-6

// Pathfinder 1e carry weight table by STR score (light / medium / heavy in lbs)
const CARRY_TABLE = {
  1: [3, 6, 10], 2: [6, 13, 20], 3: [10, 20, 30], 4: [13, 26, 40],
  5: [16, 33, 50], 6: [20, 40, 60], 7: [23, 46, 70], 8: [26, 53, 80],
  9: [30, 60, 90], 10: [33, 66, 100], 11: [38, 76, 115], 12: [43, 86, 130],
  13: [50, 100, 150], 14: [58, 116, 175], 15: [66, 133, 200],
  16: [76, 153, 230], 17: [86, 173, 260], 18: [100, 200, 300],
  19: [116, 233, 350], 20: [133, 266, 400], 21: [153, 306, 460],
  22: [173, 346, 520], 23: [200, 400, 600], 24: [233, 466, 700],
  25: [266, 533, 800], 26: [306, 613, 920], 27: [346, 693, 1040],
  28: [400, 800, 1200], 29: [466, 933, 1400], 30: [533, 1066, 1600],
};

function initPages35() {
  buildClassResources();
  buildDailyAbilities();
  buildExtracts();
  buildSpellLevels();
  buildMyActions();
  buildBuffTracker();
  updateCarryWeight();
  calcSpellMeta();

  // Watch STR changes to update carry weight
  const strInput = document.getElementById('str_score');
  if (strInput) strInput.addEventListener('input', updateCarryWeight);
}

// ── CLASS RESOURCE POOLS ───────────────────────────────────────────
function buildClassResources() {
  const container = document.getElementById('class-resources-container');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < RESOURCE_POOL_COUNT; i++) {
    const row = document.createElement('div');
    row.className = 'resource-pool-row';
    row.innerHTML = `
      <input type="text" id="pool_label_${i}" class="resource-pool-label" placeholder="Pool name…">
      <input type="number" id="pool_max_${i}" class="num small-num resource-pool-max" placeholder="Max" oninput="updatePoolDots(${i})">
      <div class="pool-dots" id="pool_dots_${i}"></div>
    `;
    container.appendChild(row);
    updatePoolDots(i);
  }
}

function updatePoolDots(i) {
  const max = parseInt(val(`pool_max_${i}`)) || 0;
  const container = document.getElementById(`pool_dots_${i}`);
  if (!container) return;
  // Preserve filled state
  const currentFilled = container.querySelectorAll('.pool-dot.filled').length;
  container.innerHTML = '';
  const show = Math.min(Math.max(max, 0), 20);
  for (let d = 0; d < show; d++) {
    const dot = document.createElement('span');
    dot.className = 'pool-dot' + (d < currentFilled ? ' filled' : '');
    dot.onclick = () => dot.classList.toggle('filled');
    container.appendChild(dot);
  }
}

// ── DAILY ABILITIES ────────────────────────────────────────────────
function buildDailyAbilities() {
  const tbody = document.getElementById('daily-abilities-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  for (let i = 0; i < DAILY_ABILITY_COUNT; i++) {
    tbody.innerHTML += `<tr>
      <td><input type="text"   id="daily_name_${i}"></td>
      <td><input type="number" id="daily_max_${i}"  class="num small-num"></td>
      <td><input type="number" id="daily_used_${i}" class="num small-num"></td>
    </tr>`;
  }
}

// ── EXTRACTS (ALCHEMIST) ───────────────────────────────────────────
function buildExtracts() {
  const tbody = document.getElementById('extracts-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  for (let lvl = 1; lvl <= EXTRACT_LEVELS; lvl++) {
    const dots = Array.from({length: 6}, (_, d) =>
      `<span class="spell-slot-dot" onclick="this.classList.toggle('used')" title="Slot ${d+1}"></span>`
    ).join('');
    tbody.innerHTML += `<tr>
      <td style="font-family:var(--font-heading);color:var(--accent)">${lvl}</td>
      <td><input type="number" id="ext_perday_${lvl}" class="num small-num"></td>
      <td><input type="number" id="ext_bonus_${lvl}"  class="num small-num"></td>
      <td><div class="spell-slot-dots">${dots}</div></td>
    </tr>`;
  }
}

// ── SPELL LEVELS 0–9 ──────────────────────────────────────────────
function buildSpellLevels() {
  const container = document.getElementById('spell-levels-container');
  if (!container) return;
  container.innerHTML = '';
  const labels = ['0 (Cantrips/Orisons)', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

  for (let lvl = 0; lvl <= 9; lvl++) {
    const maxDots = lvl === 0 ? 0 : 8; // level 0 unlimited
    const dotHtml = lvl === 0 ? '<em style="font-size:8px;color:var(--border)">unlimited</em>' :
      Array.from({length: maxDots}, (_, d) =>
        `<span class="spell-slot-dot" onclick="this.classList.toggle('used')" title="Slot ${d+1}"></span>`
      ).join('');

    const dcField = lvl === 0 ? '—' :
      `<label>DC <input type="number" id="spl_dc_${lvl}" class="num small-num" readonly title="10 + ${lvl} + ability mod"></label>`;
    const bonusField = lvl === 0 ? '' :
      `<label>Bonus <input type="number" id="spl_bonus_${lvl}" class="num small-num" oninput="calcSpellMeta()"></label>`;

    container.innerHTML += `
      <div class="spell-level-block">
        <div class="spell-level-header">
          <span class="spell-level-label">Level ${labels[lvl]}</span>
          <label>Per day <input type="number" id="spl_perday_${lvl}" class="num small-num"></label>
          ${bonusField}
          ${dcField}
          <div class="spell-slot-dots">${dotHtml}</div>
        </div>
        <div class="spell-names-grid" id="spl_names_${lvl}">
          ${Array.from({length: 12}, (_, i) =>
            `<input type="text" id="spl_name_${lvl}_${i}" placeholder="Spell name…">`
          ).join('')}
        </div>
      </div>`;
  }
}

// ── SPELL META CALCULATION ─────────────────────────────────────────
function calcSpellMeta() {
  const abilityKey = (val('spell_ability') || '').toLowerCase().trim();
  const abilMap = { wis: 'wis', int: 'int', cha: 'cha' };
  const ability = abilMap[abilityKey] || null;
  const abilMod = ability ? (getEffectiveMod(ability) || 0) : 0;
  const cl = parseInt(val('caster_level')) || 0;

  set('spell_dc_base', 10 + abilMod);
  set('concentration', cl + abilMod);

  // Update per-level DCs
  for (let lvl = 1; lvl <= 9; lvl++) {
    const el = document.getElementById(`spl_dc_${lvl}`);
    if (el) el.value = 10 + lvl + abilMod;
  }
}

// ── CARRY WEIGHT ───────────────────────────────────────────────────
function updateCarryWeight() {
  const display = document.getElementById('carry-weight-display');
  if (!display) return;
  const str = parseInt(val('str_score')) || 0;
  if (str < 1 || str > 30) {
    display.innerHTML = '<p class="helper-text">Enter STR score on page 1 to see carry limits.</p>';
    return;
  }
  const [light, medium, heavy] = CARRY_TABLE[str] || [0, 0, 0];
  display.innerHTML = `
    <table>
      <thead><tr><th>Load</th><th>Max (lbs)</th><th>Effects</th></tr></thead>
      <tbody>
        <tr><td>Light</td><td class="carry-highlight">≤ ${light}</td><td>No penalty</td></tr>
        <tr><td>Medium</td><td class="carry-highlight">≤ ${medium}</td><td>–3 AC/max Dex, –3 checks, ×4 run</td></tr>
        <tr><td>Heavy</td><td class="carry-highlight">≤ ${heavy}</td><td>–6 AC, max Dex +1, –6 checks, ×3 run</td></tr>
        <tr><td>Lift over head</td><td>${heavy} lbs</td><td>Max heavy load</td></tr>
        <tr><td>Lift off ground</td><td>${heavy * 2} lbs</td><td>Move 5 ft/round only</td></tr>
        <tr><td>Drag or push</td><td>${heavy * 5} lbs</td><td>Move 5 ft/round, rough terrain impossible</td></tr>
      </tbody>
    </table>
  `;
}

// ── MY GO-TO ACTIONS ───────────────────────────────────────────────
function buildMyActions() {
  const tbody = document.getElementById('my-actions-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  for (let i = 0; i < MY_ACTIONS_COUNT; i++) {
    tbody.innerHTML += `<tr>
      <td><input type="text" id="act_name_${i}"   placeholder="e.g. Fervor (heal self)"></td>
      <td><input type="text" id="act_type_${i}"   placeholder="Swift" style="width:52px"></td>
      <td><input type="text" id="act_roll_${i}"   placeholder="+7 / 2d6"></td>
      <td><input type="text" id="act_notes_${i}"  placeholder="Notes…"></td>
    </tr>`;
  }
}

// ── BUFF TRACKER ───────────────────────────────────────────────────
function buildBuffTracker() {
  const tbody = document.getElementById('buff-tracker-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  for (let i = 0; i < BUFF_TRACKER_COUNT; i++) {
    tbody.innerHTML += `<tr>
      <td><input type="text" id="buff_name_${i}"     placeholder="Bless, Haste…"></td>
      <td><input type="text" id="buff_effect_${i}"   placeholder="+1 atk/saves"></td>
      <td><input type="text" id="buff_duration_${i}" placeholder="3 rounds / cleric"></td>
    </tr>`;
  }
}

/* ══════════════════════════════════════════════════
   EXTEND SAVE / LOAD FOR PAGES 3–5
   ══════════════════════════════════════════════════ */

// Extend collectData to include pages 3-5
const _collectDataOriginal = collectData;
collectData = function() {
  const data = _collectDataOriginal();

  // Class resource pools
  data.resourcePools = [];
  for (let i = 0; i < RESOURCE_POOL_COUNT; i++) {
    const dots = document.getElementById(`pool_dots_${i}`);
    const filled = dots ? dots.querySelectorAll('.pool-dot.filled').length : 0;
    data.resourcePools.push({
      label:  val(`pool_label_${i}`),
      max:    val(`pool_max_${i}`),
      filled: filled,
    });
  }

  // Daily abilities
  data.dailyAbilities = [];
  for (let i = 0; i < DAILY_ABILITY_COUNT; i++) {
    data.dailyAbilities.push({
      name: val(`daily_name_${i}`),
      max:  val(`daily_max_${i}`),
      used: val(`daily_used_${i}`),
    });
  }

  // Extracts
  data.extracts = [];
  for (let lvl = 1; lvl <= EXTRACT_LEVELS; lvl++) {
    data.extracts.push({
      perday: val(`ext_perday_${lvl}`),
      bonus:  val(`ext_bonus_${lvl}`),
    });
  }

  // Spell fields
  data.spellMeta = {
    ability: val('spell_ability'),
    casterLevel: val('caster_level'),
  };
  data.spellLevels = [];
  for (let lvl = 0; lvl <= 9; lvl++) {
    const names = [];
    for (let i = 0; i < 12; i++) names.push(val(`spl_name_${lvl}_${i}`));
    data.spellLevels.push({
      perday: val(`spl_perday_${lvl}`),
      bonus:  val(`spl_bonus_${lvl}`),
      names:  names,
    });
  }

  // My actions
  data.myActions = [];
  for (let i = 0; i < MY_ACTIONS_COUNT; i++) {
    data.myActions.push({
      name:  val(`act_name_${i}`),
      type:  val(`act_type_${i}`),
      roll:  val(`act_roll_${i}`),
      notes: val(`act_notes_${i}`),
    });
  }

  // Buffs
  data.buffs = [];
  for (let i = 0; i < BUFF_TRACKER_COUNT; i++) {
    data.buffs.push({
      name:     val(`buff_name_${i}`),
      effect:   val(`buff_effect_${i}`),
      duration: val(`buff_duration_${i}`),
    });
  }

  data.formulae_book  = val('formulae_book');
  data.campaign_notes = val('campaign_notes');

  return data;
};

// Extend populateData for pages 3-5
const _populateDataOriginal = populateData;
populateData = function(data) {
  _populateDataOriginal(data);

  if (data.resourcePools) {
    data.resourcePools.forEach((p, i) => {
      set(`pool_label_${i}`, p.label || '');
      set(`pool_max_${i}`,   p.max   || '');
      updatePoolDots(i);
      // Restore filled dots
      const dotsEl = document.getElementById(`pool_dots_${i}`);
      if (dotsEl && p.filled) {
        dotsEl.querySelectorAll('.pool-dot').forEach((dot, d) => {
          dot.classList.toggle('filled', d < p.filled);
        });
      }
    });
  }

  if (data.dailyAbilities) {
    data.dailyAbilities.forEach((a, i) => {
      set(`daily_name_${i}`, a.name || '');
      set(`daily_max_${i}`,  a.max  || '');
      set(`daily_used_${i}`, a.used || '');
    });
  }

  if (data.extracts) {
    data.extracts.forEach((e, i) => {
      const lvl = i + 1;
      set(`ext_perday_${lvl}`, e.perday || '');
      set(`ext_bonus_${lvl}`,  e.bonus  || '');
    });
  }

  if (data.spellMeta) {
    set('spell_ability', data.spellMeta.ability || '');
    set('caster_level',  data.spellMeta.casterLevel || '');
    calcSpellMeta();
  }

  if (data.spellLevels) {
    data.spellLevels.forEach((s, lvl) => {
      set(`spl_perday_${lvl}`, s.perday || '');
      set(`spl_bonus_${lvl}`,  s.bonus  || '');
      (s.names || []).forEach((n, i) => set(`spl_name_${lvl}_${i}`, n));
    });
  }

  if (data.myActions) {
    data.myActions.forEach((a, i) => {
      set(`act_name_${i}`,  a.name  || '');
      set(`act_type_${i}`,  a.type  || '');
      set(`act_roll_${i}`,  a.roll  || '');
      set(`act_notes_${i}`, a.notes || '');
    });
  }

  if (data.buffs) {
    data.buffs.forEach((b, i) => {
      set(`buff_name_${i}`,     b.name     || '');
      set(`buff_effect_${i}`,   b.effect   || '');
      set(`buff_duration_${i}`, b.duration || '');
    });
  }

  set('formulae_book',  data.formulae_book  || '');
  set('campaign_notes', data.campaign_notes || '');

  updateCarryWeight();
};
