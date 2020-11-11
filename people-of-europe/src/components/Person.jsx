export default function person(props){
    const{firstName, lastName, pic, city, country} = props;
    return(
        <div>
            <h3>{firstName} {lastName}</h3>
            <img src={pic} alt=`${firstName} ${lastName}`/>
            <p>{city}, {country}</p>
        </div>
    )
}