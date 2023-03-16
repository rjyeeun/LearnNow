class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :course_id, :purchased_date
end
