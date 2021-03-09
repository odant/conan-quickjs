// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.utc
description: Order of input coercion
info: |
  1. Let y be ? ToNumber(year).
  2. Let m be ? ToNumber(month).
  3. If date is supplied, let dt be ? ToNumber(date); else let dt be 1.
  4. If hours is supplied, let h be ? ToNumber(hours); else let h be 0.
  5. If minutes is supplied, let min be ? ToNumber(minutes); else let min be 0.
  6. If seconds is supplied, let s be ? ToNumber(seconds); else let s be 0.
  7. If ms is supplied, let milli be ? ToNumber(ms); else let milli be 0.
  8. If y is not NaN and 0 ≤ ToInteger(y) ≤ 99, let yr be 1900+ToInteger(y);
     otherwise, let yr be y.
  9. Return TimeClip(MakeDate(MakeDay(yr, m, dt), MakeTime(h, min, s, milli))). 
---*/

var log = '';
var year = { toString: function() { log += 'year'; return 0; } };
var month = { toString: function() { log += 'month'; return 0; } };
var date = { toString: function() { log += 'date'; return 1; } };
var hours = { toString: function() { log += 'hours'; return 0; } };
var minutes = { toString: function() { log += 'minutes'; return 0; } };
var seconds = { toString: function() { log += 'seconds'; return 0; } };
var ms = { toString: function() { log += 'ms'; return 0; } };

Date.UTC(year, month, date, hours,minutes, seconds, ms);

assert.sameValue(log, 'yearmonthdatehoursminutessecondsms');
