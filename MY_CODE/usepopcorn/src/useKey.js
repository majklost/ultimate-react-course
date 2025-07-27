import { useEffect, useState } from "react";
export function useKey(key, onPress) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code === key) {
          onPress();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, onPress]
  );
}
