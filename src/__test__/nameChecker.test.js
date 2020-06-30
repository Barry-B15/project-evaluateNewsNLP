import { validateURL } from "../client/js/nameChecker.js";

window.alert = jest.fn();
//fix window.alert error in test, clear the mock in true

const filterByTerm = require("../filterByTerm")

test('validateURL matcher', () => {
    const expected = {
        a: expect.any(Function)
    };
    const received = {
        a: _link => _link
    };
    expect(received).toEqual(expected);
});

describe('validateURL function should exist', () => { // https://jestjs.io/docs/en/expect#tobedefined
    test('it should take inputText', () => {
        expect(validateURL).toBeDefined();
    });
});

/* //Does the same as the one above so I think this is not necessary
describe("validateURL function should exist", () => {
    test("it should match url with regular expression", () => {
        expect(validateURL).toBeDefined();
    });
}); */
describe("validateURL function", () => {
    let result;

    test("Is true", () => {

        result = validateURL("https://www.example.com");
        expect(result).toEqual(true);

        //clear the mock window.alert
        window.alert.mockClear();
    });

    test("Is false", () => {
        result = validateURL("");
        expect(result).toEqual(false);
    })


});

describe("validateURL function", () => {
    test("it should filter by a search term (link)", () => {

        const input = [{
                id: 1,
                url: "https://www.url1.dev"
            },
            {
                id: 2,
                url: "https://www.url2.dev"
            },
            {
                id: 3,
                url: "https://www.url3.dev"
            },
            {
                id: 4,
                url: "https://www.url4.com"
            },
            {
                id: 5,
                url: "https://www.link5.org"
            }
        ];

        const output = [{
            id: 5,
            url: "https://www.link5.org"
        }];

        expect(filterByTerm(input, "link")).toEqual(output); // for lowercase
        expect(filterByTerm(input, "LINK")).toEqual(output); // for uppercase
    });
});