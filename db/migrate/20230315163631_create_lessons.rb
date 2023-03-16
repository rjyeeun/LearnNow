class CreateLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.string :name
      t.integer :duration
      t.string :description
      t.integer :course_id

      t.timestamps
    end
  end
end
