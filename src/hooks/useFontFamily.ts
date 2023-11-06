import { useLayoutEffect, useState } from "react";

const FONT_TYPE_LOCAL_STORAGE_KEY = "font";
const savedFontType = localStorage.getItem(FONT_TYPE_LOCAL_STORAGE_KEY);

export enum FontType {
  MONOSPACE = "monospace",
  SANS_SERIF = "sans-serif",
  SERIF = "serif",
}

const FONT_TYPE_CLASSNAME_LOOKUP = {
  [FontType.MONOSPACE]: "font-monospace",
  [FontType.SANS_SERIF]: "font-sans-serif",
  [FontType.SERIF]: "font-serif",
};

const removeOtherFontClassNames = (fontType: FontType) =>
  document.body.classList.remove(
    ...Object.values(FONT_TYPE_CLASSNAME_LOOKUP).filter(
      (key) => key !== fontType
    )
  );
const changeFontFamilyClassName = (fontType: FontType) => {
  removeOtherFontClassNames(fontType);
  document.body.classList.add(FONT_TYPE_CLASSNAME_LOOKUP[fontType]);
};

export const useFontFamily = () => {
  const [activeFontType, setActiveFontType] = useState<FontType>(
    savedFontType ? (savedFontType as FontType) : FontType.SANS_SERIF
  );

  useLayoutEffect(() => {
    changeFontFamilyClassName(activeFontType);
  }, [activeFontType]);

  const setFontType = (fontType: FontType) => {
    changeFontFamilyClassName(fontType);
    setActiveFontType(fontType);
    localStorage.setItem(FONT_TYPE_LOCAL_STORAGE_KEY, fontType);
  };

  return {
    activeFontType,
    setFontType,
  };
};
