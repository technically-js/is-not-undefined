# @technically/is-not-undefined

[![Test](https://github.com/technically-js/is-not-undefined/actions/workflows/test.yml/badge.svg)](https://github.com/technically-js/is-not-undefined/actions/workflows/test.yml)

`@technically/is-not-undefined` is a micro-package to check if a value is not undefined. With proper TS typing!

## Usage

```ts
import { isNotUndefined } from '@technically/is-not-undefined';

const values = ['hello', 'world', undefined];

const uppercase = values.filter(isNotUndefined).map((value) => {
  return value.toUpperCase(); // OK
});
```

## Why

In Typescript, it is often needed to filter out `undefined` from a list of values, and then process them.

The problem is that [`Boolean` does not currently work as a type-guard in Typescript](https://github.com/microsoft/TypeScript/issues/16655):

```ts
const values = ['hello', 'world', undefined];

const uppercase = values.filter(Boolean).map((value) => {
  return value.toUpperCase(); // TS18048: 'value' is possibly 'undefined'.
});
```

To mitigate the issue you have to wrap `Boolean` into a type-guard function like this:

```ts
const values = ['hello', 'world', undefined];

const uppercase = values.filter((x): x is Exclude<typeof x, undefined> => Boolean(x)).map((value) => {
  return value.toUpperCase(); // OK
});
```

To avoid writing these ad-hoc type-guards every time, I've created this package.

## Related packages

- [`@technically/is-not-null`](https://github.com/technically-js/is-not-null)

## License

[MIT](./LICENSE)

## Credits

Authored by [Ivan Voskoboinyk](https://www.voskoboinyk.com/).
