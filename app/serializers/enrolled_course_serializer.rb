class EnrolledCourseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :course_id, :enrolled

  belongs_to :course
  has_many :user_liked_courses
  has_many :lessons
  has_many :reviews

  def user_liked_courses
    object.course.user_liked_courses.map do |ulc|
      UserLikedCourseSerializer.new(ulc).as_json
    end
  end

  def lessons
    object.course.lessons.map do |lesson|
      LessonSerializer.new(lesson).as_json
    end
  end

  def reviews
    object.course.reviews.map do |review|
      ReviewSerializer.new(review).as_json
    end
  end
end
