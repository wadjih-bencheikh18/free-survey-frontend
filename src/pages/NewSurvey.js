import * as React from "react"
import AddQst from "../components/addQst"
import Qst from "../components/Qst"

const NewSurvey = (props) => {
  return (
    <div className="bg-gray-50 h-screen">
      <AddQst />
      <Qst />
    </div>
  );
}

export default NewSurvey