import { ExtractTextFromElementTask } from "./extract-text-from-element";
import { LaunchAITask } from "./launch-ai";
import { LaunchBrowserTask } from "./launch-brower";
import { PageToHtmlTask } from "./page-to-html";

export const TaskRegistry = {
    LAUNCH_BROWSER: LaunchBrowserTask,
    LAUNCH_AI: LaunchAITask,
    PAGE_TO_HTML: PageToHtmlTask,
    EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask
}