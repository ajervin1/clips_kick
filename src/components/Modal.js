function LikeButton( {likes} ) {
	return <button className={'like-button secondary-button p-1 rounded btn text-center'}>
		<i className="fa fa-thumbs-up me-1 "></i><span className={'like-count text-xs'}>{likes}</span>
	</button>
}

export default function Modal( { showModal, selectedClip, toggleModal } ) {
	if ( !showModal ) {
		return null
	}
	return <article style={{display: "block"}} className="modal show" id={ 'modal' }>
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content  shadow  primary-border">
				<div className="modal-header justify-content-start d-flex align-items-center border-0">
					<div className="avatar-container me-2">
						<img className={'avatar'} src={selectedClip.creator.profile_picture} alt=""/>
					</div>
					<div className="user-info">
						<h6 className={'fs-xl text-white'}>{selectedClip.creator.username}</h6>
						<h6 className={'fs-md letter-space-neg text-white'}>{selectedClip.views}<span className="text-muted"> views</span></h6>
					</div>
				</div>
				<div className="modal-body border-0 p-0">
					<video src={selectedClip.video_url}></video>
				</div>
				<div className="modal-footer border-0  d-flex justify-content-between align-items-center">
					<h6 className={'fs-xl text-white'}>{selectedClip.title}</h6>
					<div className="actions">
						<LikeButton likes={selectedClip.likes} />
						<button onClick={() =>{ toggleModal() }} type="button" className="ms-3 btn primary-button p-1" data-dismiss="modal">Close
						<i className="fa fa-close ms-1"></i>
						</button>
					</div>
				</div>
			</div>
		</div>

	</article>
}