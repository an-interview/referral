class ReferralEmail < ApplicationRecord
  belongs_to :sender, class_name: 'User'

  validates :sender, presence: true
  validates :receiver, presence: true
end
