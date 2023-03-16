class CreateLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :description
      t.integer :duration
      t.integer :course_id

      t.timestamps
    end
  end
end
