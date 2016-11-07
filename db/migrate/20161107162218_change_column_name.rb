class ChangeColumnName < ActiveRecord::Migration
  def change
    change_table :tweets do |t|
      t.rename :tweet_body, :body
    end
  end
end
