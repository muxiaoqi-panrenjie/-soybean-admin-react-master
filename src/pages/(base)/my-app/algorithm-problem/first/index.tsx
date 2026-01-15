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
    <div className="algorithm-problem">
      <h2>合并两个有序数组</h2>
      <div className="problem-description">
        <p>给你两个按 <strong>非递减顺序</strong> 排列的整数数组&nbsp;<code>nums1</code><em>&nbsp;</em>和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。</p>
        <p>请你 <strong>合并</strong> <code>nums2</code><em>&nbsp;</em>到 <code>nums1</code> 中，使合并后的数组同样按 <strong>非递减顺序</strong> 排列。</p>
        <p><strong>注意：</strong>最终，合并后数组不应由函数返回，而是存储在数组 <code>nums1</code> 中。为了应对这种情况，<code>nums1</code> 的初始长度为 <code>m + n</code>，其中前 <code>m</code> 个元素表示应合并的元素，后 <code>n</code> 个元素为 <code>0</code> ，应忽略。<code>nums2</code> 的长度为 <code>n</code> 。</p>
      </div>

      <div className="examples">
        <div className="example">
          <h3>示例 1：</h3>
          <div className="example-content">
            <div className="example-row">
              <span className="example-label">输入：</span>
              <code>nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3</code>
            </div>
            <div className="example-row">
              <span className="example-label">输出：</span>
              <code>[1,2,2,3,5,6]</code>
            </div>
            <div className="example-row">
              <span className="example-label">解释：</span>
              <span>需要合并 [1,2,3] 和 [2,5,6] 。</span>
            </div>
            <div className="example-row">
              <span className="example-label">&nbsp;</span>
              <span>合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。</span>
            </div>
          </div>
        </div>

        <div className="example">
          <h3>示例 2：</h3>
          <div className="example-content">
            <div className="example-row">
              <span className="example-label">输入：</span>
              <code>nums1 = [1], m = 1, nums2 = [], n = 0</code>
            </div>
            <div className="example-row">
              <span className="example-label">输出：</span>
              <code>[1]</code>
            </div>
            <div className="example-row">
              <span className="example-label">解释：</span>
              <span>需要合并 [1] 和 [] 。</span>
            </div>
            <div className="example-row">
              <span className="example-label">&nbsp;</span>
              <span>合并结果是 [1] 。</span>
            </div>
          </div>
        </div>

        <div className="example">
          <h3>示例 3：</h3>
          <div className="example-content">
            <div className="example-row">
              <span className="example-label">输入：</span>
              <code>nums1 = [0], m = 0, nums2 = [1], n = 1</code>
            </div>
            <div className="example-row">
              <span className="example-label">输出：</span>
              <code>[1]</code>
            </div>
            <div className="example-row">
              <span className="example-label">解释：</span>
              <span>需要合并的数组是 [] 和 [1] 。</span>
            </div>
            <div className="example-row">
              <span className="example-label">&nbsp;</span>
              <span>合并结果是 [1] 。</span>
            </div>
            <div className="example-row">
              <span className="example-label">&nbsp;</span>
              <span>注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .algorithm-problem {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          line-height: 1.6;
          color: #333;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }

        h3 {
          font-size: 18px;
          font-weight: 500;
          margin: 20px 0 15px 0;
          color: #34495e;
        }

        .problem-description {
          margin-bottom: 30px;
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }

        .examples {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .example {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border: 1px solid #e1e8ed;
        }

        .example-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .example-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .example-label {
          font-weight: 600;
          color: #2c3e50;
          min-width: 60px;
          text-align: right;
        }

        code {
          background-color: #f1f1f1;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          color: #e74c3c;
        }

        strong {
          color: #2c3e50;
        }
      `}</style>
    </div>
  );
};


export default Component;
