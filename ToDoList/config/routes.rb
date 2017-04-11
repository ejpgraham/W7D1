Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api do
    resources :todos,
    only: [:create, :show, :index, :update, :destroy],
    defaults: {format: :json}
  end

end
