import { useEffect } from "react";

const APP_NAME = "Fast React Pizza";

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${APP_NAME}` : APP_NAME;
  }, [title]);
}
