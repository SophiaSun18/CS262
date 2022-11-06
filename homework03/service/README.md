CS 262 - Homework 03
This homework is based on https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html.

This is the updated version of the monopoly player information application from CS 262 Homework 2, which reads and presents the data from the Heroku app deployed here https://frozen-falls-21593.herokuapp.com/.

Is the service RESTful? If not, why not? If so, what key features make it RESTful.
Is there any evidence in your implementation of an impedance mismatch?

Answers to the lab questions:
*   https://frozen-falls-21593.herokuapp.com/
    https://frozen-falls-21593.herokuapp.com/players
    https://frozen-falls-21593.herokuapp.com/players/1
    https://frozen-falls-21593.herokuapp.com/playersScore/1
*   All these endpoints implement actions that are both idempotent and nullipotent, as they won't make any changes to the database, and no matter how many tiems they are executed, the result returned are the same.
*   Yes. The service won't memorize the last instruction, and it uses standarlized URL and JSON to read and transfer data.
*   Not in the current state.