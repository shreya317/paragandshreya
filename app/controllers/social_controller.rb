class SocialController < ApplicationController
  def index
    ig_posts = Instagram.tag_recent_media("ParagAndShreya")
    @pics = []
    ig_posts.each do |p|
      @pics << p.images.standard_resolution.url
    end
  end
end
