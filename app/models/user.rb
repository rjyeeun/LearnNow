class User < ApplicationRecord
    has_many :reviews
    has_many :courses, through: :reviews
    has_many :user_liked_courses
    has_many :courses, through: :user_liked_courses
    has_many :enrolled_courses
    has_many :instructor_courses
    has_many :courses, through: :instructor_courses
    has_secure_password
 
 
    validates :username, presence: true, uniqueness: true, length: { minimum: 2}
    VALID_EMAIL_REGEX= /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i
    validates :email , presence: true, uniqueness:{case_sensetive:false},
    format:{with:VALID_EMAIL_REGEX,multiline:true}
    validates :password, presence: true, length: { in: 6..20 }
    VALID_NAME_REGEX = /^[A-Za-z]+([\ A-Za-z]+)*/
    validates :name, presence:true, format:{with:VALID_NAME_REGEX, multiline:true}
 
 
    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number
 
 
    def password_uppercase
        return unless password.present?
        return if !password.match(/\p{Upper}/)
        errors.add :password, ' must contain at least 1 uppercase '
    end
 
 
    def password_lower_case
        return unless password.present?
        return if !password.match(/\p{Lower}/)
        errors.add :password, ' must contain at least 1 lowercase '
      end
 
 
    def password_special_char
        special = "?<>',?[]}{=-)(*&^%$#`~{}!"
        regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
        return if password =~ regex
        errors.add :password, ' must contain special character'
    end
 
 
    def password_contains_number
        return if password && password.count("0-9") > 0
        errors.add :password, ' must contain at least one number'
    end
 end
 