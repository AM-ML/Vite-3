export function BookComponent(props){
    const {id, cover, title, desc, author} = props;
    return (
        <div className="container">
            <h1>{title}</h1>
        </div>
    )
}