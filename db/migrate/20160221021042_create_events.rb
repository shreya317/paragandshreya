class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :event_name, null: false
      t.string :date, null: false
      t.string :time, null: false
      t.string :location, null: false

      t.timestamps null: false
    end
  end
end
