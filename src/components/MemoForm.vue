<template>
  <div class="new">
    <h1>{{ this.mode }}</h1>
  </div>
  <input type="text" v-model="title" placeholder="タイトル" />
  <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
  <div class="center">
    <button @click="save">保存</button>
  </div>
</template>

<script>
export default {
  name: "MemoFrom",
  props: ["memo", "mode"],
  data() {
    return {
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    save() {
      let memo = {
        title: this.title,
        content: this.content,
      };
      if (this.memo.id) memo.id = this.memo.id;

      this.$store.commit("save", memo);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}

input[type="text"] {
  width: 100%;
}

textarea {
  width: 100%;
  height: 30em;
}

button {
  width: 5em;
  margin: 3px;
}
.center {
  text-align: center;
}
</style>
