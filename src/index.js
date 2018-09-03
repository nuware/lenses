import {
  K,
  prop,
  assoc,
  compose,
  freeze,
  apply,
  map
} from '@nuware/functions'

const Identity = value => freeze({ join: () => value, map: (fn) => Identity(fn(value)) })
const Constant = value => freeze({ join: () => value, map: () => Constant(value) })

const Lens = (get, set) => (fn) => (x) => fn(get(x || {})).map((a) => set(a)(x))

export const Prop   = (name) => Lens(prop(name), assoc(name))
export const Over   = (L) => (f) => (x) => L(compose(Identity, f))(x).join()
export const Set    = (L) => (a) => (x) => Over(L)(K(a))(x)
export const Get    = (L) => (x) => L(Constant)(x).join()
export const Focus  = (xs) => apply(compose)(map(Prop)(xs))
