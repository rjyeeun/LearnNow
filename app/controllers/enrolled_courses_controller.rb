class EnrolledCoursesController < ApplicationController
    def show_all
        user = User.find_by!(id: params[:user_id])
        render json: user.enrolled_courses, status: :ok
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
