class EnrolledCoursesController < ApplicationController
    def show_all
        user = User.includes(enrolled_courses: { course: :user_liked_courses }).find_by!(id: params[:user_id])
        enrolled_courses = user.enrolled_courses
    
        render json: enrolled_courses, status: :ok
    end
    def create
        enrolled_course = EnrolledCourse.create!(enrolled_course_params)
        render json: enrolled_course, status: :created
    end

    def destroy
        enrolled_course = EnrolledCourse.find(params[:id])
        enrolled_course.destroy!
        head :no_content
    end

    private
    
    def enrolled_course_params
        params.permit(:user_id, :course_id).with_defaults(user_id: session[:user_id])
    end
end
