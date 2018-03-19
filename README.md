# 99 Lines of Code In The File - Part 1
Covalence

## Info
* This lab consists of two parts
* In this iteration you will be doing most of the logic/coding
* You will also get started on the graphical appearance
  * The code will display the results in the developer console
  * The HTML is just a test placeholder for part 2 of this lab

## Objectives
* Create an array called `friends`. It will hold five of your friends' names.
* For every friend in the friend array, you will want to `console.log` the descending chorus of this brand-new, never before seen song 100 times. The lyric must include your friend's name, and must be grammatically correct when we get down to 1. See the example output for more information.
* In the HTML, set the page title to 99 Lines of Code In The File
* Put an `h1` element in the html body that says My Singing Friends
* Put a `div` element in the html body with a class of `friend`.
    * Inside the `div` element, put an `h3` element that contains the word "Friend"
    * Inside the `div` element, put 5 `p` elements.
    * Inside the `p` elements, put "Test1", "Test2", ..., "Test5"
* Style the page
    * Set a background color on the page.
    * Change the text color of the h1.
    * Set a background color for class `friend`.
    * Target the `h3` element inside the `friend` class div and make it uppercase using only CSS.
    * You have stylistic freedom to make the page look good

## Hints
* You will need to use two loops to accomplish this task
    * One loop is nested inside the other
    * The outer loop is picking the friend. For each friend, the inner loop runs for every line of the song.

## Submission
* As usual, make sure you save and then commit and push your work to GitHub.


## Example Output
``````````````````````````````
JOHN:
99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 98 lines of code in the file
98 lines of code in the file, 98 lines of code; John strikes one out, clears it all out, 97 lines of code in the file
.......
.......
1 line of code in the file, 1 line of code; John strikes one out, clears it all out, no more lines of code in the file
JANE:
99 lines of code in the file, 99 lines of code; Jane strikes one out, clears it all out, 98 lines of code in the file
98 lines of code in the file, 98 lines of code; Jane strikes one out, clears it all out, 97 lines of code in the file
.......
.......
1 line of code in the file, 1 line of code; Jane strikes one out, clears it all out, no more lines of code in the file
``````````````````````````````

# 99 Lines of Code In The File - Part 2
Covalence

## Info
* This lab consists of two parts
* In this second iteration you will be transforming part 1 of the lab
* You should copy your files from part 1 and paste them along with this README file into a new folder linked to a new github repository

### New Objectives
* Put a `button` in the HTML that says `Sing!`
    * Stepping Stone: When you click the button, all the `console.log` statements from yesterday should happen. They SHOULD NOT happen before the button is clicked.
* When you have the button setup and working correctly as described, then:
    * Delete the `div` with class `friend` and the headings and paragraphs it contains from your html file
    * Go to your code where you are "singing the song" and accomplish the following using DOM:
        * For every one of your friends, create a `div` with class `friend`
        * Put an `h3` containing your friend's name in the div
        * Then, instead of using `console.log` to put the song lyrics in the console, create a paragraph for each song lyric line and put that paragraph in the `friend` div.
* To Recap:
    * When you have made these modifications, the page should start out just showing a button labeled "Sing!"
    * Nothing will be logged to the console
    * Clicking the button will cause 5 `div` elements with class name `friend` to be added to the page, one for each of your friends
    * Each div contains a friend's name as an h3 and 99 paragraphs, each one representing a lyric line that you previously were logging to the console in part 1 of this lab.

## Hints
* You will be using DOM functions to complete this portion of the lab
* Remember that elements can be added to other elements
    * document.body.appendChild(someElement);
    * someOtherElement.appendChild(anotherElement);
