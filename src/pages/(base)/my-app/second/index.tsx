import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Divider,
  Drawer,
  List,
  Row,
  Statistic,
  Table,
  Tag,
  Timeline,
  Typography
} from 'antd';
import { setItem } from 'localforage';

const { Title, Paragraph, Text } = Typography;

const compareData = [
  {
    key: 'array',
    name: '数组',
    access: 'O(1)',
    insert: 'O(n)',
    remove: 'O(n)',
    memory: '连续',
    highlight: '随机访问强'
  },
  {
    key: 'list',
    name: '链表',
    access: 'O(n)',
    insert: 'O(1)',
    remove: 'O(1)',
    memory: '离散',
    highlight: '插入删除强'
  },
  {
    key: 'stack',
    name: '栈',
    access: 'O(n)',
    insert: 'O(1)',
    remove: 'O(1)',
    memory: '离散/连续',
    highlight: '后进先出'
  },
  {
    key: 'queue',
    name: '队列',
    access: 'O(n)',
    insert: 'O(1)',
    remove: 'O(1)',
    memory: '离散/连续',
    highlight: '先进先出'
  }
];

const compareColumns = [
  { title: '结构', dataIndex: 'name', key: 'name', width: 120 },
  { title: '访问', dataIndex: 'access', key: 'access', width: 100 },
  { title: '插入', dataIndex: 'insert', key: 'insert', width: 100 },
  { title: '删除', dataIndex: 'remove', key: 'remove', width: 100 },
  { title: '内存', dataIndex: 'memory', key: 'memory', width: 120 },
  {
    title: '特点',
    dataIndex: 'highlight',
    key: 'highlight',
    render: (value: string) => <Tag color="blue">{value}</Tag>
  }
];

const useCases = [
  '数组：需要频繁随机访问、顺序存储（如矩阵、缓存）。',
  '链表：频繁插入/删除且不要求连续内存（如任务调度）。',
  '栈：函数调用、撤销/回退、表达式求值。',
  '队列：任务队列、消息队列、BFS 等。'
];

const tradeoffData = [
  { key: 'access', title: '访问速度', value: '数组最快', detail: '链表/栈/队列需遍历' },
  { key: 'insert', title: '插入删除', value: '链表/栈/队列更优', detail: '数组需搬移元素' },
  { key: 'memory', title: '内存布局', value: '数组连续', detail: '链表可离散' },
  { key: 'order', title: '行为约束', value: '栈/队列更明确', detail: 'LIFO / FIFO' }
];

const detailData = [
  {
    key: 'array',
    title: '数组 (Array)',
    description: '连续内存，随机访问强，插入删除成本高。',
    highlights: ['索引访问 O(1)', '缓存友好', '中间插入慢'],
    tips: ['适合静态集合', '适合频繁读取']
  },
  {
    key: 'list',
    title: '链表 (Linked List)',
    description: '节点离散分布，通过指针连接，插入删除高效。',
    highlights: ['插入删除 O(1)', '访问 O(n)', '内存利用分散'],
    tips: ['适合频繁插入', '不适合随机访问']
  },
  {
    key: 'stack',
    title: '栈 (Stack)',
    description: '后进先出，典型操作为 push / pop。',
    highlights: ['LIFO 约束', '操作简单', '回溯友好'],
    tips: ['适合撤销/回退', '适合递归调用栈']
  },
  {
    key: 'queue',
    title: '队列 (Queue)',
    description: '先进先出，典型操作为 enqueue / dequeue。',
    highlights: ['FIFO 约束', '有序处理', '适合调度'],
    tips: ['适合任务队列', '适合消息处理']
  }
];

// 链表结构
class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

// 双向链表节点
class DoublyListNode {
  private val: number;
  private next: DoublyListNode | null;
  private prev: DoublyListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// 链表实现
export class LinkedList {
  private head: ListNode | null;
  private tail: ListNode | null;
  private size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // 添加元素到链表末尾
  public append(val: number) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  // 删除链表中第一个出现的指定值节点
  remove(val: number) {
    if (!this.head) return false;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

// 栈列表
class ArrayStack {
  private arr: (number | undefined)[];
  private capacity: number;
  private top: number;
  constructor(capacity = 10) {
    this.capacity = capacity; // 栈的容量
    this.top = -1; // 栈顶索引
    this.arr = new Array(capacity);
  }
  push(val: number) {
    this.top++;
    this.arr[this.top] = val;
  }
  pop() {
    const element = this.arr[this.top];
    this.arr[this.top] = undefined;
    this.top--;
    return element;
  }
  peek() {
    return this.arr[this.top];
  }
  isEmpty() {
    return this.top === -1;
  }
}

// 斐波那契数列
// n:     0  1  2  3  4  5  6  7  8   9   10  11   12   13   14
// F(n):  0  1  1  2  3  5  8  13 21  34  55  89  144  233  377
// 最基本的递归(最直观但效率最低)
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 缓存递归
function fibonacciWithCache(n: number, cache: number[] = [0, 1]): number {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  cache[n] = fibonacciWithCache(n - 1, cache) + fibonacciWithCache(n - 2, cache);
  return cache[n];
}

// 动态规划
function fibonacciDPOptimized(n: number): number {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 动态规划2
function fibonacciDPOptimized2(n: number): number {
  if (n <= 1) return n;
  let current;
  let prev1 = 1; // F(n-1)
  let prev2 = 0; // F(n-2)
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return current!;
}

type BenchmarkRow = {
  key: string;
  label: string;
  ms: number;
  result: number;
};

type BenchmarkColumn = {
  title: string;
  dataIndex: keyof BenchmarkRow;
  key: keyof BenchmarkRow;
  align?: 'left' | 'right';
  render?: (value: BenchmarkRow[keyof BenchmarkRow]) => React.ReactNode;
};

const benchmarkColumns: BenchmarkColumn[] = [
  { title: '算法', dataIndex: 'label', key: 'label' },
  {
    title: '耗时(ms)',
    dataIndex: 'ms',
    key: 'ms',
    align: 'right',
    render: (value: number | string) => value
  },
  { title: '结果', dataIndex: 'result', key: 'result', align: 'right' }
];

const codeBlockStyle: React.CSSProperties = {
  margin: 0,
  padding: 12,
  background: '#f5f5f5',
  borderRadius: 8,
  overflow: 'auto',
  fontSize: 12,
  lineHeight: 1.6
};

const linkedListCode = `// 链表结构
class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}
// 双向链表节点
class DoublyListNode {
  private val: number;
  private next: DoublyListNode | null;
  private prev: DoublyListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
// 链表实现
class LinkedList {
  private head: ListNode | null;
  private tail: ListNode | null;
  private size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  public append(val: number) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  public remove(val: number) {
    if (!this.head) return false;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
}`;

const stackCode = `// 栈列表
class ArrayStack {
  private arr: (number | undefined)[];
  private capacity: number;
  private top: number;
  constructor(capacity = 10) {
    this.capacity = capacity; // 栈的容量
    this.top = -1; // 栈顶索引
    this.arr = new Array(capacity);
  }
  push(val: number) {
    this.top++;
    this.arr[this.top] = val;
  }
  pop() {
    const element = this.arr[this.top];
    this.arr[this.top] = undefined;
    this.top--;
    return element;
  }
  peek() {
    return this.arr[this.top];
  }
  isEmpty() {
    return this.top === -1;
  }
}`;

const fibonacciCode = `// 斐波那契数列
// n:     0  1  2  3  4  5  6  7  8   9   10  11   12   13   14
// F(n):  0  1  1  2  3  5  8  13 21  34  55  89  144  233  377
// 最基本的递归(最直观但效率最低)
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// 缓存递归
function fibonacciWithCache(n: number, cache: number[] = [0, 1]): number {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  cache[n] = fibonacciWithCache(n - 1, cache) + fibonacciWithCache(n - 2, cache);
  return cache[n];
}
// 动态规划
function fibonacciDPOptimized(n: number): number {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
// 动态规划2
function fibonacciDPOptimized2(n: number): number {
  if (n <= 1) return n;
  let current;
  let prev1 = 1; // F(n-1)
  let prev2 = 0; // F(n-2)
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return current!;
}`;

const AlgorithmDetail = () => {
  const [benchmarks, setBenchmarks] = useState<BenchmarkRow[]>([]);
  const [running, setRunning] = useState(false);
  const nRef = useRef(30);
  const runBenchmark = () => {
    setRunning(true);
    const n = nRef.current;
    const run = (label: string, fn: () => number): BenchmarkRow => {
      const loops = 20;
      let result = 0;
      const start = performance.now();
      for (let i = 0; i < loops; i++) {
        result = fn();
      }
      const ms = (performance.now() - start) / loops;
      return { key: label, label, ms, result };
    };
    console.log(`n: ${nRef.current}`);
    const rows = [
      run('基础递归', () => fibonacci(n)),
      run('缓存递归', () => fibonacciWithCache(n, [0, 1])),
      run('动态规划', () => fibonacciDPOptimized(n)),
      run('动态规划2', () => fibonacciDPOptimized2(n))
    ];
    nRef.current++;
    setBenchmarks(rows);
    setRunning(false);
  };

  return (
    <div>
      <Paragraph>
        这里集中展示链表、栈与斐波那契算法的实现示例，并提供简单的性能对比。
      </Paragraph>

      <Card
        title="性能测试"
        extra={
          <Button type="primary" loading={running} onClick={runBenchmark}>
            运行测试
          </Button>
        }
      >
        <Paragraph type="secondary">注意：基础递归非常慢，n=40 可能需要几秒钟。</Paragraph>
        <Table
          dataSource={benchmarks}
          columns={benchmarkColumns}
          rowKey="key"
          pagination={false}
          size="small"
        />
      </Card>

      <Divider />

      <Card title="链表实现" size="small">
        <pre style={codeBlockStyle}>{linkedListCode}</pre>
      </Card>

      <Divider />

      <Card title="栈实现" size="small">
        <pre style={codeBlockStyle}>{stackCode}</pre>
      </Card>

      <Divider />

      <Card title="斐波那契实现" size="small">
        <pre style={codeBlockStyle}>{fibonacciCode}</pre>
      </Card>
    </div>
  );
};

const Component = () => {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <Row align="middle" justify="space-between" gutter={[16, 16]}>
        <Col flex="auto">
          <Title level={2} style={{ marginBottom: 0 }}>
            数组、链表、栈、队列：详细解释与比较
          </Title>
        </Col>
        <Col>
          <Button type="primary" onClick={() => setDetailOpen(true)}>
            查看算法
          </Button>
        </Col>
      </Row>

      <Paragraph style={{ marginTop: 12 }}>
        这些结构都属于线性结构，但在<strong>访问速度</strong>、<strong>插入删除成本</strong>与
        <strong>内存布局</strong>上差异明显，选择时要结合使用场景。
      </Paragraph>

      <Card title="核心概念" bordered={false}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Title level={4}>数组 (Array)</Title>
            <Paragraph>
              数组在内存中<strong>连续存储</strong>，随机访问非常高效，但中间插入和删除会触发元素搬移。
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4}>链表 (Linked List)</Title>
            <Paragraph>
              链表节点通过指针连接，内存<strong>不要求连续</strong>，插入删除高效，但访问需要逐节点遍历。
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4}>栈 (Stack)</Title>
            <Paragraph>
              栈是<strong>后进先出</strong>结构，典型操作为 push / pop，适合回溯与递归场景。
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4}>队列 (Queue)</Title>
            <Paragraph>
              队列是<strong>先进先出</strong>结构，典型操作为 enqueue / dequeue，适合排队任务与流式处理。
            </Paragraph>
          </Col>
        </Row>
      </Card>

      <Divider />

      <Card title="结构详解" bordered={false}>
        <Row gutter={[16, 16]}>
          {detailData.map((item) => (
            <Col key={item.key} xs={24} md={12}>
              <Card size="small" style={{ height: '100%' }}>
                <Title level={4} style={{ marginTop: 0 }}>
                  {item.title}
                </Title>
                <Paragraph>{item.description}</Paragraph>
                <Title level={5}>关键特点</Title>
                <List
                  size="small"
                  dataSource={item.highlights}
                  renderItem={(highlight) => <List.Item>{highlight}</List.Item>}
                />
                <Title level={5} style={{ marginTop: 16 }}>
                  使用建议
                </Title>
                <List
                  size="small"
                  dataSource={item.tips}
                  renderItem={(tip) => <List.Item>{tip}</List.Item>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      <Divider />

      <Row gutter={[16, 16]}>
        {tradeoffData.map((item) => (
          <Col key={item.key} xs={24} sm={12} lg={6}>
            <Card bordered={false}>
              <Statistic title={item.title} value={item.value} />
              <Text type="secondary">{item.detail}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Divider />

      <Card title="复杂度对比" bordered={false}>
        <Table dataSource={compareData} columns={compareColumns} pagination={false} size="middle" />
        <Paragraph style={{ marginTop: 12 }}>
          <Text type="secondary">注：插入/删除复杂度为在已知位置或头尾操作的常见情况。</Text>
        </Paragraph>
      </Card>

      <Divider />

      <Card title="常见使用场景" bordered={false}>
        <List dataSource={useCases} renderItem={(item) => <List.Item>{item}</List.Item>} />
      </Card>

      <Divider />

      <Card title="选择流程参考" bordered={false}>
        <Timeline
          items={[
            { children: '需要随机访问？优先数组。' },
            { children: '插入/删除频繁？优先链表。' },
            { children: '严格后进先出？使用栈。' },
            { children: '严格先进先出？使用队列。' }
          ]}
        />
      </Card>

      <Drawer
        width={900}
        title="算法详情"
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        destroyOnClose
      >
        <AlgorithmDetail />
      </Drawer>
    </div>
  );
};

export default Component;
