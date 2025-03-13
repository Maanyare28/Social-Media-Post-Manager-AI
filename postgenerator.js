require('dotenv').config(); // Load environment variables
const OpenAI = require("openai"); // Import OpenAI package

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your .env file has the correct API key
});

// Function to generate responses from ChatGPT
async function chatWithGPT(userMessage) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",  // You can change this to "gpt-4" if needed
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 100,
        });

        console.log("ChatGPT:", response.choices[0].message.content.trim());
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage
chatWithGPT("Hello, how are you?");
