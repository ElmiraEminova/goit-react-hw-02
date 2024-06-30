import { useState, useEffect } from 'react';
import Description from "../Description/Description";
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

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

  return (
    <div>
      <Description />
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

