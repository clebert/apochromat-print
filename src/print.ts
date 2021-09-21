import type {WriteStream} from 'tty';
import {Lens} from 'apochromat';
import stringWidth from 'string-width';

export function print(
  lens: Lens,
  stream: WriteStream = process.stdout
): () => void {
  let prevLines: readonly string[] = [];

  return lens.subscribe((event) => {
    if (event !== 'render') {
      return;
    }

    const prevRows = prevLines.reduce(
      (rows, line) =>
        rows + Math.max(Math.ceil(stringWidth(line) / stream.columns), 1),
      0
    );

    if (prevRows > 0) {
      stream.moveCursor(0, -prevRows);
      stream.clearScreenDown();
    }

    const lines = lens.frame.split('\n');

    for (const line of lines) {
      stream.write(line);
      stream.write('\n');
    }

    prevLines = lines;
  });
}
