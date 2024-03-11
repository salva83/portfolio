import constantsInstance from "./constants";

const MAPPING_STRING = {
  empty: "",
  "": "",
  undefined: "",
};

export class ParametersProcessor {
  private static processDictionary(
    dictionaryEntry: string,
    dictionary: any,
  ): string {
    return dictionary[dictionaryEntry] !== undefined
      ? dictionary[dictionaryEntry]
      : dictionaryEntry;
  }

  public static processString(dictionaryEntry: string): string {
    return this.processDictionary(dictionaryEntry, MAPPING_STRING);
  }

  public static processErrorsLocaleCountry(
    dictionaryEntry: string,
    localeDictionaries: any,
  ): string {
    const localeCountry = constantsInstance.LOCALE_COUNTRY;
    return this.processDictionary(
      dictionaryEntry,
      localeDictionaries[localeCountry],
    );
  }
}
