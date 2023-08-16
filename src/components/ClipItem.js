import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import {TransitionGroup}from 'react-transition-group'; // ES6
const clip = {
	"id": "clip_01H2G3FHQG4FVSCRD9D0MYNZ1Z",
	"livestream_id": "3248895",
	"category_id": "3",
	"channel_id": 212083,
	"user_id": 1448480,
	"title": "Kick is easier to switchover than YT",
	"clip_url": "https://clips.kick.com/clips/871d6cd1-d322-49c8-b96c-cba506a3400d.mp4",
	"thumbnail_url": "https://clips.kick.com/clips/871d6cd1-d322-49c8-b96c-cba506a3400d-thumbnail.jpeg",
	"privacy": "CLIP_PRIVACY_PUBLIC",
	"likes": 190,
	"liked": false,
	"views": 5814,
	"duration": 18,
	"started_at": "0001-01-01T00:00:00Z",
	"created_at": "2023-06-09T12:53:10Z",
	"is_mature": false,
	"video_url": "https://clips.kick.com/clips/871d6cd1-d322-49c8-b96c-cba506a3400d.mp4",
	"view_count": 5814,
	"likes_count": 190,
	"category": {
		"id": 3,
		"name": "Fortnite",
		"slug": "fortnite",
		"responsive": "https://files.kick.com/images/subcategories/3/banner/fortnite.jpg",
		"banner": "https://files.kick.com/images/subcategories/3/banner/fortnite.jpg",
		"parent_category": "games"
	},
	"creator": {
		"id": 1448480,
		"username": "FallenShortGaming",
		"slug": "fallenshortgaming",
		"profile_picture": "https://files.kick.com/images/user/1448480/profile_image/conversion/be8cb09f-818b-47ee-b05e-04f490baf1c5-thumb.webp"
	},
	"channel": {
		"id": 212083,
		"username": "Ninja",
		"slug": "ninja",
		"profile_picture": "https://files.kick.com/images/user/214230/profile_image/conversion/581eb803-2a55-4df3-9fb5-e2ef9d34561b-thumb.webp"
	}
}

export default function ClipItem( { clip, handleCategory, handleChannel, sortOptions } ) {
	const {sortBy, filterBy} = sortOptions
	const date = formatDistance(new Date(clip.created_at), new Date(), { addSuffix: true });
	return <article className="clip-item">
			<div className="image-container position-relative">
				<img className={ 'clip-image' } src={ clip.thumbnail_url } alt=""/>
				<div className="meta-data">
					<span className="views clip-badge fs-sm">{ clip.view_count }</span>
					<span className="date clip-badge fs-sm">{ date }</span>
				</div>
			</div>
			<div className="meta-data p-3">
				<div className="left d-flex align-items-center">
					<div className="category-container h-100 me-4" style={ { width: '3rem', } }>
						<img onClick={ () => {
							handleCategory(clip.category.slug, sortBy, filterBy )
						} } className={ 'category-img' } src={ clip.category.responsive } alt=""/>
					</div>
					<div className="clip-info">
						<h6 className={ 'title mb-2 fs-sm text-white' }>{ clip.title }</h6>
						<h6 onClick={ () => {
							handleChannel(clip.channel.slug, sortBy, filterBy)
						} } className={ 'cursor-pointer username text-xs text-white fw-normal opacity-75 c' }>{ clip.channel.username }</h6>
					</div>
				</div>

			</div>
		</article>


}