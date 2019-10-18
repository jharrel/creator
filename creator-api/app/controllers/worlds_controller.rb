class WorldsController < ApplicationController
  before_action :set_world, only: [:show, :update, :destroy]

  # GET /worlds
  def index
    @worlds = World.all

    render json: @worlds, include: [:user]
  end

  # GET /worlds/1
  def show
    render json: @world
  end

  # POST /worlds
  def create
    @user = User.find_or_create_by(user_params)
    @world = @user.worlds.build(world_params)

    if @world.save
      render json: @world, include: [:user], status: :created, location: @world
    else
      render json: @world.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /worlds/1
  def update
    if @world.update(world_params)
      render json: @world
    else
      render json: @world.errors, status: :unprocessable_entity
    end
  end

  # DELETE /worlds/1
  def destroy
    @world = World.find(params[:id])
    @world.destroy

  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_world
      @world = World.find_by_id(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :ship)
    end

    # Only allow a trusted parameter "white list" through.
    def world_params
      params.require(:world).permit(:planet, :content, :user_id)
    end
end
