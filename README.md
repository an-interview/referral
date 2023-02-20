# README

## Setup
- Setup your SMTP Gmail credentials in `environments/development.rb` OR `environments/production.rb`.
- Set  `ENV['SMTP_USERNAME']` and `ENV['SMTP_PASSWORD']` with your Gmail.com's username and password respectively.
- Set `DEVISE_JWT_SECRET_KEY` with output of `rake secret`
- Run `EDITOR=vim rails credentials:edit` to Open credentials file and add your MySQL database username and password
- Run `RAILS_ENV=development bin/bundle exec rails db:create` to create MySQL Database
- Run `RAILS_ENV=development bin/bundle exec rails db:migrate` to migrate database.
- Run `RAIRS_ENV=development bin/dev` to run development server and then visit `http://localhost:3000`
- Replace `development` with `production` in above commands as required
