class CoursesController < ApplicationController
    
    skip_before_action :authorized, only: [:featured, :index, :show]
    
    def featured
        featured_courses = Course.where(featured: true)
        render json: featured_courses, include: [:instructor, :lessons, :user_liked_courses, :reviews]
    end

    def my_courses
        courses = current_user.courses.all
        render json: courses, status: :ok
    end

    def index
        courses = Course.all
        render json: courses, status: :ok
    end

    def show
        course = find_course
        render json: course, status: :ok
    end

    def create
        course = Course.create!(course_params)
        instructor_course = InstructorCourse.create!(instructor_course_params(course))
        render json: instructor_course, status: :created
    end

    def destroy
        course = find_course
        course.destroy!
        head :no_content
    end

    private

    def current_user
        @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
    end
      
    def find_course
        Course.find(params[:id])
    end

    def course_params
        params.permit(:title, :description, :category, :price, :instructor_id, :difficulty, :thumbnail_img).with_defaults(instructor_id: session[:user_id])
    end

    def instructor_course_params(course)
        params.permit(:user_id, :course_id).with_defaults(user_id: session[:user_id], course_id: course.id)
    end

end

