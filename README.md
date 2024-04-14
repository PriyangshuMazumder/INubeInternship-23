# cms1500 form
![Uploading Screenshot 2024-04-14 at 10.58.55 AM.png…]()

This project is a webpage form that can intake inputs for the CMS1500 form and convert it to a JSON object. This JSON object can then be converted to an X12 format.

## Front End

The front end is a simple form that takes in the inputs for the CMS1500 form. For this we use the material-ui library. Each seperate section is stored in a seperate folder to follow react best practices and organization. The inputs are stored in global variables, until the submit button is clicked. Once the submit button is clicked, the inputs are stored in a JSON object and sent to the backend.

## Backend 

This part of the project is split into two parts. The first part is the server that takes in the form data and converts it to a JSON object. The second part is the API that takes in the JSON object and converts it to an X12 format.

### Server 1 - form data to json  

The server is a simple express server that takes data in the form, compiles it and sends that data as a post request to the backend. The server then converts the data into a simple json object.

### Server 2 - json to x12

This server takes in a hardcoded json file and converts into an X12 format. This is done by using the Stedi API and using a guide to map it. The guide is a simple text file that maps the json object to the X12 format. The guide is hardcoded into the server. The server then sends the X12 format to the terminal.

3. API :
    1. json -> json (On API)
    2. json -> X12 (on Server)
4. Research :
    1. X12 formats
    2. API products we can use 
