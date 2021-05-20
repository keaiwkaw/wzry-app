<template>
  <div class="about">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form @submit.native.prevent="save">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane name="basic" label="基础信息">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" placeholder="请选择" multiple>
              <el-option
                v-for="item in heroCategories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              :max="9"
              show-score
              v-model="model.scores.difficult"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              :max="9"
              show-score
              v-model="model.scores.skills"
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              :max="9"
              show-score
              v-model="model.scores.attack"
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              :max="9"
              show-score
              v-model="model.scores.survival"
            ></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" placeholder="请选择" multiple>
              <el-option
                v-for="item in items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" placeholder="请选择" multiple>
              <el-option
                v-for="item in items"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input v-model="model.usageTip" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input v-model="model.battleTip" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input v-model="model.teamTip" type="textarea"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})"
            ><i class="el-icon-plus" size="small">添加技能</i></el-button
          >
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, idx) in model.skills" :key="idx">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="头像">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="
                    (res) => {
                      $set(item.icon, 'icon', res);
                    }
                  "
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tip"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.skills.splice(i, 1)"
                  >删除</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-top: 1rem"
          >保存</el-button
        >
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
      heroCategories: [],
      items: [],
      heroes: [],
      model: {
        name: "",
        avatar: "",
        categories: [],
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survival: 0,
        },
        skills: [],
      },
    };
  },
  methods: {
    afterUpload(res) {
      this.model.avatar = res.url;
    },
    async save() {
      if (this.id) {
        await this.$http.put("rest/heroes/" + this.id, this.model);
      } else {
        await this.$http.post("rest/heroes", this.model);
      }

      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      let res = await this.$http.get("rest/heroes/" + this.id);
      this.model = Object.assign(this.model, res.data);
    },
    async fetchHeroCategories() {
      let res = await this.$http.get("rest/categories");
      this.heroCategories = res.data;
    },
    async fetchItems() {
      let res = await this.$http.get("rest/items");
      this.items = res.data;
    },
    async fetchHeroes() {
      let res = await this.$http.get("rest/heroes");
      this.heroes = res.data;
    },
  },
  created() {
    this.fetchItems();
    this.fetchHeroCategories();
    this.id && this.fetch();
  },
};
</script>

<style scoped>
</style>
