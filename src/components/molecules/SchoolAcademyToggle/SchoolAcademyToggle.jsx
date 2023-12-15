import React from "react";
import Button from "../../atoms/button/Button";
function SchoolAcademyToggle({programa,setPrograma}) {
    
  return (
    <section className="SchoolAcademyToggle">
      <div className={programa==="academy"?"programate programate-academy programate-active":"programate"}>
        <p>Programate Academy</p>
        <Button className={"button-show"} onClick={()=>setPrograma("academy")}>ver mas.</Button>
      </div>
      <div className={programa==="school"?"programate programate-school  programate-active":"programate"}>
        <p>Programate School</p>
        <Button className={"button-show"} onClick={()=>setPrograma("school")}>ver mas.</Button>
      </div>
    </section>
  );
}

export default SchoolAcademyToggle;
