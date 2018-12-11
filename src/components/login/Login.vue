<template>
  <div>
    <div class="contain">
      <div class="header-nav"></div>
      <div class="login-contain">
        <div class="login-area">
          <div class="login-form">
            <div class="form-header">
              <span>密码登录</span>
            </div>
            <div class="form-body">
              <form>
                <div class="form-item">
                  <input type="text" v-model="user.username" placeholder="用户名">
                </div>
                <div class="form-item">
                  <input type="password" v-model="user.password" placeholder="密码">
                </div>
                <div class="form-btn">
                  <input type="button" value="登录" @click="submitUser"/>
                </div>
                <div class="form-menu">
                  <a>忘记密码</a>
                  <a>忘记会员名</a>
                  <a>免费注册</a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data: () => {
        return {
          user: {},
        }
      },
      mounted()  {
        this.$nextTick(()=> {
          this.init();
        })
      },
      methods: {
        init() {
          console.log();
        },
        submitUser() {
          var _this = this;
          //发送之前进行加密
          var new_password = _this.$crypto.encryption(_this.user.password, "aafsdfasdfasdfa", '123', 'asdfasda')
          var user = {
            username: _this.user.username,
            password: new_password
          }
          _this.$axios.post("/node/users/login", {user: user}).then((res)=> {
            console.log(res);
          })
        }
      }
    }
</script>

<style scoped lang="less">

  .contain {
    background: data-uri('image/jpeg;base64','/static/images/1.jpg') no-repeat;
    background-size: cover;

    .header-nav {
      width: 100%;
      height: 61px;
      border-bottom: 1px solid rgba(255,255,255,0.3);
    }

    .login-contain {
      display: flex;
      width: inherit;
      height: 580px;

      .login-area {
        width: 52%;
        min-width: 990px;
        height: 363px;
        margin: auto;

        .login-form {
          width: 38%;
          height: inherit;
          background: color("white");
          float: right;
          padding: 20px 30px;
          box-sizing: border-box;

          &::after {
            display: block;
            content: "";
            clear: both;
          }

          .form-item, .form-btn, .form-header {
            width: 100%;
            height: 40px;
            margin: 0 auto;
          }

          .form-header {
            margin-bottom: 15px;
            font-size: 18px;
            span {
              float: left;
            }
          }

          .form-item, .form-btn {
            input {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
            }
          }

          .form-item {
            margin-bottom: 20px;
            input {
              &[type='text'], &[type='password'] {
                border: 1px solid #ccc;
                padding-left: 10px;
                background: rgb(250, 255, 189);
                &:hover, &:focus {
                  outline: none;
                  border: 1px solid deepskyblue;
                }
              }
            }
          }

          .form-btn {
            input {
              &[type="button"] {
                background: #00c1de;
                border: none;
                color: white;
                cursor: pointer;
              }
            }
          }

          .form-menu {
            width: 100%;
            height: 6px;
            color: color("#9b9ea0");
            font-size: 12px;
            margin: 16px 0;
            text-align: right;
            cursor: pointer;
          }
        }
      }
    }
  }






</style>
