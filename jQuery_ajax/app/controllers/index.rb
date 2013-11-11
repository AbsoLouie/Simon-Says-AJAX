get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Create and return a JSON object with the random cell and color given below.
  if request.xhr?
    cell  = rand(0..8)
    color = "#" + "%06x" % (rand * 0xffffff)
    {:cell => cell, :color => color}.to_json
  end
end