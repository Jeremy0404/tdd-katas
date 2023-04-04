export class StringCalculator {
  add(q: string): number {
    if (q.length === 0)
      return 0;

    const splitter = /[,\n]/;
    if (q[q.length - 1].match(splitter))
      throw new Error('End with separator');

    let total = 0;
    let numbers = q.split(splitter);
    for (const number of numbers) {
      total += (number.length === 0 ? 0 : parseInt(number));
    }

    return total;
  }
}
