class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :full_name, null: false
      t.string :email
      t.string :zip, null: false
      t.references :family, index: true

      t.timestamps null: false
    end
    add_foreign_key :guests, :families
  end
end
