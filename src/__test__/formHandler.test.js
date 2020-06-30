import { handleSubmit, checkURL, postnlpData } from "../client/js/formHandler.js";


describe('handleSubmit, the const "handleSubmit" should exist', () => { // https://jestjs.io/docs/en/expect#tobedefined
    test('it should a function', () => {
        expect(handleSubmit).toBeDefined();
    });
});
/* //dropping this test
describe('test function(res) arrayContaining', () => {
    const expected = ['polarity', 'polarity_confidence', 'subjectivity',
        'subjectivity_confidence', 'text'
    ];
    it('matches even if received contains additional elements', () => {
        expect(
            ['polarity', 'polarity_confidence', 'subjectivity',
                'subjectivity_confidence', 'text', 'error'
            ]
        ).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['polarity_confidence', 'subjectivity',
            'subjectivity_confidence', 'text', 'error'
        ]).not.toEqual(expect.arrayContaining(expected));
    });
});
 */

test('formHandler matcher', () => { // https://github.com/facebook/jest/issues/8166
    const expected = {
        a: expect.any(Function)
    };
    const received = {
        a: _in => _in
    };
    expect(received).toEqual(expected);
});

test('Dynamically update UI, test that result contains polarity', () => {
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

describe('postnlpData function should exist', () => { // https://jestjs.io/docs/en/expect#tobedefined
    test('it should an async function', () => {
        expect(postnlpData).toBeDefined();
    });
});