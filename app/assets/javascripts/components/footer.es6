const Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <div className="row">
          Powered by Shreya & Parag <img width={35} height={35} src={this.props.image} />
        </div>
      </div>
    )
  }
})
