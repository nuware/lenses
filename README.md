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

```javascript
const { Prop, Get, Set, Over } = require('@nuware/lenses')
```

```javascript
import { Prop, Get, Set, Over } from '@nuware/lenses'

const NameLens = Prop('name')

const a = Set(NameLens)('Value')({})                      // {name: 'Value'}
const b = Get(NameLens)(a)                                // Value
const c = Over(NameLens)((val) => val.toLowerCase()))(a)  // value
```

## Authors

* Dmitry Dudin <dima@nuware.ru>
