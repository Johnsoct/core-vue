/* eslint-disable no-undef */

// 'array-bracket-spacing': [ 'warn', 'always' ],
const arrBracketSpacing = [ 1, 2, 3 ];

// 'arrow-body-style': [ 'warn', 'always' ],
const arrowBodyStyle = () => {
    const arrowBodyStyle = () => {
        return 0; 
    };
    const arrowBodyStyle1 = () => {
        return 0;
    };
    // Optional, hence why it's only a warning
    const arrowBodyStyle2 = () => {
        return {
            test: 0,
            tested: 1,
        };
    };
};

// 'arrow-parens': [2, "as-needed", { "requireForBlockBody": true } ],
const arrowParams = () => {
    const arrowFn = () => { };
    (a) => { };
    (a) => { };
    // No () allowed, but beware of using in a condition statement
    // as it looks like a comparison (why comparisons with = should
    // always be written as >= or <=
    (a) => {
        return a; 
    };
    // () required when using with a block body (AirBnB)
    a.then((foo) => { });
    a.then((foo) => { });
};

// 'block-spacing': ['warn', 'always']
const blockSpacing = () => {
    const objB = { b: 'B' };
    function fnB () {
        return 'B'; 
    }
};

// 'brace-style': [ 'warn', 'stroustrup' ],
const braceStyle = () => {
    // Enforces { on same line as the corresponding statement or declaration
    if (a < b) {
        console.log('Chris asks Cipri for help');
        console.log('Cipri curls his finger at Chris beckoning him to come over');
    }
    // Stroustrup is a style that enforces an else, catch, or finally
    // statement is on it's own line
    if (a > b) {
        console.log('Cipri whispers in Chris\' ear');
        console.log('Chris is feeling uncomfortable');
    }
    else {
        console.log('Cipri told me he wants more frontend work');
        console.log('...everyone snickers');
    }
};

 
// 'comma-dangle': [ 'warn', { "arrays": "always-multiline", "exports": "always-multiline", "functions": "never", "imports": "always-multiline", "objects": "always-multiline" } ],
const commaDanle = () => {
    const singleLine = [ 1, 2, 3 ];
    const multiLine = [
        1,
        2,
        3,
    ];
};

// 'curly': 'error',
const curly = (a, b) => {
    if (a > b) {
        return 'A';
    }

    if (b > a) {
        return 'B'; 
    }

    // To enforce newline a consistent block statement syntax.
    // we pair 'curly' with 'brace-style'
    if (b > a) {
        return 'B'; 
    }

    if (a === b) {
        return {
            'A': true,
            'B': true,
        };
    }
};

// 'indent': [ 'error', 2, { "MemberExpression": 1, 'ignoreComments': false, 'SwitchCase': 1 } ],
const indent = () => {
    hamburger
        .cheese()
        .ketchup()
        .pickles()
        .lettuce()
        .onion()
        .bacon();

    switch ('hamburger') {
        case 'cheese':
            return 'hotdogs';
        default:
            return 'fries';
    }

    switch ('ESLint Rocks') {
        case 'Chris':
            return 'Chris loves all his ESLint rules';

        case 'Cipri':
            return 'Cipri loves all Chris\' ESLint rules';

        case 'Mike':
            return 'Does this rule provide business value?';

        default:
            return 'Zzzzzz';

    }
};

// 'keyword-spacing': 'error'
const keywordSpacing = () => {
    if (b > a) {
        return 'semi: error';
    }
    else {
        return 'potatoes';
    }
};

// 'max-len': [ 'warn', { code: 120, 'ignoreStrings': true } ],
const maxLen = () => {
    const a = userIsClient && cipriLovesFEDevelopmentWork && potatoes > hamburgers && dontPickYourNoseDuringStandup && userIsClient && cipriLovesFEDevelopmentWork && potatoes > hamburgers && dontPickYourNoseDuringStandup;
    const b = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
};

// 'multiline-ternary': [ 'warn', 'always' ]
const multilineTernary = () => {
    // Simple example, and yet, with the repetitiveness of "a" and "b" on the same line, it's not too readable
    const c = a > b
        ? a
        : b;

    // Compared to
    const d = a > b
        ? a
        : b;

    // and even more so when the statements are longer
    const navigateTo = window.location.pathname === '/dashboard' && this.userIsClient
        ? '/dashboard-client'
        : '/dashboard-employee';
};

// 'no-param-reassign': 'error',
const noParamReassign = (a, b) => {
    a = a * 2;
    // Instead, do something like...
    const c = a * 2;
};

// 'no-return-assign': [ 'error', 'except-parens' ],
const noReturnAssign = () => {
    const exampleArrow = (a) => {
        return a; 
    };
    // Is the same as
    function exampleFn (a) {
        return a;
    }

    // So, this is actually quite odd, because is it supppose to return an
    // expression or a value?
    const foo = (a, b) => {
        return this.value = a + b; 
    };
    function foo2 (a, b) {
        return this.value = a + b;
    }

    const bar = (a, b) => {
        return (this.value = a + b); 
    };
    function bar2 (a, b) {
        return (this.value = a + b);
    }

};

// 'object-curly-spacing': [ 'error', 'always' ],
const objCurlySpacing = { test: 1 };

// 'prefer-object-spread': 'warn'
const preferObjectSpread = () => {
    const ingredients = {
        ingredients: [
            'beef patty',
            'cheese',
            'pickles',
            'lettuce',
            'tomato',
            'banana peppers',
        ],
    };
    const condiments = {
        condiments: [
            'ketchup',
        ],
    };
    const sides = {
        sides: [
            'fries',
            'applesauce',
        ],
    };

    // Big no no (shares the same references as those 3 objects, not a copy)
    const meal = { condiments, ingredients, sides };
    // Technically, not error-prone, creates a copy (doesn't require deep here)
    // Pretty old syntax
    const meal2 = { ...ingredients, ...condiments, ...sides };
    // Cleaner, more readable, deep copy, modern syntax
    const meal3 = { ...ingredients, ...condiments, ...sides };
};

// 'space-before-blocks': [ 'warn', 'always' ]
const spaceBeforeBlocks = () => {
    if (a) { }

    class C { }

    function A () { }
};

// 'space-before-function-paren': [ 'error', 'always' ],
const spaceBeforeFnParan = () => {
    function spaceRequired () {
    // ...
    }
    function noProblem () {

    }
};

const outOfOrderArray = [
    'b',
    'c',
    'a',
];
