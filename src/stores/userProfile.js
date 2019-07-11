// import request from '../utils/request';
// import { userProfile } from '../dataSourceConfig';

export default {
  userinfo: {
    name: '',
    department: '',
    avatar: '',
  },
  userid: '',

  async fetchData() {
    try {
      // const { data } = await request(userProfile); //后台请求参数入口
      const data = {
        data: {
          name: '队长',
          department: '后勤队',
          avatar: '冥想中',
          userid: 999999999
        }
      };
      const { name, department, avatar, userid } = data.data;
      this.userinfo = { name, department, avatar };
      this.userid = userid;
    } catch (err) {
      console.error(err);
    }
  },

};
