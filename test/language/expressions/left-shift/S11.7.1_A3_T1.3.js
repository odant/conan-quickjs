// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x << y returns ToNumber(x) << ToNumber(y)
es5id: 11.7.1_A3_T1.3
description: Type(x) and Type(y) vary between primitive string and String object
---*/

//CHECK#1
if ("1" << "1" !== 2) {
  $ERROR('#1: "1" << "1" === 2. Actual: ' + ("1" << "1"));
}

//CHECK#2
if (new String("1") << "1" !== 2) {
  $ERROR('#2: new String("1") << "1" === 2. Actual: ' + (new String("1") << "1"));
}

//CHECK#3
if ("1" << new String("1") !== 2) {
  $ERROR('#3: "1" << new String("1") === 2. Actual: ' + ("1" << new String("1")));
}

//CHECK#4
if (new String("1") << new String("1") !== 2) {
  $ERROR('#4: new String("1") << new String("1") === 2. Actual: ' + (new String("1") << new String("1")));
}

//CHECK#5
if ("x" << "1" !== 0) {
  $ERROR('#5: "x" << "1" === 0. Actual: ' + ("x" << "1"));
}

//CHECK#6
if ("1" << "x" !== 1) {
  $ERROR('#6: "1" << "x" === 1. Actual: ' + ("1" << "x"));
}
