# jasmine-ts-async
Simple asynchronous wrappers for jasmine functions written in typescript.

This library is based off of [jasmine-promise-wrapper](https://github.com/svi3c/jasmine-promise-wrapper). The key differences are:
* Does not use the same names as jasmine functions, so the two can live side by side
* Compiled to an older ES version, so it is compatible with [PhantomJS](https://github.com/ariya/phantomjs)
* Built specifically for typescript async/await

# Examples

```ts
import {$it, $beforeAll, $beforeEach, $afterEach, $afterAll} from 'jasmine-ts-async';

describe('myTestSuite', () =>{
    let x:number;
    let y:number;
    let sut:MySutClass;
    $beforeAll(async () =>{
       y = await someAsyncAction();
    });

    $beforeEach(async () =>{
       x = await someOtherAsyncAction();
       sut = new MySutClass(x);
    });

    $afterEach(async () => {
        await sut.tearDownFunction();
    });

    $afterAll(async () =>{
      await someTearDownFunction();
    })

    $it(async () =>{
        let result = await sut.someAsyncMethod(y);
        expect(result).toBe(42);
    });
});
    
```

# Prerequisites
To use this library you must also have jasmine installed.

    npm install --save-dev jasmine
or

    npm install --save-dev karma-jasmine
# Installation
    npm install --save-dev jasmine-ts-async

# License
MIT - [view the full license here](LICENSE)