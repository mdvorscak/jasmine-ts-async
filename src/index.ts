function handlePromise(promise: () => Promise<void>){
    return (done:DoneFn) => {
        promise().then(done).catch(function(e){
                    fail(e);
                    done();
                });
    };
}

export function $it(expectation: string, assertion: () => Promise<void>, timeout?: number) {
    it(expectation, handlePromise(assertion), timeout);
}

export function $beforeEach(action: () => Promise<void>, timeout?: number) {
    beforeEach(handlePromise(action), timeout);
}

export function $beforeAll(action: () => Promise<void>, timeout?: number) {
    beforeAll(handlePromise(action), timeout);
}


export function $afterEach(action: () => Promise<void>, timeout?: number) {
    afterEach(handlePromise(action), timeout);
}

export function $afterAll(action: () => Promise<void>, timeout?: number) {
    afterAll(handlePromise(action), timeout);
}
