class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.float :overall_rating, null: false
      t.text :body, null: false
      t.integer :cleanliness, null: false
      t.integer :accuracy, null: false
      t.integer :communication, null: false
      t.integer :location, null: false
      t.integer  :check_in, null: false
      t.integer :value, null: false

      t.timestamps
    end
    add_index :reviews, :listing_id
    add_index :reviews, :guest_id

  end
end
