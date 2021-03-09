// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Runic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0016A0, 0x0016EA],
    [0x0016EE, 0x0016F8]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Runic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Runic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Runr}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Runr}"
);
testPropertyEscapes(
  /^\p{scx=Runic}+$/u,
  matchSymbols,
  "\\p{scx=Runic}"
);
testPropertyEscapes(
  /^\p{scx=Runr}+$/u,
  matchSymbols,
  "\\p{scx=Runr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00169F],
    [0x0016EB, 0x0016ED],
    [0x0016F9, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Runic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Runic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Runr}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Runr}"
);
testPropertyEscapes(
  /^\P{scx=Runic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Runic}"
);
testPropertyEscapes(
  /^\P{scx=Runr}+$/u,
  nonMatchSymbols,
  "\\P{scx=Runr}"
);
