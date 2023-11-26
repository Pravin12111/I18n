import React from "react";
import './Home.css';
import I18n from "../../Utils/i18n";

function Home(){
    const usercounter = 40;
    //const [lang,setlang] = useState('hi');
    return(
        <div className="container">
            
            <h1>{I18n("welcomemessage")}</h1>
            <p>
                {I18n("normalmessage")}
            </p>

            <h3>
                {I18n("greetingmessage")}
            </h3>
            <h4>{I18n("endmessage")}</h4>
            <p>
                {I18n("usersstatmessage","<studentcount>",usercounter)}
            </p>
            <select 
            defaultValue={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem("lang",e.target.value);
                window.location.reload();
            }} 
            className="select-lang">
                <option value="mr">marathi</option>
                <option value="hi">hindi</option>
                <option value="en">english</option>
            </select>
        </div>
    )
}

export default Home