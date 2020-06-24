import { handleSubmit, checkURL } from "./formHandler.js";
import { checkForName } from "./nameChecker.js";



let result;

test('Dummy test', () => { // try a dummy test for trial

    // we can run multiple tests in one file
    result = 2 * 3;
    expect(result).toBe(6); // test 1

    result = true;
    expect(result).toBe(true); // test 2
    //expect(result).toBe(false); // this will fail cos we already set our result to true

});

/* test('handleSubmit', () => {
    result = handleSubmit('url'); //url;
    let expectedResult = { valid: true, url: 'https://www.google.com/' }
    expect(result).toEqual(expectedResult)
}); */

describe('test, the const "handleSubmit" should exist', () => { // https://jestjs.io/docs/en/expect#tobedefined
    test('it should a function', () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('test function(res) arrayContaining', () => {
    const expected = ['polarity', 'polarity_confidence', 'subjectivity',
        'subjectivity_confidence', 'text'
    ];
    it('matches even if received contains additional elements', () => {
        expect(['polarity', 'polarity_confidence', 'subjectivity',
            'subjectivity_confidence', 'text', 'error'
        ]).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
    });
});

/* test('checkForName', () => {
    result = checkForName('url'); //url;
    let expectedResult = {
        valid: true,
        url: 'https://www.google.com/'
    }
    expect(result).toEqual(expectedResult)
}); */

/* test('checkForName matcher', () => { // moved to checkForName.test.js
    const expected = { a: expect.any(Function) };
    const received = { a: _link => _link };
    expect(received).toEqual(expected);
}); */

test('formHandler matcher', () => { // https://github.com/facebook/jest/issues/8166
    const expected = {
        a: expect.any(Function)
    };
    const received = {
        a: _in => _in
    };
    expect(received).toEqual(expected);
});

test('test that result contains polarity', () => {
    const response = ['polarity', 'polarity_confidence', 'subjectivity',
        'subjectivity_confidence', 'text', 'error'
    ]
    expect(response).toContain('polarity');
});

test('throws on null', () => {
    function checkNull() {
        checkURL('');
    }
    expect(checkNull).toThrowError(Error);
});

/* describe('my fectched response', () => { // not working
    test('has the desired responses', () => {
        const response = ['polarity', 'polarity_confidence', 'subjectivity',
            'subjectivity_confidence', 'text', 'error'
        ]
        const fetchedResult = {
            polarity: true,
            popular: false
        };
        expect(response).toContainEqual(fetchedResult);
    });
}); */