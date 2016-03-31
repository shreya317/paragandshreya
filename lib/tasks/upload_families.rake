require 'csv'

desc 'Upload families'
task :upload_families, [:filename] => [:environment] do |t, args|
  file = args[:filename]

  CSV.foreach(file, :headers => true) do |row|
    family_name = row['Family']
    family_args = {
      family_name: family_name
    }
    Family.create(family_args)
  end
end
