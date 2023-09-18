import MemoForm from '@/components/MemoForm.vue';
<template>
  <MemoForm :memo="memo" mode="編集" />
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "EditView",
  components: {
    MemoForm,
  },
  computed: {
    memo() {
      return this.$store.getters.memo(parseInt(this.$route.params.id));
    },
  },
};
</script>
