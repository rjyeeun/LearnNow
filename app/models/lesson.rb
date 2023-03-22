class Lesson < ApplicationRecord
    belongs_to :course

    validates :title, :duration, :description, :content, presence: true
    validates :title, length: { minimum: 5}
    validates :description, length: { minimum: 10}
    validates :duration, numericality: { greater_than: 0}
end
