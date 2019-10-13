class User < ApplicationRecord
    has_many :worlds
    validates :name, :ship, presence: true, uniqueness: true
end
