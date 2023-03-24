class AddThumbnailImgToCourse < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :thumbnail_img, :string
  end
end
