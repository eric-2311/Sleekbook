class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def email  
        @user = User.find_by(email: params[:email])
        
        if @user
            render json: @user
        else
            render json: "null"
        end
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end