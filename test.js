const assert = require('assert');

const { isNotUndefined } = require('./index');

assert(isNotUndefined(1) === true);
assert(isNotUndefined('a') === true);
assert(isNotUndefined(0) === true);
assert(isNotUndefined('') === true);
assert(isNotUndefined(null) === true);
assert(isNotUndefined(undefined) === false);
