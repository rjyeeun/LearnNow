User.destroy_all
Course.destroy_all
Lesson.destroy_all
Review.destroy_all
EnrolledCourse.destroy_all

puts "🌱 Planting seeds..."

user1 = User.create!(name: "Alice Johnson", username: "alice", email: "alice@email.com", password: "Alice123!")
user2 = User.create!(name: "Bob Smith", username: "bob", email: "bob@email.com", password: "Bob123!")
user3 = User.create!(name: "Sarah Lee", username: "sarah", email: "sarah@email.com", password: "Sarah123!")
user4 = User.create!(name: "John Doe", username: "john", email: "john@email.com", password: "John123!")
user5 = User.create!(name: "Emily Chen", username: "emily", email: "emily@email.com", password: "Emily123!")
user6 = User.create!(name: "Alex Rodriguez", username: "alex", email: "arod@email.com", password: "Alex123!")
user7 = User.create!(name: "Amanda VanDyke", username: "amanda", email: "amand@email.com", password: "Amand123!")
user8 = User.create!(name: "Sharon Park", username: "sharon", email: "sharon@email.com", password: "Sharon123!")
user9 = User.create!(name: "Giovanni Rossi", username: "gio", email: "gio@email.com", password: "Gio123!")
user10 = User.create!(name: "Rachel Jung", username: "rachel", email: "rachel@email.com", password: "Rachel123!")


course1 = (user_id = 2
    course = Course.create(title: "Introduction to Programming", description: "This course provides an introduction to programming concepts, including data types, control structures, and algorithms.", category: "Technology and IT", price: 49.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 10, course_id: course.id, content: "I had always been interested in coding but didn't know where to start. This course was exactly what I needed. The projects were challenging but doable, and the instructor was always available to answer any questions I had.", rating: 4)
    Review.create(user_id: 5, course_id: course.id, content: "This was the best course!", rating: 5)
    EnrolledCourse.create(user_id: 10, course_id: course.id, enrolled: true)
)

course2 = (user_id = 3
    course = Course.create(title: "Korean Basics", description: "This course is designed for students with 0 knowledge of Korean and covers basic speaking and writing lessons.", category: "Language", price: 21.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://i.pinimg.com/originals/f6/9d/70/f69d70ca4988a67d2e676f6a933aedd2.jpg")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 5, course_id: course.id, content:"I've always been fascinated by Korean culture and this course helped me take the first step towards learning the language. The instructor was engaging and made the lessons fun and interactive.", rating: 4)
    EnrolledCourse.create(user_id: 5, course_id: course.id, enrolled: true)
)

course3 = (user_id = 7
    course = Course.create(title: "Yoga Basics", description: "This course provides an introduction to yoga, including basic poses, breathing techniques, and relaxation exercises.", category: "Health and Wellness", price: 0, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://i.ytimg.com/vi/70atcwWeWp0/maxresdefault.jpg")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 10, course_id: course.id , content:"This course was exactly what I needed to jumpstart my yoga practice. The instructor was patient and encouraging, and the lessons were designed to build upon each other.", rating: 4)
    EnrolledCourse.create(user_id: 10, course_id: course.id, enrolled: true)
)


course4 = (user_id = 9
    course = Course.create(title: "Italian Food", description: "This is a cooking class for people who love to discover and learn how to cook 10 Italian foods.", category: "Personal development and growth", price: 12.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPEwg1ShqTvEnZ6mCA9uE2JU2_QHQybpDu5Pgw5LQQiuP5ETkowVoFkRzlRB5NIvOoZY&usqp=CAU")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 4, course_id: course.id, content: "I absolutely loved this course! The recipes were Beginner to follow and the instructor's passion for Italian cooking really shone through. Can't wait to impress my friends and family with my newfound skills in the kitchen.", rating: 4)
    EnrolledCourse.create(user_id: 4, course_id: course.id, enrolled: true)
)

course5 = (user_id = 9
    course = Course.create(title: "Intro to Photoshop", description: "Learn the basics of Photoshop, including photo editing, graphic design, and more!", category: "Arts and design", price: 29.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://cdn.educba.com/academy/wp-content/uploads/2019/03/Introduction-to-Photoshop.jpg")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 5, course_id: course.id, content: "Great introduction to Photoshop. The instructor explains everything in a clear and concise manner.", rating: 4)
    EnrolledCourse.create(user_id: 5, course_id: course.id, enrolled: true)
)

course6 = (user_id = 7
    course = Course.create(title: "Creative Writing for Beginners", description: "Discover the art of creative writing, including storytelling, character development, and more.", category: "Language", price: 24.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://static.theplaybook.fun/d/tsp9")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 8, course_id: course.id, content: "This was a great course to kickstart my writing career. The instructor was very engaging and provided helpful feedback.", rating: 5)
    EnrolledCourse.create(user_id: 8, course_id: course.id, enrolled: true)
)

course7 = (user_id = 2
    course = Course.create(title: "Introduction to Meditation", description: "Learn the basics of meditation, including mindfulness, relaxation, and stress reduction techniques.", category: "Health and Wellness", price: 14.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://d31ezp3r8jwmks.cloudfront.net/0s3do1q1aauubm3ec8pvy5d3es4n")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 11, course_id: course.id, content: "A very calming and informative course. The instructor's voice is very soothing and helped me relax during the meditation exercises.", rating: 4)
    EnrolledCourse.create(user_id: 11, course_id: course.id, enrolled: true))

course8 = (user_id = 4
    course = Course.create(title: "Spanish for Beginners", description: "Learn the basics of Spanish, including grammar, vocabulary, and conversation skills.", category: "Language", price: 19.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://www.lawlessspanish.com/wp-content/uploads/spanish-for-beginners.png")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 13, course_id: course.id, content: "This was a great course to learn Spanish. The instructor provided helpful explanations and practice exercises.", rating: 4)
    EnrolledCourse.create(user_id: 13, course_id: course.id, enrolled: true)
)

course9 = (user_id = 9
    course = Course.create(title: "Introduction to Graphic Design", description: "Learn the fundamentals of graphic design, including color theory, typography, and layout.", category: "Arts and Design", price: 29.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://i.ytimg.com/vi/UHmsKEQLLDk/maxresdefault.jpg")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 14, course_id: course.id, content: "A very informative course that covers all the basics of graphic design. The instructor provided helpful feedback and suggestions.", rating: 5)
    EnrolledCourse.create(user_id: 14, course_id: course.id, enrolled: true)
    )

course10 = (user_id = 1
    course = Course.create(title: "Introduction to Public Speaking", description: "Learn how to improve your public speaking skills, including delivery, organization, and audience engagement.", category: "Language", price: 24.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://www.indiansinkuwait.com/ShowImage.aspx?img=/Newsfile/1852021123222450may1821Athulya.jpg&w=650")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 16, course_id: course.id, content: "This was a very helpful course to improve my public speaking skills. The instructor provided helpful tips and feedback.", rating: 5)
    EnrolledCourse.create(user_id: 16, course_id: course.id, enrolled: true)
    )

course11 = (user_id = 1
    course = Course.create(title: "Introduction to Entrepreneurship", description: "Learn the basics of entrepreneurship, including idea generation, business planning, and funding.", category: "Business and Entrepreneurship", price: 19.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://i1.rgstatic.net/publication/360625961_INTRODUCTION_TO_ENTREPRENEURSHIP/links/6282519890841d5155d7dcc5/largepreview.png")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 2, course_id: course.id, content: "This course was extremely helpful in getting me started on my entrepreneurial journey. The instructor was knowledgeable and engaging.", rating: 4.5)
    EnrolledCourse.create(user_id: 2, course_id: course.id, enrolled: true)
    )

course12 = (user_id = 1
    course = Course.create(title: "Marketing Strategies for Small Businesses", description: "Learn how to create effective marketing campaigns for your small business, including social media marketing, email marketing, and SEO.", category: "Business and Entrepreneurship", price: 29.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://www.freshbooks.com/wp-content/uploads/2022/04/advertise-my-small-business-5.jpg")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 3, course_id: course.id, content: "This course provided a lot of valuable insights into marketing for small businesses. The instructor was knowledgeable and provided practical advice.", rating: 4.2)
    EnrolledCourse.create(user_id: 3, course_id: course.id, enrolled: true)
    )    

course13 = (user_id = 5
    course = Course.create(title: "Teaching English as a Second Language", description: "Learn how to teach English to non-native speakers, including lesson planning, grammar instruction, and classroom management.", category: "Education and Teaching", price: 24.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://d5pa980nnvb18.cloudfront.net/images/_660xAUTO_crop_center-center_none/esl.jpg")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 4, course_id: course.id, content: "This course was very informative and helpful for teaching English as a second language. The instructor was engaging and provided a lot of practical tips.", rating: 4.7)
    EnrolledCourse.create(user_id: 4, course_id: course.id, enrolled: true)
    )
        
course14 = (user_id = 7
    course = Course.create(title: "Introduction to Online Teaching", description: "Learn the basics of teaching online, including how to create engaging content, use online teaching tools, and manage student interactions.", category: "Education and Teaching", price: 29.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://www.lbcc.edu/sites/main/files/imagecache/lightbox/main-images/intro-online.png")
    InstructorCourse.create(user_id: user_id, course_id: course.id)
    Review.create(user_id: 5, course_id: course.id, content: "This course provided a lot of helpful tips and best practices for online teaching. The instructor was knowledgeable and provided practical examples.", rating: 4.3)
    EnrolledCourse.create(user_id: 5, course_id: course.id, enrolled: true)
    )

course15 = (user_id = 2
course = Course.create(title: "Introduction to Chemistry", description: "Learn the basics of chemistry, including atoms, molecules, and chemical reactions.", category: "Science and Math", price: 19.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://i.ytimg.com/vi/-KfG8kH-r3Y/maxresdefault.jpg")
InstructorCourse.create(user_id: user_id, course_id: course.id)
Review.create(user_id: 6, course_id: course.id, content: "I had no prior knowledge in chemistry but this course made it very easy for me to understand the concepts. Highly recommend!", rating: 4.5)
EnrolledCourse.create(user_id: 6, course_id: course.id, enrolled: true)
)

course16 = (user_id = 8
course = Course.create(title: "Calculus for Beginners", description: "Learn the fundamentals of calculus, including limits, derivatives, and integrals.", category: "Science and Math", price: 29.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://i.ytimg.com/vi/UukVP7Mg3TU/maxresdefault.jpg")
InstructorCourse.create(user_id: user_id, course_id: course.id)
Review.create(user_id: 10, course_id: course.id, content: "Great course for someone who needs a refresher on calculus or is learning it for the first time. The instructor explains the concepts very clearly.", rating: 4)
EnrolledCourse.create(user_id: 10, course_id: course.id, enrolled: true)
)

course17 = (user_id = 4
course = Course.create(title: "Introduction to Psychology", description: "Learn about the science of human behavior, including cognitive processes, emotions, and social behavior.", category: "Social Sciences and Humanities", price: 49.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://debrabell.com/wp-content/uploads/2017/02/IntroToPsychology-1200x628-1.png")
InstructorCourse.create(user_id: user_id, course_id: course.id)
Review.create(user_id: 10, course_id: course.id, content: "This was a great introduction to psychology. The instructor explained concepts in an easy-to-understand way and provided engaging examples.", rating: 4.5)
Review.create(user_id: 9, course_id: course.id, content: "I really enjoyed this course and learned a lot about the science of human behavior. The instructor was very knowledgeable and engaging.", rating: 4.5)
EnrolledCourse.create(user_id: 10, course_id: course.id, enrolled: true)
EnrolledCourse.create(user_id: 9, course_id: course.id, enrolled: true)
)

course18 = (user_id = 4
course = Course.create(title: "Introduction to Philosophy", description: "Explore fundamental questions about existence, knowledge, and ethics in this introductory philosophy course.", category: "Social Sciences and Humanities", price: 39.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://www.uwinnipeg.ca/philosophy/images/phil-homepage-sm.jpg")
InstructorCourse.create(user_id: user_id, course_id: course.id)
Review.create(user_id: 8, course_id: course.id, content: "This was an excellent introduction to philosophy. The instructor provided clear explanations and thought-provoking examples.", rating: 4.5)
Review.create(user_id: 9, course_id: course.id, content: "I really enjoyed this course and learned a lot about the fundamental questions of existence, knowledge, and ethics. The instructor was very engaging.", rating: 4)
EnrolledCourse.create(user_id: 8, course_id: course.id, enrolled: true)
EnrolledCourse.create(user_id: 9, course_id: course.id, enrolled: true)
)

course19 = (user_id = 2
course = Course.create(title: "Sustainable Living: Tips for Going Green", description: "Learn practical tips for sustainable living, including reducing waste, conserving energy, and choosing eco-friendly products.", category: "Environmental Sustainability", price: 14.99, instructor_id: user_id, difficulty: "Beginner", thumbnail_img: "https://assets.solar.com/wp-content/uploads/2019/06/pkms-blog-sustainable-living.jpg")
InstructorCourse.create(user_id: user_id, course_id: course.id)
Review.create(user_id: 8, course_id: course.id, content: "This course provided helpful tips for living a more sustainable lifestyle. I highly recommend it!", rating: 4)
EnrolledCourse.create(user_id: 8, course_id: course.id, enrolled: true)
)

course20 = (user_id = 2
course = Course.create(title: "Introduction to Renewable Energy", description: "Explore the world of renewable energy, including solar, wind, and geothermal power, and learn how it can be used to combat climate change.", category: "Environmental Sustainability", price: 29.99, instructor_id: user_id, difficulty: "Intermediate", thumbnail_img: "https://erepublic.brightspotcdn.com/dims4/default/3f61f38/2147483647/strip/false/crop/5386x3591+0+0/resize/1486x991!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.amazonaws.com%2F42%2Fd6%2F12c99be14ddb8aeb528e4db34ae5%2Fshutterstock-369887342.jpg")
InstructorCourse.create(user_id: user_id, course_id: course.id)
Review.create(user_id: 9, course_id: course.id, content: "This course provided a comprehensive overview of renewable energy sources and their potential to combat climate change. I learned a lot!", rating: 4)
EnrolledCourse.create(user_id: 9, course_id: course.id, enrolled: true)
)



            
            
    
lesson1 = Lesson.create(title: "Introduction to Variables", duration: 20, description: "This lesson covers the basics of variables in computer programming.", course_id: 1, content: "https://www.youtube.com/watch?v=6n4AV5k-7wE")

lesson2 = Lesson.create(title: "Hangul Alphabet", duration: 30, description: "In this lesson, we'll learn the basics of the Korean alphabet, Hangul. We'll cover the 14 consonants and 10 vowels that make up the alphabet, and learn how to read and write simple words and phrases. Whether you're a complete beginner or just starting to learn Korean, this lesson is the perfect place to start!", course_id: 2, content: "youtube.com/watch?v=pT4k7LC91Cw")

lesson3 = Lesson.create(title: "Child's pose", duration: 15, description: "This lesson demonstrates the Child's Pose yoga posture.", course_id: 3, content: "https://www.youtube.com/watch?v=2MJGg-dUKh0")

lesson4 = Lesson.create(title: "How to make Carbonara", duration: 20, description: "This lesson covers a step-by-step tutorial on how to cook carbonara.", course_id: 4, content: "https://www.youtube.com/watch?v=qoHnwOHLiMk")

lesson5 = Lesson.create(title: "Classic Tiramisu", duration: 20, description: "Tiramisu is a classic Italian dessert that's perfect for any occasion. In this lesson, we'll learn how to make the perfect tiramisu, from scratch! We'll start with a light and fluffy mascarpone cream, then layer it with espresso-soaked ladyfingers and finish with a dusting of cocoa powder. You'll love the rich, creamy texture and bold espresso flavor of this classic dessert.", course_id: 4)

lesson6 = Lesson.create(title: "Risotto", duration: 60, description: "In this lesson, we'll learn how to make the perfect risotto, step-by-step. We'll start by making a flavorful broth, then cook the rice to a creamy consistency using traditional techniques. We'll also cover different types of risotto, including mushroom, shrimp, and saffron. Whether you're a novice or an experienced cook, you'll love the rich, comforting flavors of this classic Italian dish!", course_id: 4)

lesson7 = Lesson.create(title: "Variables and Data Types", duration: 30, description: "In this lesson, we'll learn about variables and data types in programming. We'll cover the basics of declaring and assigning variables, and discuss the different data types available in most programming languages, such as integers, floats, and strings. Whether you're a complete beginner or just need a refresher, you'll be ready to start programming in no time!", course_id: 1)

lesson8 = Lesson.create(title: "Loops and Conditionals", duration: 45, description: "In this lesson, we'll learn about loops and conditionals in programming. We'll cover the different types of loops, including while and for loops, and discuss how to use conditionals, such as if-else statements, to control program flow. We'll also look at some common programming challenges and how to solve them using loops and conditionals. Whether you're new to programming or just need to brush up on your skills, you'll find this lesson informative and engaging.", course_id: 1)

lesson9 = Lesson.create(title: "Greetings and Introductions", duration: 45, description: "“In this lesson, we'll learn basic Korean greetings and introductions. We'll cover common phrases as well as some essential cultural tips for using these phrases in Korean society. We'll also learn how to ask and answer simple questions about personal information, like titles and professions. By the end of this lesson, you'll be able to confidently greet and introduce yourself in Korean!”", course_id: 2)

lesson10 = Lesson.create(title: "Sun Salutation A", duration: 20, description: "In this lesson, we'll learn the foundational yoga sequence known as Sun Salutation A. We'll break down each of the poses in the sequence, including Mountain Pose, Forward Fold, Plank, and Upward-Facing Dog. We'll also discuss proper alignment and breathing techniques to help you flow through the sequence with ease. Whether you're new to yoga or looking to refine your practice, Sun Salutation A is a great place to start!", course_id: 3)

lesson11 = Lesson.create(title: "Introduction to Color Theory", duration: 30, description: "Learn the basics of color theory, including the color wheel, color schemes, and color psychology.", course_id: 9, content: "https://www.youtube.com/watch?v=Eq3JrRe29qk")

lesson12 = Lesson.create(title: "Organizing Your Speech", duration: 45, description: "Learn how to organize your speech effectively, including the introduction, body, and conclusion.", course_id: 10, content: "https://www.youtube.com/watch?v=6iHXsPfH0Rw")

lesson13 = Lesson.create(title: "Introduction to Spanish Grammar", duration: 60, description: "Learn the basics of Spanish grammar, including verb conjugation, noun gender, and sentence structure.", course_id: 8, content: "https://www.youtube.com/watch?v=XKt11z3MqJk")

lesson14 = Lesson.create(title: "Introduction to Mindfulness Meditation", duration: 30, description: "Learn the basics of mindfulness meditation, including breathing techniques and body awareness.", course_id: 7, content: "https://www.youtube.com/watch?v=mMMerxh_12U")

lesson15 = Lesson.create(title: "Meditation for Stress Reduction", duration: 45, description: "Learn how to use meditation as a tool for reducing stress and promoting relaxation.", course_id: 7, content: "https://www.youtube.com/watch?v=5n9QvjnE-5o")

lesson16 = Lesson.create(title: "Developing Your Writing Style", duration: 60, description: "Learn how to develop your writing style and find your unique voice as a writer.", course_id: 6, content: "https://www.youtube.com/watch?v=XEmAEl6UqM8")

lesson17 = Lesson.create(title: "Crafting Compelling Characters", duration: 45, description: "Learn how to create believable and engaging characters in your writing.", course_id: 6, content: "https://www.youtube.com/watch?v=L67y6Wibnes")

lesson18 = Lesson.create(title: "Introduction to Entrepreneurship", duration: 30, description: "This lesson provides an overview of what entrepreneurship is and the key skills and characteristics needed to be a successful entrepreneur.", course_id: 11, content: "https://www.youtube.com/watch?v=UxGrA3MbpXM")

lesson19 = Lesson.create(title: "Identifying Business Opportunities", duration: 45, description: "This lesson covers how to identify business opportunities and evaluate their potential for success.", course_id: 11, content: "https://www.youtube.com/watch?v=5eDQ5G14Ndw")

lesson20 = Lesson.create(title: "Developing a Business Plan", duration: 60, description: "This lesson covers the key elements of a business plan and how to develop one for your own business idea.", course_id: 11, content: "https://www.youtube.com/watch?v=_1r-AbPMbq8")

lesson21 = Lesson.create(title: "Social Media Marketing for Small Businesses", duration: 25, description: "This lesson covers the basics of social media marketing for small businesses, including creating engaging content and reaching your target audience.", course_id: 12, content: "https://www.youtube.com/watch?v=LH6c7VzrLr8")

lesson22 = Lesson.create(title: "Email Marketing for Small Businesses", duration: 30, description: "This lesson covers the basics of email marketing for small businesses, including creating effective email campaigns and building your email list.", course_id: 12, content: "https://www.youtube.com/watch?v=Y8SSbwg6Hro")

lesson23 = Lesson.create(title: "Lesson Planning for Teaching English", duration: 30, description: "This lesson covers the basics of lesson planning for teaching English to non-native speakers.", course_id: 13, content: "https://www.youtube.com/watch?v=7YjYkzNUC8s")

lesson24 = Lesson.create(title: "Teaching English Grammar", duration: 45, description: "This lesson covers the essentials of teaching English grammar to non-native speakers.", course_id: 13, content: "https://www.youtube.com/watch?v=6wYmCuzmMlM")

lesson25 = Lesson.create(title: "Designing Effective Online Learning Activities", duration: 30, description: "This lesson covers best practices for designing engaging online learning activities, including discussion boards, quizzes, and interactive assignments.", course_id: 14, content: "https://www.youtube.com/watch?v=_Zv-VD0JD6o")

lesson26 = Lesson.create(title: "Managing Online Classroom Interactions", duration: 45, description: "This lesson covers strategies for managing student interactions in an online classroom, including establishing guidelines, facilitating discussions, and addressing conflicts.", course_id: 14, content: "https://www.youtube.com/watch?v=3EDr6u_kffE")

lesson27 = Lesson.create(title: "Introduction to Atoms", duration: 30, description: "This lesson covers the basics of atoms, including their structure and properties.", course_id: 14, content: "https://www.youtube.com/watch?v=yoXrJTZmTzs")

lesson28 = Lesson.create(title: "Chemical Reactions 101", duration: 45, description: "This lesson covers the basics of chemical reactions, including types of reactions and balancing equations.", course_id: 14, content: "https://www.youtube.com/watch?v=XjMkMfzVWZg")
# review1 = Review.create(user_id: 4, course_id: 4, content: "I absolutely loved this course! The recipes were Beginner to follow and the instructor's passion for Italian cooking really shone through. Can't wait to impress my friends and family with my newfound skills in the kitchen.")

# review2 = Review.create(user_id: 5, course_id: 2, content:"I absolutely loved this course! The recipes were Beginner to follow and the instructor's passion for Italian cooking really shone through. Can't wait to impress my friends and family with my newfound skills in the kitchen." )

# review3 = Review.create(user_id:8 , course_id:3 , content:"This course was exactly what I needed to jumpstart my yoga practice. The instructor was patient and encouraging, and the lessons were designed to build upon each other.")

# review4 = Review.create(user_id: 10, course_id: 1, content: "I had always been interested in coding but didn't know where to start. This course was exactly what I needed. The projects were challenging but doable, and the instructor was always available to answer any questions I had.")

5.times do
    EnrolledCourse.create(user_id: User.all.sample.id, course_id: Course.all.sample.id, enrolled: true)
end

5.times do
    UserLikedCourse.create(user_id: User.all.sample.id, course_id: Course.all.sample.id)
end

puts "✅ Done seeding!"