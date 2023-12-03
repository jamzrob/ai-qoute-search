import 'dotenv/config'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { CharacterTextSplitter } from 'langchain/text_splitter'
import { openai } from './lib/openai.js'
import { unstructured } from './lib/unstructured.js';
import { getData } from "./lib/data.js";

const question = process.argv[2] || 'hi'
export const createStore = (docs) =>
  MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings())

export const createDoc= (path) => {
  const loader = unstructured(path)
  return loader.loadAndSplit(
    new CharacterTextSplitter({
      separator: "---",
      chunkSize: 2500,
      chunkOverlap: 100,
    })
  )
}

export const loadData = async () => {
    const data = getData();
    const docs = [];
    const i = 0;
    const promises = data.map(async (book) => {
        return createDoc(book).then((doc) => {
            doc.forEach(d => {
                docs.push(d)
            })
        })
    });
    await Promise.all(promises);

    return docs;
}

const loadStore = async () => {
  const bookDocs = await loadData()

  return createStore([...bookDocs])
}

const query = async () => {
console.log(question);
  const store = await loadStore()
  const results = await store.similaritySearch(question, 3)

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-16k-0613',
    temperature: 0,
    messages: [
      {
        role: 'assistant',
        content:
          'You are a helpful AI assistant. Answser questions to your best ability.',
      },
      {
        role: 'user',
        content: `Answer the following question using the provided context. If you cannot answer the question with the context, don't lie and make up stuff. Just say you need more context.
        Question: ${question}
  
        Context: ${results.map((r) => r.pageContent).join('\n')}`,
      },
    ],
  })

    const answer = response.choices[0].message.content;
    const qoutes = results.map((r)=> `"${r.pageContent}"\n-${r.metadata.filename.split('.')[0]}`).join("\n\n");

      
  
  console.log(`\nAnswer:\n${answer}\n\nSources\n=================\n${qoutes}`)
}
query();
