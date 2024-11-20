export default function getRandItem(arr: Array<any>) {
  return arr[Math.floor(Math.random() * arr.length)];
}
