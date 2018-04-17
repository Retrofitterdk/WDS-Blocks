// Import all of our Text Options requirements.
import { TextOptionsInlineStyles } from '../../components/text-options';

const PostOutput = ( props ) => {
	const { selectedPostsJSON } = props.attributes;

	return (
		JSON.parse( selectedPostsJSON ).length > 0 ? (
			JSON.parse( selectedPostsJSON ).map( post =>
				<li
					className="column"
					id={ `post-${ post.id }` }
					key={ `post-${ post.id }` }
					tabIndex="0"
				>
					{ console.log( post ) }
					{
						post._embedded !== undefined && post._embedded[ 'wp:featuredmedia' ] ? (
							<img
								src={ post._embedded[ 'wp:featuredmedia' ][ 0 ][ 'source_url' ] }
								alt=""
							/>
						) : (
							null
						)
					}
					<h3
						className="h1"
						style={ {
							...TextOptionsInlineStyles( props ),
						} }
					>{ post.title.rendered }</h3>
					<div
						dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } }
						style={ {
							...TextOptionsInlineStyles( props ),
						} } />
				</li>
			)
		) : (
			null
		)
	);
};

export default PostOutput;
