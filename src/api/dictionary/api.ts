import axios from "axios";
import { WordDefinitionResponse } from "../../models/word-definition.model";

export const getWordDefinition = (
  searchTerm: string
): Promise<WordDefinitionResponse> => {
  return axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
    .then(({ data }) => data[0]);
};
