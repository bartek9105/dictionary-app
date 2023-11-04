import { useLayoutEffect, useState } from "react";

const FONT_TYPE_LOCAL_STORAGE_KEY = "font";

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

const savedFontType = localStorage.getItem(FONT_TYPE_LOCAL_STORAGE_KEY);

const changeFontFamilyClassName = (fontType: FontType) => {
  document.body.className = "";

  if (fontType === FontType.MONOSPACE) {
    document.body.classList.add(FONT_TYPE_CLASSNAME_LOOKUP[FontType.MONOSPACE]);
  }
  if (fontType === FontType.SANS_SERIF) {
    document.body.classList.add(
      FONT_TYPE_CLASSNAME_LOOKUP[FontType.SANS_SERIF]
    );
  }
  if (fontType === FontType.SERIF) {
    document.body.classList.add(FONT_TYPE_CLASSNAME_LOOKUP[FontType.SERIF]);
  }
};

export const useFontFamily = () => {
  const [activeFontType, setActiveFontType] = useState<FontType>(
    FontType.SANS_SERIF
  );

  useLayoutEffect(() => {
    if (savedFontType) {
      changeFontFamilyClassName(savedFontType as FontType);
      setActiveFontType(savedFontType as FontType);
    }
  }, []);

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
