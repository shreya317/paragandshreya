class Guest < ActiveRecord::Base
  belongs_to :family
  has_many :rsvps
end
