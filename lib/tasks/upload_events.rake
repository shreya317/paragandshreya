require 'csv'

desc 'Upload events'
task :upload_events, [:filename] => [:environment] do |t, args|
  file = args[:filename]

  CSV.foreach(file, :headers => true) do |row|
    event_name = row['Event']
    date       = row['Date']
    time       = row['Time']
    location   = row['Location']
    event_args = {
      event_name: event_name,
      date: date,
      time: time,
      location: location
    }
    Event.create(event_args)
  end
end
