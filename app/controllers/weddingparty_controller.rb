class WeddingpartyController < ApplicationController
  def index
    make_image_paths
    @images = @image_pages
  end

  def make_image_paths
    anil    = ActionController::Base.helpers.image_path('weddingparty/anil.jpg')
    chirag  = ActionController::Base.helpers.image_path('weddingparty/chirag.jpg')
    dhruvil = ActionController::Base.helpers.image_path('weddingparty/dhruvil.jpg')
    harsh   = ActionController::Base.helpers.image_path('weddingparty/harsh.jpg')
    keya    = ActionController::Base.helpers.image_path('weddingparty/keya.jpg')
    khush   = ActionController::Base.helpers.image_path('weddingparty/khush.jpg')
    mayur   = ActionController::Base.helpers.image_path('weddingparty/mayur.jpg')
    melissa = ActionController::Base.helpers.image_path('weddingparty/melissa.jpg')
    mital   = ActionController::Base.helpers.image_path('weddingparty/mital.jpg')
    navin   = ActionController::Base.helpers.image_path('weddingparty/navin.jpg')
    neema   = ActionController::Base.helpers.image_path('weddingparty/neema.jpg')
    nimu    = ActionController::Base.helpers.image_path('weddingparty/nimu.jpg')
    nita    = ActionController::Base.helpers.image_path('weddingparty/nita.jpg')
    parag   = ActionController::Base.helpers.image_path('weddingparty/parag.jpg')
    prerna  = ActionController::Base.helpers.image_path('weddingparty/prerna.jpg')
    rasila  = ActionController::Base.helpers.image_path('weddingparty/rasila.jpg')
    rina    = ActionController::Base.helpers.image_path('weddingparty/rina.jpg')
    shaan   = ActionController::Base.helpers.image_path('weddingparty/shaan.jpg')
    shreya  = ActionController::Base.helpers.image_path('weddingparty/shreya.jpg')
    sujay   = ActionController::Base.helpers.image_path('weddingparty/sujay.jpg')
    tejas   = ActionController::Base.helpers.image_path('weddingparty/tejas.jpg')
    vivek   = ActionController::Base.helpers.image_path('weddingparty/vivek.jpg')
    vivek   = ActionController::Base.helpers.image_path('weddingparty/vivek.jpg')
    zah     = ActionController::Base.helpers.image_path('weddingparty/zah.jpg')

    @image_pages = {
      "anil"    => anil,
      "chirag"  => chirag,
      "dhruvil" => dhruvil,
      "harsh"   => harsh,
      "keya"    => keya,
      "khush"   => khush,
      "mayur"   => mayur,
      "melissa" => melissa,
      "mital"   => mital,
      "navin"   => navin,
      "neema"   => neema,
      "nimu"    => nimu,
      "nita"    => nita,
      "parag"   => parag,
      "prerna"  => prerna,
      "rasila"  => rasila,
      "rina"    => rina,
      "shaan"   => shaan,
      "shreya"  => shreya,
      "sujay"   => sujay,
      "tejas"   => tejas,
      "vivek"   => vivek,
      "zah"     => zah,
    }
  end
end
