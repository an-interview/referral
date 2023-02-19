class ReferralEmailMailer < ApplicationMailer
  def referral_email
    sender = params[:sender]
    receiver = params[:receiver]

    mail(to: receiver,
         from: sender,
         subject: 'Referring this good application.')
  end
end
