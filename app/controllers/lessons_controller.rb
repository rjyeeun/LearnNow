class LessonsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def show
        lesson = find_lesson
        render json: lesson, status: :ok
    end

    def show_all
        course = Course.find_by!(id: params[:course_id])
        render json: course.lessons, status: :ok
    end

    def create
        lesson = Lesson.create!(lesson_params)
        render json: lesson, status: :created
    end

    def update
        lesson = find_lesson
        lesson.update!(lesson_params)
        render json: lesson, status: :accepted
    end

    def destroy
        lesson = find_lesson
        lesson.destroy!
        head :no_content
    end

    private

    def find_lesson
        Lesson.find(params[:id])
    end

    def lesson_params
        params.permit(:title, :description, :duration, :course_id)
    end

    def render_unprocessable_entity_response(error)
        render json: { errors: error.message}, status: :unprocessable_entity
    end
end
