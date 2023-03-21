class AddFeaturedToCourses < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :featured, :boolean
  end
end
