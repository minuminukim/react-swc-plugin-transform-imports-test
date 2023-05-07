# Testing `@swc/plugin-transform-imports` in a React SPA bundled by webpack

## named imports

```js
// App.tsx

import { DirectionsRun } from '@mui/icons-material';
import { flatten } from 'lodash';
```

<img src="./docs/named-import.png" width="500" />

## default imports

```js
// App.tsx
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import flatten from 'lodash/flatten';
```

<img src="./docs/default-import.png" width="500" />

Lodash drops from 68.55KB to 1.77KB

<img src="./docs/default-import-lodash.png" width="500" />

## named imports with [@swc/plugin-transform-imports](https://github.com/swc-project/plugins/tree/main/packages/transform-imports)

```js
// App.tsx
import { DirectionsRun } from '@mui/icons-material';
import { flatten } from 'lodash';
```

<img src="./docs/named-import-swc-plugin.png" width="500" />
