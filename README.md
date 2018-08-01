# Lenses

## Install

```bash
npm install @nuware/lenses --save
```

or

```html
<script src="https://unpkg.com/@nuware/lenses@latest/dist/index.js"></script>
```

## Usage

Browser

```javascript
const { Prop, Get, Set, Over } = window.L
```

Node

```javascript
const { Prop, Get, Set, Over } = require('@nuware/lenses')
```

or

```javascript
import { Prop, Get, Set, Over } from '@nuware/lenses'
```

next...

```javascript
const NameLens = Prop('name')

const a = Set(NameLens)('Value')({})                      // {name: 'Value'}
const b = Get(NameLens)(a)                                // Value
const c = Over(NameLens)((val) => val.toLowerCase()))(a)  // {name: 'value'}
```

## Authors

* Dmitry Dudin <dima@nuware.ru>
