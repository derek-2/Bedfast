class EditUserModel < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :about_me, :text
  end
end
