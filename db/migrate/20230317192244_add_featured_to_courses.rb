class AddFeaturedToCourses < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :featured, :boolean, default: false
  end
end
