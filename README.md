# Work-Day-Scheduler-by-Jemima-Siddiqui

Homework Assignment for Week 5 by Jemima Siddiqui. 

# 05 About the Project - Work Day Scheduler

The Work Day Scheduler application consists of a daily planner that can be filled out by a user to keep track of hourly-based tasks. By using this application, the user is able to save events for each hour of the work day (9am-5pm). This application runs in the browser and the features are dynamically updated by HTML and CSS powered by jQuery. 

![Workday scheduler application page.](./Assets/)

## Acceptance Criteria

The Work Day Scheduler application fulfills the following acceptance criteria: 
* when a user opens the planner, then the current day is displayed at the top of the calendar
* when a user scrolls down, then they are presented with timeblocks for standard business hours
* when a user looks at the timeblocks for that day, then each timeblock is color coded to indicate whether it is in the past, present, or future
* when a user clicks on a timeblock, then they can enter an event
* when a user clicks the save button for that timeblock, then the text for that event is saved in local storage
* when a user refreshs the page, then the saved events persist

## Installation

### Viewing the homepage 

In order to access the Workday Scheduler application, navigate to the following link: 
 [Workday scheduler page](https://jemimasiddiqui.github.io/Work-Day-Scheduler-by-Jemima-Siddiqui/Develop/index.html). 

### Downloading Visual Studio Code 

 Download the latest version of Visual Studio to your local machine (Mac, Linux or Windows). Please use the following link to download the latest version of VS Code [Download VS Code](https://code.visualstudio.com/download). 

### Pulling the repository from Git 

If you would like to acess the source code (HTML, CSS and JavaScript files), please navigate to the following public Github repository [Github Repository](). 

* Clone the repository to your local desktop using the following steps:

  * 🔑 Use the terminal command `cd` to navigate to the directory where we want the repository located. In this case, we will save it to the Desktop. 

  ```bash
  cd Desktop
  ```

  * 🔑 Use the git command `git clone` followed by the URL copied from Github to clone the repo to our local machine.

  ```bash
  git clone <url>
  ```

  * 🔑 Use the `git clone` command creates a new directory with the same name as the repository. We navigate into our new directory using `cd`.

  ```bash
  cd Work-Day-Scheduler-by-Jemima-Siddiqui
  ```
* After the repository has been cloned to your local machine, open the HTML, CSS and JavaScript files using Visual Studio application. 

## Usage 

This section contains instructions on how to use the Work Day Scheduler Application. 

1. Application page: 

The main page of the application consists of a daily planner with an input field and a save button corresponding to each hour.  

![Application page](./Assets/)

2. Input field and save button:

Once users click on an input field corresponding to a specific hour, they can enter a text into the field and save the text. Saving the text would allow the text to persist even after the page is refreshed. 

![Generate button](./Assets/)

3. Row colour coding:

The rows are colour coded based on the current hour in the user's timezone. Input fields corresponding to past, present and future are coloured grey, red and green respectively.  

![Row colour coding](./Assets/)

## Credits

* This README.md file was created through the help of the following tutorial: [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide).

## Main Features

* This webpage consists of the following features: 
  * An hour-based daily planner which contains an input field corresponding to each hour. 
  * The users can click on each input field, add text and save the text for future reference. 
  * The input fields are colour coded based on past, present and future. 
---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

