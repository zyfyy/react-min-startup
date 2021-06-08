/**
 * @file prettierrc
 * @author fuqiang05
 */

module.exports = {
    // max 100 characters per line
    printWidth: 100,
    // use 4 spaces for indentation
    tabWidth: 2,
    // use spaces instead of indentations
    useTabs: false,
    // semicolon at the end of the line
    semi: true,
    // use single quotes
    singleQuote: true,
    // object's key is quoted only when necessary
    quoteProps: 'preserve',
    // use double quotes instead of single quotes in jsx
    jsxSingleQuote: false,
    // no comma at the end
    trailingComma: 'es5',
    // spaces are required at the beginning and end of the braces
    bracketSpacing: true,
    // end tag of jsx need to wrap
    jsxBracketSameLine: false,
    // brackets are required for arrow function parameter, except when there is only one parameter
    arrowParens: 'avoid',
    // format the entire contents of the file
    rangeStart: 0,
    rangeEnd: Infinity,
    // no need to write the beginning @prettier of the file
    requirePragma: false,
    // No need to automatically insert @prettier at the beginning of the file
    insertPragma: false,
    // use default break criteria
    proseWrap: 'preserve',
    // decide whether to break the html according to the display style
    htmlWhitespaceSensitivity: 'css',
    // lf for newline
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'auto',
};
