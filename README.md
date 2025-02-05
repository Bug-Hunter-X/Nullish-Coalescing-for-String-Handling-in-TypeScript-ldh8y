# Nullish Coalescing for String Handling in TypeScript
This repository demonstrates a common error in TypeScript related to handling nullish values and strings. The bug involves a function that attempts to print a string that might be null, potentially leading to a runtime error. The solution uses the nullish coalescing operator to handle such cases gracefully.
## Bug Description
The `usePrintString` function takes a string or null value and prints it. Without proper null handling, if a null value is passed, the `printString` function will throw an error when trying to log null.
## Solution
The solution utilizes the nullish coalescing operator (`??`) to provide a default value if the input is null or undefined. This ensures that the program does not encounter an error when handling nullish values.