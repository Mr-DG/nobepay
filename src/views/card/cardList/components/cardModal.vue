<template>
  <div class="card-info-box">
    <div class="card-info">
      <n-grid x-gap="12" :cols="3">
        <n-gi v-for="item in cardInfo" :key="item">
          <div class="info-item">
            <div class="label">{{ item.label }}</div>
            <div class="value">{{ item.value }}</div>
          </div>
        </n-gi>
      </n-grid>
    </div>
    <div class="platform">
      <div class="title">消费平台</div>
      <div class="table-box">
        <n-table :bordered="false" :single-line="false" striped>
          <thead>
            <tr>
              <th v-for="item in tableHeader" :key="item" style="width: 33%;">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableData" :key="item">
              <td v-for="i in item" :key="i" style="width: 33%;">{{ i }}</td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cardInfo = [
  { label: '卡号', value: '2655262562525929' },
  { label: 'Expires', value: 'CVV码' },
  { label: 'CVV码', value: '721' },
  { label: 'FirstName', value: 'Dusty' },
  { label: 'LastName', value: 'Rutherford' },
  { label: '街道地址', value: '1308 E Waters Ave' },
  { label: '城市', value: 'Tampa' },
  { label: '州', value: 'FL' },
  { label: '邮箱', value: '33604' },
  { label: '消费平台', value: 'loading...' },
]

const tableHeader = ['交易时间', '单位', '消费金额']
const tableData = [
  { time: '2023/04/09 07:30:36', dept: '人民币', money: '￥156' },
  { time: '2023/04/09 07:30:36', dept: '美元', money: '$156' },
  { time: '2023/04/09 07:30:36', dept: '英镑', money: '￥156' },
]
</script>

<style scoped lang="less">
.card-info-box {
  .card-info {
    .info-item {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 15px;
      }

      .label {
        font-size: var(--content);
        margin-bottom: 10px;
      }

      .value {
        border: 1px solid var(--gray-text);
        padding: 8px;
        border-radius: 4px;
      }
    }
  }

  .platform {
    .title {
      font-size: var(--title2);
      font-weight: bold;
    }
  }
}
</style>
