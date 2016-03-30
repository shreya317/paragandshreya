require 'csv'

desc 'Upload guests'
task :upload_guests, [:filename] => [:environment] do |t, args|
  file = args[:filename]

  CSV.foreach(file, :headers => true) do |row|
    first_name = row['first_name']
    last_name = row['last_name']
    full_name = row['full_name']
    zip = row['zip']
    family = Family.find_by(family_name: row['family'])
    guest_args = {
      first_name: first_name,
      last_name: last_name,
      full_name: full_name,
      zip: zip,
      family: family
    }
    guest = Guest.new(guest_args)
    guest.save!
    Rsvp.create(guest: guest, event_id: 1) if row["a"] == 'yes'
    Rsvp.create(guest: guest, event_id: 2) if row["b"] == 'yes'
    Rsvp.create(guest: guest, event_id: 3) if row["c"] == 'yes'
    Rsvp.create(guest: guest, event_id: 4) if row["d"] == 'yes'
    Rsvp.create(guest: guest, event_id: 5) if row["e"] == 'yes'
    Rsvp.create(guest: guest, event_id: 6) if row["f"] == 'yes'
  end
end
