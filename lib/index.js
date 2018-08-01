'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('@nuware/functions');

// Functors
const Identity = value => functions.freeze({ join: () => value, map: (fn) => Identity(fn(value)) });
const Constant = value => functions.freeze({ join: () => value, map: () => Constant(value) });

// Lenses
const Lens = (get, set) => (fn) => (x) => fn(get(x || {})).map((a) => set(a)(x));

const Prop = (name) => Lens(functions.prop(name), functions.assoc(name));
const Over = (L) => (f) => (x) => L(functions.compose(Identity, f))(x).join();
const Set  = (L) => (a) => (x) => Over(L)(functions.K(a))(x);
const Get  = (L) => (x) => L(Constant)(x).join();

exports.Prop = Prop;
exports.Over = Over;
exports.Set = Set;
exports.Get = Get;
