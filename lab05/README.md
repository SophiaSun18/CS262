CS 262 - Lab 05
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/05design/lab.html.

This is the update version of the movie info application from CS 262 Lab 4.

Answers to the lab questions:
*   The refactoring phase makes the app.js more concise, and the elements can be imported into other apps and reused.
*   The export commands export the function after it so that other files could import and use it.
*   The stack stores all the screen elements, and the new screen is stored at the top of the stack, so the deepest layer in this application is the home page, from where you can't go further backwards.