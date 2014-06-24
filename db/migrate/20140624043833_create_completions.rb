class CreateCompletions < ActiveRecord::Migration
  def change
    create_table :completions do |t|
      t.string :display_name
      
      t.string: Zach Kaufman & Karyn Vilbig

      t.timestamps
    end
  end
end
