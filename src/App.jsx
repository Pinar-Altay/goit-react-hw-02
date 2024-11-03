import React, { useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const App = () => {
  // Geri bildirim türlerini saklamak için durum (state)
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Geri bildirim güncelleme fonksiyonu
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Tüm geri bildirimleri sıfırlama fonksiyonu
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Toplam geri bildirim sayısını hesapla
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Olumlu geri bildirim yüzdesini hesapla
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        showReset={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} positivePercentage={positivePercentage} />
      ) : (
        <p style={{ textAlign: 'center', color: 'gray', marginTop: '20px', fontSize: '1.2rem' }}>
          No feedback yet
        </p>
      )}
    </div>
  );
};

export default App;
