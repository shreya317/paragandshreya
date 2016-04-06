module ApplicationHelper

  def countdown
    wedding_day = Date.parse("5/8/2016")
    today = Date.today
    return (wedding_day - today).to_i
  end

  def current_user
    @guest ||= Guest.find(session[:guest_id])
  end

end
