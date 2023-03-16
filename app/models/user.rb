class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Devise::JWT::RevocationStrategies::JTIMatcher
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  enum role: %i[student admin]

  has_many :orders
  has_many :courses, through: :orders
  has_many :reviews
  has_many :courses, through: :reviews
  has_many :instructor_courses
  has_many :courses, through: :intructor_courses
  has_many :enrolled_courses
  has_many :courses, through: :enrolled_courses
end
