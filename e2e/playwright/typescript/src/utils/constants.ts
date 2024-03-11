class Constants {
  private static instance: Constants;

  // Constants
  public readonly BASE_URL: string;
  public readonly LOCALE_COUNTRY: string;

  private constructor() {
    // Assign constant values here
    this.BASE_URL =
      process.env.BASE_URL || "";
    this.LOCALE_COUNTRY = process.env.LOCALE_COUNTRY || "en_GB";
  }

  public static getInstance(): Constants {
    if (!Constants.instance) {
      Constants.instance = new Constants();
    }
    return Constants.instance;
  }
}

const constantsInstance = Constants.getInstance();
export default constantsInstance;
