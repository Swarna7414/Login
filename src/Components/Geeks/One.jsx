export default function One({index, fruit}){
    return(
        <p key={index}>This is the{fruit.name} and this the {fruit.price} and this is it's emoji {fruit.emoji}</p>
    );
}