import { FormInput } from "./components/FormInput/FormInput";
import { Navbar } from "./components/Navbar/Navbar";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import { getWordDefinition } from "./api/dictionary/api";
import { WordDefinitionResponse } from "./models/word-definition.model";
import Typography from "./components/Typography/Typography";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [wordDefinition, setWordDefinition] =
    useState<WordDefinitionResponse>();

  useEffect(() => {
    const getData = async () => {
      const wordDefinition = await getWordDefinition(searchTerm);
      setWordDefinition(wordDefinition);
    };
    const timeout = setTimeout(() => {
      getData();
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <FormInput
          onChange={(event) => setSearchTerm(event.target.value)}
          className={styles.searchInput}
        />
        {wordDefinition && (
          <>
            <header className={styles.header}>
              <h2 className={styles.word}>{wordDefinition.word}</h2>
              <Typography.Body size="m" className={styles.phonetic}>
                {wordDefinition.phonetic}
              </Typography.Body>
            </header>
            <div className={styles.meanings}>
              {wordDefinition.meanings.map((meaning) => (
                <div>
                  <div className={styles.partOfSpeech}>
                    <Typography.Body
                      size="m"
                      className={styles.partOfSpeechHint}
                    >
                      {meaning.partOfSpeech}
                    </Typography.Body>
                    <div className={styles.line} />
                  </div>
                  <span className={styles.hint}>Meaning</span>
                  <ul className={styles.definitionsList}>
                    {meaning.definitions.map((definition, index) => (
                      <li key={index}>
                        <div className={styles.definitionListItem}>
                          {definition.definition}
                          {definition.example && (
                            <div className={styles.definitionExample}>
                              "{definition.example}"
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  {!!meaning.synonyms.length && (
                    <div className={styles.synonymsContainer}>
                      <span className={styles.hint}>Synonyms</span>
                      <ul className={styles.synonymsList}>
                        {meaning.synonyms.map((synonym, index) => (
                          <li key={index} className={styles.synonymItem}>
                            {synonym}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.line} />
            <div className={styles.sourceContainer}>
              <Typography.Body size="s" className={styles.source}>
                Source
              </Typography.Body>
              {wordDefinition.sourceUrls && (
                <Typography.Body size="s" className={styles.sourceUrl}>
                  {wordDefinition.sourceUrls.map((sourceUrl) => (
                    <a href={sourceUrl} target="_blank" rel="noreferrer">
                      {sourceUrl}
                    </a>
                  ))}
                </Typography.Body>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
