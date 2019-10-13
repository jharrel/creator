class World < ApplicationRecord
  belongs_to :user
  validates_presence_of :planet, :content
  validates_uniqueness_of :planet, :content
end
