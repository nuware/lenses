import { K, prop, assoc, compose, freeze } from '@nuware/functions';

// Functors
const Identity = value => freeze({ join: () => value, map: (fn) => Identity(fn(value)) });
const Constant = value => freeze({ join: () => value, map: () => Constant(value) });

// Lenses
const Lens = (get, set) => (fn) => (x) => fn(get(x || {})).map((a) => set(a)(x));

const Prop = (name) => Lens(prop(name), assoc(name));
const Over = (L) => (f) => (x) => L(compose(Identity, f))(x).join();
const Set  = (L) => (a) => (x) => Over(L)(K(a))(x);
const Get  = (L) => (x) => L(Constant)(x).join();

export { Prop, Over, Set, Get };
