class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :course_id, :content
end
