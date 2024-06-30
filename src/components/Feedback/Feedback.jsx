export default function Feedback({ feedback }) {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    
    const Notification = () => (
  <p>No feedback given yet.</p>
);
  if (totalFeedback === 0) {
    return <Notification />;
  }

  const positiveFeedbackPercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
}
