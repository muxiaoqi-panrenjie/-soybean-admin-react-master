function majorityElement(nums: number[]): number {
  const map = new Map();
  const majorCount = Math.floor(nums.length / 2);
  for (const num of nums) {
    const count = (map.get(num) || 0) + 1;
    if (count > majorCount) {
      return num;
    }
    map.set(num, count);
  }
  return -1;
};

const Component = () => {
  return <div>多数元素</div>;
};


export default Component;
