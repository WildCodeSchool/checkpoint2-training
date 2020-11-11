export default function person(props){
    const{firstName, lastName, pic, city, country} = props;
    const fullName = firstName+" "+lastName
    return(
        <div>
            <h3>{fullName}</h3>
            <img src={pic} alt={fullName}/>
            <p>{city}, {country}</p>
        </div>
    )
}