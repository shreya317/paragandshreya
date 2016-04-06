class AddEventNamesUnderscoreToEvents < ActiveRecord::Migration
  def change
    add_column :events, :event_name_underscore, :string
  end
end
