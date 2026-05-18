/* Pathfinder 1e Sheet — Game Tables (BAB, Save, XP, Carry)
   Source: aonprd.com */
'use strict';

const SHEET_VERSION = '3.0.0';
const SHEET_DATE    = '2026-05-17';

// ── BAB PROGRESSIONS (per level 1-20) ─────────────
// full = +1/level, medium = +¾/level, slow = +½/level
const BAB_TABLE = {
  full:   [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  medium: [0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15],
  slow:   [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10],
};

// ── SAVE PROGRESSIONS (per level 1-20) ────────────
// good = 2+½/level, poor = ⅓/level
const SAVE_TABLE = {
  good: [2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12],
  poor: [0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6],
};

// ── XP TABLE (medium progression) ─────────────────
const XP_TABLE = {
  medium: [0,2000,5000,9000,15000,23000,35000,51000,75000,105000,
           155000,220000,315000,445000,635000,890000,1300000,1800000,2550000,3600000],
};

// ══════════════════════════════════════════════════
// CLASSES
// Source: aonprd.com — CRB, ACG, APG, etc.
// ══════════════════════════════════════════════════
