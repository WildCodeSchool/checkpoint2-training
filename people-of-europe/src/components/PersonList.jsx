import Person from "./Person";

export default function personList(props){
    return(
        <div>
            {props.people.map(singlePerson => (
                <Person key={singlePerson.id} firstName={singlePerson.firstName} lastName={singlePerson.lastName} city={singlePerson.loc.city} country={singlePerson.loc.country} pic={singlePerson.pic}/>
            ))}
        </div>
    )
}