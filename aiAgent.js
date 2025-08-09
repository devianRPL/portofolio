async function getAIResponse(userMessage, chatHistory) {
  try {
    // Format chat history for AI context
    const historyText = chatHistory
      .slice(-5) // Keep last 5 messages for context
      .map(msg => `${msg.role}: ${msg.content}`)
      .join('\n');

    const systemPrompt = `Anda adalah asisten AI yang ramah dan membantu. Jawab dalam bahasa Indonesia dengan cara yang natural dan informatif. 

Riwayat percakapan:
${historyText}`;

    const userPrompt = userMessage;

    // Use the built-in AI agent function
    const response = await invokeAIAgent(systemPrompt, userPrompt);
    
    return response;
  } catch (error) {
    console.error('AI Agent error:', error);
    return 'Maaf, saya mengalami kesulitan memproses permintaan Anda. Silakan coba lagi.';
  }
}