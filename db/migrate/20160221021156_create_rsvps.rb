class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.references :guest, index: true
      t.references :event, index: true
      t.string :status

      t.timestamps null: false
    end
    add_foreign_key :rsvps, :guests
    add_foreign_key :rsvps, :events
  end
end
