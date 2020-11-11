export default function footer(props){
    const {year, authorName} = props;
    return(
        <footer>
            <p>© {year} {authorName}</p>
        </footer>
    )
}