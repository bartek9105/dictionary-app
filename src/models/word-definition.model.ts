export interface WordDefinitionResponse {
  word: string;
  phonetic: string;
  phonetics?: Phonetic[];
  origin: string;
  meanings: Meaning[];
  sourceUrls?: string[];
}

interface Phonetic {
  text: string;
  audio?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}
