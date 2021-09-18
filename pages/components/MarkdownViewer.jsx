import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const MarkdownViewer = ({ pBody }) => (
	<article className="prose max-w-screen-xl font-inter text-gray-600">
		<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
			{pBody}
		</ReactMarkdown>
	</article>
);

export default MarkdownViewer;
