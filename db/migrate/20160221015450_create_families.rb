class CreateFamilies < ActiveRecord::Migration
  def change
    create_table :families do |t|
      t.string :family_name, null: false
      t.string :message

      t.timestamps null: false
    end
  end
end
