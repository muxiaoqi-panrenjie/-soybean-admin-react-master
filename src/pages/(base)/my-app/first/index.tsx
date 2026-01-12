import { Table, Column, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // 引入样式

const tableData = Array.from({ length: 100000 }, (_, i) => ({
  index: i + 1,
  roleName: `角色${i + 1}`,
  roleCode: `role${i + 1}`,
  status: i % 2 === 0 ? '正常' : '禁用',
}));

export default function VTable() {
  return (
    <AutoSizer disableHeight>
      {({ width }: { width: number }) => (
        <Table
          width={width}
          height={600}
          headerHeight={40}
          rowHeight={50}
          rowCount={tableData.length}
          rowGetter={({ index }: { index: number }) => tableData[index]}
        >
          <Column label="索引" dataKey="index" width={80} />
          <Column label="角色名称" dataKey="roleName" width={160} />
          <Column label="角色编码" dataKey="roleCode" width={120} />
          <Column label="状态" dataKey="status" width={80} />
        </Table>
      )}
    </AutoSizer>
  );
}
