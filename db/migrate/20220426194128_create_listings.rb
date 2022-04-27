class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.datetime :check_in_date, null: false
      t.datetime :check_out_date, null: false
      t.integer :max_num_guests, null: false
      t.integer :num_beds, null: false
      t.integer :num_baths, null: false
      t.text :description, null: false
      t.integer :price_per_night, null: false 

      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :address, unique: true

  end
end
