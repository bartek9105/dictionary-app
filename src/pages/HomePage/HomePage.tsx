import { FormInput } from "../../components/FormInput/FormInput";
import { Line } from "../../components/Line/Line";
import { useGetDebouncedWordDefinition } from "../../hooks/useGetDebouncedWordDefinition";
import { AppLayout } from "../../layouts/AppLayout/AppLayout";
import styles from "./HomePage.module.scss";
import { DefinitionsList } from "./components/DefinitionsList/DefinitionsList";
import { Header } from "./components/Header/Header";
import { PartOfSpeechHint } from "./components/PartOfSpeechHint/PartOfSpeechHint";
import { SourceUrlsList } from "./components/SourceUrlsList/SourceUrlsList";
import { SynonymsList } from "./components/SynonymsList/SynonymsList";

export const HomePage = () => {
  const { wordDefinition, setSearchTerm } = useGetDebouncedWordDefinition();

  return (
    <AppLayout>
      <FormInput
        onChange={(event) => setSearchTerm(event.target.value)}
        className={styles.searchInput}
      />
      {wordDefinition && (
        <>
          <Header
            word={wordDefinition.word}
            phonetic={wordDefinition.phonetic}
          />
          <div className={styles.meanings}>
            {wordDefinition.meanings.map((meaning) => (
              <div>
                <PartOfSpeechHint partOfSpeech={meaning.partOfSpeech} />
                <DefinitionsList definitions={meaning.definitions} />
                {!!meaning.synonyms.length && (
                  <SynonymsList synonyms={meaning.synonyms} />
                )}
              </div>
            ))}
          </div>
          <Line />
          {wordDefinition.sourceUrls && (
            <SourceUrlsList sourceUrls={wordDefinition.sourceUrls} />
          )}
        </>
      )}
    </AppLayout>
  );
};
