class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # skip_before_action :authorized, only: [:index, :show]
    def mark_featured
        featured_courses = Course.mark_featured
        render json: featured_courses, status: :ok
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
    
    def find_course
        Course.find(params[:id])
    end

    def course_params
        params.permit(:title, :description, :category, :price, :instructor_id, :difficulty).with_defaults(instructor_id: session[:user_id])
    end

    def instructor_course_params(course)
        params.permit(:user_id, :course_id).with_defaults(user_id: session[:user_id], course_id: course.id)
    end

    def render_unprocessable_entity_response(error)
        render json: { errors: "Please fill out all required fields" }, status: :unprocessable_entity
    end
end

