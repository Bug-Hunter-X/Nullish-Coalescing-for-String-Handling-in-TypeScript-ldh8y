function printString(str: string): void {
  console.log(str);
}

function usePrintString(value: string | null): void {
  if (value !== null) {
    printString(value);
  }
}

usePrintString(null); //This will execute without any error