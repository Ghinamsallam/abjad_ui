<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <p class="has-text-primary">
          إعدادات الحساب
        </p>
        <div class="container">
          <div class="columns">
            <div
              class="column is-8"
            >
              <div
                class="field"
              >
                <p class="form">
                  البريد الالكتروني
                </p>
                <input
                  class="input"
                  dir="ltr"
                  type="email"
                  placeholder="example@gmail.com"
                >
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <p class="form2">
                  كلمة المرور
                </p>
                <input
                  class="input"
                  dir="ltr"
                  type="password"
                  placeholder="*******"
                >
              </div>
            </div>
          </div>
        </div>
        <button class="button is-info is-rounded">
          <p class="but">
            حفظ التغييرات
          </p>
        </button>
        <div
          class="container mt-6
"
        >
          <div class="columns columns is-gapless is-multiline is-mobile">
            <div class="column is-one-quarter">
              <div class="notification">
                <div class="columns">
                  <div class="column ">
                    <p class="is-size-5">
                      المؤثرات الصوتية
                    </p>
                  </div>
                  <div class="column is-2">
                    <label class="switch">
                      <input type="checkbox">
                      <span class="slider round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-quarter" />
            <div class="column is-one-quarter" />

            <div class="column is-one-quarter">
              <div class="notification">
                <div class="columns">
                  <div class="column ">
                    <p class="is-size-5">
                      الرسائل التحفيزية
                    </p>
                  </div>
                  <div class="column is-2">
                    <label class="switch">
                      <input type="checkbox">
                      <span class="slider round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="notification">
                <div class="columns">
                  <div class="column ">
                    <p class="is-size-5">
                      تمارين التحدث
                    </p>
                  </div>
                  <div class="column is-2">
                    <label class="switch">
                      <input type="checkbox">
                      <span class="slider round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-one-quarter" />
            <div class="column is-one-quarter" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container{
  width: 955px;

}
p{
margin-top: 4%;
    text-align: center;
    font-size: 38px;

}
.form{
    margin-top: 60px;

    text-align: right;
    font-size: 23px;
}
.field{
    width: 280px;
    height: 55px;
    /* background-color: #E4F5FF;; */
}
.input{
    background-color: #E4F5FF;

}
.form2{
  margin-top: 60px;

    text-align:right;
    font-size: 23px;
}
.button.is-info.is-rounded{
  width: 20%;
  text-align: center;
  margin-right: 40%;
margin-top: 18%;
  color:white;

  background-color: #6FA3D2;

}
.but{
    font-size: 30px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color:green;
}

input:focus + .slider {
  box-shadow: 0 0 1px green;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.notification{

  height: 100%;
  width: 100%;
  background-color:whitesmoke;
}
</style>
