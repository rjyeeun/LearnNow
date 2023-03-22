class AddThumbnailImgToCourse < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :thumnail_img, :string
  end
end
