function TypingIndicator() {
  try {
    return (
      <div className="flex justify-start" data-name="typing-indicator" data-file="components/TypingIndicator.js">
        <div className="message-ai">
          <div className="bubble-ai typing-animation">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TypingIndicator component error:', error);
    return null;
  }
}