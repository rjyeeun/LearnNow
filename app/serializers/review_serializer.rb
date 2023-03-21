class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :course_id, :content, :rating

  belongs_to :course
  belongs_to :user
end
