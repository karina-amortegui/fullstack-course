# UNDERSTANDING SYNCHRONOUS VS ASYNCHRONOUS JS
    - Understanding synchronous vs asynchronous JS.
    - setTimeout and setInterval for delayed execution.
    - Working with promises (resolve, reject, .then(), .catch()).
    - Using async/await for cleaner asynchronous code.
    - Handling errors with Try-Catch.
    - Mini Project: Simulated API call with loading indicator.

## What is synchronous code?
    - JS executes code line by line.
    - Each task must complete before the next one starts.

## What is ansynchronous code?
    - Some taks (like API calls or timers) take time to complete.
    - JS can continue running other code while waiting.

## setTimeout function
    - Delays execution, allowing other code to run first.
    - Set timeout execute code after delay.
    - Run the function once after a specified time.

## setInterval
    - Executes code repeatedly.
    - Runs a function every x miliseconds.

### .then - runs if the promise is resolved.
### .catch - runs if the promise is rejected.

## Async / Await for cleaner synchronous code
Why use it: it simplifies promise handling and looks more like synchronous code.

