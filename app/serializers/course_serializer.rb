class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :price, :instructor_id, :difficulty

  has_many :reviews
end
