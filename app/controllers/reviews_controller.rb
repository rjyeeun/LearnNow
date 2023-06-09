class ReviewsController < ApplicationController
   def index
    course = Course.find_by!(id: params[:course_id])
    render json: course.reviews, status: :ok
   end

   def create
        review = Review.create!(review_params)
        render json: review, status: :created
   end

   def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
   end

   private

   def review_params
        params.permit(:content, :rating, :user_id, :course_id).with_defaults(user_id: session[:user_id])
   end
end
