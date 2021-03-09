// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Pattern_Syntax`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000060,
    0x0000A9,
    0x0000AE,
    0x0000B6,
    0x0000BB,
    0x0000BF,
    0x0000D7,
    0x0000F7,
    0x003030
  ],
  ranges: [
    [0x000021, 0x00002F],
    [0x00003A, 0x000040],
    [0x00005B, 0x00005E],
    [0x00007B, 0x00007E],
    [0x0000A1, 0x0000A7],
    [0x0000AB, 0x0000AC],
    [0x0000B0, 0x0000B1],
    [0x002010, 0x002027],
    [0x002030, 0x00203E],
    [0x002041, 0x002053],
    [0x002055, 0x00205E],
    [0x002190, 0x00245F],
    [0x002500, 0x002775],
    [0x002794, 0x002BFF],
    [0x002E00, 0x002E7F],
    [0x003001, 0x003003],
    [0x003008, 0x003020],
    [0x00FD3E, 0x00FD3F],
    [0x00FE45, 0x00FE46]
  ]
});
testPropertyEscapes(
  /^\p{Pattern_Syntax}+$/u,
  matchSymbols,
  "\\p{Pattern_Syntax}"
);
testPropertyEscapes(
  /^\p{Pat_Syn}+$/u,
  matchSymbols,
  "\\p{Pat_Syn}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00005F,
    0x0000A8,
    0x0000AA,
    0x0000AD,
    0x0000AF,
    0x002054
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000020],
    [0x000030, 0x000039],
    [0x000041, 0x00005A],
    [0x000061, 0x00007A],
    [0x00007F, 0x0000A0],
    [0x0000B2, 0x0000B5],
    [0x0000B7, 0x0000BA],
    [0x0000BC, 0x0000BE],
    [0x0000C0, 0x0000D6],
    [0x0000D8, 0x0000F6],
    [0x0000F8, 0x00200F],
    [0x002028, 0x00202F],
    [0x00203F, 0x002040],
    [0x00205F, 0x00218F],
    [0x002460, 0x0024FF],
    [0x002776, 0x002793],
    [0x002C00, 0x002DFF],
    [0x002E80, 0x003000],
    [0x003004, 0x003007],
    [0x003021, 0x00302F],
    [0x003031, 0x00DBFF],
    [0x00E000, 0x00FD3D],
    [0x00FD40, 0x00FE44],
    [0x00FE47, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Pattern_Syntax}+$/u,
  nonMatchSymbols,
  "\\P{Pattern_Syntax}"
);
testPropertyEscapes(
  /^\P{Pat_Syn}+$/u,
  nonMatchSymbols,
  "\\P{Pat_Syn}"
);
