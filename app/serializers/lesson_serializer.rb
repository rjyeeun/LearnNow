class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :duration, :content, :course_id
end
