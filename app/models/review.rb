class Review < ApplicationRecord
    belongs_to :user
    belongs_to :course

    validates_presence_of :content
    validates :content, length: { minimum: 10}
    validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
end
