class Review < ApplicationRecord
    belongs_to :user
    belongs_to :course

    validates_presence_of :content
    validates :content, length: { minimum: 10}
end
