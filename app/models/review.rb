class Review < ApplicationRecord
    belongs_to :user
    belongs_to :course

    validates :content, presence: true, length: { minimum: 10}

end
