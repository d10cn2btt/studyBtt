"use strict";
const school = require('./module_es6_event');

const LQD = new school('LQD');
const PTIT = new school('PTIT');
const UET = new school('UET');

LQD.fireEvent('Ha Dong, Ha Noi');
PTIT.fireEvent('Ao sen, Ha Dong');
UET.fireEvent('Cau giay, Ha Noi');