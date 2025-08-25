export default function QuestionCard({ 
  question, 
  options, 
  selected, 
  onSelect, 
  onNext, 
  showAnswer, 
  current, 
  total, 
  quizData 
}) {
  const progressPercentage = ((current + 1) / total) * 100;

  return (
    <div>
   
      <div className="flex items-center justify-between mb-4 relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-700 rounded">
          <div
            className="h-1 rounded transition-all duration-500 bg-blue-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

      
        {Array.from({ length: total }).map((_, idx) => {
          let color = "bg-gray-600";
          let icon = null;

          if (quizData[idx].userAnswer !== null) {
            if (quizData[idx].userAnswer === quizData[idx].correct) {
              color = "bg-green-500";
              icon = "✔️";
            } else {
              color = "bg-red-500";
              icon = "❌";
            }
          } else if (idx === current) {
            color = "bg-blue-500";
          }

          return (
            <div key={idx} className="relative w-6 h-6 flex items-center justify-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${color}`}>
                {idx + 1}
              </div>
              {icon && (
                <span className="absolute -top-3 text-xs">{icon}</span>
              )}
            </div>
          );
        })}
      </div>

    
      <h2
        className="text-lg font-semibold mb-4 text-gray-200"
        dangerouslySetInnerHTML={{ __html: question }}
      />

    
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt, index) => {
          let optionStyle = "bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700";
          if (showAnswer) {
            if (index === quizData[current].correct) {
              optionStyle = "bg-green-600 border-green-400 text-white";
            } else if (index === selected && selected !== quizData[current].correct) {
              optionStyle = "bg-red-600 border-red-400 text-white";
            }
          } else if (selected === index) {
            optionStyle = "bg-gray-700 border-gray-500 text-white animate-pulse";
          }

          return (
            <button
              key={index}
              onClick={() => !showAnswer && onSelect(index)}
              className={`w-full px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${optionStyle}`}
              disabled={showAnswer}
              dangerouslySetInnerHTML={{ __html: opt }}
            />
          );
        })}
      </div>

      <button
        onClick={onNext}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        {showAnswer ? "Next Question" : "Check Answer"}
      </button>
    </div>
  );
}
