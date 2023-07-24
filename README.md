# Social-Network

## Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data
This challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Using Express.js for routing, a MongoDB database, and the Mongoose ODM.
Because this application won’t be deployed, a walkthrough video will demonstrate its functionality and all of the following acceptance criteria being met.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Screenshots

Get by Id route example
![byId](https://github.com/BenCuttance/Social-Network/assets/123234427/66c85729-5b96-4010-b533-69497d2d62da)

Get all route example
![getall](https://github.com/BenCuttance/Social-Network/assets/123234427/bb5ec47b-6e87-43f6-96ef-0e43066f6911)

Post/ create route example
![Capture1](https://github.com/BenCuttance/Social-Network/assets/123234427/9b92d85b-6805-453e-8dc8-1fb56e6b137b)

Delete route example
![delete](https://github.com/BenCuttance/Social-Network/assets/123234427/457f66f3-1e54-4c3a-add4-bd658d205dd1)


## Links 

Github Link: https://github.com/BenCuttance/Social-Network 

Live Video Link: https://drive.google.com/file/d/1xbkFNmRS3aUOmDCpYuyRFT8KOIiRW0D-/view 
