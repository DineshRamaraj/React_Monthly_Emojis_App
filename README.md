### Project Description

In this project, you are going to build a **Monthly Emojis** Application.
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/monthly-emojis-xl-output.png" alt="monthly emojis output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### User stories

1. Users using this application should be able to see a list of dates for a month in a calendar view.
2. It should have a list of days `(Sun to Sat)` and their respective list of dates `(01 to 31)`.
3. Users should be able to see the list of emojis `(Very Happy to Very Sad)`.
4. Users should be able to click an emoji then the respective emoji should become active.
5. Users should be able to click the date button,
    1. If there is no emoji in the date, then the active emoji should be displayed in the date.
    2. If the emoji in the date and the active emoji are not the same, then the emoji in the date should be replaced with the active emoji.
    3. If the emoji in the date and active emoji are the same, then the emoji should be removed from the date.
6. Users should be able to see the **emoji names** and **days** as filters.
7. Users should be able to select the options in the **emoji names** and **days** filters and be able to see the filter count according to the number of selected emoji on the selected day.
8. Initially, users should be able to see,
    1. The `Very Happy` emoji should be displayed as active emoji
    2. The `Very Happy` emoji name and `Sun` day options should be selected in the filters by default

### Project set-up instructions

<details>
<summary>To start the development process, follow the below steps</summary>
<br/>

1. Download [Node](https://nodejs.org/en/download/) on your local system - Windows OS, Linux/Mac OS
2. Download the [zip file](https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/monthlyEmojis/monthlyEmojis.zip).
3. Unzip the zip file on your local machine.
4. Run the command "npm install" in the terminal to install all the necessary dependencies.
5. Run the command "npm start" in the terminal to start the development server.
6. The app can be viewed in the browser by using the LOCAL URL [http://localhost:3000/](http://localhost:3000/).
7. You can start the development process by going through the **README** in the given file.
8. Don’t use any third-party packages.

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported. Test cases won't be passed if styled components are used.
- Every emoji should have the alt as the value of the key emojiName from the emojisList provided.
- Responsiveness is not required.

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-bg.png](https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-bg.png) **Monthly emojis background image**

</details>

<details>
<summary>Colors</summary>
<br/>

**Background Colors**:

<div style="background-color: #343243; width: 150px; padding: 10px; color: white">Hex: #343243</div>
<div style="background-color: #42404d; width: 150px; padding: 10px; color: white">Hex: #42404d</div>

<br/>

**Text Colors**:

<div style="background-color: #1c1a28; width: 150px; padding: 10px; color: white">Hex: #1c1a28</div>
<div style="background-color: #ffbe38; width: 150px; padding: 10px; color: black">Hex: #ffbe38</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<br/>

**Border Colors**

<div style="background-color: #4e5d72; width: 150px; padding: 10px; color: white">Hex: #4e5d72</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**

### Project submission instructions:

<details>
<summary>Project Submission should contain:</summary>

- GitHub repository link to your code.
- A video link. video should contain a code walkthrough and explain your application.
  - Make at least a 5-minute video explaining your code and the features that you have implemented.
  - Upload the recorded video to your YouTube account.
  - Refer to [**this**](https://www.youtube.com/watch?v=VtF2AgFSLAw) video to get a better understanding of uploading videos to your YouTube account.
- Follow the below points
  - Standard naming conventions
  - The code must be easily understandable
  - The code must be readable
</details>