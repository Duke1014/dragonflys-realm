class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :quantity
      t.string :style
      t.decimal :price
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
