class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :price, :instructor_id, :difficulty, :featured, :thumnail_img

  has_many :lessons
  has_many :user_liked_courses
  has_many :reviews
end
