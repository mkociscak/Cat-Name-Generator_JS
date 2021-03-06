# Cat-Name-Generator_JS

This is my third project with Code Louisville.

This app can help you find the purrfect name for your cat friend. Using JavaScript, HTML, CSS, ExpressJS and Node, this application works to generate fantastical names specifically formulated to fit your fur ball buddies.

My home page displays an html form with four fields. For each field the user can choose from the corresponding dropdown box to select a characteristic. After selecting one option for each of the fields, the user can click the submit button and the values will save (through the browser/local storage) to the file characterResults.html which will automatically appear.

Below the submit button is a larger button that reads "Get Name". Clicking this button will generate a random two-part name that will appear as an alert. 
<br>
&nbsp;&nbsp;
&nbsp;&nbsp;

:octocat: :octocat: :octocat:
<br>
<br>
## Technical requirements:
To begin in the browser open the file test.html. The first three features will work using only the browser. 

For the other features the user will need to first type npm install in the terminal followed by npm run. The user should have a local server running at http://localhost:5000 as the PORT number is set to 5000 in charactersIndex.js. 

The page layout is also responsive for three different screen sizes (phone, tablet and computer/monitor).
<br>
<br>
## My features are as follows:
<ul>
<li>Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application.<br> I created two dictionaries to generate two-part cat names at random. The random name appears as an alert when the Get Name button is clicked. This can be found in the code in namesDictionary.js and namesIndex.js.<br></li>
<br>
<li>Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value.<br> This can be found in the random name generation of the two variables: 1). namesOne 2). namesTwo.
</li>
<br>
<li>Create a form and save the values (on click of Submit button) to an external file. <br> The character input values are saved to the file characterResults.html when the submit button is clicked. This page will show automatically on click of the submit button. </li>
<br>
<li>Create a web server with at least one route and connect to it from your application using ExpressJS.<br> This is set to run on PORT 5000 at  http://localhost:5000. This code can be found in charactersIndex.js and characterRepository.js. 

The generated characters (combinations of the four characteristics) are saved in JSON format to the file assets/characters.json when implemented. This is set to run currently through Postman.
</li>
<br>
<li>Implement a regular expression to ensure a field is always stored and displayed in the same format.
<br>This is done simply to verify that the gender form field has been marked and that one gender option is selected. An alert will pop up next to the corresponding section if one value has not been selected. (currently shows true or false in console, alert not functioning properly)
</li>
</ul>
<br>

## Next steps:
I hope to build on this project in the future by 1). Deploying the backend I have created in a separate repo to connect the two -or- creating a new database to run the overall site. 2). Adding more characteristics and embedding sound clips into the options in the vocal category. 3). Expanding the visual features and overall layout for larger screen sizes. 4). Expanding the options for the generated names and making them dependent on the options chosen by the user.
<br>
&nbsp;&nbsp;
&nbsp;&nbsp;

:octocat: :octocat: :octocat:
&nbsp;&nbsp;
&nbsp;&nbsp;<br>
&nbsp;&nbsp;
## Inspiration: 

Mosho the cat rapper

![mosho_02 copy](https://user-images.githubusercontent.com/77941853/156898252-a43f4f27-49f6-4503-8bf0-f78519556d8e.jpg)

![mosho_01 copy](https://user-images.githubusercontent.com/77941853/156898149-d57e4268-ac91-4d99-9547-4e388d4fb215.jpg)
