import { UnstructuredLoader} from "langchain/document_loaders/fs/unstructured";

export const unstructured = (path) => {
    return new UnstructuredLoader(path, {
        apiKey: process.env.UNSTRUCTURED_API_KEY,
    })
}
