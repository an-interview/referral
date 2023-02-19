class CreateReferralEmails < ActiveRecord::Migration[7.0]
  def change
    create_table :referral_emails do |t|
      t.references :sender, null: false
      t.text :receiver, null: false
      t.text :subject
      t.text :body

      t.timestamps
    end

    add_foreign_key :referral_emails, :users, column: :sender_id
  end
end
