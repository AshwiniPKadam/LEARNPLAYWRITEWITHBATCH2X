// JavaScript Identifier Rules
// --------------------------
// Rules:
// 1. Must start with: letter (a-z, A-Z), underscore (_), or dollar sign ($)
// 2. Subsequent chars: letters, digits, underscore, dollar sign
// 3. Case-sensitive
// 4. Cannot use reserved keywords
// 5. Unicode letters allowed (ES6+)

// --- VALID Identifiers ---
let name = "john";
let _private = 1;
let $ = "dollar";
let $$ = "two dollars";
let _ = "underscore";
let firstName = "camelCase";
let first_name = "snake_case";
let $name = 2;
let name2 = 3;
let _2_name = 4;
let $2$ = 5;
let π = 3.14159;           // Unicode
let 你好 = "hello";         // Unicode
let café = "coffee";        // Unicode
let validIdentifier = true;
let _ = 10;
let $price = 99;

console.log("--- Valid identifiers ---");
console.log({ name, _private, $, $$, firstName, first_name, $name, name2, _2_name, $2$, π, 你好, café, validIdentifier, $price });

// --- INVALID Identifiers (commented out -- would throw SyntaxError) ---

// Cannot start with a digit
// let 1name = "error";

// Cannot contain hyphen
// let first-name = "error";

// Cannot contain space
// let my name = "error";

// Reserved keywords
// let let = "error";
// let const = "error";
// let var = "error";
// let if = "error";
// let else = "error";
// let for = "error";
// let while = "error";
// let function = "error";
// let class = "error";
// let return = "error";
// let import = "error";
// let export = "error";
// let try = "error";
// let catch = "error";
// let new = "error";
// let this = "error";
// let typeof = "error";
// let void = "error";
// let delete = "error";
// let switch = "error";
// let case = "error";
// let default = "error";
// let break = "error";
// let continue = "error";
// let throw = "error";
// let do = "error";
// let finally = "error";
// let in = "error";
// let instanceof = "error";
// let with = "error";
// let debugger = "error";
// let yield = "error";
// let await = "error";
// let super = "error";
// let enum = "error";
// let implements = "error";
// let interface = "error";
// let package = "error";
// let private = "error";
// let protected = "error";
// let public = "error";
// let static = "error";

// Cannot contain special chars except _ and $
// let my@name = "error";
// let my#name = "error";
// let my!name = "error";
// let my%name = "error";
// let my^name = "error";
// let my&name = "error";
// let my*name = "error";
// let my+name = "error";
// let my=name = "error";

// Cannot start with special chars other than _ and $
// let @name = "error";
// let #name = "error";
// let !name = "error";
// let %name = "error";
// let ^name = "error";
// let &name = "error";
// let *name = "error";

console.log("\nAll valid identifiers logged successfully.");
console.log("Invalid examples are commented out -- uncomment to see SyntaxError.");
