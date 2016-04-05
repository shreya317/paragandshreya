class RsvpMailer < ApplicationMailer
  default from: "paragandshreya@gmail.com"

  def send_confirmation_email(guest)
    @guest = guest
    mail(to: guest.email, subject: "RSVP Confirmation | Parag & Shreya's Wedding")
  end

  def send_alert_email(guest)
    @guest = guest
    subject = "RSVP from" + " " + guest.first_name + " " + guest.last_name
    mail(to: "paragandshreya@gmail.com", subject: subject)
  end
end