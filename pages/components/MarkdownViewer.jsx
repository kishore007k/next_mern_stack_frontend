import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const MarkdownViewer = ({ pBody }) => (
	<article className="prose px-2 lg:px-0 lg:prose-2xl xl:prose-xl max-w-full font-inter text-gray-600">
		<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
			{pBody}
		</ReactMarkdown>
	</article>
);

export default MarkdownViewer;
