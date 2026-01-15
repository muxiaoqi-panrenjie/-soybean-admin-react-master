// [1,2,3,4,5] 3

import { useEffect } from "react";


function removeElement(nums: number[], val: number): number {
  const newNums = nums.filter(item => item !== val);
  nums.splice(0, nums.length, ...newNums);
  return nums.length;
};
// 快慢指针
function removeElement2(nums: number[], val: number): number {
  let slow = 0;
  for(let fast = 0; fast < nums.length; fast++) {
    if(nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}
const Component = () => {
  useEffect(() => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const k = removeElement(nums, val);
    console.log(k, nums);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-5 font-sans leading-relaxed text-gray-800">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800 border-b-2 border-blue-500 pb-2">JavaScript 实现移除元素</h2>

      <div className="mb-8 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-lg font-medium mb-3 text-gray-700">问题描述</h3>
        <p className="mb-3">给你一个数组 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums</code> 和一个值 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">val</code>，你需要原地移除所有数值等于 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">val</code> 的元素，并返回移除后数组的新长度。</p>
        <p className="mb-3">不要使用额外的数组空间，你必须仅使用 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">O(1)</code> 额外空间并原地修改输入数组。</p>
        <p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">示例</h3>
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="text-sm font-mono text-gray-500 mb-3">javascript</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">// 示例 1</span>
                <span></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输入：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums = [3,2,2,3], val = 3</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">2, nums = [2,2,_,_]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
                <span>函数应该返回新的长度 2，并且 nums 中的前两个元素均为 2。</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">// 示例 2</span>
                <span></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输入：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums = [0,1,2,2,3,0,4,2], val = 2</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">5, nums = [0,1,3,0,4,_,_,_]</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Component;
