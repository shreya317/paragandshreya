class EventsController < ApplicationController
  http_basic_authenticate_with name: "shreya", password: "shreyag", except: :index

  def index
  end

  def search
    @event_list = Event.all

    if (params[:event])
      event_name     = Event.find_by(event_name: params[:event])
      @event_rsvps   = event_name.rsvps.order(status: :desc)
      @attending     = event_name.rsvps.where(status: "Yes").length
      @not_attending = event_name.rsvps.where(status: "No").length
      @no_reply      = event_name.rsvps.where(status: "--").length
    end
  end

end
