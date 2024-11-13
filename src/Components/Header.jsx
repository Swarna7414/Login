import Styles from "./header.module.css"
export default function Header(){
    return(
        <div className={Styles.container}>
            <h1 className={Styles.header}>SwarnaSaiSankar</h1>
            <div className={Styles.contentA}>
                <a href="#Home">Home</a>
                <a href="#E&E">Education & Experience</a>
                <a href="#Skills">Skills & Technologies</a>
                <a href="#My Works">My Works</a>
            </div>
        </div>
    );
}