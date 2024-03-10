# ToDo List

MVP

Frontend MVP
Ability to add, complete, delete and edit todos
Typescript & testing with React Test Library
All errors must be handled and passed on properly back to the user (toast notifications are a good way of doing this)
Must look polished, there is an example image attached to this spec and there are hundreds of examples of good looking todo apps online

Backend MVP
All endpoints must be error handled such that they return the correct status codes and messages.
Implement a logging strategy for requests being processed (there are loads of recourse you can find via google to do this)
Use spring swagger to generate documentation for your API

Summary
Create a backend with Spring that can create, update, read and delete todos from a MySQL database. Along with this create a frontend application with React that interacts with this backend.

Build Notes
The following will have to be replaced in the ToDo/ToDoList/src/main/resources/example.properties with your username and password from your MySQL database. The file
name will also need to be changed to 'application.properties'.

    spring.datasource.username=**USER**
    spring.datasource.password=**PASSWORD**

Design Goals / Approach

    This was very much an exploratory project. I knew that I wanted to use linked tables in the backend instead of just the one table, and also get some experience working with
    CRUD methods on the front end.

Features

    A user is able to create, read, update and delete tasks and task categories from the application
    Toast notifications provide feedback to the user when taking an action on a task or category

Known issues

    Marking off a task does not have any implementation other than a graphical update. This should be updated in the future to send through a delete request for any marked
    tasks when the user navigates away from the page.

Future Goals

    There is a 'due date' functionality that's built in to the database but not utilized in the application.
    Colour-coding tasks according to urgency and category
    A separate section for completed tasks, or maybe to rapidly create a common or recurring task.

What did you struggle with?

    Being the first project I've ever attempted end-to-end, the learning curve for the backend and logging strategy was steep. It also took a while to find a suitable library and
    correctly implement toast notifications.
    Testing remains a growth opportunity - it will have to be a focus for future implementation

Further details

    This project has highlighted a need for futher learning in TypeScript, Java, and general testing strategies.
