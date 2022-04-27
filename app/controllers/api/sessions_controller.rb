class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:fname], params[:user][:lname], params[:user][:password])
    errors=[];
    if @user.nil?
      if params[:user][:email]==""
        errors << "Email can't be blank"
      end
      if params[:user][:fname]==""
        errors << "First name can't be blank"
      end
      if params[:user][:lname]==""
        errors << "Last name can't be blank"
      end
      if params[:user][:password]==""
        errors << "Password can't be blank"
      end
      if errors.empty?
        errors=['Wrong credentials']
      end
      debugger
      render json: errors, status: 401
    else
      login(@user)
      render '/api/users/show'
    end
  end

  def destroy
    logout
    render json: {message:'successfully logged out...'}
  end

end
