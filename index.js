import {
  K,
  prop,
  assoc,
  compose
} from '@nuware/functions'

// Functors
const Identity = value => ({ join: () => value, map: (fn) => Identity(fn(value)) })
const Constant = value => ({ join: () => value, map: () => Constant(value) })

// Lenses
const Lens = (get, set) => (fn) => (x) => fn(get(x || {})).map((a) => set(a)(x))

export const Prop = (name) => Lens(prop(name), assoc(name))
export const Over = (L) => (f) => (x) => L(compose(Identity, f))(x).join()
export const Set  = (L) => (a) => (x) => Over(L)(K(a))(x)
export const Get  = (L) => (x) => L(Constant)(x).join()
