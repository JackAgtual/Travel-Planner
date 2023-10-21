# Travel Planner

Try it out: <https://jackagtual.github.io/Travel-Planner-Frontend/>

This app allows you to search a travel destination for different types of attractions. The user can search for a place with an input field that provides autocomplete suggestions. After a destination is selected the user can select differnt types of attractions to display such as: restaurants, museums, tourrist attractions, etc.

The local weather forecast is also displayed.

The user can favorite certain results to be displayed on a map.

Click on a place to view more pictures, address and phone number, hours, and reviews.

![Application Screenshot](./assets/TravelPlannerScreenshot.png)

## Technical Details

The frontend of this application was developed using TypeScript, React, and Tailwind CSS. The web application is responsive and mobile friendly.

Custom hooks were used to fetch data from a google maps api and weather api. A react google maps library was used to display user selected destinations on an interactive map.

Check out the backend code here: https://github.com/JackAgtual/Travel-Planner-Backend

## Installation

After cloning the repo run the following npm commands:

```
npm i
npm run dev
```

## Future Work

- Allow user to create itinerary
- Store user session in a database or local storage
- Button to load more data of a specific type of attarction (eg. load more restaurants)
- Specific messages/warnings if backend rate limit is reached
- Skeleton loading components
