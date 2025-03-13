require('dotenv').config(); // Load environment variables

const { Configuration, OpenAIApi } = require("openai");

// Set up OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, 
});

const openai = new OpenAIApi(configuration);

// Function to generate responses from ChatGPT
async function chatWithGPT(userMessage) {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",  // You can change this to "gpt-4" if needed
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 100,
        });

        console.log("ChatGPT:", response.data.choices[0].message.content.trim());
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

// Example usage
chatWithGPT("Hello, how are you?");
