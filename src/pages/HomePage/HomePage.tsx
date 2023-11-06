import { FormInput } from "../../components/FormInput/FormInput";
import { Line } from "../../components/Line/Line";
import { LoadableContent } from "../../components/LoadableContent/LoadableContent";
import { useGetDebouncedWordDefinition } from "../../hooks/useGetDebouncedWordDefinition";
import { AppLayout } from "../../layouts/AppLayout/AppLayout";
import styles from "./HomePage.module.scss";
import { DefinitionsList } from "./components/DefinitionsList/DefinitionsList";
import { Header } from "./components/Header/Header";
import { NotFound } from "./components/NotFound/NotFound";
import { PartOfSpeechHint } from "./components/PartOfSpeechHint/PartOfSpeechHint";
import { SourceUrlsList } from "./components/SourceUrlsList/SourceUrlsList";
import { SynonymsList } from "./components/SynonymsList/SynonymsList";

export const HomePage = () => {
  const { wordDefinition, setSearchTerm, isLoading, isNotFoundError } =
    useGetDebouncedWordDefinition();

  const audio = wordDefinition?.phonetics?.find(({ audio }) => audio)?.audio;

  return (
    <AppLayout>
      <FormInput
        onChange={(event) => setSearchTerm(event.target.value)}
        className={styles.searchInput}
      />
      <LoadableContent isLoading={isLoading}>
        {isNotFoundError && <NotFound />}
        {wordDefinition && (
          <>
            <div className={styles.header}>
              <Header
                word={wordDefinition.word}
                phonetic={wordDefinition.phonetic}
                audio={audio}
              />
            </div>
            <div className={styles.content}>
              {wordDefinition.meanings.map(
                ({ partOfSpeech, definitions, synonyms }) => (
                  <div>
                    <PartOfSpeechHint partOfSpeech={partOfSpeech} />
                    <DefinitionsList definitions={definitions} />
                    {!!synonyms.length && (
                      <div className={styles.synonymsList}>
                        <SynonymsList
                          synonyms={synonyms}
                          onClick={(synonym) => setSearchTerm(synonym)}
                        />
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            <div className={styles.line}>
              <Line />
            </div>
            {wordDefinition.sourceUrls && (
              <SourceUrlsList sourceUrls={wordDefinition.sourceUrls} />
            )}
          </>
        )}
      </LoadableContent>
    </AppLayout>
  );
};
