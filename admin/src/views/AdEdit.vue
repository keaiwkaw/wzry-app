<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button @click="model.items.push({})"
          ><i class="el-icon-plus" size="small">添加广告</i></el-button
        >
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="12" v-for="(item, idx) in model.items" :key="idx">
            <el-form-item label="跳转链接（URL）">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="
                  (res) => {
                    $set(item, 'image', res.url);
                  }
                "
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button type="danger" @click="model.items.splice(i, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        items: [],
      },
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put("rest/ads/" + this.id, this.model);
      } else {
        await this.$http.post("rest/ads", this.model);
      }

      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      let res = await this.$http.get("rest/ads/" + this.id);
      this.model = Object.assign({}, this.model, res.data);
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style scoped>
</style>
