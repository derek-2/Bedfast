class Api::UsersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      login(@user)
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
