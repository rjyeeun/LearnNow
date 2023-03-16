User.destroy_all
Course.destroy_all
Lesson.destroy_all
Review.destroy_all
EnrolledCourse.destroy_all

puts "🌱 Planting seeds..."

user1 = User.create(name: "Alice Johnson", email: "alice@email.com", password: "alice123", role: User.roles[:admin])
user2 = User.create(name: "Bob Smith", email: "bob@email.com", password: "bob123", role: User.roles[:admin])
user3 = User.create(name: "Sarah Lee", email: "sarah@email.com", password: "sarah123", role: User.roles[:admin])
user4 = User.create(name: "John Doe", email: "john@email.com", password: "john123", role: User.roles[:student])
user5 = User.create(name: "Emily Chen", email: "emily@email.com", password: "emily123", role: User.roles[:student])
user6 = User.create(name: "Alex Rodriguez", email: "arod@email.com", password: "alex123", role: User.roles[:student])
user7 = User.create(name: "Amanda VanDyke", email: "amand@email.com", password: "amand123", role: User.roles[:admin])
user8 = User.create(name: "Sharon Park", email: "sharon@email.com", password: "sharon123", role: User.roles[:student])
user9 = User.create(name: "Giovanni Rossi", email: "gio@email.com", password: "gio123", role: User.roles[:admin])
user10 = User.create(name: "Rachel Jung", email: "rachel@email.com", password: "rachel123", role: User.roles[:student])

order1 = Order.create(user_id: 4, course_id: 1, purchased_date: '2008-11-11')
order2 = Order.create(user_id: 10, course_id: 2, purchased_date: '2008-11-11')
order3 = Order.create(user_id: 5, course_id: 3, purchased_date: '2008-11-11')
order4 = Order.create(user_id: 10, course_id: 4, purchased_date: '2008-11-11')

course1 = (user_id = User.admin.sample.id
    course = Course.create(name: "Introduction to Programming", description: "This course provides an introduction to programming concepts, including data types, control structures, and algorithms.", category: "IT", price: 49.99, instructor_id: user_id, difficulty: "easy")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
)

course2 = (user_id = User.admin.sample.id
    course = Course.create(name: "Korean Basics", description: "This course is designed for students with 0 knowledge of Korean and covers basic speaking and writing lessons.", category: "Language", price: 21.99, instructor_id: user_id, difficulty: "easy")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
)

course3 = (user_id = User.admin.sample.id
    course = Course.create(name: "Yoga Basics", description: "This course provides an introduction to yoga, including basic poses, breathing techniques, and relaxation exercises.", category: "Health and Wellness", price: 0, instructor_id: user_id, difficulty: "easy")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
)


course4 = (user_id = User.admin.sample.id
    course = Course.create(name: "Italian Food", description: "This is a cooking class for people who love to discover and learn how to cook 10 Italian foods.", category: "Cooking", price: 12.99, instructor_id: user_id, difficulty: "intermediate")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
)

lesson1 = Lesson.create(name: "Introduction to Variables", duration: 20, description: "This lesson covers the basics of variables in computer programming.", course_id: 1)

lesson2 = Lesson.create(name: "Hangul Alphabet", duration: 30, description: "In this lesson, we'll learn the basics of the Korean alphabet, Hangul. We'll cover the 14 consonants and 10 vowels that make up the alphabet, and learn how to read and write simple words and phrases. Whether you're a complete beginner or just starting to learn Korean, this lesson is the perfect place to start!", course_id: 2)

lesson3 = Lesson.create(name: "Child's pose", duration: 15, description: "This lesson demonstrates the Child's Pose yoga posture.", course_id: 3)

lesson4 = Lesson.create(name: "How to make Carbonara", duration: 20, description: "This lesson covers a step-by-step tutorial on how to cook carbonara.", course_id: 4)

lesson5 = Lesson.create(name: "Classic Tiramisu", duration: 20, description: "Tiramisu is a classic Italian dessert that's perfect for any occasion. In this lesson, we'll learn how to make the perfect tiramisu, from scratch! We'll start with a light and fluffy mascarpone cream, then layer it with espresso-soaked ladyfingers and finish with a dusting of cocoa powder. You'll love the rich, creamy texture and bold espresso flavor of this classic dessert.", course_id: 4)

lesson6 = Lesson.create(name: "Risotto", duration: 60, description: "In this lesson, we'll learn how to make the perfect risotto, step-by-step. We'll start by making a flavorful broth, then cook the rice to a creamy consistency using traditional techniques. We'll also cover different types of risotto, including mushroom, shrimp, and saffron. Whether you're a novice or an experienced cook, you'll love the rich, comforting flavors of this classic Italian dish!", course_id: 4)

lesson7 = Lesson.create(name: "Variables and Data Types", duration: 30, description: "In this lesson, we'll learn about variables and data types in programming. We'll cover the basics of declaring and assigning variables, and discuss the different data types available in most programming languages, such as integers, floats, and strings. Whether you're a complete beginner or just need a refresher, you'll be ready to start programming in no time!", course_id: 1)

lesson8 = Lesson.create(name: "Loops and Conditionals", duration: 45, description: "In this lesson, we'll learn about loops and conditionals in programming. We'll cover the different types of loops, including while and for loops, and discuss how to use conditionals, such as if-else statements, to control program flow. We'll also look at some common programming challenges and how to solve them using loops and conditionals. Whether you're new to programming or just need to brush up on your skills, you'll find this lesson informative and engaging.", course_id: 1)

lesson9 = Lesson.create(name: "Greetings and Introductions", duration: 45, description: "“In this lesson, we'll learn basic Korean greetings and introductions. We'll cover common phrases as well as some essential cultural tips for using these phrases in Korean society. We'll also learn how to ask and answer simple questions about personal information, like names and professions. By the end of this lesson, you'll be able to confidently greet and introduce yourself in Korean!”", course_id: 2)

lesson10 = Lesson.create(name: "Sun Salutation A", duration: 20, description: "In this lesson, we'll learn the foundational yoga sequence known as Sun Salutation A. We'll break down each of the poses in the sequence, including Mountain Pose, Forward Fold, Plank, and Upward-Facing Dog. We'll also discuss proper alignment and breathing techniques to help you flow through the sequence with ease. Whether you're new to yoga or looking to refine your practice, Sun Salutation A is a great place to start!", course_id: 3)

review1 = Review.create(user_id: 4, course_id: 4, content: "I absolutely loved this course! The recipes were easy to follow and the instructor's passion for Italian cooking really shone through. Can't wait to impress my friends and family with my newfound skills in the kitchen.")

review2 = Review.create(user_id: 5, course_id: 2, content:"I absolutely loved this course! The recipes were easy to follow and the instructor's passion for Italian cooking really shone through. Can't wait to impress my friends and family with my newfound skills in the kitchen." )

review3 = Review.create(user_id:8 , course_id:3 , content:"This course was exactly what I needed to jumpstart my yoga practice. The instructor was patient and encouraging, and the lessons were designed to build upon each other.")

review4 = Review.create(user_id: 10, course_id: 1, content: "I had always been interested in coding but didn't know where to start. This course was exactly what I needed. The projects were challenging but doable, and the instructor was always available to answer any questions I had.")

5.times do
    EnrolledCourse.create(user_id: User.student.sample.id, course_id: Course.all.sample.id, enrolled: true)
end

puts "✅ Done seeding!"