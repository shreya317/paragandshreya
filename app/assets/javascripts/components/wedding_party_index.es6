const WeddingPartyIndex = React.createClass({
  renderBridesFamily(images) {
    return (
      <div className="large-6 columns bride">
        <h3>Bride's Family</h3>

        <div className="pic"><img src={images.anil} /></div>
        <p>Late Anil Patel - Father</p>

        <div className="pic"><img src={images.nita} /></div>
        <p>Nita Patel - Mother</p>

        <div className="pic"><img src={images.keya} /></div>
        <p>Keya Patel - Sister</p>

        <div className="pic"><img src={images.dhruvil} /></div>
        <p>Dhruvil Patel - Brother</p>
      </div>
    )
  },

  renderBridesmaids(images) {
    return (
      <div className="large-6 columns bride">
        <h3>Bridesmaids</h3>

        <div className="pic"><img src={images.keya} /></div>
        <p>Keya Patel</p>

        <div className="pic"><img src={images.khush} /></div>
        <p>Khushboo Doshi</p>

        <div className="pic"><img src={images.melissa} /></div>
        <p>Melissa Joseph</p>

        <div className="pic"><img src={images.mital} /></div>
        <p>Mital Patel</p>

        <div className="pic"><img src={images.neema} /></div>
        <p>Neema Parikh</p>

        <div className="pic"><img src={images.nimu} /></div>
        <p>Neemisha Patel</p>

        <div className="pic"><img src={images.prerna} /></div>
        <p>Prerna Bodalia</p>

        <div className="pic"><img src={images.rina} /></div>
        <p>Rina Soni</p>
      </div>
    )
  },

  renderGroomsFamily(images) {
    return (
      <div className="large-6 columns groom">
        <h3>Groom's Family</h3>

        <div className="pic"><img src={images.navin} /></div>
        <p>Navinchandra Dadhaniya - Father</p>

        <div className="pic"><img src={images.rasila} /></div>
        <p>Rasila Dadhaniya- Mother</p>

        <div className="pic"><img src={images.chirag} /></div>
        <p>Chirag Dadhaniya - Brother</p>
      </div>
    )
  },

  renderGroomsmen(images) {
    return (
      <div className="large-6 columns groom">
        <h3>Groomsmen</h3>

        <div className="pic"><img src={images.chirag} /></div>
        <p>Chirag Dadhaniya</p>

        <div className="pic"><img src={images.harsh} /></div>
        <p>Harsh Shah</p>

        <div className="pic"><img src={images.mayur} /></div>
        <p>Mayur Patel</p>

        <div className="pic"><img src={images.shaan} /></div>
        <p>Shaan Shah</p>

        <div className="pic"><img src={images.sujay} /></div>
        <p>Sujay Patel</p>

        <div className="pic"><img src={images.tejas} /></div>
        <p>Tejas Rawal</p>

        <div className="pic"><img src={images.vivek} /></div>
        <p>Vivek Patel</p>

        <div className="pic"><img src={images.zah} /></div>
        <p>Zahid Lodhia</p>
      </div>
    )
  },

  render() {
    const images = this.props.images
    return (
      <div>
        <a id="tothetop"></a>
        <div className="wedding-party"></div>

        <div className="wprow">
          <div className="row">
            {this.renderBridesFamily(images)}
            {this.renderGroomsFamily(images)}
          </div>
        </div>

        <div className="wprow">
          <div className="row">
            {this.renderBridesmaids(images)}
            {this.renderGroomsmen(images)}
          </div>
        </div>
      </div>
    )
  }
})
