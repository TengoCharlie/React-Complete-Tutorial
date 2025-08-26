/**
 * Global chat store using Zustand
 * -------------------------------
 * Manages the conversation with the OpenAI API. Demonstrates
 * global state, async actions and API integration.
 */
import { create } from 'zustand'

export const useChatStore = create((set, get) => ({
  // Array of message objects: { role: 'user' | 'assistant', content: string }
  messages: [],

  /**
   * Sends a user message to the OpenAI API and stores the response.
   * @param {string} text - User's question about the weather.
   */
  sendMessage: async (text) => {
    const userMessage = { role: 'user', content: text }
    const conversation = [...get().messages, userMessage]

    // Immediately update global state with the new user message
    set({ messages: conversation })

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // API key pulled from Vite env variable defined in .env
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful weather assistant.' },
            ...conversation,
          ],
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      const reply = data.choices[0].message.content.trim()
      // Append assistant response to the conversation
      set({ messages: [...conversation, { role: 'assistant', content: reply }] })
    } catch (err) {
      // Basic error handling: push error as assistant message
      set({
        messages: [
          ...conversation,
          { role: 'assistant', content: `Error: ${err.message}` },
        ],
      })
    }
  },
}))
