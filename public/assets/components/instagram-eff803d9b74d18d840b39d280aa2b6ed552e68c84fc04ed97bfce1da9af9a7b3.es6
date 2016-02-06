
const Instagram = React.createClass({
  renderImages() {
    let pics = this.props.instagrams
    let pictures = _.map(pics, (pic) => {
      return (
        <img key={pic.id} className="ig-pic" src={pic.images.standard_resolution.url} />
      )
    })
    return pictures
  },

  renderInstagramFeed() {
    return (
      <div className="large-6 columns">
        <h3>Live Instagram Feed</h3>
        <div className="ig-feed">
          {this.renderImages()}
        </div>
      </div>
    )
  },

  render() {
    return (
      <div>
        {this.renderInstagramFeed()}
      </div>
    )
   } 
})
