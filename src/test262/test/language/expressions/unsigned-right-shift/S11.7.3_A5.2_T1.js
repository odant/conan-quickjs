// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x >>> y uses ToUint32(AdditiveExpression) & 31
es5id: 11.7.3_A5.2_T1
description: Checking distinct points
---*/

//CHECK#1
if (4294967295 >>> -32.1 !== 4294967295) { 
  $ERROR('#1: 4294967295 >>> -32.1 === 4294967295. Actual: ' + (4294967295 >>> -32.1)); 
} 

//CHECK#2
if (4294967295 >>> -31.1 !== 2147483647) { 
  $ERROR('#2: 4294967295 >>> -31.1 === 2147483647. Actual: ' + (4294967295 >>> -31.1)); 
} 

//CHECK#3
if (4294967295 >>> -30.1 !== 1073741823) { 
  $ERROR('#3: 4294967295 >>> -30.1 === 1073741823. Actual: ' + (4294967295 >>> -30.1)); 
} 

//CHECK#4
if (4294967295 >>> -29.1 !== 536870911) { 
  $ERROR('#4: 4294967295 >>> -29.1 === 536870911. Actual: ' + (4294967295 >>> -29.1)); 
} 

//CHECK#5
if (4294967295 >>> -28.1 !== 268435455) { 
  $ERROR('#5: 4294967295 >>> -28.1 === 268435455. Actual: ' + (4294967295 >>> -28.1)); 
} 

//CHECK#6
if (4294967295 >>> -27.1 !== 134217727) { 
  $ERROR('#6: 4294967295 >>> -27.1 === 134217727. Actual: ' + (4294967295 >>> -27.1)); 
} 

//CHECK#7
if (4294967295 >>> -26.1 !== 67108863) { 
  $ERROR('#7: 4294967295 >>> -26.1 === 67108863. Actual: ' + (4294967295 >>> -26.1)); 
} 

//CHECK#8
if (4294967295 >>> -25.1 !== 33554431) { 
  $ERROR('#8: 4294967295 >>> -25.1 === 33554431. Actual: ' + (4294967295 >>> -25.1)); 
} 

//CHECK#9
if (4294967295 >>> -24.1 !== 16777215) { 
  $ERROR('#9: 4294967295 >>> -24.1 === 16777215. Actual: ' + (4294967295 >>> -24.1)); 
} 

//CHECK#10
if (4294967295 >>> -23.1 !== 8388607) { 
  $ERROR('#10: 4294967295 >>> -23.1 === 8388607. Actual: ' + (4294967295 >>> -23.1)); 
} 

//CHECK#11
if (4294967295 >>> -22.1 !== 4194303) { 
  $ERROR('#11: 4294967295 >>> -22.1 === 4194303. Actual: ' + (4294967295 >>> -22.1)); 
} 

//CHECK#12
if (4294967295 >>> -21.1 !== 2097151) { 
  $ERROR('#12: 4294967295 >>> -21.1 === 2097151. Actual: ' + (4294967295 >>> -21.1)); 
} 

//CHECK#13
if (4294967295 >>> -20.1 !== 1048575) { 
  $ERROR('#13: 4294967295 >>> -20.1 === 1048575. Actual: ' + (4294967295 >>> -20.1)); 
} 

//CHECK#14
if (4294967295 >>> -19.1 !== 524287) { 
  $ERROR('#14: 4294967295 >>> -19.1 === 524287. Actual: ' + (4294967295 >>> -19.1)); 
} 

//CHECK#15
if (4294967295 >>> -18.1 !== 262143) { 
  $ERROR('#15: 4294967295 >>> -18.1 === 262143. Actual: ' + (4294967295 >>> -18.1)); 
} 

//CHECK#16
if (4294967295 >>> -17.1 !== 131071) { 
  $ERROR('#16: 4294967295 >>> -17.1 === 131071. Actual: ' + (4294967295 >>> -17.1)); 
} 

//CHECK#17
if (4294967295 >>> -16.1 !== 65535) { 
  $ERROR('#17: 4294967295 >>> -16.1 === 65535. Actual: ' + (4294967295 >>> -16.1)); 
} 

//CHECK#18
if (4294967295 >>> -15.1 !== 32767) { 
  $ERROR('#18: 4294967295 >>> -15.1 === 32767. Actual: ' + (4294967295 >>> -15.1)); 
} 

//CHECK#19
if (4294967295 >>> -14.1 !== 16383) { 
  $ERROR('#19: 4294967295 >>> -14.1 === 16383. Actual: ' + (4294967295 >>> -14.1)); 
} 

//CHECK#20
if (4294967295 >>> -13.1 !== 8191) { 
  $ERROR('#20: 4294967295 >>> -13.1 === 8191. Actual: ' + (4294967295 >>> -13.1)); 
} 

//CHECK#21
if (4294967295 >>> -12.1 !== 4095) { 
  $ERROR('#21: 4294967295 >>> -12.1 === 4095. Actual: ' + (4294967295 >>> -12.1)); 
} 

//CHECK#22
if (4294967295 >>> -11.1 !== 2047) { 
  $ERROR('#22: 4294967295 >>> -11.1 === 2047. Actual: ' + (4294967295 >>> -11.1)); 
} 

//CHECK#23
if (4294967295 >>> -10.1 !== 1023) { 
  $ERROR('#23: 4294967295 >>> -10.1 === 1023. Actual: ' + (4294967295 >>> -10.1)); 
} 

//CHECK#24
if (4294967295 >>> -9.1 !== 511) { 
  $ERROR('#24: 4294967295 >>> -9.1 === 511. Actual: ' + (4294967295 >>> -9.1)); 
} 

//CHECK#25
if (4294967295 >>> -8.1 !== 255) { 
  $ERROR('#25: 4294967295 >>> -8.1 === 255. Actual: ' + (4294967295 >>> -8.1)); 
} 

//CHECK#26
if (4294967295 >>> -7.1 !== 127) { 
  $ERROR('#26: 4294967295 >>> -7.1 === 127. Actual: ' + (4294967295 >>> -7.1)); 
} 

//CHECK#27
if (4294967295 >>> -6.1 !== 63) { 
  $ERROR('#27: 4294967295 >>> -6.1 === 63. Actual: ' + (4294967295 >>> -6.1)); 
} 

//CHECK#28
if (4294967295 >>> -5.1 !== 31) { 
  $ERROR('#28: 4294967295 >>> -5.1 === 31. Actual: ' + (4294967295 >>> -5.1)); 
} 

//CHECK#29
if (4294967295 >>> -4.1 !== 15) { 
  $ERROR('#29: 4294967295 >>> -4.1 === 15. Actual: ' + (4294967295 >>> -4.1)); 
} 

//CHECK#30
if (4294967295 >>> -3.1 !== 7) { 
  $ERROR('#30: 4294967295 >>> -3.1 === 7. Actual: ' + (4294967295 >>> -3.1)); 
} 

//CHECK#31
if (4294967295 >>> -2.1 !== 3) { 
  $ERROR('#31: 4294967295 >>> -2.1 === 3. Actual: ' + (4294967295 >>> -2.1)); 
} 

//CHECK#32
if (4294967295 >>> -1.1 !== 1) { 
  $ERROR('#32: 4294967295 >>> -1.1 === 1. Actual: ' + (4294967295 >>> -1.1)); 
} 

//CHECK#33
if (4294967295 >>> 32.1 !== 4294967295) { 
  $ERROR('#33: 4294967295 >>> 32.1 === 4294967295. Actual: ' + (4294967295 >>> 32.1)); 
} 

//CHECK#34
if (4294967295 >>> 33.1 !== 2147483647) { 
  $ERROR('#34: 4294967295 >>> 33.1 === 2147483647. Actual: ' + (4294967295 >>> 33.1)); 
} 

//CHECK#35
if (4294967295 >>> 34.1 !== 1073741823) { 
  $ERROR('#35: 4294967295 >>> 34.1 === 1073741823. Actual: ' + (4294967295 >>> 34.1)); 
} 

//CHECK#36
if (4294967295 >>> 35.1 !== 536870911) { 
  $ERROR('#36: 4294967295 >>> 35.1 === 536870911. Actual: ' + (4294967295 >>> 35.1)); 
} 

//CHECK#37
if (4294967295 >>> 36.1 !== 268435455) { 
  $ERROR('#37: 4294967295 >>> 36.1 === 268435455. Actual: ' + (4294967295 >>> 36.1)); 
} 

//CHECK#38
if (4294967295 >>> 37.1 !== 134217727) { 
  $ERROR('#38: 4294967295 >>> 37.1 === 134217727. Actual: ' + (4294967295 >>> 37.1)); 
} 

//CHECK#39
if (4294967295 >>> 38.1 !== 67108863) { 
  $ERROR('#39: 4294967295 >>> 38.1 === 67108863. Actual: ' + (4294967295 >>> 38.1)); 
} 

//CHECK#40
if (4294967295 >>> 39.1 !== 33554431) { 
  $ERROR('#40: 4294967295 >>> 39.1 === 33554431. Actual: ' + (4294967295 >>> 39.1)); 
} 

//CHECK#41
if (4294967295 >>> 40.1 !== 16777215) { 
  $ERROR('#41: 4294967295 >>> 40.1 === 16777215. Actual: ' + (4294967295 >>> 40.1)); 
} 

//CHECK#42
if (4294967295 >>> 41.1 !== 8388607) { 
  $ERROR('#42: 4294967295 >>> 41.1 === 8388607. Actual: ' + (4294967295 >>> 41.1)); 
} 

//CHECK#43
if (4294967295 >>> 42.1 !== 4194303) { 
  $ERROR('#43: 4294967295 >>> 42.1 === 4194303. Actual: ' + (4294967295 >>> 42.1)); 
} 

//CHECK#44
if (4294967295 >>> 43.1 !== 2097151) { 
  $ERROR('#44: 4294967295 >>> 43.1 === 2097151. Actual: ' + (4294967295 >>> 43.1)); 
} 

//CHECK#45
if (4294967295 >>> 44.1 !== 1048575) { 
  $ERROR('#45: 4294967295 >>> 44.1 === 1048575. Actual: ' + (4294967295 >>> 44.1)); 
} 

//CHECK#46
if (4294967295 >>> 45.1 !== 524287) { 
  $ERROR('#46: 4294967295 >>> 45.1 === 524287. Actual: ' + (4294967295 >>> 45.1)); 
} 

//CHECK#47
if (4294967295 >>> 46.1 !== 262143) { 
  $ERROR('#47: 4294967295 >>> 46.1 === 262143. Actual: ' + (4294967295 >>> 46.1)); 
} 

//CHECK#48
if (4294967295 >>> 47.1 !== 131071) { 
  $ERROR('#48: 4294967295 >>> 47.1 === 131071. Actual: ' + (4294967295 >>> 47.1)); 
} 

//CHECK#49
if (4294967295 >>> 48.1 !== 65535) { 
  $ERROR('#49: 4294967295 >>> 48.1 === 65535. Actual: ' + (4294967295 >>> 48.1)); 
} 

//CHECK#50
if (4294967295 >>> 49.1 !== 32767) { 
  $ERROR('#50: 4294967295 >>> 49.1 === 32767. Actual: ' + (4294967295 >>> 49.1)); 
} 

//CHECK#51
if (4294967295 >>> 50.1 !== 16383) { 
  $ERROR('#51: 4294967295 >>> 50.1 === 16383. Actual: ' + (4294967295 >>> 50.1)); 
} 

//CHECK#52
if (4294967295 >>> 51.1 !== 8191) { 
  $ERROR('#52: 4294967295 >>> 51.1 === 8191. Actual: ' + (4294967295 >>> 51.1)); 
} 

//CHECK#53
if (4294967295 >>> 52.1 !== 4095) { 
  $ERROR('#53: 4294967295 >>> 52.1 === 4095. Actual: ' + (4294967295 >>> 52.1)); 
} 

//CHECK#54
if (4294967295 >>> 53.1 !== 2047) { 
  $ERROR('#54: 4294967295 >>> 53.1 === 2047. Actual: ' + (4294967295 >>> 53.1)); 
} 

//CHECK#55
if (4294967295 >>> 54.1 !== 1023) { 
  $ERROR('#55: 4294967295 >>> 54.1 === 1023. Actual: ' + (4294967295 >>> 54.1)); 
} 

//CHECK#56
if (4294967295 >>> 55.1 !== 511) { 
  $ERROR('#56: 4294967295 >>> 55.1 === 511. Actual: ' + (4294967295 >>> 55.1)); 
} 

//CHECK#57
if (4294967295 >>> 56.1 !== 255) { 
  $ERROR('#57: 4294967295 >>> 56.1 === 255. Actual: ' + (4294967295 >>> 56.1)); 
} 

//CHECK#58
if (4294967295 >>> 57.1 !== 127) { 
  $ERROR('#58: 4294967295 >>> 57.1 === 127. Actual: ' + (4294967295 >>> 57.1)); 
} 

//CHECK#59
if (4294967295 >>> 58.1 !== 63) { 
  $ERROR('#59: 4294967295 >>> 58.1 === 63. Actual: ' + (4294967295 >>> 58.1)); 
} 

//CHECK#60
if (4294967295 >>> 59.1 !== 31) { 
  $ERROR('#60: 4294967295 >>> 59.1 === 31. Actual: ' + (4294967295 >>> 59.1)); 
} 

//CHECK#61
if (4294967295 >>> 60.1 !== 15) { 
  $ERROR('#61: 4294967295 >>> 60.1 === 15. Actual: ' + (4294967295 >>> 60.1)); 
} 

//CHECK#62
if (4294967295 >>> 61.1 !== 7) { 
  $ERROR('#62: 4294967295 >>> 61.1 === 7. Actual: ' + (4294967295 >>> 61.1)); 
} 

//CHECK#63
if (4294967295 >>> 62.1 !== 3) { 
  $ERROR('#63: 4294967295 >>> 62.1 === 3. Actual: ' + (4294967295 >>> 62.1)); 
} 

//CHECK#64
if (4294967295 >>> 63.1 !== 1) { 
  $ERROR('#64: 4294967295 >>> 63.1 === 1. Actual: ' + (4294967295 >>> 63.1)); 
}
