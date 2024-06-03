import { useEffect, useState } from "react";
import Descriptions from "./components/Description/Descriptions";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";




function App() {

  const startFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  const [feedback, setFeedback] = useState(()=> {
    const saveFeedback = localStorage.getItem("feedback")
    return saveFeedback ? JSON.parse(saveFeedback) : startFeedback
  } );

  useEffect(()=>{
        localStorage.setItem("feedback", JSON.stringify(feedback))
  },[feedback])
  

  function updateFeedback(feedbackType)  {
    if (feedbackType === "") {
      setFeedback(startFeedback);
    } else {
      setFeedback((previousState) => ({
        ...previousState,
        [feedbackType]: previousState[feedbackType] + 1,
      }));
    }
  }

  function resetFeedback() {
    setFeedback(startFeedback);
  }   
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
  ? Math.round((feedback.good / totalFeedback) * 100) : 0;

return (
<div>
  
    <Descriptions/>
    <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
   {totalFeedback !== 0 ? (<Feedback  
    good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
   ) : ( <Notification/> )}
</div>

)

}

export default App;
