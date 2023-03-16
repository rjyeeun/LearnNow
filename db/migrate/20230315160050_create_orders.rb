class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :course_id
      t.date :purchased_date

      t.timestamps
    end
  end
end
