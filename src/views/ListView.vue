<template>
  <div>
    <ul v-if="memos.length">
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.title }}
      </li>
    </ul>
    <div v-else>メモを作成してください</div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  computed: {
    memos() {
      return this.$store.state.memos;
    },
  },
};
</script>
