class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :name

  has_many :courses, through: :instructor_courses
end
