class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :description
      t.string :category
      t.float :price
      t.integer :instructor_id
      t.string :difficulty

      t.timestamps
    end
  end
end
