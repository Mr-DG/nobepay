import { NButton } from 'naive-ui'
export const columns = [
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
          <div style={{
            color: '#F8484D',
            cursor: 'pointer'
          }}>
            管理
          </div >
        </>
      )
    }
  }
]
