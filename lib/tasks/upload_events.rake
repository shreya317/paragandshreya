require 'csv'

desc 'Upload events'
task :upload_events, [:filename] => [:environment] do |t, args|
  file = args[:filename]

  CSV.foreach(file, :headers => true) do |row|
    event_name = row['Event']
    event_args = {
      event_name: event_name
    }
    Event.create(event_args)
  end
end
