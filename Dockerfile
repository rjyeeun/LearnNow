# Dockerfile
FROM ruby:2.7.4

# Install dependencies
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs

# Set working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock
# COPY Gemfile Gemfile.lock ./

# Install gems
RUN gem install bundler && bundle install --jobs 20 --retry 5

# Copy application code
COPY . ./

# Start the Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]

