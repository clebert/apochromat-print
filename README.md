# @apochromat/print

[![][ci-badge]][ci-link] [![][version-badge]][version-link]
[![][license-badge]][license-link]

[ci-badge]: https://github.com/clebert/apochromat-print/workflows/CI/badge.svg
[ci-link]: https://github.com/clebert/apochromat-print
[version-badge]: https://badgen.net/npm/v/@apochromat/print
[version-link]: https://www.npmjs.com/package/@apochromat/print
[license-badge]: https://badgen.net/npm/license/@apochromat/print
[license-link]:
  https://github.com/clebert/apochromat-print/blob/master/LICENSE.md

Dynamic output for interactive command line apps.

## Installation

```
npm install @apochromat/print --save
```

## Usage

```js
import {Lens} from 'apochromat';
import {print} from '@apochromat/print';

const greeting = new Lens();
const salutation = new Lens();
const subject = new Lens();

print(greeting);
salutation.render`Hi`;
subject.render`everyone`;
greeting.render`${salutation}, ${subject}!`;
setTimeout(() => subject.render`world`, 1000);
setTimeout(() => salutation.render`Hello`, 2000);
```

```
Hi, everyone!
```

```
Hi, world!
```

```
Hello, world!
```

## Types

```ts
function print(lens: Lens, stream: WriteStream = process.stdout): () => void;
```

---

Copyright 2021 Clemens Akens. All rights reserved.
[MIT license](https://github.com/clebert/apochromat-print/blob/master/LICENSE.md).
