class CreateEnrolledCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :enrolled_courses do |t|
      t.integer :user_id
      t.integer :course_id
      t.boolean :enrolled

      t.timestamps
    end
  end
end
