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
