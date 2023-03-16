class Course < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    has_many :user_liked_courses
    has_many :users, through: :user_liked_courses
    has_one :user, through: :enrolled_courses
    has_many :lessons, dependent: :destroy

    validates_presence_of :title, :description, :category, :price, :difficulty
    validates :title, length: { minimum: 5}
    validates :description, length: { minimum: 10}
    validates :price, numericality: { greater_than_or_equal_to: 0 }
end
