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

  * User has many orders and has many courses through orders.
  * User has many reviews and has many courses through reviews.
  * Course has many orders and has many users through orders.
  * Course has many reviews and has many users through reviews.
  * Order belongs to user and to course.
  * Review belongs to user and to course.
  * Course has many lessons.
  * Lesson belongs to course.

![erb](https://user-images.githubusercontent.com/112120098/225196009-27256dcb-55e4-40b7-a63a-a084457a4d22.png)

## API endpoints 
<img width="407" alt="Screenshot 2023-03-14 at 3 42 31 PM" src="https://user-images.githubusercontent.com/112120098/225196499-3a78840c-299c-4437-8187-fac7f1108e7e.png">

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
<img width="811" alt="Screenshot 2023-03-15 at 12 19 28 AM" src="https://user-images.githubusercontent.com/112120098/225205566-7229938b-a1b9-4389-9266-c482b657da20.png">

## Component Tree 🌳
![Component Tree (2)](https://user-images.githubusercontent.com/112120098/225199649-b5dcd988-e04c-40ab-b9a7-138642d6bafe.png)

# Stretch Goals ⬆️
  * Authenticate/Authorize teachers to create a new course and contents 
  * Devise Gem
  * Payment system with Stripe

# MVP (Minimum Variable Product)
  * User(student) can create an account. POST
  * User(student) can login. GET
  * User(student) can view profile. GET
  * User(student) can edit profile (password, profile picture). PATCH
  * User(student) can deactivate account. DELETE
  * User(student) can enroll into the course. POST
  * User(student) can view all enrolled courses. GET
  * User(student) can view one enrolled course. GET
  * User(student) can view all lessons belongs to the course. GET
  * User(student) can view one lesson and study the content. GET
  * User(student) can leave from one course. DELETE

# Technologies 👩‍💻
  * Ruby
  * Ruby on Rails
  * ActiveRecord
  * ActiveSerializer
  * React
  * Javascript
  * Devise (stretch goal)
  * money-rail/ stripe payment (stretch goal)
  * Bootstrap (CSS undecided)



