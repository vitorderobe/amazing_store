source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.0"

gem "rails", "~> 7.0.4", ">= 7.0.4.2"
gem "sprockets-rails"
gem "sqlite3", "~> 1.4"
gem "puma", "~> 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "redis", "~> 4.0"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false

# Solidus
gem "solidus_auth_devise", "~> 2.5"
# gem "solidus_core", "~> 3.3"
# gem "solidus_backend", "~> 3.3"
# gem "solidus_api", "~> 3.3"
# gem "solidus_sample", "~> 3.3"
gem 'solidus_core', '~> 3.4.0.dev', github: 'solidusio/solidus', branch: 'master'
gem 'solidus_backend', '~> 3.4.0.dev', github: 'solidusio/solidus', branch: 'master'
gem 'solidus_api', '~> 3.4.0.dev', github: 'solidusio/solidus', branch: 'master'
gem 'solidus_sample', '~> 3.4.0.dev', github: 'solidusio/solidus', branch: 'master'

gem "canonical-rails"
gem "solidus_support"
gem "truncate_html"
gem "view_component", "~> 2.46"
gem "solidus_braintree", path: "../solidus_braintree"

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
  gem "capybara-screenshot", "~> 1.0"
  gem "database_cleaner", "~> 1.7"
end

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "rspec-rails"
  gem "rails-controller-testing", "~> 1.0.5"
  gem "rspec-activemodel-mocks", "~> 1.1.0"
  gem "factory_bot", ">= 4.8"
  gem "factory_bot_rails"
  gem "ffaker", "~> 2.13"
  gem "rubocop", "~> 1.0"
  gem "rubocop-performance", "~> 1.5"
  gem "rubocop-rails", "~> 2.3"
  gem "rubocop-rspec", "~> 2.0"
  gem 'dotenv-rails'
end

group :test do
  gem "vcr"
  gem "webmock"
end
