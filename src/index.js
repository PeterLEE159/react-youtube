import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCzdgbb_TYNNfsMKnG8dqHO35Ubzzr3rD0';


class App extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	'videos': [ ],
	  	'selectedVideo' : null,
	  };

	  this.searchVideo('something');
	}

	searchVideo(term) {
		YTSearch({ key: API_KEY, temp: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0],
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={(term) => searchVideo(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
					videos={this.state.videos}/>
			</div>
		);
	}

}


ReactDOM.render(<App />, document.querySelector('.container'));