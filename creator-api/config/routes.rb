Rails.application.routes.draw do
  



  scope :api do
    resources :users, except: [:edit, :new]
    resources :worlds, except: [:edit, :new]
  end

end
