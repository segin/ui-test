This is a web-based ranking system for a darts league.
---------------------------------------

Using minimally-outlined html, css, and javascript files, I've created a small web-based darts ranking system.

### Extended Features
* 

### Rules
* After each player takes her/his turn, their name and score is entered into the text input in the format `name, score`.
* Clicking `Add to Rankings` parses the contents of the form field and adds the output to the rankings.
* The rankings should be appended to `ul#rankings` and formatted to meet the example output below.
* Players with the same score are 'tied', and should have the same rank.
* Players can take any number of turns. The results of multiple turns are added to the players' score.

### Example
The following game will produce the specified output.

#### Game:
```
Janet Pluchinsky, 10
Eliot Waugh, 1
Alice Quinn, 27
Julia Wicker, 7
Quentin Coldwater, 0
Janet Pluchinsky, 20
Julia Wicker, 20
Jollyby, 42
```

#### Results:
```
1. Jollyby, 42 pts
2. Janet Pluchinsky, 30 pts
3. Alice Quinn, 27 pts
3. Julia Wicker, 27 pts
5. Eliot Waugh, 1 pt
6. Quentin Coldwater, 0 pts
```

### Guidelines
* You may use any javascript libraries you wish, but none are required.
* You will not be penalized for library use.
* Please do not use a large framework like Angular, Ember, or Knockout. We want to see how *you* write code.
* Use of Backbone is allowed.
* Please do not include library source code in your application – instead, use Bower or link to a CDN.
* jQuery and lodash have been included in the source for you to use if you wish to use them.
* If you are using a build tool (eg Yeoman, Grunt, etc), please submit the the code as-authored, **as well as any compiled production files.**

### Bonus
* Writing automated tests for your code.
* Creating a pleasing UI.
* Adding the ability to add the results of multiple games at once.
* Submitting your project as a github repo.
* Clean and readable use of HAML, SASS, and/or Coffeescript
* Surprise us!
