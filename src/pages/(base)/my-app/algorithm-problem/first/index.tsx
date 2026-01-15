// https://leetcode.cn/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

function mergeArray(nums1: number[], m: number, nums2: number[], n: number) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}


// [1,2,3,0,0,0] [2,5,6]
// m = 3, n = 3
// 2,2 5
// [1,2,2,3,5,6]
// 双指针
function mergeArray2(nums1: number[], m: number, nums2: number[], n: number) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  let cur: number;
  while (i >= 0 || j >= 0) {
    if (i == -1) {
      cur = nums2[j--];
    } else if (j == -1) {
      cur = nums1[i--];
    } else if (nums1[i] > nums2[j]) {
      cur = nums1[i--];
    } else {
      cur = nums2[j--];
    }
    nums1[k--] = cur;
  }
}
const Component = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans leading-relaxed text-gray-800">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800 border-b-2 border-blue-500 pb-2">合并两个有序数组</h2>
      <div className="mb-8 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
        <p className="mb-3">给你两个按 <strong className="text-gray-800">非递减顺序</strong> 排列的整数数组&nbsp;<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1</code><em>&nbsp;</em>和 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums2</code>，另有两个整数 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">m</code> 和 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">n</code> ，分别表示 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1</code> 和 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums2</code> 中的元素数目。</p>
        <p className="mb-3">请你 <strong className="text-gray-800">合并</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums2</code><em>&nbsp;</em>到 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1</code> 中，使合并后的数组同样按 <strong className="text-gray-800">非递减顺序</strong> 排列。</p>
        <p>注意：最终，合并后数组不应由函数返回，而是存储在数组 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1</code> 中。为了应对这种情况，<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1</code> 的初始长度为 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">m + n</code>，其中前 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">m</code> 个元素表示应合并的元素，后 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">n</code> 个元素为 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">0</code> ，应忽略。<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums2</code> 的长度为 <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">n</code> 。</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-700">示例 1：</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">输入：</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3</code>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">[1,2,2,3,5,6]</code>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
              <span>需要合并 [1,2,3] 和 [2,5,6] 。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">&nbsp;</span>
              <span>合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-700">示例 2：</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">输入：</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1 = [1], m = 1, nums2 = [], n = 0</code>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">[1]</code>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
              <span>需要合并 [1] 和 [] 。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">&nbsp;</span>
              <span>合并结果是 [1] 。</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-700">示例 3：</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">输入：</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">nums1 = [0], m = 0, nums2 = [1], n = 1</code>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">输出：</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">[1]</code>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">解释：</span>
              <span>需要合并的数组是 [] 和 [1] 。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">&nbsp;</span>
              <span>合并结果是 [1] 。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 min-w-[60px] text-right">&nbsp;</span>
              <span>注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Component;
