class CreateCompletions < ActiveRecord::Migration
  def change
    create_table :completions do |t|
      t.string :display_name

      t.timestamps
    end
  end
end
