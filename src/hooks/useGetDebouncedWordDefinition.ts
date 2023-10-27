import { useEffect, useState } from "react";
import { getWordDefinition } from "../api/dictionary/api";
import { WordDefinitionResponse } from "../models/word-definition.model";

export const useGetDebouncedWordDefinition = () => {
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

  return {
    wordDefinition,
    setSearchTerm,
  };
};
