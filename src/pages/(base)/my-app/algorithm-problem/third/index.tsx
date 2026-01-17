
function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
const Component = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans leading-relaxed text-gray-800">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800 border-b-2 border-blue-500 pb-2">删除排序数组中的重复项</h2>

      <div className="mb-8 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
        <p className="mb-3">给你一个 <strong className="text-gray-800">非严格递增排列</strong> 的数组 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums</code> ，请你 <strong className="text-gray-800">原地</strong> 删除重复出现的元素，使每个元素 <strong className="text-gray-800">只出现一次</strong> ，返回删除后数组的新长度。元素的 <strong className="text-gray-800">相对顺序</strong> 应该保持 <strong className="text-gray-800">一致</strong> 。然后返回 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums</code> 中唯一元素的个数。</p>
        <p className="mb-3">考虑 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums</code> 的唯一元素的数量为 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">k</code>。去重后，返回唯一元素的数量 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">k</code>。</p>
        <p>nums 的前 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">k</code> 个元素应包含 <strong className="text-gray-800">排序后</strong> 的唯一数字。下标 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">k - 1</code> 之后的剩余元素可以忽略。</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-gray-700">判题标准:</h3>
        <div className="bg-gray-50 p-5 rounded-lg">
          <p className="mb-3">系统会用下面的代码来测试你的题解:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-800">
            {`int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}`}
          </pre>
          <p className="mt-3">如果所有断言都通过，那么您的题解将被 通过。</p>
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
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums = [1,1,2]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">2, nums = [1,2,_]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
                <span>函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超 出新长度后面的元素。</span>
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
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums = [0,0,1,1,1,2,2,3,3,4]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">5, nums = [0,1,2,3,4,_,_,_,_,_]</code>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
                <span>函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Component;
