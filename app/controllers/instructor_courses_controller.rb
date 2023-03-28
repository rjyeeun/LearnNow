class InstructorCoursesController < ApplicationController
    
    def show_all
        user = User.includes(instructor_courses: { course: :lessons }).find_by!(id: params[:user_id])
        instructor_courses = user.instructor_courses
    
        render json: instructor_courses, status: :ok
    end
end
