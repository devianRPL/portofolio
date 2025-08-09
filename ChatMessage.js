function ChatMessage({ message }) {
  try {
    const isUser = message.role === 'user';
    const formatTime = (timestamp) => {
      return new Date(timestamp).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    return (
      <div 
        className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
        data-name="chat-message" 
        data-file="components/ChatMessage.js"
      >
        <div className={isUser ? 'message-user' : 'message-ai'}>
          <div className={isUser ? 'bubble-user' : 'bubble-ai'}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
            <p className={`text-xs mt-2 ${isUser ? 'text-blue-100' : 'text-gray-400'}`}>
              {formatTime(message.timestamp)}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ChatMessage component error:', error);
    return null;
  }
}