const { GoogleGenAI } = require("@google/genai");

exports.handler = async (event) => {
    const { text, auth } = JSON.parse(event.body);

    if (auth !== process.env.ADMIN_ACCESS_TOKEN) {
        return { statusCode: 403, body: "Unauthorized" };
    }

    const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Structure these research notes into Markdown: ${text}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return {
        statusCode: 200,
        body: JSON.stringify({ 
            title: "Generated Research Log", 
            formatted: response.text() 
        })
    };
};
