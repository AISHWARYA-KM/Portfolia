import { genkit } from 'genkit';
import createNextHandler from '@genkit-ai/next';

const handler = createNextHandler(/* your action handler function here */);

// Example: If you have an action handler called myActionHandler, use:
// const handler = createNextHandler(myActionHandler);

export const GET = handler.GET;
export const POST = handler.POST;
export const OPTIONS = handler.OPTIONS;