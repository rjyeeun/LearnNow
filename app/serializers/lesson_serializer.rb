class LessonSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :description, :course_id
end
