import { Link } from 'react-router-dom'

export function Book(props){
	return (
		<>
			<Link to={`/books/${props.id}`} className="col-3 shadow-sm p-2 book">
				<abbr title={props.desc}>
					<img src={props.cover ? props.cover : "https://placehold.co/300x200"} width="300" height="200" alt="Book Cover" className="d-block m-auto text-center rounded-3" />
					<p className='text-center title text-capitalize'>{props.title}</p>
				</abbr>
			</Link>
		</>
	)
}
