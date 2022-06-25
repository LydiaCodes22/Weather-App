# Weather-App
This is a project using React to create a weather app showing a 5 day forecast.
It is written by Lydia Wallace under the guidance of Manchester Codes.

## Description
This app is mobile and desktop friendly. \
The entry point for the app is a search bar where the user can type in a city and hit enter or click the submit button. 
![screenshot of homepage on desktop](./Screenshots/Screenshot%202022-06-25%20at%2011.35.00.png "Homepage on desktop") 
![screenshot of homepage on mobile](./Screenshots/Screenshot%202022-06-25%20at%2011.44.25.png "Homepage on mobile") 

Searching for a valid city will load a five day weather forecast for that location with a summary for the five days and the option to load additional details for each day if desired.

![screenshot of result example on desktop](./Screenshots/Screenshot%202022-06-25%20at%2011.40.24.png "Result page on desktop")

![screenshot of result example on mobile](./Screenshots/Screenshot%202022-06-25%20at%2011.44.13.png)\
If the user search is invalid, the app will return a message to let them know.
![screenshot example of error code when the user searches for an invalid location](./Screenshots/Screenshot%202022-06-25%20at%2011.54.31.png)

## API
mcr-codes-weather-app.herokuapp.com default API,
mcr-codes-weather-app-alt.herokuapp.com alternative API (just in case main API is not working).

## Technologies
CSS\
Javascript\
React\
Axios\
Jest\
React Testing Library\
ESlint 

## Future Plans
Additional testing would be the priority. With more time I would like to continue to improve the styling of this app and alter the more details so that this only renders when the user selects more details for one of the days.

## Create React App 

### Documentation
This project was bootstrapped with [Create React App] and you can learn more here: (https://github.com/facebook/create-react-app).

Because it was created in this way there are the following scripts which will work in this project:

### `npm start`

Runs the app in the development mode and opens localhost 3000 to view the app in your browser.

### `npm test`

This runs the tests in watch mode so selected tests will re-run as you edit the app.

### `npm run build`

This will get the app ready for deployment by bundling and optimizing React into the `build` folder.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

This allows you to build the app without the build tool, by copying all the configuration files and transitive dependencies to your local project, allowing you full control and pointing commands to these local files.
