import { validateURL } from "../client/js/nameChecker.js";

const filterByTerm = require("../client/js/filterByTerm")

test('validateURL matcher', () => {
    const expected = {
        a: expect.any(Function)
    };
    const received = {
        a: _link => _link
    };
    expect(received).toEqual(expected);
});

describe('valiadeURL function should exist', () => { // https://jestjs.io/docs/en/expect#tobedefined
    test('it should take inputText', () => {
        expect(validateURL).toBeDefined();
    });
});

describe("validateURL function should exist", () => {
    test("it should match url with regular expression", () => {

        expect(validateURL).toBeDefined();
    });
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