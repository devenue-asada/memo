<template>
  <div>
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <div v-else>メモを作成してください</div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  computed: {
    hasMemos() {
      return this.$store.getters.hasMemos;
    },
    memos() {
      return this.$store.getters.memos;
    },
  },
};
</script>
