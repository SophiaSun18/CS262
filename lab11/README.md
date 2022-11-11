CS 262 - Lab 11
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/11quality/lab.html.

I worked on my team's project code using ESLint on VScode, mainly on the App.js, HomeScreen.js, DetailScreen.js and Post Screen.js.

App.js:
*   'Text' and 'ScreenStack' are defined but never used. --> delete the unused import.
*   'styles' is assigned a value but never used. --> didn't delete style because it's manually defined and we might need it later.

HomeScreen.js:
*   'index' is defined but never used. --> delete unused variable.
*   'navigation' is missing in props validation. --> didn't take action because it's unnecessary.

DetailScreen.js:
*   'route.params' is missing in props validation. --> didn't take action because it's unnecessary to change this part.
*   Duplicate key 'justifyContent'. --> delete the duplicate key.

PostScreen.js:
*   ... is defined but never used. --> didn't delete the unused imports because this page is not finished yet and we might need those later.
*   Missing key prop for element in iterator. --> doesn't make much sense to me because I did use the key for the elements.