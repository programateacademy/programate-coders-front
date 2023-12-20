import React from "react";
import Button from "../../atoms/button/Button";
function SchoolAcademyToggle({ programa, setPrograma }) {
  return (
    <section className="SchoolAcademyToggle">
      <div
        className={
          programa === "academy"
            ? "programate programate-academy programate-active"
            : "programate"
        }
      >
        <p>Prográmate Academy</p>
        <Button
          className={"button-show"}
          onClick={() => setPrograma("academy")}
        >
          ver más
        </Button>
      </div>
      <div
        className={
          programa === "school"
            ? "programate programate-school  programate-active"
            : "programate"
        }
      >
        <p>Prográmate School</p>
        <Button className={"button-show"} onClick={() => setPrograma("school")}>
          ver más
        </Button>
      </div>
    </section>
  );
}

export default SchoolAcademyToggle;
