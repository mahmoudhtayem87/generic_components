# Generic Components Library

This project has been created to push angular web component to be used in liferay, And to demonstrate how to bundle a group of web components in one library and use it in Liferay

## Steps To Deploy
- Clone the repo
- Run 'npm i' to install all the required dependencies.
- Run 'npm run build-element' to build the web component and generate the required js and css files
- Web Components script and style files will be available in 'componentLibrary' folder
- Navigate to Liferay -> Client Extensions -> Add JS Client Extension and CSS Client Extension
- Navigate to Liferay -> Design -> Fragments -> Import the fragments collection available withing the Repo Folder 'Fragments', for each component you will find a fragment to enable you adding the web component to Liferay pages and enable the content author to manage the configuration as part of the fragments configuration tab.

## Available Components 

### - Events Calendar

Events Calendar has been created to showcase how to read data from Liferay Web Content Structure and render is as a Calendar View, The component has been created to accept any web content structure for that you will notice a configuration keys to map the required fields on the run time.

- Event Structure Id
- Event Title Field
- Event Description Field
- Event Image Field
- Event Date Field

![Alt text](./screenshots/calendar.png?raw=true "Calendar Component Screenshot")
