# Description

This app provides various learning opportunities for everyone where instructors share and earn money from their educational content and students can easily access it through a user-friendly dashboard and a secure payment system. 

# Backend

  # Domain Model (ERD)

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

* Validations

 * User
  * validates the presence of name, email, password, role
  * validates the format of email with EMAIL_REGEX
  * validates the format of password with PASSWORD_FORMAT 
  * validates password, :length { :minimum 6}

 * Review
  * validates the presence of content
  * validates content, :length { :minimum 10}

 * Course
  *
 * 
