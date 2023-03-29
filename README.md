# Description

This is an online learning platform that connects students with educators from all around the world. 
This app provides various learning opportunities for everyone where educators can share and earn money from their educational contents and students can easily access courses through a user-friendly dashboard and purchase courses through a secure payment system. 

# Setup

1. Clone the GitHub repository.
2. Navigate to the root directory of the project in your terminal.
3. Run `bundle install` to install the required Ruby gems.
4. Run  `rails db:migrate` to set up the database.
5. Run `rails db:seed`to populate the database with sample data.
6. Run `rails s` to start the rails server.
7. Open up a new terminal.
8. Navigate to the client folder.
9. Run `npm install` to install the required packages for the frontend.
10. Run `npm start` to start the frontend server.


# Backend


## Domain Model (ERD)

  * User has many enrolled courses and has many courses through enrolled courses.
  * User has many reviews and has many courses through reviews.
  * Course has many enrolled courses and has many users through enrolled courses.
  * Course has many reviews and has many users through reviews.
  * User has many instructor courses and has many courses through instructor courses.
  * Course has many instructor courses and has many users through instructor courses;
  * Enrolled courses belongs to user and to course.
  * Instructor courses belongs to user and to course.
  * Review belongs to user and to course.
  * Course has many lessons.
  * Lesson belongs to course.

![User](https://user-images.githubusercontent.com/112120098/228405031-e830d4ae-aa12-4c55-9158-44297091ab60.png)


## API endpoints 
<img width="476" alt="Screenshot 2023-03-28 at 9 58 00 PM" src="https://user-images.githubusercontent.com/112120098/228407581-9f747b71-aac9-4437-9baf-a9320fe82adc.png">
<img width="479" alt="Screenshot 2023-03-28 at 9 58 08 PM" src="https://user-images.githubusercontent.com/112120098/228407613-62ec1a87-db1d-4af3-b2b4-5fd1df5dac54.png">



## Validations ☑️

 ### User 🧑‍🎓👩‍🏫
  * validates the presence of name, email, password, role
  * validates the format of email with EMAIL_REGEX
  * validates the format of password with PASSWORD_FORMAT 
  * validates password, :length { :minimum 6}

 ### Review ✍️
  * validates the presence of content
  * validates content, :length { :minimum 10}

 ### Course 📚
  * validates the presence of name, description, category, price, instructor, difficulty 
  * validates name, :length { :minimum 5}
  * validates description, :length { :minimum 10}
  * validates for price to be positive integer 

### Lesson 📑
  * validates the presence of name, duration, description, content
  * validates name, :length { :minimum 5}
  * validates description, :length { :minimum 10}
  * validates the format of content 

# Frontend

## Wireframe 🎨
<img width="1468" alt="Screenshot 2023-03-14 at 9 55 29 PM" src="https://user-images.githubusercontent.com/112120098/225199327-2d63c50f-3bfb-424f-9d9d-ed000f775b12.png">

## Client Routes 
<img width="725" alt="Screenshot 2023-03-28 at 10 05 03 PM" src="https://user-images.githubusercontent.com/112120098/228407708-c0fd9904-63af-406c-bcb5-069116d8edee.png">

## Component Tree 🌳![Uploading Screenshot 2023-03-28 at 10.05.03 PM.png…]()

![Component Tree (3)](https://user-images.githubusercontent.com/112120098/228403859-bcf77524-aab0-41ee-83a4-9ded879556c2.png)


# Stretch Goals ⬆️
  * User can create, edit, delete a review
  * Payment system with Stripe

# MVP (Minimum Variable Product)
  * User can create an account. POST
  * User can login. GET
  * User can view dashboard. GET
  * User can edit lessons. PATCH
  * User can delete lessons. DELETE
  * User can add lessons. POST
  * User can deactivate account. DELETE
  * User can enroll into the course. POST
  * User can view all enrolled courses. GET
  * User can view one enrolled course. GET
  * User can view all lessons belongs to the course. GET
  * User can view one lesson and study the content. GET
  * User can leave from one course. DELETE

# Technologies 👩‍💻
  * Ruby on Rails (backend)
  * ActiveRecord (backend)
  * ReactPlayer (frontend)
  * bcrypt (backend)
  * Boostrap (css)
  * ActiveSerializer
  * React (frontend)
  * Javascript (frontend)
  * money-rail / stripe payment (stretch goal)
 



