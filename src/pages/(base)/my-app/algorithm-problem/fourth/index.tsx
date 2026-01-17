// [0,0,1,1,1,1,2,3,3]
// 5, nums = [0,0,1,1,2,3,3,_,_]
function removeDouble(nums: number[]): number {
  const mapWeak = new Map();
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    const currentCount = mapWeak.get(nums[fast]) || 0;
    if (currentCount < 2) {
      // 当前元素出现次数少于2次，保留
      nums[slow] = nums[fast];
      slow++;
      mapWeak.set(nums[fast], currentCount + 1);
    }
  }
  return slow;
}
function removeDoubleV2(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  let slow = 2;
  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}
const Component = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans leading-relaxed text-gray-800">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800 border-b-2 border-blue-500 pb-2">删除有序数组中的重复项 II</h2>

      <div className="mb-8 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
        <p className="mb-3">给你一个有序数组 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums</code> ，请你 <strong className="text-gray-800">原地</strong> 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。</p>
        <p>不要使用额外的数组空间，你必须在 <strong className="text-gray-800">原地</strong> 修改输入数组 并在使用 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">O(1)</code> 额外空间的条件下完成。</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-gray-700">说明：</h3>
        <div className="bg-gray-50 p-5 rounded-lg space-y-3">
          <p>为什么返回数值是整数，但输出的答案是数组呢？</p>
          <p>请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p>
          <p>你可以想象内部操作如下:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-800">
{`// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}`}
          </pre>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">示例</h3>
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">示例 1：</span>
                <span></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输入：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums = [1,1,1,2,2,3]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">5, nums = [1,1,2,2,3]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
                <span>函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">示例 2：</span>
                <span></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输入：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums = [0,0,1,1,1,1,2,3,3]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">7, nums = [0,0,1,1,2,3,3]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
                <span>函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Component;
