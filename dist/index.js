(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@nuware/functions')) :
  typeof define === 'function' && define.amd ? define(['exports', '@nuware/functions'], factory) :
  (factory((global.L = {}),global.F));
}(this, (function (exports,functions) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
