function printString(str: string): void {
  console.log(str);
}

function usePrintString(value: string | null): void {
  if (value !== null) {
    printString(value);
  } else {
    printString('Default String');
  }
}

usePrintString(null); //Prints the default String