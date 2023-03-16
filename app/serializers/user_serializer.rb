class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest

  has_many :enrolled_courses
  has_many :reviews
  has_many :instructor_courses
end
