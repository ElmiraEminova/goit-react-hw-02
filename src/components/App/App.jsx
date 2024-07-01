import { useState, useEffect } from 'react';
import Description from "../Description/Description";
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

export default function App() {

    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
    
    useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options setFeedback={setFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage}  /> : <Notification />}
    </div>
  );
}

