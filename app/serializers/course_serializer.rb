class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :price, :instructor_id, :difficulty

  has_many :reviews
end
