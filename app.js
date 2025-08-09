class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [messages, setMessages] = React.useState([
      {
        id: 1,
        role: 'ai',
        content: 'Halo! Saya adalah asisten AI Anda. Bagaimana saya bisa membantu Anda hari ini?',
        timestamp: new Date().toISOString()
      }
    ]);
    const [isTyping, setIsTyping] = React.useState(false);

    const handleSendMessage = async (content) => {
      if (!content.trim()) return;

      // Add user message
      const userMessage = {
        id: Date.now(),
        role: 'user',
        content: content.trim(),
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      try {
        // Get AI response
        const aiResponse = await getAIResponse(content, messages);
        
        // Add AI message after delay
        setTimeout(() => {
          const aiMessage = {
            id: Date.now() + 1,
            role: 'ai',
            content: aiResponse,
            timestamp: new Date().toISOString()
          };
          setMessages(prev => [...prev, aiMessage]);
          setIsTyping(false);
        }, 1000);

      } catch (error) {
        console.error('Error getting AI response:', error);
        const errorMessage = {
          id: Date.now() + 1,
          role: 'ai',
          content: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }
    };

    return (
      <div className="chat-container" data-name="app" data-file="app.js">
        {/* Header */}
        <div className="chat-header">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
              <div className="icon-bot text-xl text-white"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">AI Assistant</h1>
              <p className="text-sm text-gray-500">Selalu siap membantu Anda</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>

        {/* Input */}
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);