class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :duration, :course_id
end
