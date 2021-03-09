// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Cyrillic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x001D2B,
    0x001D78
  ],
  ranges: [
    [0x000400, 0x000484],
    [0x000487, 0x00052F],
    [0x001C80, 0x001C88],
    [0x002DE0, 0x002DFF],
    [0x00A640, 0x00A69F],
    [0x00FE2E, 0x00FE2F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Cyrillic}+$/u,
  matchSymbols,
  "\\p{Script=Cyrillic}"
);
testPropertyEscapes(
  /^\p{Script=Cyrl}+$/u,
  matchSymbols,
  "\\p{Script=Cyrl}"
);
testPropertyEscapes(
  /^\p{sc=Cyrillic}+$/u,
  matchSymbols,
  "\\p{sc=Cyrillic}"
);
testPropertyEscapes(
  /^\p{sc=Cyrl}+$/u,
  matchSymbols,
  "\\p{sc=Cyrl}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0003FF],
    [0x000485, 0x000486],
    [0x000530, 0x001C7F],
    [0x001C89, 0x001D2A],
    [0x001D2C, 0x001D77],
    [0x001D79, 0x002DDF],
    [0x002E00, 0x00A63F],
    [0x00A6A0, 0x00DBFF],
    [0x00E000, 0x00FE2D],
    [0x00FE30, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Cyrillic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cyrillic}"
);
testPropertyEscapes(
  /^\P{Script=Cyrl}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cyrl}"
);
testPropertyEscapes(
  /^\P{sc=Cyrillic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cyrillic}"
);
testPropertyEscapes(
  /^\P{sc=Cyrl}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cyrl}"
);
