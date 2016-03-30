class Guest < ActiveRecord::Base
  # validates :email, uniqueness: true
  belongs_to :family
  has_many :rsvps
end
