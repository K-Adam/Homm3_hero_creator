import {
  generateBackground,
  renderBorderWithShadow,
} from "@/lib/colorTransformation";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

function useCssUrl(
  generator: (color: string) => Promise<string>,
  color: string
) {
  const [cssUrl, setCssUrl] = useState("none");
  const [debouncedColor] = useDebounceValue(color, 1000); // 1s debounce

  useEffect(() => {
    let objectUrl: string | null = null;
    let cancelled = false;

    (async () => {
      const url = await generator(debouncedColor);
      if (cancelled) {
        URL.revokeObjectURL(url);
        return;
      }
      objectUrl = url;
      setCssUrl(`url(${url})`);
    })();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [generator, debouncedColor]);

  return cssUrl;
}

export function useBackground(color: string) {
  return useCssUrl(generateBackground, color);
}

export function useBorder(color: string) {
  return useCssUrl(renderBorderWithShadow, color);
}
