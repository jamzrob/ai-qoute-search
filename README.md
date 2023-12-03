# README

Query your saved highlights using AI!

1. Create `.env` file with api keys from [Open
AI](https://help.openai.com/en/articles/4936850-where-do-i-find-my-api-key) and
[Unstructured](https://unstructured.io/api-key) and the path of data to query
against.
qoutes.
```
OPENAI_API_KEY=
UNSTRUCTURED_API_KEY=
DATA_PATH=
```
Each file in `DATA_PATH` should correspond to the name of the source with each qoute seperated with a --- as follows. See `sample_data` for examples.
```
This is a qoute
---
This is another qoute
```

2. Install packages
```
npm install

```
3. Run the program
```
node start "YOUR QUESTION"
```

### Example run
```
npm start "What is the best form of government?"
```

```
What is the best form of government?
Based on the provided context, the individual expressing their views seems to lean towards anarchism and believes in limiting the power and size of government. They suggest that requiring the governors themselves to pay for the costs of their actions could be a way to keep the government small and inoffensive. They also emphasize the importance of including restrictions on government actions in a constitution, such as no conscript armies and no interference with freedom of press, speech, travel, assembly, religion, instruction, communication, or occupation. However, without further context, it is not possible to determine the "best" form of government according to this individual's perspective.

Sources
=================
"You have put your finger on the dilemma of all government—and the reason I am an anarchist. The power to tax, once conceded, has no limits; it contains until it destroys. I was not joking when I told them to dig into their own pouches. It may not be possible to do away with government—sometimes I think that government is an inescapable disease of human beings. But it may be possible to keep it small and starved and inoffensive—and can you think of a better way than by requiring the governors themselves to pay the costs of their antisocial hobby"
-Moon Is Harsh Mistres

"Constituencies might be formed by dividing people by occupation. . . or by age. . . or even alphabetically. Or they might not be divided, every member elected at large---and do not object that this would make it impossible for any man not widely known throughout Luna to be elected; that might be the best possible thing for Luna."
-Moon Is Harsh Mistres

"“But in writing your constitution let me invite attention the wonderful virtues of the negative! Accentuate the negative! Let your document be studded with things the government is forever forbidden to do. No conscript armies . . . no interference however slight with freedom of press, or speech, or travel, or assembly, or of religion, or of instruction, or communication, or occupation. . . no involuntary taxation. Comrades, if you were to spend five years in a study of history while thinking of more and more things that your governinen should promise never to do and then let your constitution be nothing but those negatives, I would not fear the outcome"
-Moon Is Harsh Mistres
```
