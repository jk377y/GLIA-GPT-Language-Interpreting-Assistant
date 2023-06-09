const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;  // get your own key from https://platform.openai.com/

let configuration = new Configuration({
	apiKey: OPENAI_API_KEY,
});
delete configuration.baseOptions.headers['User-Agent']; // OpenAI API doesn't like the default user agent; this removes it; seems to only be an issue in Google Chrome
const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(message) {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: message,
		temperature: 0.9,
		max_tokens: 256,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	return response.data.choices[0].text;
}
