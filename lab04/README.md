CS 262 - Lab 04
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html.

This is the multiple-page application from CS 262 Lab 4 Expercise 4.1.

Answers to the lab questions:
*   createNativeStackNavigator.
*   The route is similar to a URL on the Web: each route corresponds to a certain component.
*   No. Because the onPress event handler will call the navigation function when the button is pressed. Without ()=>, the event handler won't be able to call the function and no further function will be executed.
*   In the second half of the HomeScreen function, each item in the movie list is set up as a TouchableOpacity, and the text is set up as the title of the movie. When shown on the screen, the movie list would appear as a list of movie titles. The titles are touchable, and would navigate to the detail screen of each movie item.
*   In the second half of the HomeScreen function, item is passed into the navigation function, and passed into DetailsScreen function. Therefore, pressing each of the movie title would navigate to a detail screen, which holds and displays the details of that certain movie item.