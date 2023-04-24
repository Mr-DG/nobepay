import { NButton, NDropdown } from 'naive-ui'

const options = [
  { label: '查看卡片', key: 0 },
  { label: '编辑地址', key: 1 },
  { label: '卡片充值', key: 2 },
  { label: '标签管理', key: 3 },
  { label: '卡片账单', key: 4 },
  { label: '永久删卡', key: 5 }
]

const handleSelect = (key, options, row, openModal) => {
  console.log(key)
  console.log(row)
  openModal(key)
}

export const useColumns = ({ openModal }) => {

  const columns = [
    { title: '卡序列号', key: 'num' },
    { title: '卡段', key: 'paragraph', },
    { title: '持卡人', key: 'cardOwner', },
    { title: '卡片余额', key: 'surplus', },
    { title: '累计消费', key: 'accumulate', },
    { title: '卡片状态', key: 'status', },
    { title: '卡后四位', key: 'cardAfterNum', },
    { title: '标签', key: 'label', },
    { title: '开卡时间', key: 'createdTime', },
    {
      title: '操作', key: 'action',
      render(row) {
        return (
          <>
            <NDropdown
              trigger="click"
              options={options}
              onSelect={(key, options) => handleSelect(key, options, row, openModal)}>
              <div style={{
                color: '#F8484D',
                cursor: 'pointer'
              }}>
                管理
              </div >
            </NDropdown>
          </>
        )
      }
    }
  ]

  return {
    columns
  }
}
