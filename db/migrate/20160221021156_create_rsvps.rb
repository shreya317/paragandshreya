class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.references :guest, index: true, null: false
      t.references :event, index: true, null: false
      t.string :status, default: '--'

      t.timestamps null: false
    end
    add_foreign_key :rsvps, :guests
    add_foreign_key :rsvps, :events
  end
end
