import { useEffect, useState } from "react";
import { getWordDefinition } from "../api/dictionary/api";
import { WordDefinitionResponse } from "../models/word-definition.model";

export const useGetDebouncedWordDefinition = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [wordDefinition, setWordDefinition] =
    useState<WordDefinitionResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const wordDefinition = await getWordDefinition(searchTerm);
        setWordDefinition(wordDefinition);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      getData();
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return {
    isLoading,
    wordDefinition,
    setSearchTerm,
  };
};
