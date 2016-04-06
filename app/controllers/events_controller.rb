class EventsController < ApplicationController
  http_basic_authenticate_with name: "shreya", password: "shreyag", except: :index

  def index
  end

  def search
    @event_list = Event.all

    if (params[:event])
      @event         = Event.find_by(event_name_underscore: params[:event])
      @event_rsvps   = @event.rsvps.order(status: :desc, updated_at: :desc)
      @attending     = @event.rsvps.where(status: "Yes").length
      @not_attending = @event.rsvps.where(status: "No").length
      @no_reply      = @event.rsvps.where(status: "--").length
    end
  end

end
