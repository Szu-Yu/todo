class CreateUndoItems < ActiveRecord::Migration
  def change
    create_table :undo_items do |t|

      t.timestamps null: false
    end
  end
end
