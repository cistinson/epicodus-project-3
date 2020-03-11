# Mr. Roboger’s Neighborhood

Author: Chris Stinson

### Overview

This web application will take a user-inputted number and turn it into an array. The array will include the numbers zero up to and incuding the user inputted number and display the output. However, the output will not look as you'd expect. Please see the specs below to learn more about the behind-the-scenes logic. The number input is restricted in the HTML input tag (<1000) to ensure this application down not crash your browser. 

### Specs

* Spec: The program returns a range of numbers from 0 to the users inputted number
  * Input: "4"
  * Output: "0, 1, 2, 3, 4"

* Spec: Numbers in the range that contain a **three** will be changed to a custom saying
  * Input: "3"
  * Output: "0, 1, 2, 'Won't you be my neighbor?'"

* Spec: Numbers in the range that contain a **two** will be changed to a custom saying
  * Input: "3"
  * Output: "0, 1, 'Boop!', 'Won't you be my neighbor?'"

* Spec: Numbers in the range that contain a **one** will be changed to a custom saying
  * Input: "3"
  * Output: "0, 'Beep!', 'Boop!', 'Won't you be my neighbor?'"

The last spec provides a look at the final expected output. The last three specs are in descending order in terms of importance. Meaning if the first applies, it will override the other two. If the second applies it will override the last. If none of the specs apply the number will appear normally, such as "0".

### Setup Instructions

1. Clone the code set from GitHub here: https://github.com/cistinson/epicodus-project-3
2. Open the index.html file in your desired internet browser
3. Fill in the form with any information you'd like
4. Find a new language!

Alternatively, you can view the site on GitHub pages: https://cistinson.github.io/epicodus-project-3/

### License

Copyright (c) 2020 - Chris Stinson