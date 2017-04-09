import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li  className="list-group-item">
			<div onClick={() => onVideoSelect(video) }>
				<div>
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div clasName="media-heading">
						{video.snippet.title}
					</div>
				</div>

			</div>			
		</li>
	);
};

export default VideoListItem;