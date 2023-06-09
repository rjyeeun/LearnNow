class InstructorCourse < ApplicationRecord
    belongs_to :course
    belongs_to :user

    validates :course_id, :user_id, presence: true
end
