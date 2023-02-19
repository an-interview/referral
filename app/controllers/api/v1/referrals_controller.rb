class Api::V1::ReferralsController < ApplicationController
  before_action :authenticate_user!, except: [:welcome]

  def welcome; end

  def new
    @referral_email = ReferralEmail.new
  end

  def index
    @referred_emails = ReferralEmail.where(sender: current_user).page(params[:page]).per(50)
  end

  def create
    @referral_email = ReferralEmail.new(referral_emails_params)
    @referral_email.sender = current_user

    begin
      @referral_email.save!
      ReferralEmailMailer.with(sender: current_user.email,
                               receiver: @referral_email.receiver).referral_email.deliver_now
      # TODO implement action mailer
      # @referral_email.send_now
      flash[:notice] = 'Email Sent Successfully.'
      redirect_to api_v1_referrals_path
    rescue ActiveRecord::RecordInvalid => e
      flash[:alert] = e
      redirect_to new_api_v1_referral_path
    end
  end

  private

  def referral_emails_params
    params.require(:referral_email).permit(:receiver)
  end
end
