const ContactIndex = React.createClass({
  render() {
    return (
      <div>
        <a id="tothetop"></a>
        <div className="contact"></div>

        <div className="contact-info">
          <a id="tonextdiv"></a>
          <div className="row">
            <div className="contact-text">
              <div className="questions">
                <p>Thank you for visiting our wedding website.</p>
                <p> Please do not hesistate to contact us with any questions or concerns.</p>
              </div>
              <h3>Parag & Shreya</h3>
                <p>
                  <a href="mailto:paragandshreya@gmail.com"><i className="fi-mail"></i>&nbsp;paragandshreya@gmail.com</a>
                </p>
              <h3>Patel Residence</h3>
                <p>
                  <a href="tel:847-965-5721"><i className="fi-telephone"></i>&nbsp;847.965.5721</a>
                </p>
              <h3>Dadhaniya Residence</h3>
                <p>
                  <a href="tel:309-797-3075"><i className="fi-telephone"></i>&nbsp;309.797.3075</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
