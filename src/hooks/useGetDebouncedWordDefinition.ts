import { useEffect, useState } from "react";
import { getWordDefinition } from "../api/dictionary/api";
import { WordDefinitionResponse } from "../models/word-definition.model";

export const useGetDebouncedWordDefinition = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const [wordDefinition, setWordDefinition] =
    useState<WordDefinitionResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFoundError, setIsNotFoundError] = useState(false);

  const getData = async () => {
    if (!searchTerm) return;
    try {
      setIsNotFoundError(false);
      setIsLoading(true);
      const wordDefinition = await getWordDefinition(searchTerm);
      setWordDefinition(wordDefinition);
    } catch (error: any) {
      if (error.response.status === 404) {
        setIsNotFoundError(true);
      }
      setWordDefinition(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        getData();
      }
    }, 500);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return {
    isNotFoundError,
    isLoading,
    wordDefinition,
    setSearchTerm,
  };
};
