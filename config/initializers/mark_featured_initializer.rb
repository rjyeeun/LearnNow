# config/initializers/mark_featured_initializer.rb

Rails.application.config.after_initialize do
    if Rails.env.production?
        # Course.mark_featured
    end
end
  