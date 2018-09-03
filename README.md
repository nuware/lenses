# Lenses

## Install

```bash
npm install @nuware/lenses --save
```

or

```html
<script defer src="https://unpkg.com/@nuware/lenses@latest/dist/lenses.umd.js"></script>
```

or

```html
<script defer src="https://unpkg.com/@nuware/lenses@latest/dist/lenses.min.js"></script>
```

## Usage

Browser

```javascript
const { Prop, Get, Set, Over, Focus } = window.nuware.L
```

Node

```javascript
const { Prop, Get, Set, Over, Focus } = require('@nuware/lenses')
```

or

```javascript
import { Prop, Get, Set, Over, Focus } from '@nuware/lenses'
```

## Example

```javascript
const NameLens = Prop('name')
const NestedLens = Focus(['a', 'b', 'c'])

const a = Set(NameLens)('Value')({})                      // {name: 'Value'}
const b = Get(NameLens)(a)                                // 'Value'
const c = Over(NameLens)((val) => val.toLowerCase()))(a)  // {name: 'value'}

const d = Set(NestedLens)(true)(c)                        // {name: 'value', a: {b: {c: true}}}
const e = Over(NestedLens)((val) => !val))(d)             // {name: 'value', a: {b: {c: false}}}
```

## API

Comming soon...


## Authors

* Dmitry Dudin <dima@nuware.ru>
