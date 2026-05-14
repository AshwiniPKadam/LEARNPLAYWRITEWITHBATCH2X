// NAMING CONVENTIONS (identifier cases)

// 1. camelCase (JavaScript standard for variables & functions)
var firstName = "Ashwini";
var lastName = "Kadam";
var getUserName = function() { return firstName + " " + lastName; };

// 2. snake_case (common in Python / databases)
var first_name = "Parth";
var last_name = "Kadam";
var user_email = "parth@email.com";

// 3. PascalCase (for classes / constructors / React components)
var PersonDetail = { name: "Ashwini", age: 25 };
var UserProfile = function(name) { this.name = name; };

// 4. UPPER_CASE / SCREAMING_SNAKE_CASE (for constants)
var MAX_RETRY_COUNT = 3;
var API_BASE_URL = "https://example.com";
var COLOR_RED = "#FF0000";

// 5. Hungarian Notation (prefix indicates type -- less common now)
var strName = "Ashwini";       // string
var numAge = 25;               // number
var boolIsActive = true;       // boolean
var arrItems = [1, 2, 3];      // array
var objConfig = { theme: "dark" }; // object

// 6. kebab-case -- NOT VALID in JavaScript (contains hyphens)
// var user-name = "error";  // SyntaxError

// 7. Mixed / lowercase
var name = "Ashwini";
var email = "ashwini@email.com";

