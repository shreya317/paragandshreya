const SongRequestsIndex = React.createClass ({
	render() {
		return (
			<div>
    		<a id="tothetop"></a>
    		{/*{<div className="song-requests"></div>}*/}

    		<div className="song-requests-form">
    		<a id="to-next-div"></a>
					<h1>Song Requests</h1>
					<form action="/songrequests" method="get">
					  <input id="search" name="search" type="text" placeholder="Enter song title" />
					  <input name="commit" type="submit" value="Search" className="button tiny"/>
					</form>
				</div>
    	</div>
		)
	}
})