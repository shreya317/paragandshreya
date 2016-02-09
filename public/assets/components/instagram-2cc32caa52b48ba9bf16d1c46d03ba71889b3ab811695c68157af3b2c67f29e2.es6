
const Instagram = React.createClass({
  renderPosts() {
    let pics = this.props.instagrams
    let pictures = _.map(pics, (pic) => {
      return (
        <div key={pic.id} className="large-6 columns">
          <a className="ig-link" href={pic.link} target="_blank">
            <img className="ig-pic" src={pic.images.standard_resolution.url}/>
          </a>
          <p className="ig-user"> <b>{pic.user.username}</b></p>
          <p className="ig-caption"> {pic.caption.text}</p>
        </div>
      )
    })
    return pictures
  },

  renderInstagramFeed() {
    return (
      <div className="large-6 columns">
        <h3>Live Instagram Feed</h3>
        <div className="ig-feed">
          {this.renderPosts()}
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
