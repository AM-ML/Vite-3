import('bootstrap/dist/css/bootstrap.min.css')
  .then(() => {

  })
  .catch(error => console.error('Error loading Bootstrap:', error));

export function Student(props){
	return (
		<div className="container w-25 m-0 p-4 rounded-2 text-secondary rounded-3 shadow">
			<div className="row w-100">
				<div className="col text-end">
					<p>Name:</p> 
				</div>
				<div className="col text-start">
					<p>{props.name}</p>
				</div>
			</div>
			<div className="row">
				<div className="col text-end">
					Age: 
				</div>
				<div className="col text-start">
					{props.age}
				</div>
			</div>
			<div className="row">
				<div className="col text-end">
					Student: 
				</div>
				<div className="col text-start">
					{props.isStudent? "Yes" : "No"}
				</div>
			</div>
		</div>
	)
}
