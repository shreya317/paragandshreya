const WeddingPartyIndex = React.createClass({
  renderBride(images) {
    return (
      <div className="medium-6 columns bride bio">  
        <div className="pic"><img src={images.shreya} /></div>
        <h5><i>Shreya Patel</i></h5>
        <ul>
          <li>Born on December 5th, 1987, in Kisumu, Kenya</li>
          <li>Works as a Software Engineer at Sprout Social</li>
        </ul>

        <h5 className="q">What's quirky about Parag?</h5> 
        <p>He doesn't like to mix his milk and cereal together. He eats it separately.</p>
        <h5 className="q">What's the one thing you're most looking forward to after marriage?</h5> 
        <p>No more separation anxiety from Parag.</p>  
      </div>
    )
  },

  renderGroom(images) {
    return (
      <div className="medium-6 columns groom bio">  
        <div className="pic"><img src={images.parag} /></div>
        <h5><i>Parag Dadhaniya</i></h5>
        <ul>
          <li>Born on November 4th, 1987, in Rock Island, IL</li>
          <li>Works as a Software Engineer at Trunk Club</li>
        </ul>
        <h5 className="q">What's quirky about Shreya?</h5> 
        <p>During the winter, she turns the temperature up at home to 74 and still keeps the space heater on.</p>
        <h5 className="q">What's the one thing you're most looking forward to after marriage?</h5> 
        <p>Living together with Shreya.</p>
      </div>
    )
  }, 
  renderBridesFamily(images) {
    return (
      <div className="large-6 columns bride">
        <h3>Bride&apos;s Family</h3>
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
        <h3>Groom&apos;s Family</h3>
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
            <a id="to-next-div"></a>
            <h3 className="couple">Meet the Couple</h3>
            {this.renderBride(images)}
            {this.renderGroom(images)}
          </div>
        </div>
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
