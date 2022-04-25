class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    # @user = User.find(params[:user][:id])
    # if @user && @user.destroy
    #   render json: {message: 'successfully deleted account'}
    # else
    #   render json: {message: '5000 level error'}
    # end
    # current_user.destroy

  end

  def user_params
    params.require(:user).permit(:id, :fname, :lname, :email, :password)
  end

end