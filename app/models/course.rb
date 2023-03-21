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

    def self.mark_featured
        courses = Course.all
        courses_with_ratings = courses.select { |course| course.reviews.average(:rating).present? }
        courses_with_ratings.sort_by! { |course| -course.reviews.average(:rating).to_f }
        featured_courses = courses_with_ratings.take(2)
        featured_courses.each do |course|
            course.update(featured: true)
        end
        featured_courses
    end
end
