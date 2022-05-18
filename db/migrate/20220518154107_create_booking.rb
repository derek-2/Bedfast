class CreateBooking < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false
      t.integer :num_guests, null: false
      t.float :total_price, null: false
      
      t.timestamps
    end
    add_index :bookings, [:guest_id, :listing_id]
  end
end
