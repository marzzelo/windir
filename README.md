# Wind Direction

Converts wind direction in degrees to cardinal points.
- Selectable intervals 4, 8 or 16 cardinal points.
- Selectable languages (es, en)
- Selectable mode:
  - full cp names (East, West...) 
  - cp symbols (E, W, ...)


## Install

From npm:

```
npm install marzzelo/windir
````


## Usage

```js
const { windir } = require('./windir');

// Default options (english, short format, 16 cardinal points):
const WIND_BEARING = '150';
console.log(`Wind direction: ${windir(WIND_BEARING)}`); // 'SSE'

// Custom options (Spanish, long format, 8 cardinal points):
const SP8 = windir(WIND_BEARING, 'es', 'l', 8);
console.log(`Direccion del viento: ${SP8}`); // 'Sureste'

```

## Available Options @v1.1
`windir(angle [[[,lang], mode], points])`
```
lang: 'en' | 'es'   
mode: 's'  | 'l'          // short | long
np:    16  |  8  |  4     // 4:  N, S, E, W
```

## Licence

MIT


---
Marzzelo from Cordoba, Argentina.