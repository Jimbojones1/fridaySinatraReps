require 'bundler'
Bundler.require()

get '/' do
  erb :login
end


post '/taco' do

  p "---------------"
  p params
  p "---------------"
  @message = "form is submitted"
  erb :response
end
