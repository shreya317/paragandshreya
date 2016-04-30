class WeddingpartyController < ApplicationController
  def index
    make_image_paths
    @images = @image_pages
  end

  def make_image_paths
    anil    = ActionController::Base.helpers.image_path('weddingparty/anil.jpg')
    chirag  = ActionController::Base.helpers.image_path('weddingparty/chirag-compressor.jpg')
    dhruvil = ActionController::Base.helpers.image_path('weddingparty/dhruvil-compressor.jpg')
    harsh   = ActionController::Base.helpers.image_path('weddingparty/harsh-compressor.jpg')
    keya    = ActionController::Base.helpers.image_path('weddingparty/keya-compressor.jpg')
    khush   = ActionController::Base.helpers.image_path('weddingparty/khush.jpg')
    mayur   = ActionController::Base.helpers.image_path('weddingparty/mayur.jpg')
    melissa = ActionController::Base.helpers.image_path('weddingparty/melissa-compressor.jpg')
    mital   = ActionController::Base.helpers.image_path('weddingparty/mital.jpg')
    navin   = ActionController::Base.helpers.image_path('weddingparty/navin-compressor.jpg')
    neema   = ActionController::Base.helpers.image_path('weddingparty/neema.jpg')
    nimu    = ActionController::Base.helpers.image_path('weddingparty/nimu.jpg')
    nita    = ActionController::Base.helpers.image_path('weddingparty/nita.jpg')
    parag   = ActionController::Base.helpers.image_path('weddingparty/parag-compressor.jpg')
    prerna  = ActionController::Base.helpers.image_path('weddingparty/prerna.jpg')
    rasila  = ActionController::Base.helpers.image_path('weddingparty/rasila-compressor.jpg')
    rina    = ActionController::Base.helpers.image_path('weddingparty/rina-compressor.jpg')
    shaan   = ActionController::Base.helpers.image_path('weddingparty/shaan-compressor.jpg')
    shreya  = ActionController::Base.helpers.image_path('weddingparty/shreya-compressor.jpg')
    sujay   = ActionController::Base.helpers.image_path('weddingparty/sujay-compressor.jpg')
    tejas   = ActionController::Base.helpers.image_path('weddingparty/tejas.jpg')
    vivek   = ActionController::Base.helpers.image_path('weddingparty/vivek-compressor.jpg')
    zah     = ActionController::Base.helpers.image_path('weddingparty/zah-compressor.jpg')

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
