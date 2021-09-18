import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import MaterialDarkStyle from "../components/MaterialDarkStyle";

const CodeBlock = ({ className, children }) => {
	let lang = "text";
	if (className && className.startsWith("lang-")) {
		lang = className.replace("lang-", "");
	}
	return (
		<SyntaxHighlighter language={lang} style={MaterialDarkStyle}>
			{children}
		</SyntaxHighlighter>
	);
};

const PreBlock = ({ children, ...rest }) => {
	if ("type" in children && children["type"] === "code") {
		return CodeBlock(children["props"]);
	}
	return <pre {...rest}>{children}</pre>;
};

const MarkdownViewer = ({ pBody }) => (
	<div className="prose max-w-screen-xl">
		<Markdown
			options={{
				overrides: {
					pre: PreBlock,
				},
			}}
		>
			{pBody}
		</Markdown>
	</div>
);

export default MarkdownViewer;
