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

const wind_bearing = '150';
const cpen = windir(wind_bearing, 'en', 's');
const cpen8 = windir(wind_bearing, 'en', 'l', 8);
const cpes16 = windir(wind_bearing, 'es', 'l', 4);

console.log(`Punto cardinal @${wind_bearing} deg: ${cpen}`);
console.log(`Cardinal Point @${wind_bearing} deg: ${cpen8}`);
console.log(`Cardinal Point @${wind_bearing} deg: ${cpes16}`);
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