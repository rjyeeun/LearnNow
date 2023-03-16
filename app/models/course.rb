class Course < ApplicationRecord
    has_many :orders
    has_many :users, through: :orders
    has_many :lessons
    has_many :reviews
    has_many :users, through: :reviews
    has_one :instructor_course, dependent: :destroy
    has_one :user, through: :instructor_course
    has_many :enrolled_courses
    has_many :users, through: :enrolled_courses

    validates :name, :description, :category, :price, :instructor_id, :difficulty, presence: true
    validates :name, length: {minimum: 5}
    validates :description, length: {minimum: 10}
    validates :price, numericality: { greater_than_or_equal_to: 0}
end
