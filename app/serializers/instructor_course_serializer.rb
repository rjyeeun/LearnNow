class InstructorCourseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :course_id

  belongs_to :course
  has_many :lessons

  def lessons
    object.course.lessons.map do |lesson|
      LessonSerializer.new(lesson).as_json
    end
  end
end
