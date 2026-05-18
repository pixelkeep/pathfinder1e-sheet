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

// Slot counts — user can change via the +/- buttons in the UI
let WEAPON_COUNT = parseInt(localStorage.getItem('pf1_weapon_count') || '4');
let WAND_COUNT   = parseInt(localStorage.getItem('pf1_wand_count')   || '3');

function setSlotCount(type, delta) {
  if (type === 'weapon') {
    WEAPON_COUNT = Math.max(1, Math.min(8, WEAPON_COUNT + delta));
    try { localStorage.setItem('pf1_weapon_count', WEAPON_COUNT); } catch(e) {}
    buildWeapons(); calcAllWeapons();
    // Re-render feats section to update weapon slot dropdowns
    if (_currentClass) buildFeatsSection(_currentClass, _currentLevel);
  } else {
    WAND_COUNT = Math.max(1, Math.min(8, WAND_COUNT + delta));
    try { localStorage.setItem('pf1_wand_count', WAND_COUNT); } catch(e) {}
    buildWands();
  }
  updateSlotCountDisplay();
}

function updateSlotCountDisplay() {
  const wc = document.getElementById('weapon-count-display');
  const vc = document.getElementById('wand-count-display');
  if (wc) wc.textContent = WEAPON_COUNT;
  if (vc) vc.textContent = WAND_COUNT;
}
const AC_ITEM_COUNT = 7;
const GEAR_COUNT    = 20;

// ── INIT ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSkillsTable();
  buildLanguagePicker([], []);
  buildWeapons();
  buildACItems();
  buildGear();
  calcAll();
  updateSlotCountDisplay();
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
  const armor   = Math.max(0, parseInt(val('ac_armor'))   || 0);
  const shield  = Math.max(0, parseInt(val('ac_shield'))  || 0);
  const size    = parseInt(val('ac_size'))    || 0;
  const natural = Math.max(0, parseInt(val('ac_natural')) || 0);
  const deflect = Math.max(0, parseInt(val('ac_deflect')) || 0);
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

    const abilLabel = ability.toUpperCase();
    tr.innerHTML = `
      <td><span class="cs-dot" id="cs_${id}" onclick="toggleCS('${id}')" title="Class Skill"></span></td>
      <td class="skill-name"><span class="skill-abil-tag">${abilLabel}</span> ${name}${trainedMark}</td>
      <td><input type="number" id="sk_total_${id}" class="num small-num" readonly></td>
      <td><input type="number" id="sk_ability_${id}" class="num small-num" readonly></td>
      <td><input type="number" id="sk_ranks_${id}" class="num small-num" oninput="calcSkill('${id}')"></td>
      <td><input type="number" id="sk_misc_${id}" class="num small-num" oninput="calcSkill('${id}')"></td>
      <td class="bonus-col"><span id="sk_bonus_${id}" class="skill-bonus-tag"></span></td>
    `;
    tbody.appendChild(tr);
  });
}

// ── LANGUAGE PICKER ────────────────────────────────────────────────
// Race defaults and bonus languages are highlighted when set via Setup
let _racialLanguages   = [];   // auto-known for this race
let _bonusLanguages    = [];   // available as bonus choices

function buildLanguagePicker(racialLangs, bonusLangs) {
  _racialLanguages = racialLangs  || [];
  _bonusLanguages  = bonusLangs   || [];

  const container = document.getElementById('languages-checkboxes');
  if (!container) return;

  container.innerHTML = '';

  ALL_LANGUAGES.forEach(lang => {
    const isRacial = _racialLanguages.includes(lang);
    const isBonus  = _bonusLanguages.includes(lang);
    const isChecked = isRacial; // racial languages pre-checked

    const label = document.createElement('label');
    label.className = 'lang-item' +
      (isRacial ? ' lang-racial' : '') +
      (isBonus  ? ' lang-bonus'  : '');
    label.title = isRacial ? 'Racial language (auto-known)'
                : isBonus  ? 'Available as bonus language choice'
                : '';

    label.innerHTML = `
      <input type="checkbox" id="lang_${lang.replace(/[^a-z]/gi,'_')}"
             class="lang-checkbox" data-lang="${lang}"
             ${isChecked ? 'checked' : ''}
             onchange="updateLanguageField()">
      ${lang}`;

    container.appendChild(label);
  });

  updateLanguageField();
}

function updateLanguageField() {
  // Build the languages text field from checked boxes + custom
  const checked = [...document.querySelectorAll('.lang-checkbox:checked')]
    .map(cb => cb.dataset.lang);
  const custom = val('languages_custom');
  const all = custom ? [...checked, custom] : checked;
  // Keep the hidden text field in sync for save/load compatibility
  set('languages', all.join(', '));
}

function restoreLanguagePicker(langString) {
  if (!langString) return;
  const langs = langString.split(',').map(l => l.trim());
  langs.forEach(lang => {
    const id = `lang_${lang.replace(/[^a-z]/gi,'_')}`;
    const cb = document.getElementById(id);
    if (cb) cb.checked = true;
  });
  updateLanguageField();
}


function toggleCS(id) {
  const dot = document.getElementById(`cs_${id}`);
  dot.classList.toggle('checked');
  calcSkill(id);
}

// Active deity bonus state — typed, matches DEITY_PERKS bonus array
// Keyed by bonus type so calcSkill/calcSaves/etc can look up what applies
let _deityBonuses = {
  skill_ability: [],   // { targets: ['str'], amount, bonusType, condition }
  skill:         [],   // { targets: ['climb', ...], amount, bonusType, condition }
  save:          [],   // { targets: ['fort','ref','will'], amount, bonusType, condition }
  attack:        [],   // { targets: ['weapon name'], amount, bonusType, condition }
  concentration: [],   // { targets: ['concentration'], amount, bonusType, condition }
  ac:            [],   // { targets: [...], amount, bonusType, condition }
};
let _deityBonusLabel = '';

function applyDeityBonuses(perkData, deityName) {
  // Reset
  Object.keys(_deityBonuses).forEach(k => _deityBonuses[k] = []);
  _deityBonusLabel = deityName;

  if (!perkData || !perkData.bonus) return;

  perkData.bonus.forEach(b => {
    const key = b.type;
    if (_deityBonuses[key] !== undefined) {
      _deityBonuses[key].push(b);
    }
  });

  // Recalculate affected totals
  calcSkills();
  calcSaves();
}

function getDeitySkillBonus(skillId, ability) {
  let total = 0;
  // skill_ability: bonus on all skills using this ability
  _deityBonuses.skill_ability.forEach(b => {
    if (b.targets.includes(ability)) total += b.amount;
  });
  // skill: bonus on specific skill ids
  _deityBonuses.skill.forEach(b => {
    if (b.targets.includes(skillId)) total += b.amount;
  });
  return total;
}

function getDeityConcentrationBonus() {
  return _deityBonuses.concentration.reduce((sum, b) => sum + b.amount, 0);
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

  // Apply deity obedience bonus (typed, universal)
  const deityBonus = getDeitySkillBonus(id, ability);

  set(`sk_ability_${id}`, abilMod);
  set(`sk_total_${id}`, abilMod + ranks + misc + csBonus + deityBonus);

  // Show deity bonus in the Bon. column
  const bonusTag = document.getElementById(`sk_bonus_${id}`);
  if (bonusTag) {
    if (deityBonus > 0) {
      bonusTag.textContent = `+${deityBonus}`;
      bonusTag.title = `${_deityBonusLabel} obedience (${_deityBonuses.skill_ability[0]?.bonusType || 'sacred'})`;
    } else {
      bonusTag.textContent = '';
    }
  }

  // Row highlight
  const row = document.querySelector(`tr[data-skill="${id}"]`);
  if (row) row.classList.toggle('obedience-bonus', deityBonus > 0);
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
          <label>Weapon <input type="text" id="wpn_name_${i}" class="wide" placeholder="e.g. Lucerne Hammer +1"></label>
          <label>Material
            <select id="wpn_material_${i}" class="wpn-material-select" onchange="calcWeapon(${i})" title="Special material affects damage and DR bypass">
              ${buildMaterialOptions()}
            </select>
          </label>
          <label>Crit <input type="text" id="wpn_crit_${i}" style="width:52px" placeholder="×3"></label>
          <label>Type <input type="text" id="wpn_type_${i}" style="width:36px" placeholder="B/P"></label>
          <label>Range <input type="text" id="wpn_range_${i}" style="width:44px" placeholder="melee"></label>
          <label>Ammo <input type="text" id="wpn_ammo_${i}" style="width:36px"></label>
        </div>
        <div class="weapon-breakdown-row">
          <span class="breakdown-label">Attack</span>
          <span class="breakdown-eq">=</span>
          <label class="bd-cell">BAB<br><input type="number" id="wpn_bab_${i}" class="num small-num" readonly></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell">Str/Dex<br><input type="number" id="wpn_abil_${i}" class="num small-num" readonly></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell" title="Type +1 for MW, +2/+3 etc for magic enhancement. This adds to BOTH attack and damage.">Enh/MW<br><input type="number" id="wpn_enh_${i}" class="num small-num" oninput="calcWeapon(${i})"></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell">Feats<br><input type="number" id="wpn_feat_${i}" class="num small-num" oninput="calcWeapon(${i})" title="Weapon Focus +1, Greater WF +1, etc."></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell">Misc<br><input type="number" id="wpn_misc_atk_${i}" class="num small-num" oninput="calcWeapon(${i})"></label>
          <span class="breakdown-op">=</span>
          <label class="bd-cell total-cell">Total<br><input type="text" id="wpn_atk_${i}" class="num small-num atk-total" readonly></label>
        </div>
        <div class="weapon-breakdown-row">
          <span class="breakdown-label">Damage</span>
          <span class="breakdown-eq">=</span>
          <label class="bd-cell">Weapon die<br><input type="text" id="wpn_dmg_dice_${i}" style="width:36px" placeholder="1d8" oninput="calcWeapon(${i})"></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell" title="×1.5 two-handed, ×0.5 off-hand">Str(×?)<br><input type="number" id="wpn_dmg_str_${i}" class="num small-num" readonly></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell">Enh.<br><input type="number" id="wpn_dmg_enh_${i}" class="num small-num" readonly></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell">Feats<br><input type="number" id="wpn_dmg_feat_${i}" class="num small-num" oninput="calcWeapon(${i})" title="Power Attack, Weapon Spec, etc."></label>
          <span class="breakdown-op">+</span>
          <label class="bd-cell">Misc<br><input type="number" id="wpn_dmg_misc_${i}" class="num small-num" oninput="calcWeapon(${i})"></label>
          <span class="breakdown-op">=</span>
          <label class="bd-cell total-cell">Total<br><input type="text" id="wpn_dmg_${i}" style="width:60px" class="atk-total" readonly placeholder="1d8+5"></label>
          <span id="wpn_sacred_note_${i}" class="wpn-sacred-note"></span>
          <span id="wpn_material_note_${i}" class="wpn-material-note"></span>
        </div>
        <div class="weapon-flags-row">
          <label title="Auto-set for two-handed weapons"><input type="checkbox" id="wpn_twohanded_${i}" onchange="calcWeapon(${i})"> Two-handed (×1.5 Str)</label>
          <label><input type="checkbox" id="wpn_offhand_${i}" onchange="calcWeapon(${i})"> Off-hand (×½ Str)</label>
          <label title="Auto-set for ranged weapons"><input type="checkbox" id="wpn_ranged_${i}" onchange="calcWeapon(${i})"> Ranged (DEX to hit)</label>
          <label><input type="checkbox" id="wpn_mw_${i}" onchange="calcWeapon(${i})"> Masterwork (+1 atk)</label>
        </div>
      </div>`;
  }
}

function buildWands() {
  const container = document.getElementById('wands-container');
  if (!container) return;
  container.innerHTML = '';

  for (let i = 0; i < WAND_COUNT; i++) {
    const div = document.createElement('div');
    div.className = 'wand-block';
    div.innerHTML = `
      <div class="wand-name-row">
        <input type="text" id="wand_name_${i}" class="wand-name-input"
               placeholder="e.g. Wand of Cure Moderate Wounds">
        <select id="wand_type_${i}" class="wand-type-select" onchange="onWandTypeChange(${i})">
          <option value="wand">Wand</option>
          <option value="staff">Staff</option>
          <option value="scroll">Scroll</option>
          <option value="rod">Rod</option>
          <option value="other">Other</option>
        </select>
        <label class="wand-cl-label">CL
          <input type="number" id="wand_cl_${i}" class="num small-num"
                 placeholder="3" min="1" max="20" oninput="calcWand(${i})">
        </label>
        <label class="wand-cl-label">Spell lvl
          <input type="number" id="wand_spelllvl_${i}" class="num small-num"
                 placeholder="1" min="0" max="9" oninput="calcWand(${i})">
        </label>
        <select id="wand_attack_type_${i}" class="wand-type-select" onchange="calcWand(${i})"
                title="Does this item require an attack roll?">
          <option value="none">No attack roll</option>
          <option value="ranged_touch">Ranged touch (ray)</option>
          <option value="melee_touch">Melee touch</option>
          <option value="ranged">Ranged attack</option>
        </select>
      </div>

      <div class="weapon-breakdown-row">
        <span class="breakdown-label">Attack</span>
        <span class="breakdown-eq">=</span>
        <label class="bd-cell">BAB<br>
          <input type="number" id="wand_bab_${i}" class="num small-num" readonly></label>
        <span class="breakdown-op">+</span>
        <label class="bd-cell" title="DEX for ranged touch/ranged, STR for melee touch">Str/Dex<br>
          <input type="number" id="wand_abil_${i}" class="num small-num" readonly></label>
        <span class="breakdown-op">+</span>
        <label class="bd-cell">Misc<br>
          <input type="number" id="wand_misc_atk_${i}" class="num small-num"
                 oninput="calcWand(${i})"></label>
        <span class="breakdown-op">=</span>
        <label class="bd-cell total-cell">Total<br>
          <input type="text" id="wand_atk_total_${i}" class="num small-num atk-total" readonly></label>
        <span id="wand_no_atk_note_${i}" class="wand-no-atk-note">— no attack roll required</span>
      </div>

      <div class="weapon-breakdown-row">
        <span class="breakdown-label">Save DC</span>
        <span class="breakdown-eq">=</span>
        <label class="bd-cell">10<br><span class="bd-fixed">10</span></label>
        <span class="breakdown-op">+</span>
        <label class="bd-cell">Spell lvl<br>
          <input type="number" id="wand_dc_spelllvl_${i}" class="num small-num" readonly></label>
        <span class="breakdown-op">+</span>
        <label class="bd-cell" title="Casting ability modifier of the original caster (usually in item description)">Cast.Abil<br>
          <input type="number" id="wand_dc_abil_${i}" class="num small-num"
                 oninput="calcWand(${i})" placeholder="0"></label>
        <span class="breakdown-op">+</span>
        <label class="bd-cell">Misc<br>
          <input type="number" id="wand_dc_misc_${i}" class="num small-num"
                 oninput="calcWand(${i})"></label>
        <span class="breakdown-op">=</span>
        <label class="bd-cell total-cell">DC<br>
          <input type="text" id="wand_dc_${i}" class="num small-num atk-total" readonly></label>
        <label class="bd-cell" style="margin-left:8px">Effect / Damage<br>
          <input type="text" id="wand_effect_${i}" style="width:100px"
                 placeholder="2d8+3, 4d6 fire…"></label>
        <label class="bd-cell">Duration<br>
          <input type="text" id="wand_duration_${i}" style="width:60px"
                 placeholder="1 min/CL…"></label>
      </div>

      <div class="wand-charges-row">
        <span class="wand-charges-label">Charges:</span>
        <input type="number" id="wand_charges_max_${i}" class="num small-num"
               placeholder="50" min="0" max="50" oninput="updateWandDots(${i})">
        <span class="mi-label">max</span>
        <input type="number" id="wand_charges_used_${i}" class="num small-num"
               placeholder="0" min="0" oninput="updateWandDots(${i})">
        <span class="mi-label">used</span>
        <span id="wand_remaining_${i}" class="mi-remaining"></span>
        <div id="wand_dots_${i}" class="wand-dots-inline mi-dots"></div>
      </div>

      <input type="text" id="wand_notes_${i}" class="wand-notes-input"
             placeholder="Notes: save type, duration details, when to use…">
    `;
    container.appendChild(div);
    calcWand(i);
  }
}

function onWandTypeChange(i) {
  calcWand(i);
}

function calcWand(i) {
  const attackType = val('wand_attack_type_' + i) || 'none';
  const bab    = parseInt(val('bab')) || 0;
  const strMod = getEffectiveMod('str');
  const dexMod = getEffectiveMod('dex');
  const misc   = parseInt(val('wand_misc_atk_' + i)) || 0;
  const spellLvl = parseInt(val('wand_spelllvl_' + i)) || 0;
  const dcAbil   = parseInt(val('wand_dc_abil_'  + i)) || 0;
  const dcMisc   = parseInt(val('wand_dc_misc_'  + i)) || 0;

  // Attack breakdown
  const noAtkEl   = document.getElementById('wand_no_atk_note_' + i);
  const atkTotEl  = document.getElementById('wand_atk_total_'   + i);
  const babEl     = document.getElementById('wand_bab_'         + i);
  const abilEl    = document.getElementById('wand_abil_'        + i);

  if (attackType === 'none') {
    if (noAtkEl)  noAtkEl.style.display  = '';
    if (atkTotEl) atkTotEl.closest('label').style.display = 'none';
    if (babEl)    babEl.closest('label').style.display    = 'none';
    if (abilEl)   abilEl.closest('label').style.display   = 'none';
  } else {
    if (noAtkEl)  noAtkEl.style.display  = 'none';
    if (atkTotEl) atkTotEl.closest('label').style.display = '';
    if (babEl)    babEl.closest('label').style.display    = '';
    if (abilEl)   abilEl.closest('label').style.display   = '';

    const abilMod = (attackType === 'melee_touch') ? strMod : dexMod;
    if (babEl)    babEl.value  = bab;
    if (abilEl)   abilEl.value = abilMod;
    const total = bab + abilMod + misc;
    if (atkTotEl) atkTotEl.value = total >= 0 ? '+' + total : '' + total;
  }

  // DC breakdown
  const dcSpellEl = document.getElementById('wand_dc_spelllvl_' + i);
  const dcTotEl   = document.getElementById('wand_dc_'          + i);
  if (dcSpellEl) dcSpellEl.value = spellLvl;
  const dc = 10 + spellLvl + dcAbil + dcMisc;
  if (dcTotEl) dcTotEl.value = dc > 10 ? dc : '—';
}

function calcAllWands() {
  for (let i = 0; i < WAND_COUNT; i++) calcWand(i);
}

function updateWandDots(i) {
  const max  = parseInt(val('wand_charges_max_'  + i)) || 0;
  const used = parseInt(val('wand_charges_used_' + i)) || 0;
  const remaining = Math.max(0, max - used);
  const remEl = document.getElementById('wand_remaining_' + i);
  if (remEl) remEl.textContent = max > 0 ? remaining + '/' + max : '';
  const dotsEl = document.getElementById('wand_dots_' + i);
  if (!dotsEl || max === 0) { if (dotsEl) dotsEl.innerHTML = ''; return; }
  const show = Math.min(max, 25);
  const usedDots = Math.round((used / max) * show);
  let html = '';
  for (let d = 0; d < show; d++) {
    const cls = d < (show - usedDots) ? 'mi-dot-full' : 'mi-dot-used';
    html += '<span class="mi-dot ' + cls + '" onclick="useWandCharge(' + i + ')" title="Click to use charge"></span>';
  }
  dotsEl.innerHTML = html;
}

function useWandCharge(i) {
  const max  = parseInt(val('wand_charges_max_'  + i)) || 0;
  const used = parseInt(val('wand_charges_used_' + i)) || 0;
  if (used < max) {
    set('wand_charges_used_' + i, used + 1);
    updateWandDots(i);
  }
}


function buildMaterialOptions() {
  if (typeof WEAPON_MATERIALS === 'undefined') return '<option value="Normal">Normal</option>';
  return Object.keys(WEAPON_MATERIALS)
    .map(m => `<option value="${m}">${m}</option>`)
    .join('');
}

function getMaterialNote(i) {
  if (typeof WEAPON_MATERIALS === 'undefined') return { dmgMod: 0, note: '' };
  const mat = val(`wpn_material_${i}`) || 'Normal';
  return WEAPON_MATERIALS[mat] || { dmgMod: 0, note: '' };
}

function calcWeapon(i) {
  const bab       = parseInt(val('bab'))               || 0;
  const strMod    = getEffectiveMod('str');
  const dexMod    = getEffectiveMod('dex');
  const enh       = parseInt(val(`wpn_enh_${i}`))      || 0;
  const feat      = parseInt(val(`wpn_feat_${i}`))     || 0;
  const miscAtk   = parseInt(val(`wpn_misc_atk_${i}`)) || 0;
  const dmgFeat   = parseInt(val(`wpn_dmg_feat_${i}`)) || 0;
  const dmgMisc   = parseInt(val(`wpn_dmg_misc_${i}`)) || 0;
  const chk = id => { const el = document.getElementById(id); return el ? el.checked : false; };
  const twoHanded = chk(`wpn_twohanded_${i}`);
  const offHand   = chk(`wpn_offhand_${i}`);
  const ranged    = chk(`wpn_ranged_${i}`);
  const mw        = chk(`wpn_mw_${i}`);
  const mwBonus   = (mw && enh === 0) ? 1 : 0;

  const atkAbil = ranged ? dexMod : strMod;
  let strMult = 1;
  if (twoHanded) strMult = 1.5;
  if (offHand)   strMult = 0.5;
  const strDmg = Math.floor(strMod * strMult);

  set(`wpn_bab_${i}`,     bab);
  set(`wpn_abil_${i}`,    atkAbil);
  set(`wpn_dmg_str_${i}`, strDmg);
  set(`wpn_dmg_enh_${i}`, enh);

  const atkTotal = bab + atkAbil + enh + mwBonus + feat + miscAtk;
  set(`wpn_atk_${i}`, atkTotal >= 0 ? `+${atkTotal}` : `${atkTotal}`);

  const matData  = getMaterialNote(i);
  const matDmg   = matData.dmgMod || 0;
  const dice     = val(`wpn_dmg_dice_${i}`) || '—';
  const dmgMod   = strDmg + enh + dmgFeat + dmgMisc + matDmg;
  set(`wpn_dmg_${i}`, dmgMod !== 0 ? `${dice}${dmgMod >= 0 ? '+' : ''}${dmgMod}` : dice);

  // Material note
  const matNoteEl = document.getElementById(`wpn_material_note_${i}`);
  if (matNoteEl) matNoteEl.textContent = matData.note ? `⚠ ${matData.note}` : '';

  // Sacred weapon comparison (Warpriest)
  const sacredNoteEl = document.getElementById(`wpn_sacred_note_${i}`);
  if (sacredNoteEl && typeof getSacredWeaponDie === 'function') {
    const level = parseInt(val('charLevel')) || 1;
    const sacredDie = getSacredWeaponDie(level);
    const wpnDice = val(`wpn_dmg_dice_${i}`) || '';
    if (wpnDice && sacredDie) {
      const diceRank = {'1d4':1,'1d6':2,'1d8':3,'1d10':4,'2d6':5,'1d12':5,'2d8':6,'2d10':7};
      const wpnRank    = diceRank[wpnDice]    || 0;
      const sacredRank = diceRank[sacredDie]  || 0;
      if (sacredRank > wpnRank) {
        sacredNoteEl.textContent = `✦ Sacred die ${sacredDie} > weapon die — use sacred`;
        sacredNoteEl.className = 'wpn-sacred-note sacred-better';
      } else {
        sacredNoteEl.textContent = `✦ Weapon die ${wpnDice} ≥ sacred die ${sacredDie} — keep weapon die`;
        sacredNoteEl.className = 'wpn-sacred-note weapon-better';
      }
    } else {
      sacredNoteEl.textContent = '';
    }
  }
}

function calcAllWeapons() {
  for (let i = 0; i < WEAPON_COUNT; i++) calcWeapon(i);
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
  calcAllWeapons();
  calcAllWands();
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
  // Always compute from score directly — never rely on readonly display fields
  // This ensures calcWeapon/calcSaves/etc always see current values
  const tempScore = val(`${ability}_temp`);
  if (tempScore !== '') {
    const ts = parseInt(tempScore);
    if (!isNaN(ts)) return abilityMod(ts);
  }
  const score = val(`${ability}_score`);
  if (score === '' || score === null) return 0;
  const s = parseInt(score);
  return isNaN(s) ? 0 : abilityMod(s);
}

// ── COLLECT ALL DATA ───────────────────────────────────────────────
/* ══════════════════════════════════════════════════
   SAVE / LOAD — single unified collectData and populateData
   All fields collected and restored in one place.
   ══════════════════════════════════════════════════ */

function collectData() {
  const data = {};

  // ── Simple text/number fields ──────────────────
  const simpleFields = [
    'charName','alignment','player','charClass','charLevel','deity','homeland',
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
    'speed_land','speed_armor','speed_fly','speed_maneuv',
    'speed_swim','speed_climb','speed_burrow',
    'languages','languages_custom','skill_conditional','_applied_race',
    'money_pp','money_gp','money_sp','money_cp',
    'xp_current','xp_next',
    'special_abilities','notes',
    'load_light','load_medium','load_heavy',
    // Spell meta
    'spell_ability','caster_level','domain_school','spell_conditional','spell_list',
    // Traits
    'trait1_name','trait2_name',
    // Pages 3-5
    'formulae_book','campaign_notes',
  ];

  simpleFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });

  // ── Skills ─────────────────────────────────────
  data.skills = {};
  if (typeof SKILLS !== 'undefined') {
    SKILLS.forEach(([id]) => {
      const dot = document.getElementById(`cs_${id}`);
      data.skills[id] = {
        cs:    dot ? dot.classList.contains('checked') : false,
        ranks: val(`sk_ranks_${id}`),
        misc:  val(`sk_misc_${id}`),
      };
    });
  }

  // ── Weapons ────────────────────────────────────
  data.weapons = [];
  for (let i = 0; i < WEAPON_COUNT; i++) {
    const matEl = document.getElementById(`wpn_material_${i}`);
    data.weapons.push({
      name:      val(`wpn_name_${i}`),
      material:  matEl ? matEl.value : 'Normal',
      crit:      val(`wpn_crit_${i}`),
      type:      val(`wpn_type_${i}`),
      range:     val(`wpn_range_${i}`),
      ammo:      val(`wpn_ammo_${i}`),
      enh:       val(`wpn_enh_${i}`),
      feat:      val(`wpn_feat_${i}`),
      miscAtk:   val(`wpn_misc_atk_${i}`),
      dmgDice:   val(`wpn_dmg_dice_${i}`),
      dmgFeat:   val(`wpn_dmg_feat_${i}`),
      dmgMisc:   val(`wpn_dmg_misc_${i}`),
      twoHanded: !!(document.getElementById(`wpn_twohanded_${i}`) && document.getElementById(`wpn_twohanded_${i}`).checked),
      offHand:   !!(document.getElementById(`wpn_offhand_${i}`)   && document.getElementById(`wpn_offhand_${i}`).checked),
      ranged:    !!(document.getElementById(`wpn_ranged_${i}`)    && document.getElementById(`wpn_ranged_${i}`).checked),
      mw:        !!(document.getElementById(`wpn_mw_${i}`)        && document.getElementById(`wpn_mw_${i}`).checked),
      notes:     val(`wpn_notes_${i}`),
    });
  }

  // ── Wands ──────────────────────────────────────
  data.wands = [];
  for (let i = 0; i < WAND_COUNT; i++) {
    const typeSel = document.getElementById(`wand_type_${i}`);
    const atkSel  = document.getElementById(`wand_attack_type_${i}`);
    data.wands.push({
      name:        val(`wand_name_${i}`),
      type:        typeSel ? typeSel.value : 'wand',
      cl:          val(`wand_cl_${i}`),
      spelllvl:    val(`wand_spelllvl_${i}`),
      attackType:  atkSel  ? atkSel.value  : 'none',
      miscAtk:     val(`wand_misc_atk_${i}`),
      dcAbil:      val(`wand_dc_abil_${i}`),
      dcMisc:      val(`wand_dc_misc_${i}`),
      effect:      val(`wand_effect_${i}`),
      duration:    val(`wand_duration_${i}`),
      chargesMax:  val(`wand_charges_max_${i}`),
      chargesUsed: val(`wand_charges_used_${i}`),
      notes:       val(`wand_notes_${i}`),
    });
  }

  // ── AC Items ───────────────────────────────────
  data.acItems = [];
  for (let i = 0; i < AC_ITEM_COUNT; i++) {
    data.acItems.push({
      name:   val(`aci_name_${i}`),
      bonus:  val(`aci_bonus_${i}`),
      type:   val(`aci_type_${i}`),
      maxDex: val(`aci_maxdex_${i}`),
      check:  val(`aci_check_${i}`),
      sf:     val(`aci_sf_${i}`),
      wt:     val(`aci_wt_${i}`),
      props:  val(`aci_props_${i}`),
    });
  }

  // ── Gear ───────────────────────────────────────
  data.gear = [];
  for (let i = 0; i < GEAR_COUNT; i++) {
    data.gear.push({
      name: val(`gear_name_${i}`),
      wt:   val(`gear_wt_${i}`),
    });
  }

  // ── Feats ──────────────────────────────────────
  data.feats_structured = [];
  for (let i = 0; i < 30; i++) {
    const name = val(`feat_name_${i}`);
    const desc = val(`feat_desc_${i}`);
    const type = val(`feat_type_${i}`);
    const wpn  = val(`feat_wpn_${i}`);
    if (name || desc) data.feats_structured.push({ name, desc, type, wpn });
  }

  // ── Magic Items ────────────────────────────────
  data.magicItems = [];
  for (let i = 0; i < MAGIC_ITEM_COUNT; i++) {
    data.magicItems.push({
      name:        val(`mi_name_${i}`),
      chargesMax:  val(`mi_charges_max_${i}`),
      chargesUsed: val(`mi_charges_used_${i}`),
    });
  }

  // ── Blessings / class-specific (page 3) ────────
  data.blessings = {
    b1name:  val('blessing1_name'),  b1minor: val('blessing1_minor'), b1major: val('blessing1_major'),
    b2name:  val('blessing2_name'),  b2minor: val('blessing2_minor'), b2major: val('blessing2_major'),
    sacredWeaponName:    val('sacred_weapon_name'),
    sacredWeaponEnh:     val('sacred_weapon_enh'),
    sacredWeaponDmg:     val('sacred_weapon_dmg'),
    sacredWeaponSpecial: val('sacred_weapon_special'),
    sacredArmorName:     val('sacred_armor_name'),
    sacredArmorEnh:      val('sacred_armor_enh'),
    sacredArmorSpecial:  val('sacred_armor_special'),
    weaponFocus:         val('weapon_focus'),
    classNotes:          val('class_notes'),
  };

  // ── Resource pools ─────────────────────────────
  data.resourcePools = [];
  for (let i = 0; i < RESOURCE_POOL_COUNT; i++) {
    const dots   = document.getElementById(`pool_dots_${i}`);
    const filled = dots ? dots.querySelectorAll('.pool-dot.filled').length : 0;
    data.resourcePools.push({
      label:  val(`pool_label_${i}`),
      max:    val(`pool_max_${i}`),
      filled: filled,
    });
  }

  // ── Daily abilities ────────────────────────────
  data.dailyAbilities = [];
  for (let i = 0; i < DAILY_ABILITY_COUNT; i++) {
    data.dailyAbilities.push({
      name: val(`daily_name_${i}`),
      max:  val(`daily_max_${i}`),
      used: val(`daily_used_${i}`),
    });
  }

  // ── Spell levels (page 4) ──────────────────────
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

  // ── My Actions (cheatsheet) ────────────────────
  data.myActions = [];
  for (let i = 0; i < MY_ACTIONS_COUNT; i++) {
    data.myActions.push({
      name:  val(`act_name_${i}`),
      type:  val(`act_type_${i}`),
      roll:  val(`act_roll_${i}`),
      notes: val(`act_notes_${i}`),
    });
  }

  // ── Buff tracker ───────────────────────────────
  data.buffs = [];
  for (let i = 0; i < BUFF_TRACKER_COUNT; i++) {
    data.buffs.push({
      name:     val(`buff_name_${i}`),
      effect:   val(`buff_effect_${i}`),
      duration: val(`buff_duration_${i}`),
    });
  }

  // ── Deity bonus state ──────────────────────────
  data._deityBonusKey  = (typeof _deityBonusLabel !== 'undefined') ? _deityBonusLabel : '';
  data._deityBonuses   = (typeof _deityBonuses    !== 'undefined') ? JSON.stringify(_deityBonuses) : '';

  data._version = '3.3';
  return data;
}

function populateData(data) {
  // ── Simple fields ──────────────────────────────
  Object.entries(data).forEach(([id, value]) => {
    if (typeof value !== 'string') return;
    const el = document.getElementById(id);
    if (el) el.value = value;
  });

  // ── Skills ─────────────────────────────────────
  if (data.skills && typeof SKILLS !== 'undefined') {
    SKILLS.forEach(([id]) => {
      const s = data.skills[id];
      if (!s) return;
      const dot = document.getElementById(`cs_${id}`);
      if (dot) dot.classList.toggle('checked', !!s.cs);
      set(`sk_ranks_${id}`, s.ranks || '');
      set(`sk_misc_${id}`,  s.misc  || '');
      calcSkill(id);
    });
  }

  // ── Weapons ────────────────────────────────────
  if (data.weapons) {
    data.weapons.forEach((w, i) => {
      if (i >= WEAPON_COUNT) return;
      set(`wpn_name_${i}`,      w.name     || '');
      set(`wpn_crit_${i}`,      w.crit     || '');
      set(`wpn_type_${i}`,      w.type     || '');
      set(`wpn_range_${i}`,     w.range    || '');
      set(`wpn_ammo_${i}`,      w.ammo     || '');
      set(`wpn_enh_${i}`,       w.enh      || '');
      set(`wpn_feat_${i}`,      w.feat     || '');
      set(`wpn_misc_atk_${i}`,  w.miscAtk  || '');
      set(`wpn_dmg_dice_${i}`,  w.dmgDice  || '');
      set(`wpn_dmg_feat_${i}`,  w.dmgFeat  || '');
      set(`wpn_dmg_misc_${i}`,  w.dmgMisc  || '');
      set(`wpn_notes_${i}`,     w.notes    || '');
      const matEl = document.getElementById(`wpn_material_${i}`);
      if (matEl && w.material) matEl.value = w.material;
      const setChk = (id, v) => { const el = document.getElementById(id); if (el) { el.checked = !!v; el.disabled = false; } };
      setChk(`wpn_twohanded_${i}`, w.twoHanded);
      setChk(`wpn_offhand_${i}`,   w.offHand);
      setChk(`wpn_ranged_${i}`,    w.ranged);
      setChk(`wpn_mw_${i}`,        w.mw);
      calcWeapon(i);
    });
  }

  // ── Wands ──────────────────────────────────────
  if (data.wands) {
    data.wands.forEach((w, i) => {
      if (i >= WAND_COUNT) return;
      set(`wand_name_${i}`,         w.name        || '');
      set(`wand_cl_${i}`,           w.cl          || '');
      set(`wand_spelllvl_${i}`,     w.spelllvl    || '');
      set(`wand_misc_atk_${i}`,     w.miscAtk     || '');
      set(`wand_dc_abil_${i}`,      w.dcAbil      || '');
      set(`wand_dc_misc_${i}`,      w.dcMisc      || '');
      set(`wand_effect_${i}`,       w.effect      || '');
      set(`wand_duration_${i}`,     w.duration    || '');
      set(`wand_charges_max_${i}`,  w.chargesMax  || '');
      set(`wand_charges_used_${i}`, w.chargesUsed || '');
      set(`wand_notes_${i}`,        w.notes       || '');
      const typeSel = document.getElementById(`wand_type_${i}`);
      if (typeSel && w.type) typeSel.value = w.type;
      const atkSel = document.getElementById(`wand_attack_type_${i}`);
      if (atkSel && w.attackType) atkSel.value = w.attackType;
      updateWandDots(i);
      calcWand(i);
    });
  }

  // ── AC Items ───────────────────────────────────
  if (data.acItems) {
    data.acItems.forEach((a, i) => {
      set(`aci_name_${i}`,    a.name   || '');
      set(`aci_bonus_${i}`,   a.bonus  || '');
      set(`aci_type_${i}`,    a.type   || '');
      set(`aci_maxdex_${i}`,  a.maxDex || '');
      set(`aci_check_${i}`,   a.check  || '');
      set(`aci_sf_${i}`,      a.sf     || '');
      set(`aci_wt_${i}`,      a.wt     || '');
      set(`aci_props_${i}`,   a.props  || '');
    });
    calcACItems();
  }

  // ── Gear ───────────────────────────────────────
  if (data.gear) {
    data.gear.forEach((g, i) => {
      set(`gear_name_${i}`, g.name || '');
      set(`gear_wt_${i}`,   g.wt   || '');
    });
    calcGear();
  }

  // ── Feats ──────────────────────────────────────
  if (data.feats_structured && typeof buildAdaptivePage2 === 'function') {
    const classKey = (val('charClass') || '').toLowerCase();
    const level    = parseInt(val('charLevel')) || 1;
    buildAdaptivePage2(classKey, level);
    setTimeout(() => restoreFeatData(data.feats_structured), 100);
  }

  // ── Magic Items ────────────────────────────────
  if (data.magicItems) {
    data.magicItems.forEach((m, i) => {
      set(`mi_name_${i}`,         m.name        || '');
      set(`mi_charges_max_${i}`,  m.chargesMax  || '');
      set(`mi_charges_used_${i}`, m.chargesUsed || '');
      updateMagicItemDots(i);
    });
  }

  // ── Blessings ──────────────────────────────────
  if (data.blessings) {
    const b = data.blessings;
    set('blessing1_name',  b.b1name  || ''); set('blessing1_minor', b.b1minor || ''); set('blessing1_major', b.b1major || '');
    set('blessing2_name',  b.b2name  || ''); set('blessing2_minor', b.b2minor || ''); set('blessing2_major', b.b2major || '');
    set('sacred_weapon_name',    b.sacredWeaponName    || '');
    set('sacred_weapon_enh',     b.sacredWeaponEnh     || '');
    set('sacred_weapon_dmg',     b.sacredWeaponDmg     || '');
    set('sacred_weapon_special', b.sacredWeaponSpecial || '');
    if (b.sacredArmorName)    set('sacred_armor_name',    b.sacredArmorName);
    if (b.sacredArmorEnh)     set('sacred_armor_enh',     b.sacredArmorEnh);
    if (b.sacredArmorSpecial) set('sacred_armor_special', b.sacredArmorSpecial);
    if (b.weaponFocus)        set('weapon_focus',         b.weaponFocus);
    if (b.classNotes)         set('class_notes',          b.classNotes);
  }

  // ── Resource pools ─────────────────────────────
  if (data.resourcePools) {
    data.resourcePools.forEach((p, i) => {
      set(`pool_label_${i}`, p.label || '');
      set(`pool_max_${i}`,   p.max   || '');
      updatePoolDots(i);
      const dotsEl = document.getElementById(`pool_dots_${i}`);
      if (dotsEl && p.filled) {
        dotsEl.querySelectorAll('.pool-dot').forEach((dot, d) => {
          dot.classList.toggle('filled', d < p.filled);
        });
      }
    });
  }

  // ── Daily abilities ────────────────────────────
  if (data.dailyAbilities) {
    data.dailyAbilities.forEach((a, i) => {
      set(`daily_name_${i}`, a.name || '');
      set(`daily_max_${i}`,  a.max  || '');
      set(`daily_used_${i}`, a.used || '');
    });
  }

  // ── Spell levels ───────────────────────────────
  if (data.spellLevels) {
    data.spellLevels.forEach((s, lvl) => {
      set(`spl_perday_${lvl}`, s.perday || '');
      set(`spl_bonus_${lvl}`,  s.bonus  || '');
      (s.names || []).forEach((n, i) => set(`spl_name_${lvl}_${i}`, n));
    });
  }

  // ── My Actions ─────────────────────────────────
  if (data.myActions) {
    data.myActions.forEach((a, i) => {
      set(`act_name_${i}`,  a.name  || '');
      set(`act_type_${i}`,  a.type  || '');
      set(`act_roll_${i}`,  a.roll  || '');
      set(`act_notes_${i}`, a.notes || '');
    });
  }

  // ── Buffs ──────────────────────────────────────
  if (data.buffs) {
    data.buffs.forEach((b, i) => {
      set(`buff_name_${i}`,     b.name     || '');
      set(`buff_effect_${i}`,   b.effect   || '');
      set(`buff_duration_${i}`, b.duration || '');
    });
  }

  // ── Formulae / campaign notes ──────────────────
  set('formulae_book',  data.formulae_book  || '');
  set('campaign_notes', data.campaign_notes || '');

  // ── Deity bonus ────────────────────────────────
  if (data._deityBonusKey && data._deityBonuses) {
    try {
      _deityBonusLabel = data._deityBonusKey;
      _deityBonuses    = JSON.parse(data._deityBonuses);
      calcSkills();
    } catch(e) {}
  }

  // ── Language picker ────────────────────────────
  const raceKey = data._applied_race;
  const race = (raceKey && typeof RACES !== 'undefined') ? RACES[raceKey] : null;
  if (typeof buildLanguagePicker === 'function') {
    buildLanguagePicker(race ? race.languages : [], race ? race.bonusLanguages : []);
  }
  if (data.languages && typeof restoreLanguagePicker === 'function') {
    restoreLanguagePicker(data.languages);
  }

  // ── Traits ─────────────────────────────────────
  setTimeout(restoreTraitDescriptions, 200);

  // ── Recalc everything ──────────────────────────
  calcAll();
  calcSaves();
  calcCombat();
  calcACItems();
  calcGear();
}

/* ══════════════════════════════════════════════════
   SETUP BAR TOGGLE
   ══════════════════════════════════════════════════ */
function toggleSetupBar() {
  const content = document.getElementById('setup-panels-content');
  const arrow   = document.getElementById('setup-toggle-arrow');
  if (!content) return;
  const hidden = content.style.display === 'none';
  content.style.display = hidden ? '' : 'none';
  if (arrow) arrow.textContent = hidden ? '▲ hide' : '▼ show';
  try { localStorage.setItem('pf1_setup_hidden', hidden ? '0' : '1'); } catch(e) {}
}

// Restore setup bar state on load
document.addEventListener('DOMContentLoaded', () => {
  try {
    const hidden = localStorage.getItem('pf1_setup_hidden');
    if (hidden === '1') {
      const content = document.getElementById('setup-panels-content');
      const arrow   = document.getElementById('setup-toggle-arrow');
      if (content) content.style.display = 'none';
      if (arrow)   arrow.textContent = '▼ show';
    }
  } catch(e) {}
});

/* ══════════════════════════════════════════════════
   SPELL PREPARED CHECKBOXES
   Adds a ✓ checkbox per spell name on page 4
   ══════════════════════════════════════════════════ */
// Override the spell name inputs with prepared checkbox version
// Done by patching buildSpellsPage after-the-fact via CSS and DOM

// After page 4 content is injected, wrap spell names with prepared toggle
function addPreparedCheckboxes() {
  document.querySelectorAll('[id^="spl_name_"]').forEach(input => {
    if (input.dataset.prepWrapped) return;
    input.dataset.prepWrapped = '1';

    const wrap = document.createElement('div');
    wrap.className = 'spell-name-wrap';
    input.parentNode.insertBefore(wrap, input);

    const cb = document.createElement('input');
    cb.type  = 'checkbox';
    cb.className = 'spell-prep-cb';
    cb.title = 'Prepared';
    cb.id    = input.id + '_prep';
    cb.onchange = () => {
      input.classList.toggle('spell-prepared', cb.checked);
    };

    wrap.appendChild(cb);
    wrap.appendChild(input);
  });
}

// Patch buildPage4Spells to call addPreparedCheckboxes after render
const _buildPage4SpellsOrig = buildPage4Spells;
buildPage4Spells = function(classKey, level) {
  _buildPage4SpellsOrig(classKey, level);
  setTimeout(addPreparedCheckboxes, 100);
};

/* ══════════════════════════════════════════════════
   MATERIAL CHANGE AFTER QUICK-FILL
   Weapon material select is not disabled — but
   applyWeaponLookup must not overwrite material
   if user already changed it
   ══════════════════════════════════════════════════ */
// Fix: material select should always be enabled
// The issue was calcWeapon re-reading material but select might be missing
// Ensure material selects are always enabled after buildWeapons
const _buildWeaponsOrig2 = buildWeapons;
buildWeapons = function() {
  _buildWeaponsOrig2();
  // Ensure all material selects are enabled
  document.querySelectorAll('[id^="wpn_material_"]').forEach(sel => {
    sel.disabled = false;
  });
  updateSlotCountDisplay();
};
