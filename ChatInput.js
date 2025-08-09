function ChatInput({ onSendMessage, disabled }) {
  try {
    const [input, setInput] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (input.trim() && !disabled) {
        onSendMessage(input);
        setInput('');
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
      }
    };

    return (
      <div className="chat-input-container" data-name="chat-input" data-file="components/ChatInput.js">
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ketik pesan Anda di sini..."
            className="chat-input"
            rows="1"
            disabled={disabled}
          />
          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="send-button"
          >
            <div className="icon-send text-lg"></div>
          </button>
        </form>
      </div>
    );
  } catch (error) {
    console.error('ChatInput component error:', error);
    return null;
  }
}