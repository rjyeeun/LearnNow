class Lesson < ApplicationRecord
    belongs_to :course

    validates :name, :duration, :description, presence: true
    validates :name, length: { minimum: 5}
    validates :description, length: {minimum: 10}
    
end
