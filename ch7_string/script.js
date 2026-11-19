
let age = 25;
let password = "uk1234!=@";

// =====================================
// 1. STRING LENGTH
// =====================================

console.log(password.length);
// Output: 9


// =====================================
// 2. ACCESSING CHARACTERS
// =====================================

console.log(password.charAt(0));
// Output: "u"

console.log(password.at(-1));
// Output: "@"

console.log(password[0]);
// Output: "u"


// =====================================
// 3. SEARCHING STRINGS
// =====================================

console.log(password.indexOf("!"));
// Output: 6

console.log(password.lastIndexOf("1"));
// Output: 2

console.log(password.includes("1234"));
// Output: true

console.log(password.startsWith("uk"));
// Output: true

console.log(password.endsWith("@"));
// Output: true

console.log(password.search(/!/));
// Output: 6


// =====================================
// 4. EXTRACTING PARTS OF STRINGS
// =====================================

console.log(password.slice(0, 2));
// Output: "uk"

console.log(password.substring(0, 2));
// Output: "uk"

console.log(password.substr(0, 2));
// Output: "uk" (Deprecated)


// =====================================
// 5. CHANGING LETTER CASE
// =====================================

console.log(password.toUpperCase());
// Output: "UK1234!=@"

console.log(password.toLowerCase());
// Output: "uk1234!=@"


// =====================================
// 6. REPLACING STRINGS
// =====================================

console.log(password.replace("uk", "US"));
// Output: "US1234!=@"

console.log(password.replaceAll("1", "9"));
// Output: "uk9234!=@"

// =====================================
// 7. REPEATING AND JOINING
// =====================================

console.log(password.repeat(2));
// Output: "uk1234!=@uk1234!=@"

console.log(password.concat("2026"));
// Output: "uk1234!=@2026"


// =====================================
// 8. REMOVING SPACES
// =====================================

console.log(("  " + password + "  ").trim());
// Output: "uk1234!=@"

console.log(("  " + password).trimStart());
// Output: "uk1234!=@"

console.log((password + "  ").trimEnd());
// Output: "uk1234!=@"


// =====================================
// 9. ADDING PADDING
// =====================================

console.log(password.padStart(12, "*"));
// Output: "***uk1234!=@"

console.log(password.padEnd(12, "*"));
// Output: "uk1234!=@***"


// =====================================
// 10. CHARACTER CODES
// =====================================

console.log(password.charCodeAt(0));
// Output: 117

console.log(password.codePointAt(0));
// Output: 117


// =====================================
// 11. SPLITTING STRINGS
// =====================================

console.log(password.split(""));
// Output: ["u", "k", "1", "2", "3", "4", "!", "=", "@"]


// =====================================
// 12. CONVERTING STRINGS
// =====================================

console.log(password.toString());
// Output: "uk1234!=@"

console.log(password.valueOf());
// Output: "uk1234!=@"


// =====================================
// 13. STRING NORMALIZATION
// =====================================

console.log(password.normalize());
// Output: "uk1234!=@"

console.log(password.isWellFormed());
// Output: true

console.log(password.toWellFormed());
// Output: "uk1234!=@"


// =====================================
// 14. COMPARING STRINGS
// =====================================

console.log("abc".localeCompare("abc"));
// Output: 0


// =====================================
// 15. STATIC STRING METHODS
// =====================================

console.log(String(age));
// Output: "25"

console.log(String.fromCharCode(117));
// Output: "u"

console.log(String.fromCodePoint(117));
// Output: "u"

console.log(String.raw`uk\n1234`);
// Output: "uk\\n1234"


// =====================================
// 16. LOOPING THROUGH A STRING
// =====================================

for (let char of password) {
    console.log(char);
}

// Output:
// u
// k
// 1
// 2
// 3
// 4
// !
// =
// @
