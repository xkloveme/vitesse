<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
// import { Button } from 'vant'

export default defineComponent({
  name: 'HelloWorld',
  // components: {
  //   Button,
  // },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    const { t } = useI18n()
    return { count, t }
  },
})
</script>

<template>
  <div>
    <van-button icon="plus" type="primary" />
    <Button type="primary">
      按钮1111
    </Button>
    <van-button type="primary">
      按钮22
    </van-button>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
