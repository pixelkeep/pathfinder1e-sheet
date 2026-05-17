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
  buildLanguagePicker([], []);
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
          <label class="bd-cell" title="Enhancement bonus (+1 MW if no enhancement)">Enh/MW<br><input type="number" id="wpn_enh_${i}" class="num small-num" oninput="calcWeapon(${i})"></label>
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
    'languages','languages_custom','skill_conditional','_applied_race',
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
      name:       val(`wpn_name_${i}`),
      material:   val(`wpn_material_${i}`),
      crit:       val(`wpn_crit_${i}`),
      type:       val(`wpn_type_${i}`),
      range:      val(`wpn_range_${i}`),
      ammo:       val(`wpn_ammo_${i}`),
      enh:        val(`wpn_enh_${i}`),
      feat:       val(`wpn_feat_${i}`),
      miscAtk:    val(`wpn_misc_atk_${i}`),
      dmgDice:    val(`wpn_dmg_dice_${i}`),
      dmgFeat:    val(`wpn_dmg_feat_${i}`),
      dmgMisc:    val(`wpn_dmg_misc_${i}`),
      twoHanded:  !!(document.getElementById(`wpn_twohanded_${i}`) && document.getElementById(`wpn_twohanded_${i}`).checked),
      offHand:    !!(document.getElementById(`wpn_offhand_${i}`)   && document.getElementById(`wpn_offhand_${i}`).checked),
      ranged:     !!(document.getElementById(`wpn_ranged_${i}`)    && document.getElementById(`wpn_ranged_${i}`).checked),
      mw:         !!(document.getElementById(`wpn_mw_${i}`)        && document.getElementById(`wpn_mw_${i}`).checked),
    });
  }

  // AC Items
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

  // Blessings
  data.blessings = {
    b1name:  val('blessing1_name'),  b1minor: val('blessing1_minor'), b1major: val('blessing1_major'),
    b2name:  val('blessing2_name'),  b2minor: val('blessing2_minor'), b2major: val('blessing2_major'),
    sacredWeaponName:    val('sacred_weapon_name'),
    sacredWeaponEnh:     val('sacred_weapon_enh'),
    sacredWeaponDmg:     val('sacred_weapon_dmg'),
    sacredWeaponSpecial: val('sacred_weapon_special'),
    weaponFocus:         val('weapon_focus'),
  };

  // Separate class and level
  data.charClass = val('charClass');
  data.charLevel = val('charLevel');

  // Gear
  data.gear = [];
  for (let i = 0; i < GEAR_COUNT; i++) {
    data.gear.push({
      name: val(`gear_name_${i}`),
      wt:   val(`gear_wt_${i}`),
    });
  }

  data.feats_structured = collectFeatData();
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
      set(`wpn_name_${i}`,      w.name     || '');
      const matEl = document.getElementById(`wpn_material_${i}`);
      if (matEl && w.material) matEl.value = w.material;
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
      const setCheck = (id, val) => { const el = document.getElementById(id); if (el) el.checked = !!val; };
      setCheck(`wpn_twohanded_${i}`, w.twoHanded);
      setCheck(`wpn_offhand_${i}`,   w.offHand);
      setCheck(`wpn_ranged_${i}`,    w.ranged);
      setCheck(`wpn_mw_${i}`,        w.mw);
      calcWeapon(i);
    });
  }

  // AC Items
  if (data.acItems) {
    data.acItems.forEach((a, i) => {
      set(`aci_name_${i}`,   a.name   || '');
      set(`aci_bonus_${i}`,  a.bonus  || '');
      set(`aci_type_${i}`,   a.type   || '');
      set(`aci_maxdex_${i}`, a.maxDex || '');
      set(`aci_check_${i}`,  a.check  || '');
      set(`aci_sf_${i}`,     a.sf     || '');
      set(`aci_wt_${i}`,     a.wt     || '');
      set(`aci_props_${i}`,  a.props  || '');
    });
    calcACItems();
  }

  // Blessings
  if (data.blessings) {
    const b = data.blessings;
    set('blessing1_name',  b.b1name  || ''); set('blessing1_minor', b.b1minor || ''); set('blessing1_major', b.b1major || '');
    set('blessing2_name',  b.b2name  || ''); set('blessing2_minor', b.b2minor || ''); set('blessing2_major', b.b2major || '');
    set('sacred_weapon_name',    b.sacredWeaponName    || '');
    set('sacred_weapon_enh',     b.sacredWeaponEnh     || '');
    set('sacred_weapon_dmg',     b.sacredWeaponDmg     || '');
    set('sacred_weapon_special', b.sacredWeaponSpecial || '');
    set('weapon_focus',          b.weaponFocus         || '');
  }

  // Class and level (separate fields)
  if (data.charClass) set('charClass', data.charClass);
  if (data.charLevel) set('charLevel', data.charLevel);
  // Legacy: classLevel combined field
  if (data.classLevel && !data.charClass) {
    const parts = data.classLevel.match(/^(.*?)\s+(\d+)$/);
    if (parts) { set('charClass', parts[1]); set('charLevel', parts[2]); }
    else set('charClass', data.classLevel);
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

  // Restore language checkboxes
  if (data.languages) {
    // Rebuild picker with race data if available
    const raceKey = data._applied_race;
    const race = raceKey && RACES[raceKey];
    buildLanguagePicker(
      race ? race.languages      : [],
      race ? race.bonusLanguages : []
    );
    restoreLanguagePicker(data.languages);
  }

  // Restore structured feats
  if (data.feats_structured) {
    buildAdaptivePage2(data._applied_race ? (data.charClass || '').toLowerCase() : '', parseInt(data.charLevel) || 1);
    restoreFeatData(data.feats_structured);
  }

  updateCarryWeight();
};

/* ══════════════════════════════════════════════════
   CHARACTER SETUP — class/race/level auto-fill
   Requires data.js loaded before sheet.js
   ══════════════════════════════════════════════════ */

// ── BUILD SETUP PANEL IN HTML ──────────────────────
function buildSetupPanel() {
  const panel = document.getElementById('setup-panel');
  if (!panel) return;

  // Class options
  const classOpts = Object.entries(CLASSES)
    .sort((a,b) => a[1].name.localeCompare(b[1].name))
    .map(([k,v]) => `<option value="${k}">${v.name} (${v.source})</option>`)
    .join('');

  // Race options
  const raceOpts = Object.entries(RACES)
    .sort((a,b) => a[1].name.localeCompare(b[1].name))
    .map(([k,v]) => `<option value="${k}">${v.name}</option>`)
    .join('');

  // Size options
  const sizeOpts = Object.keys(SIZE_DATA)
    .map(s => `<option value="${s}"${s==='Medium'?' selected':''}>${s}</option>`)
    .join('');

  // Deity options
  const deityOpts = DEITIES
    .map(d => `<option value="${d[0]}" data-align="${d[1]}" data-domains="${d[2]}" data-weapon="${d[3]}">${d[0]} (${d[1]}) — ${d[3]}</option>`)
    .join('');

  panel.innerHTML = `
    <div class="setup-row">
      <label class="setup-label">Race
        <select id="setup_race" onchange="onRaceChange()">
          <option value="">— select —</option>
          ${raceOpts}
        </select>
      </label>
      <label class="setup-label">Class
        <select id="setup_class" onchange="onClassChange()">
          <option value="">— select —</option>
          ${classOpts}
        </select>
      </label>
      <label class="setup-label">Level
        <input type="number" id="setup_level" min="1" max="20" value="1" style="width:42px" oninput="onLevelChange()">
      </label>
      <label class="setup-label">Size
        <select id="setup_size" onchange="onSizeChange()">
          ${sizeOpts}
        </select>
      </label>
      <label class="setup-label">Deity
        <select id="setup_deity" onchange="onDeityChange()" style="max-width:180px">
          <option value="">— select —</option>
          ${deityOpts}
        </select>
      </label>
      <button class="setup-apply-btn" onclick="applySetup()">Apply Setup</button>
    </div>
    <div id="setup-info" class="setup-info"></div>
  `;
}

// ── ON CHANGE HANDLERS ─────────────────────────────
function onLevelFieldChange() {
  // When the level field on page 1 is changed directly, update preview
  const lvl = parseInt(document.getElementById('charLevel') && document.getElementById('charLevel').value) || 1;
  const setupLevel = document.getElementById('setup_level');
  if (setupLevel) setupLevel.value = lvl;
  showSetupInfo();
}

function onSizeFieldChange() {
  // Size dropdown on page 1 changed
  const size = document.getElementById('size') && document.getElementById('size').value;
  if (!size) return;
  const setupSize = document.getElementById('setup_size');
  if (setupSize) setupSize.value = size;
  onSizeChange();
}

function onRaceChange() {
  const key = document.getElementById('setup_race').value;
  const race = RACES[key];
  if (!race) return;
  showSetupInfo();
}

function onClassChange() {
  showSetupInfo();
}

function onLevelChange() {
  showSetupInfo();
  const lvl = parseInt(document.getElementById('setup_level').value) || 1;
  const classKey = document.getElementById('setup_class').value;
  if (classKey) previewClassStats(classKey, lvl);
}

function onSizeChange() {
  const size = document.getElementById('setup_size').value;
  const sizeData = SIZE_DATA[size];
  if (!sizeData) return;
  set('ac_size', sizeData.acMod);
  set('cmb_size', sizeData.cmbMod);
  set('cmd_size', sizeData.cmbMod);
  calcAC();
  calcCombat();
}

function onDeityChange() {
  // Set deity field on the sheet immediately for convenience
  const sel = document.getElementById('setup_deity');
  if (sel && sel.value) set('deity', sel.value);
  showSetupInfo();
}

function showSetupInfo() {
  const info = document.getElementById('setup-info');
  if (!info) return;
  const raceKey  = document.getElementById('setup_race') ? document.getElementById('setup_race').value : '';
  const classKey = document.getElementById('setup_class') ? document.getElementById('setup_class').value : '';
  const level    = parseInt(document.getElementById('setup_level') && document.getElementById('setup_level').value) || 1;
  const race  = RACES[raceKey];
  const cls   = CLASSES[classKey];
  let html = '';

  if (race) {
    html += `<span class="setup-info-tag">👁 ${race.vision}</span>
             <span class="setup-info-tag">🗣 ${race.languages.join(', ')}</span>`;
  }
  if (cls) {
    const bab   = getBAB(classKey, level);
    const saves = getClassSaves(classKey, level);
    html += `<span class="setup-info-tag">⚔ BAB +${bab}</span>
             <span class="setup-info-tag">Fort +${saves.fort} / Ref +${saves.ref} / Will +${saves.will}</span>
             <span class="setup-info-tag">HD d${cls.hd} · ${cls.skillsPerLevel} skills/level</span>`;
    const xpNext = getXPForLevel(level);
    if (xpNext) html += `<span class="setup-info-tag">XP to next: ${xpNext.toLocaleString()}</span>`;
  }

  // Always include deity perk if a deity is selected
  const deityEl = document.getElementById('setup_deity');
  if (deityEl && deityEl.value) {
    const opt = deityEl.options[deityEl.selectedIndex];
    if (opt && opt.dataset.weapon) {
      html += `<span class="setup-info-tag">⚔ Favored weapon: <strong>${opt.dataset.weapon}</strong></span>
               <span class="setup-info-tag">🏛 ${opt.dataset.domains}</span>`;
    }
    const perk = (typeof DEITY_PERKS !== 'undefined') && DEITY_PERKS[deityEl.value];
    if (perk) {
      html += `<span class="setup-info-tag deity-perk" title="Obedience: ${perk.obedience}">🙏 ${perk.perk}</span>`;
    }
  }

  info.innerHTML = html;
}

function previewClassStats(classKey, level) {
  // Just update the info display
  showSetupInfo();
}

// ── APPLY SETUP ────────────────────────────────────
function applySetup() {
  const raceKey  = document.getElementById('setup_race').value;
  const classKey = document.getElementById('setup_class').value;
  const level    = parseInt(document.getElementById('setup_level').value) || 1;
  const sizeKey  = document.getElementById('setup_size').value;
  const deityEl  = document.getElementById('setup_deity');
  const deityOpt = deityEl ? deityEl.options[deityEl.selectedIndex] : null;

  const race = RACES[raceKey];
  const cls  = CLASSES[classKey];

  // ── Deity
  if (deityOpt && deityOpt.value) {
    set('deity', deityOpt.value);
  }

  // ── Class + level
  if (cls) {
    set('charClass', cls.name);
    set('charLevel', level);

    // BAB
    const bab = getBAB(classKey, level);
    set('bab', bab);

    // Base saves
    const saves = getClassSaves(classKey, level);
    set('fort_base', saves.fort);
    set('ref_base',  saves.ref);
    set('will_base', saves.will);

    // Spell ability for page 3
    if (cls.spellAbility) set('spell_ability', cls.spellAbility.toUpperCase());

    // Caster level for page 3
    set('caster_level', level);

    // XP
    set('xp_current', '0');
    const xpNext = getXPForLevel(level);
    if (xpNext) set('xp_next', xpNext);

    // Class skills — mark dots
    markClassSkills(cls.classSkills);

    // Resource pool labels (page 3)
    if (typeof updatePoolDots === 'function') {
      cls.resources.forEach((r, i) => {
        set(`pool_label_${i}`, r.label);
      });
    }
  }

  // ── Race
  if (race) {
    set('race', race.name);

    // Ability score racial mods — idempotent:
    // reverse any previously applied race mods first, then apply new ones
    const prevRaceKey = val('_applied_race');
    const prevRace = prevRaceKey && RACES[prevRaceKey];
    ['str','dex','con','int','wis','cha'].forEach(ab => {
      const raw = val(`${ab}_score`);
      if (raw === '' || raw === null) return; // never touch empty fields
      let score = parseInt(raw) || 0;
      // Reverse old racial mod if a different race was applied before
      if (prevRace && prevRaceKey !== raceKey) {
        score -= (prevRace.abilityMods[ab] || 0);
      }
      // Apply new racial mod only if race changed or not yet applied
      const newMod = race.abilityMods[ab] || 0;
      if (prevRaceKey !== raceKey && newMod !== 0) {
        score += newMod;
        set(`${ab}_score`, score);
      }
    });
    // Remember which race we applied
    set('_applied_race', raceKey);

    // Size
    set('size', race.size);
    const setupSize = document.getElementById('setup_size');
    if (setupSize) setupSize.value = race.size;
    onSizeChange();

    // Speed
    set('speed_land', race.speed);
    set('speed_armor', race.size === 'Medium' ? race.speed - 10 : race.speed);

    // Languages — build picker with racial defaults pre-checked
    buildLanguagePicker(race.languages, race.bonusLanguages);

    // Racial skill bonuses + traits as notes
    const traitText = race.traits.join('\n');
    const existingFeatures = val('special_abilities');
    set('special_abilities', existingFeatures
      ? existingFeatures + '\n\n--- Racial Traits ---\n' + traitText
      : '--- Racial Traits ---\n' + traitText);

    // Racial bonus languages note
    if (race.bonusLanguages && race.bonusLanguages.length) {
      const existing = val('skill_conditional') || '';
      set('skill_conditional',
        (existing ? existing + ' | ' : '') +
        `Bonus languages: ${race.bonusLanguages.join(', ')}`);
    }
  }

  // ── Recalculate everything
  calcAll();
  calcSaves();
  calcCombat();

  // Write deity perk info:
  // 1. Into the special abilities box as a reference note
  // 2. Into buff tracker slot 0 on page 5 (as a reminder to apply after obedience)
  const deityEl2 = document.getElementById('setup_deity');
  if (deityEl2 && deityEl2.value) {
    const perkData = (typeof DEITY_PERKS !== 'undefined') && DEITY_PERKS[deityEl2.value];
    if (perkData) {
      // Add to special abilities as a permanent reference (once)
      const existingSA = val('special_abilities');
      const perkNote = `[Deity Obedience — ${deityEl2.value}]\n${perkData.perk}\n⚠ Requires: ${perkData.obedience}`;
      if (!existingSA.includes('Deity Obedience')) {
        set('special_abilities', existingSA ? existingSA + '\n\n' + perkNote : perkNote);
      }
      // Add to buff tracker slot 0 (page 5) as reminder
      if (!val('buff_name_0')) {
        set('buff_name_0',     `${deityEl2.value} Obedience`);
        set('buff_effect_0',   perkData.perk);
        set('buff_duration_0', 'Daily (1h prayer required)');
      }

      // Apply typed bonus objects from the structured perk data
      applyDeityBonuses(perkData, deityEl2.value);
    }
  }

  // Build adaptive pages
  if (typeof afterApplySetup === 'function') afterApplySetup(classKey, level);

  alert(`Setup applied!\n\nCheck:\n• Ability scores (racial mods added to existing values)\n• Special Abilities tab (racial traits added)\n• Class Skills (dots marked)\n• BAB, Saves, Size updated\n\nTip: If this is a new character, set ability scores to 10 first, then apply setup.`);
}

// ── MARK CLASS SKILLS ──────────────────────────────
function markClassSkills(classSkillIds) {
  // First clear all
  document.querySelectorAll('.cs-dot').forEach(d => d.classList.remove('checked'));
  // Mark class skills
  classSkillIds.forEach(id => {
    const dot = document.getElementById(`cs_${id}`);
    if (dot) {
      dot.classList.add('checked');
      calcSkill(id.replace(/\d+$/, '') === id ? id : id); // handle craft1/craft2
    }
  });
  // Recalc all skills
  calcSkills();
}

// ── WEAPON LOOKUP ──────────────────────────────────
function buildWeaponLookup() {
  const container = document.getElementById('weapon-lookup');
  if (!container) return;

  const opts = Object.keys(WEAPONS).sort()
    .map(w => `<option value="${w}">${w}</option>`)
    .join('');

  container.innerHTML = `
    <div class="weapon-lookup-row">
      <select id="wpn_lookup_name" style="width:180px">
        <option value="">— lookup weapon —</option>
        ${opts}
      </select>
      <select id="wpn_lookup_slot" style="width:60px">
        ${Array.from({length:WEAPON_COUNT},(_,i)=>`<option value="${i}">Slot ${i+1}</option>`).join('')}
      </select>
      <label><input type="checkbox" id="wpn_lookup_mw"> Masterwork (+1 atk)</label>
      <label>Enhance <input type="number" id="wpn_lookup_enhance" class="num small-num" min="0" max="5" value="0"> </label>
      <button onclick="applyWeaponLookup()">Fill Slot</button>
    </div>
  `;
}

function applyWeaponLookup() {
  const name    = val('wpn_lookup_name');
  const slot    = parseInt(val('wpn_lookup_slot')) || 0;
  const mw      = document.getElementById('wpn_lookup_mw') && document.getElementById('wpn_lookup_mw').checked;
  const enhance = parseInt(val('wpn_lookup_enhance')) || 0;
  const wpn     = WEAPONS[name];
  if (!wpn) { alert('Select a weapon first.'); return; }

  // Helper to set a checkbox
  const setChk = (id, v) => {
    const el = document.getElementById(id);
    if (el) { el.checked = !!v; el.disabled = false; }
  };
  const lockChk = (id, v) => {
    const el = document.getElementById(id);
    if (el) { el.checked = !!v; el.disabled = true; } // locked — weapon type forces this
  };

  // Name and material
  set(`wpn_name_${slot}`, name + (enhance > 0 ? ` +${enhance}` : (mw && enhance === 0 ? ' (MW)' : '')));
  // Set material if it was selected
  const matSel = document.getElementById(`wpn_material_${slot}`);
  if (matSel && matSel.value === 'Normal' && mw && enhance === 0) matSel.value = 'Masterwork';

  // Stats from data
  set(`wpn_crit_${slot}`,     wpn.crit);
  set(`wpn_type_${slot}`,     wpn.type);
  set(`wpn_range_${slot}`,    wpn.range > 0 ? wpn.range + ' ft.' : 'melee');
  set(`wpn_dmg_dice_${slot}`, wpn.dmg);   // ← correct field: dice, not total
  set(`wpn_enh_${slot}`,      enhance || '');

  // Checkboxes — two-handed and ranged are locked by weapon type
  const isRanged    = wpn.group === 'ranged';
  const isTwoHanded = !!wpn.twoHanded;
  const isLight     = wpn.group === 'light';

  lockChk(`wpn_twohanded_${slot}`, isTwoHanded);  // locked: polearms/two-handers always two-handed
  setChk(`wpn_offhand_${slot}`,  false);           // user can toggle
  lockChk(`wpn_ranged_${slot}`,    isRanged);      // locked: ranged weapons always ranged
  setChk(`wpn_mw_${slot}`,        mw && enhance === 0); // MW checkbox

  // Recalculate full breakdown
  calcWeapon(slot);
}

// ── ARMOR LOOKUP ───────────────────────────────────
function buildArmorLookup() {
  const container = document.getElementById('armor-lookup');
  if (!container) return;

  const opts = Object.keys(ARMOR).sort()
    .map(a => `<option value="${a}">${a}</option>`)
    .join('');

  container.innerHTML = `
    <div class="armor-lookup-row">
      <select id="armor_lookup_name" style="width:180px">
        <option value="">— lookup armor/shield —</option>
        ${opts}
      </select>
      <select id="armor_lookup_slot" style="width:60px">
        ${Array.from({length:AC_ITEM_COUNT},(_,i)=>`<option value="${i}">Slot ${i+1}</option>`).join('')}
      </select>
      <label><input type="checkbox" id="armor_lookup_mw"> Masterwork</label>
      <label>Enhance <input type="number" id="armor_lookup_enhance" class="num small-num" min="0" max="5" value="0"></label>
      <button onclick="applyArmorLookup()">Fill Slot</button>
    </div>
  `;
}

function applyArmorLookup() {
  const name    = val('armor_lookup_name');
  const slot    = parseInt(val('armor_lookup_slot')) || 0;
  const mw      = document.getElementById('armor_lookup_mw').checked;
  const enhance = parseInt(val('armor_lookup_enhance')) || 0;
  const armor   = ARMOR[name];
  if (!armor) { alert('Select armor or shield first.'); return; }

  const checkPen = mw || enhance > 0
    ? Math.min(0, armor.checkPen + 1)
    : armor.checkPen;

  set(`aci_name_${slot}`,  name + (mw && enhance===0 ? ' (MW)' : '') + (enhance > 0 ? ` +${enhance}` : ''));
  set(`aci_bonus_${slot}`, armor.bonus + enhance);
  set(`aci_type_${slot}`,  armor.type);
  set(`aci_check_${slot}`, checkPen);
  set(`aci_sf_${slot}`,    armor.sf);
  set(`aci_wt_${slot}`,    armor.weight);

  calcACItems();
}

// ── GEAR LOOKUP ────────────────────────────────────
function buildGearLookup() {
  const container = document.getElementById('gear-lookup');
  if (!container) return;

  const opts = Object.keys(COMMON_GEAR).sort()
    .map(g => `<option value="${g}">${g} (${COMMON_GEAR[g].weight} lbs, ${COMMON_GEAR[g].cost} gp)</option>`)
    .join('');

  container.innerHTML = `
    <div class="gear-lookup-row">
      <select id="gear_lookup_name" style="width:220px">
        <option value="">— quick-add gear —</option>
        ${opts}
      </select>
      <button onclick="applyGearLookup()">Add to Gear</button>
    </div>
  `;
}

function applyGearLookup() {
  const name = val('gear_lookup_name');
  const item = COMMON_GEAR[name];
  if (!item) { alert('Select an item first.'); return; }

  // Find first empty gear slot
  for (let i = 0; i < GEAR_COUNT; i++) {
    if (!val(`gear_name_${i}`)) {
      set(`gear_name_${i}`, name);
      set(`gear_wt_${i}`,   item.weight);
      calcGear();
      return;
    }
  }
  alert('No empty gear slots. Clear a slot first.');
}

// ── INIT: attach lookups after DOM ready ───────────
const _originalDOMReady = document.addEventListener;
document.addEventListener('DOMContentLoaded', () => {
  buildSetupPanel();
  buildWeaponLookup();
  buildArmorLookup();
  buildGearLookup();
});

/* ══════════════════════════════════════════════════
   ADAPTIVE PAGE 2 — Class Abilities + Feats
   ══════════════════════════════════════════════════ */

// Stored class/level state for adaptive rendering
let _currentClass = '';
let _currentLevel = 1;

// Total feat slots: 1 at level 1, then every odd level
function getRegularFeatCount(level) {
  // 1st level: 1 feat
  // Every odd level after: +1
  let count = 1;
  for (let l = 3; l <= level; l += 2) count++;
  return count;
}

function buildAdaptivePage2(classKey, level) {
  _currentClass = classKey;
  _currentLevel = level;
  const cls = CLASSES[classKey];
  if (!cls) return;

  buildFeatsSection(classKey, level);
  buildClassAbilitiesSection(classKey, level);
  buildClassSpecificBlock(classKey, level);
  buildPage4Spells(classKey, level);
}

// ── FEATS SECTION ──────────────────────────────────
function buildFeatsSection(classKey, level) {
  const container = document.getElementById('feats-container');
  if (!container) return;

  const regularFeats  = getRegularFeatCount(level);
  const bonusFeats    = getBonusFeatCount(classKey, level);
  const totalFeatSlots = regularFeats + bonusFeats;

  // Update label
  const label = document.getElementById('feat-count-label');
  if (label) label.textContent = `${regularFeats} regular + ${bonusFeats} bonus = ${totalFeatSlots} total at level ${level}`;

  // Build feat rows — preserve existing values
  const existing = [];
  for (let i = 0; i < 30; i++) {
    const name = val(`feat_name_${i}`);
    const desc = val(`feat_desc_${i}`);
    const type = val(`feat_type_${i}`);
    const wpn  = val(`feat_wpn_${i}`);
    if (name || desc) existing.push({ name, desc, type, wpn });
  }

  container.innerHTML = '';

  // Determine which feat slots are bonus feats
  const bonusFeatAbilities = (CLASS_ABILITIES[classKey] || [])
    .filter(a => a.type === 'bonus_feat' && a.level <= level)
    .sort((a,b) => a.level - b.level);

  for (let i = 0; i < totalFeatSlots; i++) {
    const isBonus  = i >= regularFeats;
    const bonusIdx = i - regularFeats;
    const bonusAbil = isBonus ? bonusFeatAbilities[bonusIdx] : null;

    // Regular feats: gained at level 1, 3, 5, 7...
    const gainedLevel = isBonus
      ? (bonusAbil ? bonusAbil.level : '?')
      : (i === 0 ? 1 : 1 + (i * 2) - 1);

    const existing_i = existing[i] || {};
    const isWeaponFeat = existing_i.type === 'weapon';

    const row = document.createElement('div');
    row.className = `feat-row${isBonus ? ' feat-bonus' : ''}`;
    row.innerHTML = `
      <div class="feat-row-header">
        <span class="feat-level-badge ${isBonus ? 'feat-badge-bonus' : 'feat-badge-regular'}"
              title="${isBonus ? `Bonus feat (${bonusAbil?.description || ''})` : `Regular feat (gained level ${gainedLevel})`}">
          ${isBonus ? `B${bonusIdx+1}` : `L${gainedLevel}`}
        </span>
        <div class="feat-search-wrap" style="position:relative;flex:1;min-width:80px">
          <input type="text" id="feat_name_${i}" class="feat-name-input"
                 value="${(existing_i.name||'').replace(/"/g,'&quot;')}"
                 placeholder="${isBonus ? `Bonus feat…` : 'Type to search feats…'}"
                 oninput="onFeatSearch(${i})" autocomplete="off">
          <div id="feat_suggestions_${i}" class="feat-suggestions" style="display:none"></div>
        </div>
        <select id="feat_type_${i}" class="feat-type-select" onchange="onFeatTypeChange(${i})">
          <option value=""     ${(existing_i.type||'')==''      ?'selected':''}>—</option>
          <option value="combat"   ${existing_i.type==='combat'  ?'selected':''}>Combat</option>
          <option value="weapon"   ${existing_i.type==='weapon'  ?'selected':''}>Weapon</option>
          <option value="metamagic"${existing_i.type==='metamagic'?'selected':''}>Metamagic</option>
          <option value="general"  ${existing_i.type==='general' ?'selected':''}>General</option>
          <option value="item"     ${existing_i.type==='item'    ?'selected':''}>Item Creation</option>
        </select>
        <select id="feat_wpn_${i}" class="feat-wpn-select ${isWeaponFeat ? '' : 'hidden'}"
                title="Link to weapon slot" onchange="onFeatWeaponLink(${i})">
          <option value="">— weapon slot —</option>
          ${Array.from({length: WEAPON_COUNT}, (_,w) =>
            `<option value="${w}" ${existing_i.wpn==w?'selected':''}>Slot ${w+1}: ${val(`wpn_name_${w}`) || '(empty)'}</option>`
          ).join('')}
        </select>
      </div>
      <input type="text" id="feat_desc_${i}" class="feat-desc-input"
             value="${(existing_i.desc||'').replace(/"/g,'&quot;')}"
             placeholder="Brief effect — e.g. +1 attack with chosen weapon">
    `;
    container.appendChild(row);
  }
}

function onFeatTypeChange(i) {
  const type = val(`feat_type_${i}`);
  const wpnSel = document.getElementById(`feat_wpn_${i}`);
  if (wpnSel) wpnSel.classList.toggle('hidden', type !== 'weapon');
}

function onFeatWeaponLink(i) {
  // Update weapon slot's feat dropdown label
  const slotIdx = parseInt(val(`feat_wpn_${i}`));
  const featName = val(`feat_name_${i}`);
  // Trigger weapon recalc — feat bonus in wpn_feat_X is manually entered
  // Just refresh the weapon slot dropdown labels
  buildFeatsSection(_currentClass, _currentLevel);
}

// ── FEAT AUTOCOMPLETE ─────────────────────────────
function onFeatSearch(i) {
  const query = val(`feat_name_${i}`);
  const suggestions = document.getElementById(`feat_suggestions_${i}`);
  if (!suggestions) return;

  if (typeof searchFeats === 'undefined' || query.length < 2) {
    suggestions.style.display = 'none';
    return;
  }

  const results = searchFeats(query);
  if (!results.length) { suggestions.style.display = 'none'; return; }

  suggestions.innerHTML = results.map(f => {
    const safeName = f.name.replace(/'/g, '&#39;');
    const safePrereqs = (f.prereqs||'').replace(/"/g,'&quot;');
    const shortBenefit = f.benefit.length > 60 ? f.benefit.substring(0,60) + '…' : f.benefit;
    return `<div class="feat-suggestion-item" onclick="selectFeat(${i}, '${`${f.name}`.replace(/'/g,'&#39;')}')"
         title="${safePrereqs}">
      <span class="feat-sug-name">${f.name}</span>
      <span class="feat-sug-type">${f.type}</span>
      <span class="feat-sug-benefit">${shortBenefit}</span>
    </div>`;
  }).join('');
  suggestions.style.display = 'block';
}

function selectFeat(i, name) {
  name = name.replace(/&#39;/g, "'");
  const feat = (typeof getFeatByName !== 'undefined') ? getFeatByName(name) : null;
  set(`feat_name_${i}`, name);
  if (feat) {
    set(`feat_desc_${i}`, feat.benefit);
    // Auto-set type
    const typeSel = document.getElementById(`feat_type_${i}`);
    if (typeSel) typeSel.value = feat.type === 'combat' ? 'combat' : feat.type === 'metamagic' ? 'metamagic' : feat.type === 'item_creation' ? 'item' : 'general';
    // Auto-show weapon link if needed
    if (feat.weaponLinked) {
      const wpnSel = document.getElementById(`feat_wpn_${i}`);
      if (wpnSel) wpnSel.classList.remove('hidden');
    }
    onFeatTypeChange(i);
  }
  // Hide suggestions
  const suggestions = document.getElementById(`feat_suggestions_${i}`);
  if (suggestions) suggestions.style.display = 'none';
}

// Close suggestions when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.feat-search-wrap')) {
    document.querySelectorAll('.feat-suggestions').forEach(el => el.style.display = 'none');
  }
});

// ── CLASS ABILITIES SECTION ────────────────────────
function buildClassAbilitiesSection(classKey, level) {
  const container = document.getElementById('class-abilities-container');
  if (!container) return;

  const label = document.getElementById('class-abilities-label');
  const cls = CLASSES[classKey];
  if (label && cls) label.textContent = `${cls.name} level ${level}`;

  const abilities = getClassAbilitiesForLevel(classKey, level);
  if (!abilities.length) {
    container.innerHTML = '<p class="helper-text">Select a class in Character Setup and click Apply to populate class abilities.</p>';
    return;
  }

  // Build class features header block
  const features = (typeof getClassFeatures === 'function') ? getClassFeatures(classKey) : null;
  let featuresHtml = '';
  if (features) {
    const sc = features.spellcasting;
    const prof = features.proficiencies;
    featuresHtml = `
      <div class="cf-block">
        <div class="cf-section-title">Class Features</div>
        <div class="cf-row"><span class="cf-label">Weapons</span><span class="cf-value">${prof.weapons}</span></div>
        <div class="cf-row"><span class="cf-label">Armor</span><span class="cf-value">${prof.armor}</span></div>
        ${prof.note ? `<div class="cf-row"><span class="cf-label"></span><span class="cf-note">${prof.note}</span></div>` : ''}
        ${sc ? `
        <div class="cf-row"><span class="cf-label">Spellcasting</span><span class="cf-value">${sc.type} · ${sc.ability} · Max level ${sc.maxLevel} · ${sc.prepared ? 'Prepared' : 'Spontaneous'}</span></div>
        <div class="cf-row"><span class="cf-label">Spell list</span><span class="cf-note">${sc.list}</span></div>
        <div class="cf-row"><span class="cf-label">Bonus spells</span><span class="cf-note">${sc.bonusSpells}</span></div>
        ` : '<div class="cf-row"><span class="cf-label">Spellcasting</span><span class="cf-value">None</span></div>'}
        ${features.specialRules.map(r =>
          `<div class="cf-row"><span class="cf-label">${r.name}</span><span class="cf-note">${r.text}</span></div>`
        ).join('')}
        ${features.healSpells ? `<div class="cf-row cf-heal"><span class="cf-label">Heal spells</span><span class="cf-note">${features.healSpells.note}</span></div>` : ''}
      </div>
      <div class="cf-divider"></div>`;
  }

  // Group by type
  const groups = {
    resource: abilities.filter(a => a.type === 'resource'),
    weapon:   abilities.filter(a => a.type === 'weapon'),
    armor:    abilities.filter(a => a.type === 'armor'),
    active:   abilities.filter(a => a.type === 'active'),
    passive:  abilities.filter(a => a.type === 'passive'),
  };

  let html = '';

  // Resources first (most important at table)
  if (groups.resource.length) {
    html += `<div class="ca-group">`;
    // Deduplicate by name (some abilities appear at multiple levels)
    const seen = new Set();
    groups.resource.forEach(a => {
      if (seen.has(a.name)) return;
      seen.add(a.name);
      const poolId = a.resource || '';
      html += `
        <div class="ca-row ca-resource">
          <span class="ca-badge ca-badge-resource">Pool</span>
          <span class="ca-name">${a.name}</span>
          <span class="ca-desc">${a.description}</span>
          ${poolId ? `<span class="ca-pool-display" id="ca_pool_${poolId}"></span>` : ''}
        </div>`;
    });
    html += `</div>`;
  }

  // Weapon-linked abilities
  if (groups.weapon.length) {
    html += `<div class="ca-group">`;
    const seen = new Set();
    groups.weapon.forEach(a => {
      if (seen.has(a.name)) return;
      seen.add(a.name);
      html += `
        <div class="ca-row ca-weapon">
          <span class="ca-badge ca-badge-weapon">Wpn</span>
          <span class="ca-name">${a.name}</span>
          ${a.weaponLinked ? `<select class="ca-wpn-link" title="Link to weapon slot"><option value="">— slot —</option>${Array.from({length:WEAPON_COUNT},(_,w)=>`<option value="${w}">Slot ${w+1}</option>`).join('')}</select>` : ''}
          <span class="ca-desc">${a.description}</span>
        </div>`;
    });
    html += `</div>`;
  }

  // Armor
  if (groups.armor.length) {
    html += `<div class="ca-group">`;
    const seen = new Set();
    groups.armor.forEach(a => {
      if (seen.has(a.name)) return;
      seen.add(a.name);
      html += `
        <div class="ca-row ca-armor">
          <span class="ca-badge ca-badge-armor">Arm</span>
          <span class="ca-name">${a.name}</span>
          <span class="ca-desc">${a.description}</span>
        </div>`;
    });
    html += `</div>`;
  }

  // Active abilities
  if (groups.active.length) {
    html += `<div class="ca-group">`;
    const seen = new Set();
    groups.active.forEach(a => {
      if (seen.has(a.name)) return;
      seen.add(a.name);
      html += `
        <div class="ca-row ca-active">
          <span class="ca-badge ca-badge-active">Act</span>
          <span class="ca-name">${a.name}</span>
          <span class="ca-desc">${a.description}</span>
        </div>`;
    });
    html += `</div>`;
  }

  // Passive abilities (smaller, less prominent)
  if (groups.passive.length) {
    html += `<div class="ca-group ca-passive-group">`;
    const seen = new Set();
    groups.passive.forEach(a => {
      if (seen.has(a.name)) return;
      seen.add(a.name);
      html += `
        <div class="ca-row ca-passive">
          <span class="ca-badge ca-badge-passive">—</span>
          <span class="ca-name">${a.name}</span>
          <span class="ca-desc">${a.description}</span>
        </div>`;
    });
    html += `</div>`;
  }

  container.innerHTML = featuresHtml + html;

  // Update resource pool displays
  updateResourcePoolDisplays(classKey, level);
}

function updateResourcePoolDisplays(classKey, level) {
  const mods = {
    str: getEffectiveMod('str'), dex: getEffectiveMod('dex'),
    con: getEffectiveMod('con'), int: getEffectiveMod('int'),
    wis: getEffectiveMod('wis'), cha: getEffectiveMod('cha'),
  };
  const pools = getResourcePools(classKey, level, mods);
  pools.forEach(p => {
    const el = document.getElementById(`ca_pool_${p.id}`);
    if (el) el.textContent = `${p.max}/day`;
  });
}

// ── CLASS-SPECIFIC BLOCK (page 3) ─────────────────
function buildClassSpecificBlock(classKey, level) {
  const container = document.getElementById('class-specific-block');
  if (!container) return;

  let html = '';

  if (classKey === 'warpriest') {
    html = buildWarpriestBlock(level);
  } else if (classKey === 'barbarian') {
    html = buildBarbarianBlock(level);
  } else if (classKey === 'paladin') {
    html = buildPaladinBlock(level);
  } else if (['cleric','oracle','druid','ranger','bard','skald','inquisitor'].includes(classKey)) {
    html = buildSpellcasterClassBlock(classKey, level);
  } else {
    // Generic: just a notes area
    html = `<div class="section-box">
      <div class="section-title">Class Notes
        <span class="section-note">${CLASSES[classKey]?.name || classKey}</span>
      </div>
      <textarea id="class_notes" class="big-textarea" placeholder="Class-specific notes, special abilities, custom resources..."></textarea>
    </div>`;
  }

  container.innerHTML = html;
}

function buildWarpriestBlock(level) {
  const mods = { wis: getEffectiveMod('wis') };
  const fervorMax = Math.floor(level/2) + mods.wis;
  const blessingsMax = 3 + Math.floor(level/2);
  const swEnh = level >= 4 ? Math.floor((level-1)/4) : 0;
  const swDmg = level >= 15 ? '2d8' : level >= 10 ? '2d6' : level >= 5 ? '1d10' : '1d8';
  const saEnh = level >= 19 ? 3 : level >= 13 ? 2 : level >= 7 ? 1 : 0;

  return `
    <div class="section-box p2-fullwidth">
      <div class="section-title">Warpriest Class Features
        <span class="section-note">Level ${level} · Fervor ${fervorMax}/day · Blessings ${blessingsMax}/day</span>
      </div>
      <div class="warpriest-grid">

        <div class="wp-block">
          <div class="wp-block-title">Blessings (${blessingsMax}/day)</div>
          <div class="blessing-slot">
            <label class="blessing-sublabel">Blessing 1 <input type="text" id="blessing1_name" class="full-width-input" placeholder="Domain name…"></label>
            <label class="blessing-sublabel">Minor power <textarea id="blessing1_minor" class="blessing-textarea" placeholder="Minor power (level 1+)…"></textarea></label>
            ${level >= 10 ? `<label class="blessing-sublabel">Major power <textarea id="blessing1_major" class="blessing-textarea" placeholder="Major power (level 10+)…"></textarea></label>` : ''}
          </div>
          <div class="blessing-slot" style="margin-top:4px">
            <label class="blessing-sublabel">Blessing 2 <input type="text" id="blessing2_name" class="full-width-input" placeholder="Domain name…"></label>
            <label class="blessing-sublabel">Minor power <textarea id="blessing2_minor" class="blessing-textarea" placeholder="Minor power (level 1+)…"></textarea></label>
            ${level >= 10 ? `<label class="blessing-sublabel">Major power <textarea id="blessing2_major" class="blessing-textarea" placeholder="Major power (level 10+)…"></textarea></label>` : ''}
          </div>
        </div>

        <div class="wp-block">
          <div class="wp-block-title">Sacred Weapon ${swEnh > 0 ? `(+${swEnh} enh · ${swEnh*level} rounds/day)` : '(level 1-3: no enhancement)'}</div>
          <div class="wp-stats-grid">
            <label class="blessing-sublabel">Weapon name<br><input type="text" id="sacred_weapon_name" style="width:100%" placeholder="e.g. Lucerne hammer"></label>
            <label class="blessing-sublabel">Damage die (sacred)<br><input type="text" id="sacred_weapon_dmg" style="width:48px" value="${swDmg}"></label>
            <label class="blessing-sublabel">Enh. bonus<br><input type="number" id="sacred_weapon_enh" class="num small-num" value="${swEnh}"></label>
            <label class="blessing-sublabel">Special props<br><input type="text" id="sacred_weapon_special" style="width:120px" placeholder="flaming, keen…"></label>
            <label class="blessing-sublabel">Enh. rounds/day<br><input type="number" id="sw_rounds_max" class="num" value="${level >= 4 ? level : 0}" readonly></label>
          </div>
          ${saEnh > 0 ? `
          <div class="wp-block-title" style="margin-top:6px">Sacred Armor (+${saEnh} enh · ${level} min/day)</div>
          <div class="wp-stats-grid">
            <label class="blessing-sublabel">Armor name<br><input type="text" id="sacred_armor_name" style="width:100%" placeholder="e.g. Chainmail"></label>
            <label class="blessing-sublabel">Enh. bonus<br><input type="number" id="sacred_armor_enh" class="num small-num" value="${saEnh}"></label>
            <label class="blessing-sublabel">Special props<br><input type="text" id="sacred_armor_special" style="width:120px" placeholder="fortification…"></label>
            <label class="blessing-sublabel">Enh. min/day<br><input type="number" id="sa_minutes_max" class="num" value="${level}" readonly></label>
          </div>` : ''}
          <div class="wp-block-title" style="margin-top:6px">Fervor (${fervorMax}/day)</div>
          <p class="helper-text" style="margin:0">Heal 1d6+1d6/3lvls · Swift on self · Or: cast prepared spell on self as swift action${level >= 4 ? ' · Channel Energy (2 Fervor)' : ''}</p>
        </div>

        <div class="wp-block">
          <div class="wp-block-title">Weapon Focus</div>
          <label class="blessing-sublabel">Chosen weapon (bonus feat)<br><input type="text" id="weapon_focus" style="width:100%" placeholder="e.g. Lucerne hammer"></label>
          <p class="helper-text">+1 attack with this weapon. Required for Weapon Specialization.</p>
          <div class="wp-block-title" style="margin-top:6px">Aura &amp; Spontaneous Casting</div>
          <p class="helper-text">Aura: ${level >= 1 ? 'Active — matches deity alignment' : '—'}<br>Spontaneous: sacrifice spell → cure/inflict wounds of same level or lower.</p>
        </div>

      </div>
    </div>`;
}

function buildBarbarianBlock(level) {
  return `
    <div class="section-box p2-fullwidth">
      <div class="section-title">Barbarian Class Features
        <span class="section-note">Level ${level}</span>
      </div>
      <div class="blessings-grid">
        <div class="blessing-slot">
          <div class="wp-block-title">Rage Powers</div>
          ${Array.from({length: Math.floor(level/2)}, (_,i) =>
            `<label class="blessing-sublabel">Power ${i+1}<br><input type="text" id="rage_power_${i}" style="width:100%" placeholder="e.g. Animal Fury, Knockdown…"></label>`
          ).join('')}
        </div>
        <div class="blessing-slot">
          <div class="wp-block-title">Rage Stats</div>
          <p class="helper-text">While raging: +4 STR, +4 CON, +2 Will, –2 AC. Fatigued after.${level >= 11 ? '<br>Greater Rage: +6 STR/CON, +3 Will.' : ''}</p>
          <label class="blessing-sublabel">Damage Reduction<br><input type="text" id="barbarian_dr" style="width:80px" value="${level >= 7 ? `DR ${Math.min(5,Math.floor((level-4)/3))}/—` : '—'}"></label>
        </div>
        <div class="blessing-slot">
          <div class="wp-block-title">Notes</div>
          <textarea id="class_notes" class="blessing-textarea" style="min-height:80px" placeholder="Favored enemy, rage notes..."></textarea>
        </div>
      </div>
    </div>`;
}

function buildPaladinBlock(level) {
  return `
    <div class="section-box p2-fullwidth">
      <div class="section-title">Paladin Class Features
        <span class="section-note">Level ${level}</span>
      </div>
      <div class="blessings-grid">
        <div class="blessing-slot">
          <div class="wp-block-title">Mercies</div>
          ${Array.from({length: Math.floor(level/3)}, (_,i) =>
            `<label class="blessing-sublabel">Mercy ${i+1}<br><input type="text" id="mercy_${i}" style="width:100%" placeholder="e.g. Fatigued, Shaken…"></label>`
          ).join('')}
        </div>
        <div class="blessing-slot">
          <div class="wp-block-title">Divine Bond</div>
          <label class="blessing-sublabel">Type (weapon/mount)<br><input type="text" id="divine_bond_type" style="width:100%" placeholder="Holy weapon / Mount"></label>
          <label class="blessing-sublabel">Enhancement<br><input type="text" id="divine_bond_enh" style="width:100%" placeholder="+1 flaming…"></label>
        </div>
        <div class="blessing-slot">
          <div class="wp-block-title">Notes</div>
          <textarea id="class_notes" class="blessing-textarea" style="min-height:80px" placeholder="Code of conduct, oaths..."></textarea>
        </div>
      </div>
    </div>`;
}

function buildSpellcasterClassBlock(classKey, level) {
  const name = CLASSES[classKey]?.name || classKey;
  return `
    <div class="section-box p2-fullwidth">
      <div class="section-title">${name} Class Features
        <span class="section-note">Level ${level} · See Page 4 for full spell list</span>
      </div>
      <div class="blessings-grid">
        <div class="blessing-slot">
          <div class="wp-block-title">Domain / School / Bond</div>
          <input type="text" id="domain_school" style="width:100%" placeholder="e.g. Abjuration, Fire domain…">
          <textarea id="class_notes" class="blessing-textarea" style="margin-top:4px" placeholder="Domain powers, school powers, arcane bond…"></textarea>
        </div>
        <div class="blessing-slot">
          <div class="wp-block-title">Special Abilities</div>
          <textarea id="class_notes2" class="blessing-textarea" placeholder="Class-specific features…"></textarea>
        </div>
      </div>
    </div>`;
}

// ── PAGE 4: SPELLS / EXTRACTS ──────────────────────
const SPELLCASTER_CLASSES  = ['warpriest','cleric','druid','oracle','wizard','sorcerer','witch','shaman','inquisitor','bard','skald','ranger','paladin','magus'];
const EXTRACT_CLASSES      = ['alchemist'];
const NON_CASTER_CLASSES   = ['fighter','barbarian','rogue','monk','gunslinger','swashbuckler'];

function buildPage4Spells(classKey, level) {
  const page = document.getElementById('page4-spells');
  const content = document.getElementById('page4-spells-content');
  const subtitle = document.getElementById('p4-spells-subtitle');
  if (!page || !content) return;

  if (NON_CASTER_CLASSES.includes(classKey)) {
    // Hide page 4 — non-casters don't need it
    page.style.display = 'none';
    return;
  }

  page.style.display = '';

  if (EXTRACT_CLASSES.includes(classKey)) {
    if (subtitle) subtitle.textContent = 'Extracts & Bombs — Page 4';
    content.innerHTML = buildExtractsPage(level);
    return;
  }

  // Spellcaster
  if (subtitle) subtitle.textContent = `${CLASSES[classKey]?.name || classKey} Spells — Page 4`;
  content.innerHTML = buildSpellsPage(classKey, level);
}

function buildSpellsPage(classKey, level) {
  const maxSpellLevel = classKey === 'warpriest' ? 6
    : classKey === 'ranger' || classKey === 'paladin' ? 4
    : classKey === 'bard' || classKey === 'skald' ? 6
    : 9;

  const mods = { wis: getEffectiveMod('wis'), int: getEffectiveMod('int'), cha: getEffectiveMod('cha') };
  const cls = CLASSES[classKey];
  const abilKey = cls?.spellAbility || 'wis';
  const abilMod = mods[abilKey] || 0;

  let html = `<div class="spells-page-grid">`;

  for (let lvl = 0; lvl <= maxSpellLevel; lvl++) {
    const dc = lvl === 0 ? '—' : 10 + lvl + abilMod;
    const dots = lvl === 0 ? 8 : 6;
    const dotHtml = Array.from({length: dots}, (_,d) =>
      `<span class="spell-slot-dot" onclick="this.classList.toggle('used')" title="Slot ${d+1}"></span>`
    ).join('');

    html += `
      <div class="spell-level-block">
        <div class="spell-level-header">
          <span class="spell-level-label">Level ${lvl === 0 ? '0' : lvl}</span>
          <label>DC <input type="number" id="spl_dc_${lvl}" class="num small-num" value="${dc}" ${lvl===0?'readonly':''}></label>
          <label>Per day <input type="number" id="spl_perday_${lvl}" class="num small-num"></label>
          ${lvl > 0 ? `<label>Bonus <input type="number" id="spl_bonus_${lvl}" class="num small-num"></label>` : ''}
          <div class="spell-slot-dots">${dotHtml}</div>
        </div>
        <div class="spell-names-grid" id="spl_names_${lvl}">
          ${Array.from({length:12}, (_,i) =>
            `<input type="text" id="spl_name_${lvl}_${i}" placeholder="Spell name…">`
          ).join('')}
        </div>
      </div>`;
  }

  html += `<div class="spell-level-block">
    <div class="spell-level-header"><span class="spell-level-label">Conditional Modifiers</span></div>
    <textarea id="spell_conditional" class="small-textarea" style="width:100%"></textarea>
  </div>`;

  html += `</div>`;
  return html;
}

function buildExtractsPage(level) {
  const intMod = getEffectiveMod('int');
  const bomdsPerDay = level + intMod;

  let html = `<div class="spells-page-grid">
    <div class="spell-level-block" style="grid-column:1/-1">
      <div class="spell-level-header">
        <span class="spell-level-label">Bombs</span>
        <span style="font-family:var(--font-mono);font-size:9px;color:var(--border)">
          ${bomdsPerDay}/day · ${level}d6+${intMod} fire · Splash 1 · Range 20 ft
        </span>
        <div class="spell-slot-dots">
          ${Array.from({length: Math.min(bomdsPerDay, 20)}, (_,d) =>
            `<span class="spell-slot-dot" onclick="this.classList.toggle('used')"></span>`
          ).join('')}
        </div>
      </div>
    </div>`;

  for (let lvl = 1; lvl <= 6; lvl++) {
    const dc = 10 + lvl + intMod;
    html += `
      <div class="spell-level-block">
        <div class="spell-level-header">
          <span class="spell-level-label">Extract ${lvl}</span>
          <label>DC <input type="number" class="num small-num" value="${dc}" readonly></label>
          <label>Per day <input type="number" id="spl_perday_${lvl}" class="num small-num"></label>
          <label>INT bonus <input type="number" id="spl_bonus_${lvl}" class="num small-num" value="${intMod > 0 ? intMod : 0}"></label>
          <div class="spell-slot-dots">
            ${Array.from({length:6}, (_,d) =>
              `<span class="spell-slot-dot" onclick="this.classList.toggle('used')"></span>`
            ).join('')}
          </div>
        </div>
        <div class="spell-names-grid" id="spl_names_${lvl}">
          ${Array.from({length:10}, (_,i) =>
            `<input type="text" id="spl_name_${lvl}_${i}" placeholder="Extract name…">`
          ).join('')}
        </div>
      </div>`;
  }

  html += `<div class="spell-level-block">
    <div class="spell-level-header"><span class="spell-level-label">Formulae Book</span></div>
    <textarea id="formulae_book" class="big-textarea" style="width:100%" placeholder="Known formulae by level…"></textarea>
  </div></div>`;
  return html;
}

// ── Wire into applySetup ───────────────────────────
// Called from applySetup in the existing code
function afterApplySetup(classKey, level) {
  buildAdaptivePage2(classKey, level);
}

// ── Save/load feat data ────────────────────────────
function collectFeatData() {
  const feats = [];
  for (let i = 0; i < 30; i++) {
    const name = val(`feat_name_${i}`);
    const desc = val(`feat_desc_${i}`);
    const type = val(`feat_type_${i}`);
    const wpn  = val(`feat_wpn_${i}`);
    if (name || desc) feats.push({ name, desc, type, wpn });
  }
  return feats;
}

function restoreFeatData(feats) {
  if (!feats) return;
  feats.forEach((f, i) => {
    set(`feat_name_${i}`, f.name || '');
    set(`feat_desc_${i}`, f.desc || '');
    set(`feat_type_${i}`, f.type || '');
    set(`feat_wpn_${i}`,  f.wpn  || '');
    onFeatTypeChange(i);
  });
}

/* ══════════════════════════════════════════════════
   MAGIC ITEMS / WANDS / CHARGES
   ══════════════════════════════════════════════════ */
const MAGIC_ITEM_COUNT = 8;

function buildMagicItems() {
  const container = document.getElementById('magic-items-container');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < MAGIC_ITEM_COUNT; i++) {
    const row = document.createElement('div');
    row.className = 'magic-item-row';
    row.innerHTML = `
      <input type="text" id="mi_name_${i}" class="mi-name-input" placeholder="e.g. Wand of Cure Moderate Wounds">
      <div class="mi-charges-wrap">
        <input type="number" id="mi_charges_max_${i}" class="num small-num" placeholder="50" oninput="updateMagicItemDots(${i})" min="0" max="50">
        <span class="mi-label">max</span>
        <input type="number" id="mi_charges_used_${i}" class="num small-num" placeholder="0" oninput="updateMagicItemDots(${i})" min="0">
        <span class="mi-label">used</span>
        <span id="mi_dots_${i}" class="mi-dots"></span>
        <span id="mi_remaining_${i}" class="mi-remaining"></span>
      </div>
    `;
    container.appendChild(row);
  }
}

function updateMagicItemDots(i) {
  const max  = parseInt(val(`mi_charges_max_${i}`))  || 0;
  const used = parseInt(val(`mi_charges_used_${i}`)) || 0;
  const remaining = Math.max(0, max - used);

  const remainEl = document.getElementById(`mi_remaining_${i}`);
  if (remainEl) remainEl.textContent = max > 0 ? `${remaining}/${max}` : '';

  // Dot display — show up to 20 dots, scaled
  const dotsEl = document.getElementById(`mi_dots_${i}`);
  if (!dotsEl || max === 0) { if (dotsEl) dotsEl.innerHTML = ''; return; }
  const show = Math.min(max, 20);
  const usedDots = Math.round((used / max) * show);
  let html = '';
  for (let d = 0; d < show; d++) {
    html += `<span class="mi-dot ${d < (show - usedDots) ? 'mi-dot-full' : 'mi-dot-used'}"
             onclick="useMagicItemCharge(${i})" title="Click to use charge"></span>`;
  }
  dotsEl.innerHTML = html;
}

function useMagicItemCharge(i) {
  const max  = parseInt(val(`mi_charges_max_${i}`))  || 0;
  const used = parseInt(val(`mi_charges_used_${i}`)) || 0;
  if (used < max) {
    set(`mi_charges_used_${i}`, used + 1);
    updateMagicItemDots(i);
  }
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  buildMagicItems();
});

// Extend collectData
const _collectData_v3 = collectData;
collectData = function() {
  const data = _collectData_v3();
  data.magicItems = [];
  for (let i = 0; i < MAGIC_ITEM_COUNT; i++) {
    data.magicItems.push({
      name:       val(`mi_name_${i}`),
      chargesMax: val(`mi_charges_max_${i}`),
      chargesUsed:val(`mi_charges_used_${i}`),
    });
  }
  return data;
};

// Extend populateData
const _populateData_v3 = populateData;
populateData = function(data) {
  _populateData_v3(data);
  if (data.magicItems) {
    data.magicItems.forEach((m, i) => {
      set(`mi_name_${i}`,         m.name        || '');
      set(`mi_charges_max_${i}`,  m.chargesMax  || '');
      set(`mi_charges_used_${i}`, m.chargesUsed || '');
      updateMagicItemDots(i);
    });
  }
};
